import React, { use, useEffect } from 'react';
import adminstyles from './adminstyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const EditService = () => {
    const [sname, setSname] = React.useState('');
    const [description, setDescription] = React.useState('');
    const { sid } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`https://sigmainfotech.onrender.com/service/${sid}`)
            .then((res) => {
                setSname(res.data.message.sname);
                setDescription(res.data.message.description);
            })
            .catch(() => {
                alert('Error fetching service data');
            });
    }, [sid]);
    const editServiceData = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:4000/service/${sid}`, { sname, description })
            .then(() => {
                alert('Service Edited Successfully');
                navigate('/admindashboard/deleteservice');
            })
            .catch(() => {
                alert('Error in editing service');
            });
    };

    return (
        <main>
            <section>
                <div className={adminstyles.bread}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Edit Service</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div
                            className={`col-md-6 ${adminstyles.bx_shadow} mx-auto`}
                        >
                            <form className="p-4" onSubmit={editServiceData}>
                                {/* Name */}
                                <div className=" mb-4">
                                    <input
                                        type="text"
                                        name="sname"
                                        className="form-control"
                                        placeholder="Name"
                                        value={sname}
                                        onChange={(e) =>
                                            setSname(e.target.value)
                                        }
                                    />
                                </div>
                                {/* Password */}
                                <div className="mb-4">
                                    <textarea
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        placeholder="Message Description"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                                {/* Submit Button */}
                                <div className="col-md-12 text-center">
                                    <input
                                        type="submit"
                                        value="Edit Service"
                                        className="btn btn-success"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EditService;
