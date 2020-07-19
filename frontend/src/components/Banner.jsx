import React from "react";
import avatar from "../images/person.svg"


const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="row max-viewport align-items-center text-center">
            <div className="col-md-6 d-none d-md-block">
              <img
                id="avatar"
                className="img-fluid rounded-thumbnail"
                src={avatar}
                alt="avatar"
              />
            </div>
            <div className="col-12 col-sm-6 mx-auto my-5">
              <h1 className="text-white text-uppercase">BAUBRUN</h1>
              <a
                className="btn btn-lg btn-outline-warning text-uppercase m-2 p-2"
                href="https://github.com/baubrun"
              >
                <i className="fab fa-github mr-2">GITHUB</i>
              </a>
              <a
                className="btn btn-lg btn-outline-warning text-uppercase m-2 p-2"
                href="https://www.linkedin.com/in/baubelf/"
              >
                LINKED<i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
