# Social Network API

  
  ![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)
    

  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Technologies](#technologies)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  With the internet and social media being such a prevalent part of most people's lives, many companies are trying to come up with the next big social media platform. This application 
  is the API for the backend of a social network web app where users can share their thoughts, react to friends' thoughts, and create a list of friends. There is no front end to this 
  application so functionality will be shown through a walkthrough video below using [Insomnia](https://insomnia.rest/). 

  ## Installation
  * Clone or fork repository to local machine 
  * Run ```npm i``` to install dependencies listed in package.json

  ## Usage
  **Walkthrough video:** INSERT VIDEO
  * Run ```npm start``` to start application
  * Create seed data and test routes with [Insomnia](https://insomnia.rest/):

  - Users
    - Create new user: POST /api/users
    - Get all users: GET /api/users
    - Get single user: GET /api/users/:userId
    - Update user: PUT /api/users/:userId
    - Delete user: DELETE /api/user/:userId

  - Thoughts
    - Create new thought: POST /api/thoughts/
    - Get all thoughts: GET /api/thoughts/
    - Get single thought: GET /api/thoughts/:thoughtId
    - Update thought: PUT /api/thoughts/:thoughtId
    - Delete thought: DELETE /api/thoughts/:thoughtId

  - Friends
    - Add new friend to user's friend list: POST /api/users/:userid/friends/:friendId
    - Delete friend from user's friend list: DELETE /api/users/:userid/friends/:friendId

  - Reactions
    - Create a reaction to thought: POST /api/thoughts/:thoughtId/reactions
    - Delete a reaction: DEL /api/thoughts/:thoughtId/reactions/:reactionId

  * Database will be stored in MongoDB: <br>
  
  ![MongoDBCompass](https://user-images.githubusercontent.com/112585959/215868414-7d97e511-0f5c-4dc2-b932-441c86b20cfe.PNG)
  
  - In [MongoDB compass](https://www.mongodb.com/products/compass), connect to ```mongodb://localhost:27017```
  - socialNetwork is the name of the database with the users and thoughts data

  ## Technologies
  * JavaScript
  * MongoDB
  * Mongoose
  * Express.js
  * Node.js
  * Moment.js
  
  ## License 
  This application is covered under the following license:

  MIT License

  ## Contributing
  Building a front end to for this API would be the next step for this application.

  ## Tests
  Test routes using [Insomnia](https://insomnia.rest/) as shown in walkthrough video.

  ## Questions
  If you have any questions, please contact me using the following links:

  - [GitHub: https://github.com/jkim011](https://github.com/jkim011)

  - [Email: jaredkim011@gmail.com](mailto:jaredkim011@gmail.com)
