export class AppConfig {
  static port = '3000';
  static rootUrl = `http://localhost:${this.port}`;
  static triviaApiUrl = `${this.rootUrl}/trivia/api`;
}