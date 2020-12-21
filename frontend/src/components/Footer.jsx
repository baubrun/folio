import React from 'react'

const Footer = () => {
    return (
        <section className="p-5" id="social">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-12 d-flex justify-content-between">
                    <a className="btn-outline-warning " href="https://github.com/baubrun"><i
                            className="fab fa-github fa-3x"></i></a>
                    <a className="btn btn-lg btn-outline-warning text-uppercase" href="mailto:baubelf@gmail.com"><i
                            className="far fa-envelope fa-2x"></i></a>
                    <a className="btn-outline-warning" href="https://www.linkedin.com/in/baubelf/"><i
                            className="fab fa-linkedin fa-3x"></i></a>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Footer
