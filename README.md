# Food Donation Management System

A web application which is useful for management of food donation and collection activities.  
[View Demo](https://food-aid.onrender.com/)

<img src="https://user-images.githubusercontent.com/86913048/226953269-e6ae0484-ab78-4c77-b199-aef793502d8d.png" width="70%">

## Table of Contents

- [Features](#features)
- [Technologies used](#technologies-used)
- [npm packages used](#npm-packages-used)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Useful Links](#useful-links)
- [Contact](#contact)

## Features

- The system consists of three types of users: admins, donors and agents.
- Admins: They control all the activities and accept/reject donations and select agents.
- Donors: They are the driving users of the application who donate food.
- Agents: They are responsible for collecting food from homes of food donors.
- Each user should have an account.
- Every user also have a dashboard where they can view several things in short summary.
- The application provides signup, login and logout functionalities.

### Donor Features

- Donors make the donation request for food with basic details.
- Donors' donation requests can be accepted or rejected and the status can be easily tracked by them.
- Donors can view their current incomplete donations (if any).
- Donors can also view all their past donations.
- Donors can update their profile.

### Admin Features

- Admins receive all the requests made by donors.
- Admins can accept or reject the donation requests depending upon the details provided by a donor.
- If accepted, admins can assign an agent to a donation for collecting donation from the donor's home.
- Admins can view all the pending donations along with status.
- Admins can view all the donations that they have received.
- Admins can also view all the agents in the application.
- Admins can update their profile.

### Agent Features

- Agents will receive notifications from admins to collect food from donor's homes.
- Agents can mark their collection upon collection of food from donor's home.
- Agents can also view all those food donations which have been collected by them previously.
- Agents can update their profile.

## Technologies used

- HTML
- CSS
- Bootstrap
- Javascript
- Node.js
- Express.js
- Mongodb
- ejs

## npm packages used

- express
- ejs
- express-ejs-layouts
- mongoose
- express-session
- bcryptjs
- passport
- passport-local
- connect-flash
- method-override
- dotenv

## Prerequisites

For running the application:

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies
   ```sh
   npm install
   ```
2. Create a file named ".env" and enter the following credentials:
   ```js
   MONGO_URI = yourmongouri;
   ```
3. Run the web application
   ```sh
   npm start
   ```
4. Open http://localhost:5000
5. You need to first signup and then login to run the application.

## Useful Links

- Demo: https://food-aid-aayush.herokuapp.com/
- Github Repo: https://github.com/aayush301/Food-donation-management-system
- Nodejs download: https://nodejs.org/
- VS Code download: https://code.visualstudio.com/
- Tutorials: https://www.w3schools.com/
- npmjs docs: https://docs.npmjs.com/
- Expressjs docs: https://expressjs.com/
- Bootstrap docs: https://getbootstrap.com/docs/5.1/getting-started/introduction/
- Mongoosejs docs: https://mongoosejs.com/docs/index.html
- Mongodb atlas: https://www.mongodb.com/cloud/atlas/register
- Mongodb docs: https://docs.mongodb.com/manual/introduction/
- Nodemailer docs: https://nodemailer.com/
- Github docs: https://docs.github.com/en/get-started/quickstart/hello-world
- Git cheatsheet: https://education.github.com/git-cheat-sheet-education.pdf
- VS Code keyboard shortcuts: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

## Contact

- Email: aayush5521186@gmail.com
- Linkedin: https://www.linkedin.com/in/aayush12/
