# Tandem Apprentice Challenge

<p align="center">Trivia game built with <a href="https://nestjs.com/" target="blank">NestJS</a> with server generated routes combined with a simple API for easy trivia data retrieval.  Uses <a href="https://bulma.io/" target="blank">Bulma</a> for CSS styling</p>

**Note:** <i>See pdf in src/data folder for full information regarding the challenge.  Most information is included below</i>

## Table of Contents

* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Running the app](#running-the-app)
* [Running tests](#running-tests)
* [Challenge Information](#challenge-information)
* [Project Todo List](#project-todo-list)

## Getting Started

### Prerequisites

* <a href="https://nodejs.org/en/" target="blank">Node.js</a> version 14 or greater

### Installation

* Clone project and cd into project folder
```sh
npm install
```

## Running the app

```sh
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# visit localhost:3000 in your web browser after server has started
```

## Running tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Challenge Information
---

## Goal

**Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.**

Use creative license in terms of how you want us to see this game. 

**At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score.** 

It could be a user interface (UI), command-line-tool, etc. Feel free to use whatever framework or language you are comfortable with.

We would also like to see a README which includes any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome.

## How To Submit

The application window for our 2021 apprenticeship will close <b>Sunday,
November 1 11:59PM CST</b>. 

Please submit your challenge by <b>11:59PM CST on
Sunday, November 1</b>. 

Please include a link to your submission in your application (we do have a
question for this). 

You are welcome to put your code challenge submission in
Github, Bitbucket, or a public source control service of your choosing. 

Please exclude any binaries or dependencies that can be built or resolved via a
package manager (remember to .gitignore those node_modules!). 

Itʼs best to use as few external dependencies as possible to keep the setup simple.

<b>Your submission must include instructions for how to run your code.</b>

<b>You must also list any system dependencies (e.g. Ruby 2.3, Erlang runtime, JDK8, etc).</b>

Your README is a great place to put this information.

## Assumptions
- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a
JSON file.

## Acceptance Criteria
- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

## Additional Considerations
Tandem's first core value is "Ship Quality Work." 

We love unit tests and automated test coverage in our projects.

Well-tested code provides documentation for other developers and prevents
future regressions (bugs introduced after a change) among other
things. 

If you would like a challenge, consider adding unit tests
to display your commitment to quality code.

---
### Project Todo List
---

#### Main Goals
- [x] User can view all questions
- [x] User can view the answer choices
- [x] User can view the correct answer on submit
- [x] User can view their score
- [x] User can view one question at a time during a round of trivia
- [x] User can choose one answer at a time
- [x] User can view the correct answer to a question after submitting an answer

#### Planning
- [x] Model Data
- [x] Create User Stories (from acceptance criteria, etc)
- [x] Create Views

#### Extras
- [ ] Add Heroku hosting and link to the herkoku server
- [ ] Add testing shield to see if tests pass at top of readme if possible
- [ ] Figure out how to do testing for SSR NestJS projects
  - Unit test simple functions/e2e view testing
  - See spec files in controllers/services
  - Research testing front end
- [ ] Add Multiple users
  - CRUD for users
    - login
    - logout
    - keep track of games played
    - start/stop trivia round, ie. give up on a round if they want
- [ ] Add different difficulty levels of questions, ie: easy, medium, hard