// import logo from './logo.svg';
import "../css/tertiary.css";

export default function Tertiary() {
  return (
    <>
      <div>
        <div className="row pb-5">
          <div className="col-md-6">
            <img />
          </div>
          <div className="col-md-6 cardln">
            <div className='row p-2'> <h2 id="heading">Easily control your
              billing & invoicing</h2></div>
            <div className='row p-2'><p id="sub-text" className="mont">Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur quibusdam numquam illo assumenda id quam veritatis sint quasi, magnam quae doloribus voluptatibus repellendus necessitatibus?</p></div>
            <div className="row ps-1">
              <button className="btn custom-btn ms-3">Primary</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


