import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type Props = {
  gallery: any;
};

const MyImageGallery = ({ gallery }: Props) => {
  const [width, setWidth] = useState(0);

  const images =
    gallery?.map((item: any) => {
      const el = item?.mediaDetails?.sizes?.find(
        (item: any) => Number(item.width) === 150
      );

      return {
        original: item?.mediaItemUrl || item?.sourceUrl || '',
        thumbnail: el ? el?.sourceUrl : item?.mediaItemUrl || ''
      };
    }) || null;

  useEffect(() => {
    const width = document.querySelector('.container')?.getBoundingClientRect();

    if (width) {
      setWidth(width.width);
    }
  }, []);
  const Position = width > 1200 ? 'left' : 'bottom';

  if (!images) return <></>;

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
