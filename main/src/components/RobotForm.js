import { useEffect, useState } from "react";
import store from "../stores/RobotStore";

const RobotForm = () => {
  //variabile pentru legarea campurilor din formular
  const [name, changeName] = useState("");
  const [type, changeType] = useState("");
  const [mass, changeMass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.name = name;
    e.type = type;
    e.mass = mass;
    const r = { name, type, mass };
    console.log(r);
    store.addRobot(r);

    changeName("");
    changeType("");
    changeMass("");
  };
  useEffect(() => {
    console.log("usee fect run");
    console.log("name is " + typeof name);
  }, []);
  return (
    <div>
      <h1>Robot form</h1>

      <label>
        name
        <input
          lable="name"
          value={name}
          type="text"
          name="name"
          onChange={(e) => {
            changeName(e.target.value);
          }}
        ></input>
      </label>

      <label>
        type
        <input
          value={type}
          type="textbox"
          name="type"
          onChange={(e) => {
            changeType(e.target.value);
          }}
        ></input>
      </label>
      <label>
        {" "}
        mass
        <input
          value={mass}
          type="textbox"
          name="mass"
          onChange={(e) => {
            changeMass(e.target.value);
          }}
        ></input>
      </label>
      <button type="submit" value="add" onClick={handleSubmit}>
        add
      </button>
    </div>
  );
};

export default RobotForm;
