import React from 'react';
import { Photo } from '../../types/photos';
import styles from './styles.module.css';

type PhotoProps = {
  currentPhoto: Photo;
};

export const PhotoItem: React.FC<PhotoProps> = ({ currentPhoto }) => {
  const { url, id } = currentPhoto;

  return (
    <div className={styles.photo}>
      <img className={styles.photo} src={url} alt="photo" />
    </div>
  );
};
