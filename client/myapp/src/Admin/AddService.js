import React from 'react';
import adminstyles from './adminstyles.module.css';
import axios from 'axios';
const AddService = () => {
    const [sname, setSname] = React.useState('');
    const [description, setDescription] = React.useState('');
    const addServiceData = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4000/service', { sname, description })
            .then((res) => {
                if (res.data.status === 'success') {
                    alert('Record Inserted');
                    setSname('');
                    setDescription('');
                } else if (
                    res.data.status === 'failed' &&
                    res.data.message.toLowerCase().includes('already')
                ) {
                    alert('Service Already Exists');
                } else {
                    alert('Unable to Insert Record');
                }
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
                            {/* Name */}
                            <div className=" mb-4">
                                <input
                                    type="text"
                                    name="sname"
                                    className="form-control"
                                    placeholder="Name"
                                    value={sname}
                                    onChange={(e) => setSname(e.target.value)}
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

export default AddService;
