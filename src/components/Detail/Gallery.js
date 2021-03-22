import React from "react";
import ImageGallery from "react-image-gallery";
import pic from "../../img/big.png";
import "./detail.scss";
const images = [
  {
    original: pic,
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  }
];
const Gallery = ({ nav }) => {
  return <ImageGallery items={images} showNav={nav} showPlayButton={false} />;
};

export default Gallery;
