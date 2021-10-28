import { useState, useEffect } from "react";
import { Catalogues } from "./mock";

const Test = () => {
  const [select, setSelect] = useState();
  useEffect(() => {
    setSelect(Catalogues);
  }, []);

  const inputHandle = (event) => {
    const { name, value, checked } = event.target;
    // let tempUser = Catalogues.map(user => user.name === name ? {...user, isChecked: checked}: user)
    // console.log(value)
    let array = [];
    select.forEach((value) =>{
      if(value.select){
        array.push(value.id)
      }
    })
    console.log(array)
  }

  return (
    <div style={{ margin: "50px" }}>
      {Catalogues.map((value, index) => {
        return (
          <>
            <input type="checkbox" id={value.id} name={value.name} onChange={inputHandle} value={value.id}/>
            <label htmlFor={value.id}>{value.name}</label>
          </>
        );
      })}
    </div>
  );
};

export default Test;
