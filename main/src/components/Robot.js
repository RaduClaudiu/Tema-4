function Robot(props) {
  let { item } = props;
  return (
    <div>
      {item.id} - Hello, my name is {item.name}. I am a {item.type} and weigh{" "}
      {item.mass}
    </div>
  );
}

export default Robot;
