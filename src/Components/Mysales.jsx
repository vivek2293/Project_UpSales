import React from "react";
import axios from "axios";
import url from "../global_var";
import "../css/mysales.css";

export default function Mysales() {
  const [date, setDate] = React.useState("");
  const [option, setOption] = React.useState("Computer & Accessories");
  const [salesdata, setSalesdata] = React.useState({
    itemname: "",
    quantity: 0,
    price: 0,
    modelNumber: "",
  });

  function dateUpdate(event) {
    const date = event.target.value;
    setDate(date);
  }
  console.log(salesdata);

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
    const info = {
      date,
      companyName: "mayur1",
      maincompanyData: {
        "itemName": salesdata.itemname,
        "quantity": salesdata.quantity,
        "category": option,
        "priceperItem": salesdata.price,
        "modelNumber": salesdata.modelNumber,
        "total": (salesdata.quantity*salesdata.price),
      },
    };
    console.log(info);

    axios
      .post(url + "/create", info)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className="" style={{ width: "100vw" }}>
      <div className="form-div d-flex justify-content-center">
        <div className="card col-md-5 p-2 card-dash2">
          <div className="d-flex justify-content-center pt-2 pb-2">
            <h4>Details</h4>
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
                  className="form-control form-control-sm "
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
                  placeholder="Enter Model number"
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

            <div className="btn-div d-flex justify-content-center" id="btn-div">
              <button type="submit" className="btn custom-btn">
                Create
              </button>
              <button type="button" className="btn custom-btn">
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
