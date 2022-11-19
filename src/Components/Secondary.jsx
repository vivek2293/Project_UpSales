import React from "react";
import ReactDOM from 'react-dom/client';
import "../css/secondary.css"

export default function Secondary() {
    return (
        <div className="row py-5 justify-content-between">
            <div className="col-md-5 mt-2 ps-5">
                <div className="row heading ms-1"><h2 id="heading">You do the business, we will handle the sales.</h2></div>
                <div className="row sub-text ms-3 mont" id="sub-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ipsum officia placeat voluptate nemo ea laudantium nobis consequuntur obcaecati suscipit?</div>
                <div className="row justify-content-start ms-2 pt-4"><button type="button" class="btn random-btn">Get Started</button></div>
            </div>
            <div className="col-md-6 mt-2">
                <div className="row">
                    <div className="row p-3">
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <svg width="177" height="60" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="88.5" cy="88.5" r="88.5" fill="#ECECEC" />
                                <path d="M84.6958 48.7082C85.8932 45.023 91.1068 45.023 92.3042 48.7082L99.1644 69.8217C99.6999 71.4698 101.236 72.5856 102.969 72.5856H125.169C129.044 72.5856 130.655 77.5441 127.52 79.8217L109.56 92.8705C108.158 93.8891 107.571 95.6946 108.107 97.3427L114.967 118.456C116.164 122.141 111.946 125.206 108.811 122.928L90.8511 109.879C89.4492 108.861 87.5508 108.861 86.1489 109.879L68.1886 122.928C65.0538 125.206 60.8359 122.141 62.0333 118.456L68.8935 97.3427C69.429 95.6946 68.8423 93.8891 67.4404 92.8705L49.4802 79.8217C46.3453 77.5441 47.9564 72.5856 51.8313 72.5856H74.0314C75.7643 72.5856 77.3001 71.4698 77.8356 69.8217L84.6958 48.7082Z" fill="#02C9D6" />
                            </svg>

                        </div>
                        <div className="col-md-10">
                            <h4>Rewards</h4>
                            <p className="fst-italic mont">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi aliquid alias, iure consequuntur nemo quisquam.</p>
                        </div>
                    </div>

                    <div className="row p-3">
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <svg width="177" height="60" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="88.5" cy="88.5" r="88.5" fill="#FFE5D5" />
                                <path d="M91.3205 133.475C94.5042 131.45 97.6973 129.434 100.881 127.409C102.322 126.496 103.782 125.591 105.186 124.612C108.52 122.285 111.647 119.638 114.426 116.662C119.927 110.756 124.109 103.758 126.756 96.1374C128.913 89.9113 129.836 83.3461 129.836 76.7715V64.2346C129.836 62.5485 128.658 61.0791 127.066 60.5987C125.917 60.2502 124.778 59.8923 123.676 59.4308C123.977 59.5532 124.278 59.6851 124.58 59.8075C122.611 58.9692 120.765 57.8954 119.07 56.5956L119.832 57.189C118.156 55.8891 116.649 54.3915 115.349 52.7149L115.942 53.4778C114.642 51.7824 113.559 49.9268 112.721 47.9582C112.843 48.2596 112.975 48.561 113.098 48.8624C112.815 48.1842 112.551 47.4872 112.325 46.7902C111.817 45.1983 110.394 44.0209 108.69 44.0209H74.884C73.3298 44.0209 71.7662 43.9738 70.2121 44.0209H70.1461C68.4318 44.0209 67.019 45.1983 66.5103 46.7902C66.2843 47.4966 66.0299 48.1842 65.7379 48.8624C65.8604 48.561 65.9923 48.2596 66.1147 47.9582C65.2764 49.9268 64.1932 51.7729 62.8933 53.4778L63.4867 52.7149C62.1869 54.3915 60.6798 55.8891 59.0032 57.189L59.7662 56.5956C58.0707 57.8954 56.2151 58.9692 54.2559 59.8075C54.5573 59.6851 54.8587 59.5532 55.1602 59.4308C54.0487 59.8923 52.9184 60.2502 51.7692 60.5987C50.1774 61.0791 49 62.5485 49 64.2346V75.5941C49 77.591 49 79.5879 49.1413 81.5847C49.4427 85.6444 50.1303 89.6947 51.27 93.6037C53.5306 101.365 57.449 108.514 62.6484 114.684C66.6893 119.478 71.559 123.359 76.8338 126.703L87.2608 133.315C87.3456 133.372 87.4398 133.428 87.5246 133.485C89.1918 134.54 91.7538 133.89 92.6769 132.128C93.6565 130.263 93.1007 128.106 91.3205 126.976C89.6251 125.902 87.9296 124.828 86.2436 123.755C84.0771 122.379 81.9201 121.014 79.7537 119.638C78.2372 118.678 76.7584 117.651 75.3267 116.558L76.0897 117.152C72.5292 114.392 69.3267 111.189 66.5668 107.629L67.1602 108.392C64.3533 104.747 62.0173 100.753 60.2183 96.5142C60.3407 96.8156 60.4726 97.117 60.595 97.4184C58.7583 93.0573 57.5055 88.4796 56.8745 83.7888C56.9216 84.1185 56.9687 84.4576 57.0063 84.7873C56.6013 81.7355 56.5354 78.6836 56.5354 75.6224V64.2722C55.6123 65.4873 54.6892 66.693 53.7661 67.9081C57.0157 66.9285 60.1618 65.6286 62.9216 63.6411C66.1901 61.2863 68.9781 58.3852 71.0504 54.919C72.1901 53.0163 73.1038 50.9441 73.7819 48.8341C72.5669 49.7572 71.3612 50.6803 70.1461 51.6034H103.952C105.506 51.6034 107.069 51.6411 108.624 51.6034H108.69C107.474 50.6803 106.269 49.7572 105.054 48.8341C107.418 56.2094 112.787 62.6239 119.832 65.9394C121.528 66.7401 123.27 67.3617 125.07 67.9081C124.146 66.693 123.223 65.4873 122.3 64.2722V77.6287C122.3 80.0212 122.14 82.4136 121.829 84.7873C121.876 84.4576 121.924 84.1185 121.961 83.7888C121.321 88.4702 120.068 93.0573 118.241 97.4184C118.363 97.117 118.495 96.8156 118.617 96.5142C116.818 100.753 114.482 104.747 111.675 108.392L112.269 107.629C109.509 111.189 106.306 114.392 102.746 117.152L103.509 116.558C101.399 118.188 99.1573 119.591 96.9155 121.023C94.4289 122.605 91.9422 124.178 89.4555 125.761C88.815 126.166 88.1651 126.58 87.5246 126.985C86.7051 127.503 86.0552 128.285 85.7914 129.237C85.5465 130.141 85.6596 131.337 86.1682 132.138C87.242 133.795 89.5403 134.605 91.3205 133.475V133.475Z" fill="#F37020" />
                                <path d="M70.2212 88.8187L79.8948 98.4922L81.27 99.8674C82.7111 101.309 85.1601 101.309 86.6012 99.8674L94.0707 92.398L105.892 80.5769L108.614 77.8547C110.008 76.4607 110.112 73.8987 108.614 72.5235C107.107 71.1388 104.771 71.0352 103.283 72.5235L95.8132 79.9929L83.9921 91.814L81.27 94.5362H86.6012L76.9277 84.8626L75.5525 83.4874C74.1585 82.0934 71.5964 81.9898 70.2212 83.4874C68.8366 84.9945 68.733 87.3211 70.2212 88.8187V88.8187Z" fill="#F37020" />
                            </svg>

                        </div>
                        <div className="col-md-10">
                            <h4>100% Secured</h4>
                            <p className="fst-italic mont">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, accusamus?</p>
                        </div>
                    </div>

                    <div className="row p-3">
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <svg width="177" height="60" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="88.5" cy="88.5" r="88.5" fill="#02C9D6" />
                                <path d="M88.5 3.04917e-07C70.9964 3.04917e-07 53.8858 5.19043 39.3321 14.9149C24.7783 24.6394 13.4351 38.4612 6.7367 54.6325C0.0383456 70.8038 -1.71425 88.5981 1.70054 105.765C5.11533 122.933 13.5441 138.702 25.9211 151.079C38.298 163.456 54.0672 171.885 71.2345 175.299C88.4019 178.714 106.196 176.962 122.368 170.263C138.539 163.565 152.361 152.222 162.085 137.668C171.81 123.114 177 106.004 177 88.5C177.001 76.8777 174.713 65.3691 170.265 54.6314C165.818 43.8936 159.299 34.1371 151.081 25.9189C142.863 17.7007 133.106 11.1819 122.369 6.7347C111.631 2.2875 100.122 -0.000964462 88.5 3.04917e-07V3.04917e-07ZM116.639 134.099C116.307 134.925 115.803 135.671 115.16 136.286C114.517 136.901 113.75 137.372 112.911 137.667C112.071 137.961 111.178 138.073 110.291 137.994C109.405 137.915 108.546 137.648 107.771 137.21L83.7462 118.542L68.3266 132.768C67.9688 133.032 67.5503 133.202 67.1096 133.262C66.6688 133.323 66.22 133.271 65.8044 133.112L68.7603 106.664L68.8549 106.739L68.9153 106.217C68.9153 106.217 112.148 66.8569 113.909 65.1799C115.692 63.5072 115.103 63.1444 115.103 63.1444C115.205 61.1042 111.904 63.1444 111.904 63.1444L54.6222 99.9961L30.7671 91.8718C30.7671 91.8718 27.1032 90.5576 26.7581 87.6681C26.3952 84.8007 30.8865 83.2431 30.8865 83.2431L125.732 45.5641C125.732 45.5641 133.529 42.0903 133.529 47.8431L116.639 134.099Z" fill="#ECECEC" />
                            </svg>

                        </div>
                        <div className="col-md-7">
                            <h4>Intact Records</h4>
                            <p className="fst-italic mont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque earum minus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}