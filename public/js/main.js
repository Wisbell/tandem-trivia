let Game; // TriviaGame instance

// Onload is used to make sure TriviaGame can parse the number of rounds from the DOM
// Async/Await is used so a javascript module can be imported as import() returns a promise
window.onload = async function () {
  const { default: TriviaGame } = await import('./trivia.js');
  Game = new TriviaGame();
};
