import React, { useState } from "react";
import projects from "../data";

import Spinner from "./Spinner";

const Projects = () => {
  const [imgLoaded, setImgLoaded] = useState(false);


  return (
    <section className="p-5 bg-light" id="portfolio">
      <div className="container">
        <div className="row images-section">
          {projects.map((p, idx) => {
            return (
              <div className="col-12 col-md-6 my-3" key={idx}>
                {!imgLoaded && <Spinner />}
                  <a href={p.url}>
                    <img
                      style={{ display: `${imgLoaded ? "block" : "none"}` }}
                      onLoad={() => setImgLoaded(true)}
                      className="img-fluid rounded folios"
                      src={p.image}
                      alt={p.alt}
                    />
                  </a>
                
                <div className="d-flex justify-content my-2">
                  <a className="text-warning mr-5" href={p.sourceCode}>
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <h1>{p.title}</h1>
                </div>
                <p className="text-muted">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
