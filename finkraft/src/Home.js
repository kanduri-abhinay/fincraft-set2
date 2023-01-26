import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Home = (props) => {
  function submitHandler(e) {
    // e.preventDefault();
    props.updateSelectedData(document.getElementById("dropdown").value);
    // console.log(e.target[0].value);
    // window.location.href = window.location.href + "grid";
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          Kindly select the type of data you want from below dropdown
        </Form.Text>
      </Form.Group>
      <Form.Select aria-label="Default select example" id="dropdown">
        <option>Open this select menu</option>
        <option value="vehicle-data">Vehicle Data</option>
        <option value="us-data">US Data</option>
      </Form.Select>
      <Link to="/grid">
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Link>
    </Form>
  );
};

export default Home;
