import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css"; // Import CSS for styling
const rand=Math.floor(Math.random()*1000)

const initialImages = [
  { src: `https://picsum.photos/200/400?random=${rand}`, caption: "Image 1" },
  { src: `https://picsum.photos/200/400?random=${rand+1}`, caption: "Image 2" },
  { src: `https://picsum.photos/200/400?random=${rand+2}`, caption: "Image 3" }
];
const FigureList = () => {
  const [images, setImages] = useState(initialImages);
  const addImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newImage = {
      src: `https://picsum.photos/200/400?random=${randomId}`,
      caption: `Image ${images.length + 1}`
    };
    setImages([...images, newImage]);
  };
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
  return (
    <div className="container">
      <h1>Dynamic Image Gallery</h1>
      <div className="buttons">
        <button onClick={addImage}>Add Image</button>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <BasicFigure key={index} src={image.src} caption={image.caption} onRemove={() => removeImage(index)} />
        ))}
      </div>
    </div>
  );
};
export default FigureList;
