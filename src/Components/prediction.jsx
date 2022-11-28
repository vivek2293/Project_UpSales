import React from "react";
import axios from "axios";
import url from "../global_var";
import { Link } from "react-router-dom";

export default function Prediction() {
  const [option, setOption] = React.useState("2.0");
  const [predictor, setPredictor] = React.useState({
    sales: 0,
    quantity: 0,
    discount: 0,
    price: 0,
    shippingCost: 0,
  });

  function handleChange(event) {
    setPredictor((prevdata) => {
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
      sales: predictor.sales,
      quantity: predictor.quantity,
      discount: predictor.discount,
      shippingCost: predictor.shippingCost,
      orderPriority: option,
    };
    console.log(info);

    const post = async () => {
      await axios
        .post(url + "/predict", info)
        .then((res) => {
          console.log(res);
          window.alert(res.data.value);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    post();
  }

  console.log(option);
  console.log(predictor);

  return (
    <div className="center-div">
      <div className="form-div d-flex justify-content-center">
        <div className="card col-md-5 p-2 card-dash2">
          <div className="d-flex justify-content-center pt-2 pb-2">
            <h4>Sales Predictor</h4>
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
                Sales
              </label>
              <div className="col-md-5">
                <input
                  type="number"
                  name="sales"
                  value={predictor.sales > 0 ? predictor.sales : 0}
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
                Quantity
              </label>
              <div className="col-md-5">
                <input
                  type="number"
                  name="quantity"
                  value={predictor.quantity > 0 ? predictor.quantity : 0}
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
                Discount
              </label>
              <div className="col-md-5">
                <input
                  type="number"
                  name="discount"
                  value={predictor.discount > 0.0 ? predictor.discount : 0.0}
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
                  value={predictor.price > 0 ? predictor.price : 0}
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
                Shipping Cost
              </label>
              <div className="col-md-5">
                <input
                  type="number"
                  name="shippingCost"
                  value={
                    predictor.shippingCost > 0 ? predictor.shippingCost : 0
                  }
                  className="form-control form-control-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row m-2">
              <label
                htmlFor="colFormLabelSm"
                className="col-md-4 col-form-label col-form-label-sm ps-4"
              >
                Market demand
              </label>
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => setOption(event.target.value)}
                >
                  <option value="2.0">Very High</option>
                  <option value="1.5">High</option>
                  <option value="1">Moderate</option>
                  <option value="0.75">Low</option>
                  <option value="0.5">Very Low</option>
                </select>
              </div>
            </div>

            <div className="btn-div d-flex justify-content-center" id="btn-div">
              <button type="submit" className="btn custom-btn">
                Predict
              </button>
              <Link to="/dashboard">
                <button type="button" className="btn custom-btn ms-3">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
