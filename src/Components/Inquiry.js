import React, { useState } from "react";

const Inquiry = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
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
    <div className="container-fluid">
        <form onSubmit={handleSubmit} className="bg-black">
      <div className="row padding-50">
        <div className="col-12 col-lg-6">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="col-12 col-lg-6">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="text-primary" required />
        </div>
        <div className="col-12 col-lg-6">
          <label htmlFor="message" >Message:</label>
          <textarea id="message" className="text-primary" required />
        </div>
        <div className="col-12 col-lg-6">
          <button className="btn btn-primary" type="submit">
            {status}
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default Inquiry;