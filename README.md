# Introduction to CityBike pre-assignment project for Solita:

Welcome to the pre-assignment for Dev Academy 2023. This is a React project featuring Citybike datasets hosted in Firebase realtime database.

Project is not intended for production use of any kind, but strictly for showing development skills and readiness of the author with the recruitment process in mind.

# Configuration:

You'll need either the Docker image (DockerHub @ mkaario/citybikereactapp:latest) OR an .env file (provided separately) with API key for Google Maps feature to work if you're just cloning the GitHub repo. Otherwise you're all set. If you wish you can make an .env file with the sole content of: REACT_APP_GOOGLE_MAPS_API_KEY="<your personal key here>" and skip the request/email/etc.-part of the file juggling.

Both GitHub (https://github.com/mkaario/citybike) and DockerHub "mkaario/citybikereactapp" are publicly visible for a limited time to ease the accessibility.

Note that the Google Maps React API is a bit finicky with adblockers, so turning those off should fix unnecessary errors.

# How to run the project:

1. A Linux/amd64 Docker image is provided at DockerHub public repository "mkaario/citybikereactapp" with the tag "latest". Running this will open the app at localhost, port 3000.

2. Typical "npm install" after GitHub repo (https://github.com/mkaario/citybike) clone and, "npm start" to boot the local instance up to port 3000.

# How to run tests:

Included in the npm scripts is the good old classic "npm test" which will run you through the tests. Tests have been written using the React combination of Jest and React Testing Library.

Considering the scope of the project and relative time constraints, I have included one unit test (NavigationList.test.js), one integration test (Journeyview.test.js) and one e2e (StationView.test.js) test.

# Technology used:

Backend sits in a realtime database provided by Google Firebase.

Frontend is a React project, with Redux Toolkit chosen for state management and React Router v6 sprinkled on to handle the routes/navigation.

Docker to create a distributable image.

# To do:

Allowing time:

- Data crunching in the selected station part, expand the current function that finds the journeys associated with the station (that logic is alrady there, just extract the wanted specifics as per the assignment's optional list)

- Better mobile styles, right now it's responsive enough but nothing dedicated isn't really there. Implement normal 2/3 breakpoints maybe.

- Fancy loading spinners (veeery important)

- Maybe make a ui-actions slice for displaying possible data fetching errors in the UI.
