import React from 'react';
import { Albums } from '../../types/albums';
import { AlbumsItem } from '../AlbumItem/AlbumItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './styles.module.css';

export const AlbumsList: React.FC<Albums> = ({ albums }) => {
  const { loading, error } = useTypedSelector((state) => state.albums);

  return (
    <div className={styles.root}>
      {albums.map((album) => (
        <div key={album.id}>
          <AlbumsItem key={album.id} album={album} />
        </div>
      ))}

      {loading && <h1>Loading...</h1>}

      {error && <h1>{error}</h1>}
    </div>
  );
};
