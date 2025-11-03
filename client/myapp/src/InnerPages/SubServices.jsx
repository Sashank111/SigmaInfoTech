import { useEffect, useState } from 'react';
import innerstyles from './innerstyles.module.css';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';

const SubServices = () => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const { sid, sname } = useParams();

    useEffect(() => {
        axios
            .get(`https://sigmainfotech.onrender.com/service/${sid}`)
            .then((res) => {
                setData(res.data.message);
            })
            .catch(() => {
                alert('Error fetching services');
            });

        axios
            .get(`https://sigmainfotech.onrender.com/subservicename/${sname}`)
            .then((res) => {
                setData1(res.data.message);
            })
            .catch(() => {
                alert('Error fetching subservices');
            });
    }, [sid, sname]);

    return (
        <main>
            <section className={innerstyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>{sname}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`py-5 ${innerstyles.services}`}>
                <div className="container">
                    <div className="row">
                        <p className="py-4">{data.description}</p>

                        {data1.map((subservice, index) => (
                            <div key={index} className="col-md-3 mb-4 d-flex">
                                <div
                                    className={`${innerstyles.serviceCard} d-flex flex-column justify-content-between w-100`}
                                >
                                    <div>
                                        <h2>{subservice.subsname}</h2>
                                        <p>{subservice.description}</p>
                                    </div>
                                    <div
                                        className={
                                            innerstyles.bookButtonContainer
                                        }
                                    >
                                        <NavLink
                                            to={`/bookservice?sid=${sid}&subservice=${encodeURIComponent(
                                                subservice.subsname
                                            )}`}
                                            className="btn btn-primary w-75"
                                        >
                                            Book Service
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SubServices;
