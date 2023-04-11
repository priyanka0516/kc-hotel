import React, { useState } from "react";
import './style.css';
import'./responsive.css';
const Checkform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    adultPeople: "",
    checkIn:"",
    checkOut:"",
    defaultRoom:"",
    childNo:"",   
  });
  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  const { firstName, lastName, checkIn, checkOut, adultPeople, defaultRoom, childNo } = formData;
  return (
    <form className="checkin-form">
      <div className="container">
        <div className="row">
        <div className="col-md-3">
          <input
            value={firstName}
            onChange={e => updateFormData(e)}
            placeholder="First name"
            type="text"
            name="firstName"
            required
          />
            <select value={adultPeople} onChange={e => updateFormData(e)}>
              <option value="Choose">Adult</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
        <div className="col-md-3">
        <input
            value={lastName}
            onChange={e => updateFormData(e)}
            placeholder="Last name"
            type="text"
            name="lastName"
            required
          />
          <div className="input">
            <select value={childNo} onChange={e => updateFormData(e)}>
              <option value="choose">children</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
        </div>
        <div className="col-md-3">
          <input
            value={checkIn}
            onChange={e => updateFormData(e)}
            placeholder="Check In"
            type="date"
            name="checkIn"
            required
          />
          <div className="input">
          <select value={defaultRoom} onChange={e => updateFormData(e)}>
                <option value="defaultRoom">Room</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
        </div>
        </div>
        <div className="col-md-3">
        <input
            value={checkOut}
            onChange={e => updateFormData(e)}
            placeholder="Check out"
            type="date"
            name="checkOut"
            required
          />
          <button type="submit" className="book-button">Submit</button>
        </div>
      </div>
      </div>
    </form>
  );
};
export default Checkform;
