import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Resize from '../set/Getwidthdevice';

import images from '../../assets/images/imgs.json';

const MyImageGallery = () => {
  const type = Resize();
  const Position = type.width > 1024 ? 'left' : 'bottom';

  return (
    <ImageGallery
      items={images}
      thumbnailPosition={Position}
      showPlayButton={false}
      showNav={false}
    />
  );
};

export default MyImageGallery;
