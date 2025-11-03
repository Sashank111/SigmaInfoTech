import React, { useEffect, useState } from 'react';
import innerstyles from './innerstyles.module.css';
import axios from 'axios';

const Offers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4000/offer')
            .then((res) => {
                if (
                    res.data.status === 'success' &&
                    Array.isArray(res.data.message)
                ) {
                    setOffers(res.data.message);
                } else {
                    setOffers([]);
                }
            })
            .catch(() => {
                alert('Error fetching offers');
            });
    }, []);

    return (
        <main>
            <section className={innerstyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Our Offers</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`py-5 ${innerstyles.offers}`}>
                <div className="container">
                    <div className="row">
                        {offers.length > 0 ? (
                            offers.map((offer, index) => (
                                <div key={index} className="col-md-3 mb-4">
                                    <div className={innerstyles.serviceCard}>
                                        <h2>{offer.title}</h2>
                                        <p>{offer.description}</p>
                                        {offer.discount && (
                                            <p>
                                                <strong>Discount:</strong>{' '}
                                                {offer.discount}
                                            </p>
                                        )}
                                        {offer.validity && (
                                            <p>
                                                <strong>Valid Till:</strong>{' '}
                                                {offer.validity}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-md-12 text-center">
                                <p>No offers available right now.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Offers;
