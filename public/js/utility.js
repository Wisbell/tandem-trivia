// https://stackoverflow.com/a/12646864
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export async function getJsonResponseFromEndPoint(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}