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

export function generateElement(tagName, textNode = '', classList = [], setAttributeList = []) {
  const newElement = document.createElement(tagName);

  if (textNode) {
    newElement.appendChild(
      document.createTextNode(textNode)
    );
  }

  if (classList.length > 0) {
    newElement.classList.add(...classList);
  }

  if (setAttributeList.length > 0) {
    setAttributeList.forEach(({ name, value }) => {
      newElement.setAttribute(name, value);
    });
  }

  return newElement;
}