import React from 'react';
import { Photo } from '../../types/photos';

type PhotoProps = {
  currentPhoto: Photo;
};

export const PhotoItem: React.FC<PhotoProps> = ({ currentPhoto }) => {
  const { url, id } = currentPhoto;

  return (
    <div>
      <img src={url} alt="photo" />
    </div>
  );
};
