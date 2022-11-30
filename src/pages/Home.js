import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setImageToCompress,
  getImageCompressed,
  saveImageCompressedInGallery,
} from '../redux/actions';

import styles from '../styles/Home.module.css';

function Home() {
  const {
    imageToCompress,
    isLoading,
    currentImageCompressed,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setImageToCompress(imageURL));
    dispatch(getImageCompressed(imageURL));
    setImageURL('');
  };

  return (
    <main className={ styles.container }>
      <h1>Image compressor</h1>
      <img src={ imageToCompress || '/assets/image_place.jpg' } alt="to compress" />
      { isLoading && <h3>Carregando...</h3>}
      <form onSubmit={ handleSubmit }>
        <label htmlFor="url">
          Url:
          {' '}
          <input
            id="url"
            type="text"
            value={ imageURL }
            onChange={ (event) => setImageURL(event.target.value) }
          />
        </label>
        <button type="submit">Comprimir imagem</button>
      </form>

      {
        currentImageCompressed && (
          <section>
            <img src={ currentImageCompressed.url } alt="compressed" />
            <a href="http://par5.static.resmush.it/f55209365971dd9b5531654ee6ec6b24/Tesla-Model-3%20%2819%29.jpg">Baixar imagem</a>
            <button
              type="button"
              onClick={ () => dispatch(
                saveImageCompressedInGallery(currentImageCompressed),
              ) }
            >
              Salvar na galeria
            </button>
          </section>
        )
      }
    </main>
  );
}

export default Home;
