import { TriviaQuestion } from "./trivia-question";

describe('TriviaQuestion Model', () => {
  it('should generate an array of strings when calling generateAnswerArray method', () => {
    // Arrange
    const questionInstance = new TriviaQuestion('1', 'what?', ['incorrect 1', 'incorrect2'], 'correct');
    // Act
    // Assert
    expect(questionInstance.generateAnswerArray()).toStrictEqual(['incorrect 1', 'incorrect2', 'correct']);
  });
});
