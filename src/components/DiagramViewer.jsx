import React, { useState } from "react";

function DiagramViewer({ image }) {

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  if (!image) {
    return (
      <div style={{
        padding:"30px",
        textAlign:"center",
        color:"#777"
      }}>
        No diagram uploaded
      </div>
    );
  }

  return (
    <div>

      {/* Zoom Controls */}
      <div style={{
        marginBottom:"15px",
        display:"flex",
        gap:"10px"
      }}>

        <button
          onClick={zoomIn}
          style={{
            padding:"8px 12px",
            border:"none",
            background:"#007bff",
            color:"white",
            borderRadius:"4px",
            cursor:"pointer"
          }}
        >
          Zoom In
        </button>

        <button
          onClick={zoomOut}
          style={{
            padding:"8px 12px",
            border:"none",
            background:"#007bff",
            color:"white",
            borderRadius:"4px",
            cursor:"pointer"
          }}
        >
          Zoom Out
        </button>

        <button
          onClick={resetZoom}
          style={{
            padding:"8px 12px",
            border:"none",
            background:"#6c757d",
            color:"white",
            borderRadius:"4px",
            cursor:"pointer"
          }}
        >
          Reset
        </button>

      </div>

      {/* Image Viewer */}
      <div style={{
         border:"1px solid #ccc",
            padding:"15px",
            borderRadius:"8px",
            background:"#fafafa"
      }}>

        <img
  src={image}
  alt="diagram"
  style={{
    width:"100%",
    maxWidth:"500px",
    display:"block",
    margin:"auto",
    transform:`scale(${zoom})`
  }}
/>
        

      </div>

    </div>
  );
}

export default DiagramViewer;