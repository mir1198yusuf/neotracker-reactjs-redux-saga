# Near Earth Objects Tracker - built in React.js Redux-Saga - Using NASA NeoWs API

*I created this simple application while learning redux for state management; redux-saga for side-effects in React.js*

*I was comfortable in React.js but needed practice in Redux and Redux-Saga, like how to make Async calls. Being interested in Space stuff, I decided to use NASA public apis and built a self-project for demo/learning/fun purpose.*

## Brief description of project:

- This application is used to list the Near Earth Objects (NEOs) - also called asteroids which will be having their closest approach to Earth on selected date, while they are in revolution around the Sun. Other useful details like closest approach date time, Earth miss distance, estimated diameter, is hazardous, etc are also displayed.

## NASA NeoWs API :

- NASA Near Earth Object Web Service is a RESTful web service for near earth Asteroid information. See [here](https://api.nasa.gov/) 
- I have used this API to get the list of Asteroids having their closest approach date to Earth for the user-selected date.
- Since I have made this webapp for demo/learning purpose, I did not generate an API key, instead I used the available DEMO_KEY which also have a decent limitation; more than required for demo/learning purpose.
- DEMO_KEY has hourly limit of 30 request per IP address & daily limit of 50 requests per IP address. (at the time of writing this)

## Functionalities included in project:

1. By default, NEOs list will be fetched for present date.
2. User can also select new date to list of NEOs for that date, along with many useful information.
3. User can click on each NEO card to see more detailed information about each asteroid.


## Tools and technologies :

- React.js - JavaScript library for building UI
- HTML - for building structure of web pages
- CSS - for styling web pages
- bootstrap - powerful front-end framework for developing responsive, mobile-first projects on web
- react-bootstrap - Bootstrap components built in React
- redux - predictable state container for JavaScript apps
- react-redux - React bindings for redux
- redux-saga - library to make side-effects (async fetching,etc) easier in redux app
- react-loader-advanced - React Loader component for displaying loading indications
- axios - promise-based HTTP client for JS
- gh-pages - npm development dependency for hosting app on Github Pages
- GitHub Pages Hosting - for deployment of React.js app
- Sublime Text Editor - for writing code
- Git - for version control


## Demo live site

The project is live at [site](https://bit.ly/neotracker_live)


