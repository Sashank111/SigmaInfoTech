import { useState, useEffect } from 'react';
import innerstyles from './innerstyles.module.css';
import { Button, Nav, Table } from 'react-bootstrap';
import axios from 'axios';

const StudentData = () => {
  const [studentdata, setStudentdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/student/")
      .then(res => {
        console.log(res);
        setStudentdata(res.data);
      })
      .catch(() => {
        console.log('error');
        alert('Unable to get data');
      });
  }, []);

  return (
    <main>
      <section className={innerstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Edit Students</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Table responsive striped bordered hover >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone number</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentdata.map((stu) => (
                      <tr key={stu._id}>
                        <td>{stu.name}</td>
                        <td>{stu.email}</td>
                        <td>{stu.phno}</td>
                        <td>{stu.address}</td>
                        <td>
                          <Nav.Link href={`/studentedit/${stu._id}`}>
                            <Button variant='warning'>Edit Student</Button>
                          </Nav.Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StudentData;