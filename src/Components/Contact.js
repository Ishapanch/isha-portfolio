import React, { useState } from "react";
import "./AboutPage.css";
import "./Contact.css";
// import Form from "react-bootstrap/Form";

export default function Contact() {
  // const options = ["Full Time", "Freelancing", "Part Time"];
  const [selectedService, setSelectedService] = useState("");
  const [selectedRadio, setselectedRadio] = useState("");
  const handleChange = (event) => {
    setSelectedService(event.target.value);
  };
  const handleChangeRadio = (event) => {
    setselectedRadio(event.target.value);
  };

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, services } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      // options: option.value,
      options: selectedRadio,
      services: services.value,
    };
    console.log("Form Details:", details);
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="dark-bg contact-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="about-heading text-center">
              <p>Feel free to contact me anytimes</p>
              <h3>Get in Touch</h3>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            {/* <Form>
              <div className="row">
                <div className="col-lg-12 col-12">
                  <Form.Group
                    className="mb-3 "
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-grp"
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="form-grp"
                      placeholder="Enter Email"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-12">
                  <Form.Label>My Services</Form.Label>
                  <Form.Select aria-label="Services" className="form-grp">
                    <option>Open this select services</option>
                    <option value="web">Web Designing</option>
                    <option value="graphic">Graphhic Designing</option>
                    <option value="both">Both</option>
                  </Form.Select>
                </div>
                <div className="col-lg-12 col-12">
                  <Form.Label>Select Any </Form.Label>
                  <div className="radio-btn">
                  {["Full Time", "Freelancing", "Part Time"].map((gender) => (
                    <div
                      key={`default-${gender}`}
                      className="mb-3 form-radio-btn"
                    >
                      <Form.Check
                        type="radio"
                        id={`default-${gender}`}
                        name="gender"
                        value={gender}
                        label={gender.charAt(0).toUpperCase() + gender.slice(1)} // Capitalize first letter
                      />
                    </div>
                  ))}
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                <div className="btn- mt-3">
                  <a to="/" className="btn-green">
                    Connect
                  </a>
                </div>
                </div>
              </div>
            </Form> */}
            <form onSubmit={handleSubmit} className="bg-black">
              <div className="row padding-50 align-items-center">
                <div className="col-12 col-lg-6">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-grp" id="name" required />
                </div>
                <div className="col-12 col-lg-6">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-grp"
                    required
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <label>My Services</label>
                  <select
                    aria-label="Services"
                    id="services"
                    className="form-grp"
                    value={selectedService}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Open this select services
                    </option>
                    <option value="web-designing">Web Designing</option>
                    <option value="graphic-designing">Graphic Designing</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div className="col-lg-6 col-12">
                  <label>Select Any </label>
                  <div>
                    {["Full Time", "Freelancing", "Part Time"].map((option) => (
                      <div key={option} className="mb-3 form-radio-btn">
                        <input
                          type="radio"
                          id={option}
                          name="emplopyment"
                          value={option}
                          onChange={handleChangeRadio}
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12 col-lg-12 ">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" className="form-grp w-100" required />
                </div>
                <div className="col-12 col-lg-6">
                  <button className="btn-green mt-5" type="submit">
                    {status}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-12">
            <div className="padding-class">
              <div className="green-title">Contact Me ?</div>
              <h3 className="heading">I'm Isha Pancholi</h3>
              <p className="description">
                Always available for freelance work if the right project comes
                along, Feel free to contact me!
              </p>
              <hr className="seperator-hr" />
              <ul className="no-list details-my">
                <li>
                  <span>Name:</span> Isha Pancholi
                </li>
                <li>
                  <span>Email:</span>
                  <a href="mailto: inp2202@gmail.com"> inp2202@gmail.com</a>
                </li>
                <li>
                  <span>Age:</span> 22
                </li>
                <li>
                  <span>From:</span> Vadodara, Gujarat, India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
