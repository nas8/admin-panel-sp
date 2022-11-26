import React, { useEffect, useState } from 'react';
import { Album } from '../../types/albums';
import { PhotoItem } from '../PhotoItem/PhotoItem';
import styles from './styles.module.css';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

interface AlbumItem {
  album: Album;
}

export const AlbumsItem: React.FC<AlbumItem> = ({ album }) => {
  const { id, title } = album;
  const { photos, error, loading, page } = useTypedSelector((state) => state.photos);
  const { fetchPhotos, setPhotosPage } = useActions();

  const filtredPhotos = photos.filter((photo) => photo.albumId === id);

  useEffect(() => {
    fetchPhotos(id, page);
  }, [page]);

  const [photoId, setPhotoId] = useState(0);

  const increasePhotoId = () => {
    console.log(photoId);
    if (photoId + 1 !== filtredPhotos.length) {
      setPhotoId(photoId + 1);
    }
  };
  const decreasePhotoId = () => {
    if (photoId !== 0) setPhotoId(photoId - 1);
  };

  const currentPhoto = filtredPhotos[photoId];

  return (
    <div className={styles.root}>
      <h4>
        {id}. {title}
      </h4>
      <div className={styles.photos}>
        {filtredPhotos.length > 0 ? <PhotoItem currentPhoto={currentPhoto} /> : <h4>Пусто</h4>}
      </div>
      <div>
        {photoId + 1}/{filtredPhotos.length}
      </div>
      <div>
        <button onClick={() => decreasePhotoId()}>prev</button>
        <button onClick={() => increasePhotoId()}>next</button>
      </div>
    </div>
  );
};
