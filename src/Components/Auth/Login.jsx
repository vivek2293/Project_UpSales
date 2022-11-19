import React, {useState} from "react";
import AuthService from "../../Services/auth.service";
import { useNavigate } from "react-router-dom";
import "../../css/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState("d-none");
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const info = { email, password };

    const PostInfo = async () => {
      await AuthService.login(info).then(
          () => {
            setValid("d-none");
            setLoading(false);
            navigate("/home");
            window.location.reload();
          },
          (e) => {
            console.log(e);
            if (e.response.status === 401) {
              setValid("d-inline-block");
            }
            setLoading(false);
          }
        );
    };

    PostInfo();
  };

  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center p-3"
        id="customsection"
      >
        <div className="card card-body px-4 px-lg-5" id="customcard">
          <div>
            <center>
              <h2>Login</h2>
            </center>
          </div>
          <hr />
          <div>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  required
                />
              </div>
              <div className={`${valid} invalid-feedback`}>
                Invalid UserName or Password!!!
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  id="customBtn"
                  onClick={submit}
                >
                  {loading ? (
                    <div className="loader">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;