import React, { useState } from "react";

function UploadBox({ setImage }) {

  const [fileName, setFileName] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  return (
    <div style={{marginBottom:"20px",
       marginBottom:"20px",
  padding:"20px",
  border:"2px dashed #bbb",
  borderRadius:"10px",
  textAlign:"center",
  background:"#f9f9f9"

    }}>

      <input 
        type="file" 
        accept="image/png, image/jpg, image/jpeg" 
        onChange={handleUpload}
      />

      {fileName && (
        <p>Uploaded File: {fileName}</p>
      )}

    </div>
  );
}

export default UploadBox;