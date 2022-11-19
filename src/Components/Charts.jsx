import React from "react";
import axios from "axios";
import url from "../global_var";
import Chart from "react-apexcharts";

export default function Charts() {
    const [company, setCompany] = React.useState("mayur1");
    //How to get company name -> from localstorage
   

    React.useEffect(() => {
        axios.post(url + "/plotdata", {
            companyName: company
        }).then((res) => {
            console.log(res.data);
            setData({
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: res.data.x
                    }
                },
                series: [
                    {
                        name: "Sales",
                        data: res.data.y
                    }
                ]
            })
        }).catch((err) => {
            console.log(err);
        })

      }, []);


    const [data, setData] = React.useState(
        {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: []
                }
            },
            series: [
                {
                    name: "Sales",
                    data: []
                }
            ]
        }
    )

    return (
        <div className="charts">
            <div className="d-flex justify-content-center m-2"><h4>Sales Graph</h4></div>
            <div className="d-flex justify-content-center">
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="line"
                        width="1000"
                        height="500"
                    />
            </div>
            
        </div>
    )
} 