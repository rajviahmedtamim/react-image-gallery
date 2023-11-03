import React from "react";

const DragDropOverlay = ({ dragging, draggedIndex, image }) => {
  return (
    dragging &&
    Number(draggedIndex) === Number(image.id) && (
      <div>
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-1 border-dashed rounded-lg z-50">
          <div className="w-full max-w-full h-full max-h-full rounded-lg object-contain border-2"></div>
        </div>
      </div>
    )
  );
};

export default DragDropOverlay;
