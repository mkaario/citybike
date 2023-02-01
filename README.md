# Introduction to CityBike pre-assignment project for Solita:

Welcome to the pre-assignment for Dev Academy 2023. This is a React project featuring Citybike datasets hosted in Firebase realtime database.

Project is not intended for production use of any kind, but strictly for showing development skills and readiness of the author with the recruitment process in mind.

# Configuration:

You'll need either the Docker image or an .env file (provided separately) with API key for Google Maps feature to work. Otherwise you're all set.

# How to run the project:

Npm script will get you there, "npm start" to boot the local instance up to port 3000 as per usual.

# How to run tests:

Included in the npm scripts is the good old classic "npm test" which will run you through the tests. Tests have been written using the React combination of Jest and React Testing Library.

Considering the scope of the project and relative time constraints, I have included one unit test (NavigationList.test.js), one integration test (Journeyview.test.js) and one e2e (StationView.test.js) test.

# Technology used: 

Backend sits in a realtime database provided by Google Firebase.

Frontend is a React project, with Redux Toolkit chosen for state management and React Router v6 sprinkled on to handle the routes/navigation.

Provided for your convenience is also a Docker image which you can download from here:

# To do:

Allowing time:

- Data crunching in the selected station part, expand the current function that finds the journeys associated with the station (that logic is alrady there, just extract the wanted specifics as per the assignment's optional list)

- Better mobile styles, right now it's responsive enough but nothing dedicated isn't really there. Implement normal 2/3 breakpoints maybe.

- Fancy loading spinners (veeery important)

- Maybe make a ui-actions slice for displaying possible data fetching errors in the UI.
