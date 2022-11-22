const asyncWrapper = require("../middleware/async");
const companyData= require("../models/companyData.js")


const companyinfosinglesalesData = asyncWrapper(async (req, res, next) => {
    const task=await companyData.findOne({_id:req.body.id})
    let Date1=task.date
    const obj = { date : Date1 }
    Object.entries(obj).forEach(([key,value]) => { task.maincompanyData[key] = value })
    res.json(task.maincompanyData)
});


const companyinfosalesData = asyncWrapper(async (req, res, next) => {
    const task=await companyData.find({companyName:req.body.companyName})
    let ans=new Map()

    for(let i=0;i<task.length;i++){
        const obj = { date : task[i].date, id:task[i].id }
        Object.entries(obj).forEach(([key,value]) => { task[i].maincompanyData[key] = value })
        ans.set(task[i].date,task[i])
    }
    sorted_map=new Map([...ans.entries()].sort())
    const reversed = new Map(Array.from(sorted_map).reverse());
    let Data=[]
    for(let [key,value] of reversed){
        Data.push(value.maincompanyData)
    }
    res.json(Data)
});

const companyinfosalesdataTotal = asyncWrapper(async (req, res, next) => {
    const task=await companyData.find({companyName:req.body.companyName})
    let total=0;
    for(let i=0;i<task.length;i++){
        total+=task[i].maincompanyData.total
    }
    let quantity=0;
    for(let i=0;i<task.length;i++){
        quantity+=parseInt(task[i].maincompanyData.quantity)
    }
    let ans=new Map()
    for(let i=0;i<task.length;i++){
        try {
            if(ans.has(task[i].maincompanyData.category)){
                ans.set(task[i].maincompanyData.category,(parseInt(task[i].maincompanyData.quantity)+ans.get(task[i].maincompanyData.category)))
            }else{  
                ans.set(task[i].maincompanyData.category,parseInt(task[i].maincompanyData.quantity))
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    let max=0;
    let finalans='0'

    for(let [key,value] of ans){
        if(value>max){
            max=value;
            finalans=key
        }
    }


    let ans2=new Map()
    for(let i=0;i<task.length;i++){
        try {
            if(ans2.has(task[i].maincompanyData.category)){
                ans2.set(task[i].maincompanyData.category,(parseInt(task[i].maincompanyData.quantity*task[i].maincompanyData.priceperItem)+ans2.get(task[i].maincompanyData.category)))
            }else{  
                ans2.set(task[i].maincompanyData.category,parseInt(task[i].maincompanyData.quantity*task[i].maincompanyData.priceperItem))
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    let max2=0;
    let finalans2='0'
    for(let [key,value] of ans2){
        if(value>max2){
            max2=value;
            finalans2=key
        }
    }
    const sortedarray = new Map([...ans2].sort((a, b) => b[1] - a[1]));
    res.json({total:total,quantity:quantity,"Category In demand":finalans,"Most profit By category":finalans2,final:[...sortedarray]})
});

const companyInfo = asyncWrapper(async (req, res, next) => {
    const data={
        itemName,
        modelNumber,
        category,
        quantity,
        priceperItem,
        total
    }=req.body
    try {
        const task = await companyData.create(data);
        res.json({task}).status(200)
        
    } catch (error) {
        console.log(error)
    }
});



const companyinfoDelete = async (req, res, next) => {
    console.log(req.body)
    try {
        const task = await companyData.findByIdAndDelete({_id: req.body.id});
        res.json({task}).status(200)
        
    } catch (error) {
        console.log(error)
    }
};



const companyinfoUpdate = asyncWrapper(async (req, res, next) => {
    const data={
        itemName,
        modelNumber,
        category,
        quantity,
        priceperItem,
        total
    }=req.body
    try {
        const task = await companyData.findByIdAndUpdate({_id:req.body.id},{$set:data});
        const task1 = await companyData.findByIdAndUpdate({_id:req.body.id},{$set:{date:req.body.date}});
        res.json({task,task1}).status(200)
        
    } catch (error) {
        console.log(error)
    }
});



const companyinfoTotal = asyncWrapper(async (req, res, next) => {
    try {
        let ans=new Map();
        let x=[]
        let y=[]
            const task1= await companyData.find({companyName:req.body.companyName})
            try {
                for(let i=0;i<task1.length;i++){
                    let task2=task1[i].date
                    let Date=task2.slice(0,4)+"/"+task2.slice(5,7)
                    if(ans.has(Date)){
                        ans.set(Date,(parseInt(task1[i].maincompanyData.total)+ans.get(Date)))

                    }else{  
                        ans.set(Date,parseInt(task1[i].maincompanyData.total))
                    }
                }
                sorted_map=new Map([...ans.entries()].sort())
                // console.log(sorted_map)

                for(let [key,value] of sorted_map){
                    let Date=key.slice(5)+"/"+key.slice(0,4)
                    x.push(Date)
                    y.push(value)
                }

                res.json({x,y})


            } catch (error) {
                console.log(error)
            }
    } catch (error) {
        console.log(error)
    }
});



module.exports = { companyInfo,companyinfoDelete,companyinfoUpdate,companyinfoTotal,companyinfosalesData,companyinfosinglesalesData,companyinfosalesdataTotal };
