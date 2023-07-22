import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        Show Alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello world</div>;
};
export default ToggleChallenge;
