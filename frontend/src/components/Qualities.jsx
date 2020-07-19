import React from 'react'

const Qualities = () => {
    return (
        <section className="bg-secondary py-5" id="qualities">
        <div className="container">
            <div className="row align-items-center text-center">
                <div className="col-12 col-md-6 col-lg-4 text-white my-3 d-flex">
                    <i className="fas fa-briefcase fa-5x mr-3 align-self-center"></i>
                    <div className="inner-text">
                        <h2 className="my-3">Travailleur - Hard Working</h2>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 text-white my-3 d-flex">
                    <i className="far fa-handshake fa-5x mr-3 align-self-center"></i>
                    <div className="inner-text">
                        <h2 className="my-3">Fiable - Reliable</h2>
                    </div>
                </div>
                <div className="col-12 col-md-6 mx-auto col-lg-4 text-white my-3 d-flex">
                    <i className="fas fa-sync-alt fa-5x mr-3 align-self-center"></i>
                    <div className="inner-text">
                        <h2 className="my-3">Apprenant - Learner</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>    )
}

export default Qualities
