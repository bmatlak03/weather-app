import React from "react";
const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        placeholder="Wpisz nazwę miasta"
        type="text"
        value={props.value}
        onChange={props.change}
      />
    </form>
  );
};

export default Form;
