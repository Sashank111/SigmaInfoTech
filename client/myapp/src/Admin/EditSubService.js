import React, { useEffect } from 'react';
import adminstyles from './adminstyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditSubService = () => {
    const [sname, setSname] = React.useState('');
    const [subsname, setSubsname] = React.useState('');
    const [description, setDescription] = React.useState('');
    const { sid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:4000/subservice/${sid}`)
            .then((res) => {
                const data = res.data.message;
                setSname(data.sname);
                setSubsname(data.subsname);
                setDescription(data.description);
            })
            .catch(() => {
                alert('Error fetching subservice data');
            });
    }, [sid]);

    const editSubServiceData = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:4000/subservice/${sid}`, {
                sname,
                subsname,
                description,
            })
            .then(() => {
                alert('SubService Edited Successfully');
                navigate('/admindashboard/deletesubservice');
            })
            .catch(() => {
                alert('Error in editing subservice');
            });
    };

    return (
        <main>
            <section>
                <div className={adminstyles.bread}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Edit SubService</h1>
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
                            <form className="p-4" onSubmit={editSubServiceData}>
                                {/* Service Name */}
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="sname"
                                        className="form-control"
                                        placeholder="Parent Service Name"
                                        value={sname}
                                        onChange={(e) =>
                                            setSname(e.target.value)
                                        }
                                    />
                                </div>
                                {/* SubService Name */}
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="subsname"
                                        className="form-control"
                                        placeholder="SubService Name"
                                        value={subsname}
                                        onChange={(e) =>
                                            setSubsname(e.target.value)
                                        }
                                    />
                                </div>
                                {/* Description */}
                                <div className="mb-4">
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        placeholder="SubService Description"
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
                                        value="Edit SubService"
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

export default EditSubService;