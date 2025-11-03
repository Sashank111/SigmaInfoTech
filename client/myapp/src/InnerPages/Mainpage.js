import React from 'react';
import innerstyles from './innerstyles.module.css';
import banner from './sigmainfotec-homebanner.webp';
import Services from './Services';

const Mainpage = () => {
    return (
        <div>
            <main>
                <section>
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img
                                    src={banner}
                                    alt="banner"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`pt-3 pb-5 ${innerstyles.services}`}>
                    <Services hideBreadcrumbs={true} />
                </section>
            </main>
        </div>
    );
};

export default Mainpage;
