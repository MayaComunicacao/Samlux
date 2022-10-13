import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import images from '../../assets/images/imgs.json';

const MyImageGallery = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const width = document.querySelector('.container')?.getBoundingClientRect();

    if (width) {
      setWidth(width.width);
    }
  }, []);
  const Position = width > 1200 ? 'left' : 'bottom';

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
