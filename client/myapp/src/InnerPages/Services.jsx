import { useEffect, useState } from 'react';
import innerstyles from './innerstyles.module.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Services = ({ hideBreadcrumbs }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4000/service')
            .then((res) => {
                if (Array.isArray(res.data.message)) {
                    setData(res.data.message);
                } else {
                    setData([]);
                }
            })
            .catch(() => {
                alert('Error fetching services');
            });
    }, []);

    return (
        <main>
            {!hideBreadcrumbs && (
                <section className={innerstyles.bread}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Our Services</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className={`py-5 ${innerstyles.services}`}>
                <div className="container">
                    <div className="row">
                        {data.length > 0 ? (
                            data.map((service, index) => (
                                <div
                                    key={index}
                                    className="col-md-3 mb-4 d-flex"
                                >
                                    <div
                                        className={`${innerstyles.serviceCard} d-flex flex-column justify-content-between w-100`}
                                    >
                                        <div>
                                            <h2>{service.sname}</h2>
                                            <p>{service.description}</p>
                                        </div>
                                        <div
                                            className={
                                                innerstyles.bookButtonContainer
                                            }
                                        >
                                            <NavLink
                                                to={`/subservice/${service._id}/${service.sname}`}
                                                className="btn btn-primary w-75"
                                            >
                                                View Sub Services
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-md-12 text-center">
                                <p>No services found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
