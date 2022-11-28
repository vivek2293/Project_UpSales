import React from "react";
import axios from "axios";
import Modal from "react-modal";
import url from "../global_var.js";
import "../css/structure.css";

export default function Structure() {
  const [Data, setData] = React.useState([{}]);
  const [show, setShow] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [ID, setID] = React.useState("");
  const [option, setOption] = React.useState("Computer & Accessories");
  const [salesdata, setSalesdata] = React.useState({
    itemname: "",
    quantity: "0",
    price: "0",
    modelNumber: "",
  });

  React.useEffect(() => {
    axios
      .post(url + "/salesdata", {
        companyName: JSON.parse(localStorage.getItem("companyName")),
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(event) {
    setSalesdata((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]:
          event.target.value >= 0 || typeof event.target.value === "string"
            ? event.target.value
            : 0,
      };
    });
  }

  function submitdata() {
    let info = {
      id: ID,
      companyName: JSON.parse(localStorage.getItem("companyName")),
      maincompanyData: {
        itemName: salesdata.itemname,
        modelNumber: salesdata.modelNumber,
        category: option,
        quantity: salesdata.quantity,
        priceperItem: salesdata.price,
        total: salesdata.quantity * salesdata.price,
      },
      date,
    };
    console.log(info);

    //   console.log(e.target.id);
    axios.patch(url + "/update", info).then((res) => {
      console.log(res);
      window.location.replace("/dashboard");
      window.location.reload();
    });
  }

  console.log(option);

  function dateUpdate(event) {
    const date = event.target.value;
    setDate(date);
  }

  function getSingleData(id) {
    axios
      .post(url + "/singlesalesdata", {
        id,
      })
      .then((res) => {
        console.log(res.data);
        setDate(res.data.date);
        setOption(res.data.category);
        setSalesdata({
          itemname: res.data.itemName,
          quantity: res.data.quantity,
          price: res.data.priceperItem,
          modelNumber: res.data.modelNumber,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteSaleData(id) {
    let data = { id };
    console.log(typeof id);
    axios
      .post(url + "/delete", data)
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Elements = Data.map((item) => {
    return (
      <>
        <tr>
          <td>{item.date}</td>
          <td>{item.itemName}</td>
          <td>{item.modelNumber}</td>
          <td>{item.category}</td>
          <td>{item.quantity}</td>
          <td>{item.priceperItem}</td>
          <td>{item.total}</td>
          <td>
            <i
              className="fa fa-edit"
              id={item.id}
              onClick={(e) => {
                // console.log(e.target.id)
                setID(e.target.id);
                getSingleData(e.target.id);
                setShow(true);
              }}
            ></i>
            <i
              className="fa fa-trash ps-4"
              id={item.id}
              onClick={(e) => {
                // console.log(e.target.id)
                setID(e.target.id);
                deleteSaleData(e.target.id);
              }}
            ></i>
          </td>
        </tr>
      </>
    );
  });

  console.log(salesdata);

  return (
    <>
      <table className="table table-striped border">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Item Name</th>
            <th scope="col">Model Number</th>
            <th scope="col">Category</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price per Item</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>{Elements}</tbody>
      </table>

      <Modal isOpen={show} ariaHideApp={false} id="modelName">
        <section className="p-2">
          <div className="form-div d-flex justify-content-center">
            <div className="card col-md-5 p-2 card-dash2 mt-5">
              <div className="d-flex justify-content-center pt-2 pb-2">
                <h4>Edit Sales</h4>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitdata();
                }}
              >
                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Sales Date
                  </label>
                  <div className="col-md-5">
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      id="colFormLabelSm"
                      onChange={(event) => dateUpdate(event)}
                      value={date}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Item Name
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="itemname"
                      value={salesdata.itemname}
                      className="form-control form-control-sm"
                      id="colFormLabelSm"
                      onChange={handleChange}
                      placeholder="Enter item name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Model Number
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="modelNumber"
                      value={salesdata.modelNumber}
                      className="form-control form-control-sm"
                      id="colFormLabelSm"
                      onChange={handleChange}
                      placeholder="Enter Model Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Category
                  </label>
                  <div className="col-md-5">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event) => setOption(event.target.value)}
                    >
                      <option value="Computer & Accessories">
                        Computer & Accessories
                      </option>
                      <option value="Random 1">Random 1</option>
                      <option value="Random 2">Random 2</option>
                      <option value="Random 3">Random 3</option>
                      <option value="Random 4">Random 4</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Quantity
                  </label>
                  <div className="col-md-5">
                    <input
                      type="number"
                      name="quantity"
                      value={salesdata.quantity > 0 ? salesdata.quantity : 0}
                      className="form-control form-control-sm "
                      id="colFormLabelSm"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Price Per Item
                  </label>
                  <div className="col-md-5">
                    <input
                      type="number"
                      name="price"
                      value={salesdata.price > 0 ? salesdata.price : 0}
                      className="form-control form-control-sm"
                      id="colFormLabelSm"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Total
                  </label>
                  <div className="col-md-5">
                    <input
                      type="number"
                      name="price"
                      // value={salesdata.price}
                      className="form-control form-control-sm"
                      // id="colFormLabelSm"
                      value={salesdata.price * salesdata.quantity}
                      disabled
                    />
                  </div>
                </div>

                <div
                  className="btn-div d-flex justify-content-center"
                  id="btn-div"
                >
                  <button type="submit" className="btn random-btn">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn random-btn"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
}
