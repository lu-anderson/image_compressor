const ENDPOINT = 'http://api.resmush.it/ws.php?img=';

const requestImageCompressed = async (imageToCompressUrl) => {
  const response = await fetch(`${ENDPOINT}${imageToCompressUrl}&qlty=30`);
  const data = await response.json();
  return data;
};

export default requestImageCompressed;
