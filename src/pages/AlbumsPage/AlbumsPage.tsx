import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AlbumsList } from '../../components/AlbumsList/AlbumsList';

export const Albums: React.FC = () => {
  const { albums, loading, page, numberOfAlbums } = useTypedSelector((state) => state.albums);
  const { fetchAlbums, setAlbumsPage } = useActions();

  useEffect(() => {
    if (!loading) {
      fetchAlbums(page);
    }
  }, [page]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.addEventListener('scroll', scrollHandler);
    };
  });

  const scrollHandler = (e: any) => {
    let scrollHeight = e.target.documentElement.scrollHeight;
    let scrollTop = e.target.documentElement.scrollTop;
    let innerHeight = window.innerHeight;
    let difference = scrollHeight - (scrollTop + innerHeight);

    if (difference < 100 && !loading && albums.length < numberOfAlbums) {
      setAlbumsPage(page + 1);
    }
  };

  return (
    <div className={styles.root}>
      <AlbumsList albums={albums} />
    </div>
  );
};
