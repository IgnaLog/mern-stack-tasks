# MERN Stack Tasks App

This application belongs to the set of tutorials made with React.

Made with class components.

This application works back-end and front-end with the technologies:

***M*** &#8594; MongoDB
***E*** &#8594; Express
***R*** &#8594; React
***N*** &#8594; NodeJS

It is responsible for recording a list of tasks with their title and description. Which you can consult in a table, as well as modify or delete them. By using REST to communicate with the server and the [MongoDB](https://www.mongodb.com/try/download/community).

We use [Google's Materialize](https://materializecss.com/) library through its CDN to style the application.

![Alt Text](https://media.giphy.com/media/RUMCxGuPGoTvXydwWx/giphy.gif)

This project was bootstrapped with [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) to interpret code.
## Node Modules

This app uses some modules like:

    npm i --save-dev @babel/plugin-transform-runtime -D
    npm i -D @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react babel-loader
    npm i react react-dom -D
    npm i webpack-cli -D  
    npm i webpack -D 
    npm i express   

To load them just use:

### `npm install`

They will be loaded from package.json dependencies.

## Available Scripts

In the project directory, you must run in a new terminal:

### `npm run dev`

This command starts the backend of our server. Initializes the MongoDB database (With Mongoose library). Listen for REST requests from clients through port 8080. (Using the Express and Morgan library for console alerts).

In another terminal execute:

### `npm run webpack`

Builds the app to the `public` folder.\
It correctly bundles React and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). 
 


