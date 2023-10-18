import React, { useState } from "react";
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { addCrud } from "./notes/crudaction";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function AddContainer() {
  const initialState = {
    companyName: "",
    phone: "",
    email: "",
    location: "",
    link: "",
    description: "",
  };
  const [crud, setCrud] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch

  function handleSubmit(event) {
    event.preventDefault();
    // Dispatch the addCrud action with the form data
    dispatch(addCrud(crud));
    navigate("/cruds");
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    navigate("/cruds");
  }

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h1>Create Notes</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Subject Name</label>
          <input
            name="companyName"
            type="text"
            required
            value={crud.companyName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            pattern="(251)-[0-9]{3}-[0-9]{6}"
            required
            value={crud.phone}
            onChange={handleChange}
            className="form-control"
          />
          <small>Format: 251-XXX-XXXXXX</small>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}"
            required
            value={crud.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            name="location"
            type="text"
            required
            value={crud.location}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Website/Reference Link</label>
          <input
            name="link"
            type="url"
            value={crud.link}
            onChange={handleChange}
            className="form-control"
          />
          <small>Format: https://yourlink.ext</small>
        </div>

        <div className="form-group">
          <label>Notes</label>
          <textarea
            name="description"
            row="10"
            value={crud.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContainer;
