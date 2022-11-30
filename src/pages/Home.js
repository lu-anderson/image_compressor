function Home() {
  return (
    <>
      <h1>Image compressor</h1>
      <img src="/assets/image_place.jpg" alt=" to compress" />
      <form>
        <label htmlFor="url">
          Url:
          {' '}
          <input id="url" type="text" />
        </label>
        ou
        <label htmlFor="upload_image">
          <input id="upload_image" type="file" />
        </label>
        <button type="button">Comprimir imagem</button>
      </form>
    </>
  );
}

export default Home;
