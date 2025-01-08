import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-sm-6" key={index}>
          <div className="gallery-item">
            <a className="popup-gallery-item" href={image}>
              <img src={image} alt={`gallery-img-${index}`} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
