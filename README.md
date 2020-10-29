<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

# Tandem Apprentice Challenge Info Below

<i>See pdf in data folder for full information.</i>

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

## Goal

Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.

Use creative license in terms of how you want us to see this game. 

At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score. 

It could be a user interface (UI), command-line-tool, etc. Feel free to use whatever framework or language you are comfortable with.

We would also like to see a README which includes any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome.

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

### TODO - Main Goals
- [ ] Model Data
- [ ] Create User Stories
- [ ] Create Views
- [ ] Complete User Stories

### TODO - User Stories
- [ ] A user can view one question at a time during a round of trivia
- [ ] A user can choose one answer at a time
- [ ] A user can view the correct answer to a question after submitting an answer


### TODO - Readme Goals
- [ ] Add a installation/starting section when finished
- [ ] Add testing shield to see if tests pass at top of readme
- [ ] Add Heroku hosting and link to the herkoku server

### TODO - Stretch goals
- [ ] Figure out how to do testing for SSR NestJS projects
  - Research front end testing
  - Unit test simple functions