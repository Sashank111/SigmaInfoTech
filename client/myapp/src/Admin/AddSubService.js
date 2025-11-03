import React from 'react';
import adminstyles from './adminstyles.module.css';
import axios from 'axios';
const AddSubService = () => {
    const [sname, setSname] = React.useState('');
    const [subsname, setSubsname] = React.useState('');
    const [description, setDescription] = React.useState('');
    const addServiceData = (e) => {
        e.preventDefault();
        axios
            .post('https://sigmainfotech.onrender.com/subservice', { sname,subsname,description })
            .then(() => {
                alert('Service Added Successfully');
                setSname('');
                setSubsname('');
                setDescription('');
            })
            .catch(() => {
                alert('Error in adding service');
            });
    };
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className={`col-md-6 ${adminstyles.bx_shadow}`}>
                        <form className="p-4" onSubmit={addServiceData}>
                            <div className=" mb-4">
                                <input
                                    type="text"
                                    name="sname"
                                    className="form-control"
                                    placeholder="Service Name"
                                    value={sname}
                                    onChange={(e) => setSname(e.target.value)}
                                />
                            </div>
                            <div className=" mb-4">
                                <input
                                    type="text"
                                    name="subsname"
                                    className="form-control"
                                    placeholder="Sub-Servive Name"
                                    value={subsname}
                                    onChange={(e) =>
                                        setSubsname(e.target.value)
                                    }
                                />
                            </div>
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
                                    value="Add Service"
                                    className="btn btn-success"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddSubService;
