import { useState } from "react";
import store from "../stores/RobotStore";

const RobotForm = () => {
  //variabile pentru legarea campurilor din formular
  const [name, changeName] = useState("");
  const [type, changeType] = useState("");
  const [mass, changeMass] = useState("");

  const [robot, changeRobot] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.name = name;
    e.type = type;
    e.mass = mass;
    console.log(e);
    changeRobot(e);
    store.addRobot(robot);

    changeName("");
    changeType("");
    changeMass("");
  };
  return (
    <div>
      <h1>Robot form</h1>
      <form name="Robot form" onSubmit={handleSubmit}>
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
        <button type="submit" value="add">
          add
        </button>
      </form>
    </div>
  );
};

export default RobotForm;
