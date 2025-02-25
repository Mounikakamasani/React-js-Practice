import React from "react";

/*function Greet() {
  return <h1>Hello, mounii!!</h1>;
}
  */
 //funtion component
const Greet = props =>{
  const {name,gender}=props
  
   
  return (
    <div>
      <h1>Hello {name}, gender {gender}</h1>
    </div>
  );
};


export default Greet;
