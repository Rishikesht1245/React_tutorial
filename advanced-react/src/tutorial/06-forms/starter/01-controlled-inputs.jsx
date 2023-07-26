import { useState } from "react";
const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //do something
    console.log(name, email);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input type="text" id="name" className="form-input" value={name} />
        <label htmlFor="email" className="form-label">
          Email :
        </label>
        <input type="email" id="email" className="form-input" value={email} />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
