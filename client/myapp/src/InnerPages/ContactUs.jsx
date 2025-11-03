import React from 'react';
import innerstyles from './innerstyles.module.css';
import { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const contactusdata = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4000/contactus', {
                name,
                email,
                phone,
                subject,
                message,
            })
            .then((response) => {
                if (response.data.status === 'success') {
                    alert('Message Sent.');
                    setName('');
                    setEmail('');
                    setPhone('');
                    setSubject('');
                    setMessage('');
                } else {
                    alert('Message failed to send.');
                }
            })
            .catch((error) => {
                console.error('There was an error sending the message!', error);
            });
    };

    return (
        <main>
            {/* Header Section */}
            <section className={innerstyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Address */}
            <section className={`pt-5 pb-3 ${innerstyles.offers}`}>
                <div className="container">
                    <div className="row">
                        {/* Contact Form */}
                        <div className="col-md-7">
                            <form
                                className={`row ${innerstyles.bx_shadow}`}
                                onSubmit={contactusdata}
                            >
                                {/* Name */}
                                <div className="col-md-6 mb-4">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>

                                {/* Email */}
                                <div className="col-md-6 mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                {/* Phone */}
                                <div className="col-md-6 mb-4">
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>

                                {/* Subject */}
                                <div className="col-md-6 mb-4">
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={(e) =>
                                            setSubject(e.target.value)
                                        }
                                    />
                                </div>

                                {/* Message */}
                                <div className="col-md-12 mb-4">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="col-md-12 text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                        {/* Contact Info */}
                        <div className="col-md-4">
                            <h4 className="mb-3">Sigma Infotech</h4>
                            <p>
                                Plot No 47, Block C, Hanuman Nagar,
                                <br />
                                Raghavendra Colony,
                                <br />
                                Hyderabad, Telangana - 500084
                            </p>
                            <p>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:sashiadapa@gmail.com">
                                    sashiadapa@gmail.com
                                </a>
                                <br />
                                <strong>HR:</strong>{' '}
                                <a href="mailto:adapasashanka@gmail.com">
                                    adapasashanka@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe
                                title="Google Map - Sigma Infotech Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.806449018994!2d78.36291287593379!3d17.468975600448065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938f9cbdc781%3A0xdf176b4782cfe66!2sYS%20Luxury%20Coliving%20PG!5e0!3m2!1sen!2sin!4v1762165809215!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUs;
