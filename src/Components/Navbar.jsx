import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import authService from "../Services/auth.service";

const Navbar = () => {
  const [isloggedin, setIsloggedin] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setIsloggedin(user);
    }
  }, []);

  const logout = () => {
    authService.logout();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <nav id="navbarclr" className="navbar navbar-expand-sm zProp top-navbar card-dash3">
        <div className="container-fluid px-4">
          <NavLink id="navbtnclr" className="navbar-brand" to="#">
            <svg width="70" height="60" viewBox="0 0 668 683" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_82_2334)">
                <path d="M239.279 479.319C223.119 479.319 223.119 449.293 239.279 449.293H346.385C362.554 449.293 362.573 479.319 346.385 479.319H239.279Z" fill="url(#paint0_linear_82_2334)" />
                <path d="M245.624 489.994H339.179C327.857 506.644 313.279 521 292.929 521C271.913 521 258.093 505.275 245.624 489.994Z" fill="url(#paint1_linear_82_2334)" />
                <path d="M219.382 438.249C199.217 438.249 199.207 408.232 219.382 408.232H366.282C386.475 408.232 386.465 438.249 366.282 438.249H219.382Z" fill="url(#paint2_linear_82_2334)" />
                <path d="M199.05 397.197V309.377L474.452 33.9385L463.352 22.8385L529.859 0.0371094L507.012 66.4802L494.45 53.9279L439.496 108.873C468.31 172.921 445.971 227.514 386.835 318.766V397.789H339.91C321.049 397.789 321.058 369.882 339.91 369.882H358.558V310.589C424.279 210.846 432.012 172.412 417.758 130.583L227.327 321.051V369.882H248.76C267.676 369.882 267.546 397.789 248.76 397.789C198.782 397.817 203.989 397.808 199.05 397.197Z" fill="url(#paint3_linear_82_2334)" />
                <path d="M166.212 268.677C188.569 246.319 158.914 275.448 367.438 71.4934L355.496 59.5331L422.004 36.7317L399.202 103.221L387.427 91.4457C237.826 236.2 283.799 191.041 181.595 293.236C175.12 283.144 172.345 278.852 166.212 268.677Z" fill="url(#paint4_linear_82_2334)" />
                <path d="M128 168.48C128 195.555 144.206 228.347 155.898 250.556C179.948 226.506 157.517 249.048 286.694 118.993L299.477 131.776L322.288 65.2961L255.799 88.0975L266.695 99.0126L164.02 202.428C127.019 105.663 238.446 10.1936 343.989 53.7058L365.31 32.8007C257.325 -20.8496 128 53.8908 128 168.48Z" fill="url(#paint5_linear_82_2334)" />
                <path d="M303.908 204.482C308.354 213.368 312.794 222.257 317.228 231.15L417.795 130.583C432.012 172.412 424.27 210.846 358.595 310.589V314.372C368.023 333.403 377.449 352.421 386.872 371.427V318.766C449.846 221.446 466.765 169.479 439.495 108.873L494.45 53.9278L507.012 66.4801L529.822 0L463.314 22.8014L474.414 33.9015L303.908 204.482Z" fill="url(#paint6_linear_82_2334)" />
                <path d="M280.034 156.964C284.35 165.548 288.667 174.141 292.984 182.744C312.067 164.244 339.826 137.493 387.408 91.446L399.193 103.221L421.994 36.7319L355.496 59.5333L367.428 71.4659L280.034 156.964Z" fill="url(#paint7_linear_82_2334)" />
                <path d="M299.477 131.777L322.288 65.2964L255.798 88.0978L266.695 99.0128L256.039 109.743C260.565 118.567 265.064 127.41 269.535 136.272L286.694 118.993L299.477 131.777Z" fill="url(#paint8_linear_82_2334)" />
                <path d="M228.927 57.1377C246.751 48.391 266.241 43.5595 286.086 42.9676C305.932 42.3757 325.675 46.0371 343.989 53.7059L365.31 32.8008C342.133 21.24 316.599 15.1892 290.699 15.1202C264.799 15.0512 239.234 20.9659 215.996 32.403C220.325 40.6233 224.635 48.8681 228.927 57.1377Z" fill="url(#paint9_linear_82_2334)" />
              </g>
              <g filter="url(#filter1_d_82_2334)">
                <path d="M52.136 652.128C37.8607 652.128 26.733 648.271 18.753 640.557C10.773 632.843 6.783 622.026 6.783 608.105V556.9H38.171V607.174C38.171 614.267 39.4567 619.321 42.028 622.336C44.5993 625.262 48.0573 626.725 52.402 626.725C56.8353 626.725 60.2933 625.262 62.776 622.336C65.3473 619.321 66.633 614.267 66.633 607.174V556.9H97.489V608.105C97.489 622.026 93.499 632.843 85.519 640.557C77.539 648.271 66.4113 652.128 52.136 652.128ZM111.877 650V556.9H156.698C165.387 556.9 172.88 558.319 179.175 561.156C185.559 563.993 190.48 568.072 193.938 573.392C197.396 578.623 199.125 584.83 199.125 592.012C199.125 599.194 197.396 605.401 193.938 610.632C190.48 615.863 185.559 619.942 179.175 622.868C172.88 625.705 165.387 627.124 156.698 627.124H129.3L143.265 613.691V650H111.877ZM143.265 617.149L129.3 602.918H154.703C159.048 602.918 162.24 601.943 164.279 599.992C166.407 598.041 167.471 595.381 167.471 592.012C167.471 588.643 166.407 585.983 164.279 584.032C162.24 582.081 159.048 581.106 154.703 581.106H129.3L143.265 566.875V617.149Z" fill="#F57D1F" />
                <path d="M245.431 652.128C237.628 652.128 230.091 651.241 222.821 649.468C215.55 647.695 209.565 645.389 204.866 642.552L214.974 619.676C219.407 622.247 224.328 624.331 229.737 625.927C235.234 627.434 240.554 628.188 245.697 628.188C248.711 628.188 251.061 628.011 252.746 627.656C254.519 627.213 255.805 626.636 256.603 625.927C257.401 625.129 257.8 624.198 257.8 623.134C257.8 621.449 256.869 620.119 255.007 619.144C253.145 618.169 250.662 617.371 247.559 616.75C244.544 616.041 241.219 615.331 237.584 614.622C233.948 613.824 230.269 612.804 226.545 611.563C222.909 610.322 219.54 608.681 216.437 606.642C213.422 604.603 210.984 601.943 209.122 598.662C207.26 595.293 206.329 591.125 206.329 586.16C206.329 580.397 207.925 575.165 211.117 570.466C214.397 565.678 219.23 561.865 225.614 559.028C232.086 556.191 240.111 554.772 249.687 554.772C255.982 554.772 262.189 555.437 268.307 556.767C274.425 558.097 279.922 560.136 284.799 562.885L275.356 585.628C270.745 583.323 266.267 581.594 261.923 580.441C257.667 579.288 253.499 578.712 249.421 578.712C246.406 578.712 244.012 578.978 242.239 579.51C240.465 580.042 239.18 580.751 238.382 581.638C237.672 582.525 237.318 583.5 237.318 584.564C237.318 586.16 238.249 587.446 240.111 588.421C241.973 589.308 244.411 590.061 247.426 590.682C250.529 591.303 253.898 591.968 257.534 592.677C261.258 593.386 264.937 594.362 268.573 595.603C272.208 596.844 275.533 598.485 278.548 600.524C281.651 602.563 284.134 605.223 285.996 608.504C287.858 611.785 288.789 615.863 288.789 620.74C288.789 626.415 287.148 631.646 283.868 636.434C280.676 641.133 275.888 644.946 269.504 647.872C263.12 650.709 255.095 652.128 245.431 652.128ZM288.021 650L328.719 556.9H359.575L400.273 650H367.821L337.763 571.796H349.999L319.941 650H288.021ZM312.227 633.774L320.207 611.164H363.033L371.013 633.774H312.227ZM405.282 650V556.9H436.67V625.661H478.698V650H405.282ZM516.096 591.48H557.592V614.09H516.096V591.48ZM518.224 626.326H564.774V650H487.368V556.9H563.045V580.574H518.224V626.326ZM611.57 652.128C603.768 652.128 596.231 651.241 588.96 649.468C581.69 647.695 575.705 645.389 571.005 642.552L581.113 619.676C585.547 622.247 590.468 624.331 595.876 625.927C601.374 627.434 606.694 628.188 611.836 628.188C614.851 628.188 617.201 628.011 618.885 627.656C620.659 627.213 621.944 626.636 622.742 625.927C623.54 625.129 623.939 624.198 623.939 623.134C623.939 621.449 623.008 620.119 621.146 619.144C619.284 618.169 616.802 617.371 613.698 616.75C610.684 616.041 607.359 615.331 603.723 614.622C600.088 613.824 596.408 612.804 592.684 611.563C589.049 610.322 585.68 608.681 582.576 606.642C579.562 604.603 577.123 601.943 575.261 598.662C573.399 595.293 572.468 591.125 572.468 586.16C572.468 580.397 574.064 575.165 577.256 570.466C580.537 565.678 585.369 561.865 591.753 559.028C598.226 556.191 606.25 554.772 615.826 554.772C622.122 554.772 628.328 555.437 634.446 556.767C640.564 558.097 646.062 560.136 650.938 562.885L641.495 585.628C636.885 583.323 632.407 581.594 628.062 580.441C623.806 579.288 619.639 578.712 615.56 578.712C612.546 578.712 610.152 578.978 608.378 579.51C606.605 580.042 605.319 580.751 604.521 581.638C603.812 582.525 603.457 583.5 603.457 584.564C603.457 586.16 604.388 587.446 606.25 588.421C608.112 589.308 610.551 590.061 613.565 590.682C616.669 591.303 620.038 591.968 623.673 592.677C627.397 593.386 631.077 594.362 634.712 595.603C638.348 596.844 641.673 598.485 644.687 600.524C647.791 602.563 650.273 605.223 652.135 608.504C653.997 611.785 654.928 615.863 654.928 620.74C654.928 626.415 653.288 631.646 650.007 636.434C646.815 641.133 642.027 644.946 635.643 647.872C629.259 650.709 621.235 652.128 611.57 652.128Z" fill="#0D8FCF" />
              </g>
              <defs>
                <filter id="filter0_d_82_2334" x="128" y="0" width="414.859" height="538" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="9" dy="13" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_82_2334" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_82_2334" result="shape" />
                </filter>
                <filter id="filter1_d_82_2334" x="6.7832" y="554.772" width="661.146" height="109.356" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="9" dy="8" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_82_2334" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_82_2334" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_82_2334" x1="472.657" y1="305.363" x2="117.151" y2="619.606" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F89C1C" />
                  <stop offset="0.21" stop-color="#F7901D" />
                  <stop offset="0.59" stop-color="#F37020" />
                  <stop offset="1" stop-color="#EE4623" />
                </linearGradient>
                <linearGradient id="paint1_linear_82_2334" x1="486.329" y1="320.875" x2="130.849" y2="635.081" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F89C1C" />
                  <stop offset="0.21" stop-color="#F7901D" />
                  <stop offset="0.59" stop-color="#F37020" />
                  <stop offset="1" stop-color="#EE4623" />
                </linearGradient>
                <linearGradient id="paint2_linear_82_2334" x1="452.409" y1="282.182" x2="96.4391" y2="596.841" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F89C1C" />
                  <stop offset="0.21" stop-color="#F7901D" />
                  <stop offset="0.59" stop-color="#F37020" />
                  <stop offset="1" stop-color="#EE4623" />
                </linearGradient>
                <linearGradient id="paint3_linear_82_2334" x1="539.267" y1="30.96" x2="172.484" y2="511.315" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1FC3F3" />
                  <stop offset="0.61" stop-color="#0B8BCC" />
                  <stop offset="1" stop-color="#006CB6" />
                </linearGradient>
                <linearGradient id="paint4_linear_82_2334" x1="451.955" y1="-35.7147" x2="85.163" y2="444.641" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F89C1C" />
                  <stop offset="0.21" stop-color="#F7901D" />
                  <stop offset="0.59" stop-color="#F37020" />
                  <stop offset="1" stop-color="#EE4623" />
                </linearGradient>
                <linearGradient id="paint5_linear_82_2334" x1="379.157" y1="-91.2888" x2="12.3744" y2="389.057" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1FC3F3" />
                  <stop offset="0.61" stop-color="#0B8BCC" />
                  <stop offset="1" stop-color="#006CB6" />
                </linearGradient>
                <linearGradient id="paint6_linear_82_2334" x1="340.15" y1="259.224" x2="648.611" y2="33.6332" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1FC3F3" />
                  <stop offset="0.61" stop-color="#0B8BCC" />
                  <stop offset="1" stop-color="#006CB6" />
                </linearGradient>
                <linearGradient id="paint7_linear_82_2334" x1="268.804" y1="161.691" x2="577.293" y2="-63.918" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FBAE17" />
                  <stop offset="0.29" stop-color="#F8941A" />
                  <stop offset="0.91" stop-color="#EF5122" />
                  <stop offset="1" stop-color="#EE4623" />
                </linearGradient>
                <linearGradient id="paint8_linear_82_2334" x1="247.224" y1="132.193" x2="555.713" y2="-93.4161" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1FC3F3" />
                  <stop offset="0.61" stop-color="#0B8BCC" />
                  <stop offset="1" stop-color="#006CB6" />
                </linearGradient>
                <linearGradient id="paint9_linear_82_2334" x1="216.162" y1="89.7256" x2="524.633" y2="-135.874" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00BFF2" />
                  <stop offset="0.43" stop-color="#0096D5" />
                  <stop offset="0.79" stop-color="#007BC2" />
                  <stop offset="1" stop-color="#0071BB" />
                </linearGradient>
              </defs>
            </svg>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item custom-txt">
                {
                  isloggedin ? (
                    <NavLink id="navbtnclr" className="nav-link" aria-current="page" to="/dashboard">
                      Dashboard
                    </NavLink>
                  ) : (
                    <NavLink id="navbtnclr" className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  )
                }
              </li>
              <li className="nav-item custom-txt">
                {
                  isloggedin ? (
                    <NavLink id="navbtnclr" className="nav-link" aria-current="page" to="/createSale">
                      Upload
                    </NavLink>
                  ) : (
                    <NavLink id="navbtnclr" className="nav-link" to="/">
                      About
                    </NavLink>
                  )
                }
              </li>
              <li className="nav-item custom-txt">
              {
                  isloggedin ? (
                    <NavLink id="navbtnclr" className="nav-link" aria-current="page" to="/predictSale">
                      Predictor
                    </NavLink>
                  ) : (
                    <NavLink id="navbtnclr" className="nav-link" to="/">
                      FAQ
                    </NavLink>
                  )
                }
              </li>
            </ul>
            <form className="d-flex" role="search">
              {
                isloggedin ? (
                  <Link className="nav-link" to="/login">
                    <button id="loginbtnclr1" className="btn btn-outline-primary rounded-pill ms-auto" onClick={logout}>
                      <i className="fa fa-sign-in me-2"></i>Logout
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link className="nav-link" to="/login">
                      <button id="loginbtnclr1" className="btn new-btn ms-auto">
                        <i className="fa fa-sign-in me-2"></i>Login
                      </button>
                    </Link>
                    <Link className="nav-link" to="/signup">
                      <button id="loginbtnclr" className="btn new-btn ms-2">
                        <i className="fa fa-user-plus me-2"></i>Register
                      </button>
                    </Link>
                  </>
                )
              }

            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;