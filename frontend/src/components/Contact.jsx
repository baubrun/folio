import React from "react";

const Contact = () => {
  return (
    <section className="p-5" id="contact">
      <div className="container">
        <div className="row text-center align-items-center justify-content-between">
          <div className="col-6 my-2">
            <h1 className="text-white text-uppercase">Contact</h1>
          </div>

          <div className="col-6 my-2">
            <a
              className="btn btn-lg btn-outline-warning text-uppercase"
              href="mailto:baubelf@gmail.com"
            >
              <i className="far fa-envelope fa-5x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
