import React, { useState } from "react";

function ComponentList() {

  const components = [
    { id:1, name:"Resistor" },
    { id:2, name:"Capacitor" },
    { id:3, name:"Diode" },
    { id:4, name:"Transistor" }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div style={{
       border:"1px solid #ccc",
        padding:"15px",
        borderRadius:"8px",
        background:"#f9f9f9"
      
      
    }}>

      <h3>Components</h3>

      {components.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelected(item.id)}
          style={{
            padding:"10px",
            marginBottom:"5px",
            cursor:"pointer",
            borderRadius:"5px",
            background:selected===item.id ? "#007bff" : "#f4f4f4",
            color:selected===item.id ? "white" : "black"
          }}
        >
          {item.name}
        </div>
      ))}

    </div>
  );
}

export default ComponentList;