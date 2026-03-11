import React, { useState } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";

function Dashboard() {

  const [image, setImage] = useState(null);

  return (

    <div style={{padding:"30px", fontFamily:"Arial"}}>

      <h1 style={{
        textAlign:"center",
        marginBottom:"30px",
        color:"#333"
      }}>
        Simple Diagram Dashboard
      </h1>

      <UploadBox setImage={setImage} />

      <div
        style={{
          display:"flex",
          flexWrap:"wrap",
          gap:"20px",
          marginTop:"20px"
        }}
      >

        <div style={{
          flex:"2 1 500px",
          border:"1px solid #ddd",
          padding:"20px",
          borderRadius:"10px",
          background:"#fafafa",
          boxShadow:"0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <DiagramViewer image={image}/>
        </div>

        <div style={{
          flex:"1 1 250px",
          border:"1px solid #ddd",
          padding:"20px",
          borderRadius:"10px",
          background:"#fafafa",
          boxShadow:"0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <ComponentList/>
        </div>

      </div>

    </div>

  );
}

export default Dashboard;