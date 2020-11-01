export class AppConfig {
  static rootUrl = `https://tandem-trivia-westley.herokuapp.com/`;
  static triviaApiUrl = `${this.rootUrl}/api/trivia`;
}

export class TestAppConfig {
  static port = '3000';
  static rootUrl = `http://localhost:${this.port}`;
  static triviaApiUrl = `${this.rootUrl}/api/trivia`;
}