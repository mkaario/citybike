# What this is

This is a React example project, based on Solita dev academy preassignment.

# Configuration:

No extra configuration needed unless you want to grab the project and run it locally, in which case you'll want to check the enviromental variables (just a Google API key necessary).

Note that the Google Maps React API is a bit finicky with adblockers, so turning those off should fix unnecessary errors.

# How to run the project:

Project is deployed @ Vercel ( https://citybike.vercel.app/ ) right now for ease of access.

# How to run tests:

Included in the npm scripts is the good old classic "npm test" which will run you through the tests. Tests have been written using the React combination of Jest and React Testing Library.

Considering the scope, the amount of tests is just there to serve as examples, not a representation of full suite of test files by any means.

# Technology used:

Backend data sits in a realtime database provided by Google Firebase.

Frontend is a React project, with Redux Toolkit chosen for state management and React Router v6handling the routes/navigation setup.

# To do:

Allowing time:

- More tests

- Data crunching in the selected station part, expand the current function that finds the journeys associated with the station (that logic is already there, just extract the wanted specifics as per the assignment's optional list)

- optionally rewrite the project as NextJS and instead build proper APIs for backend.

- Better mobile styles, right now it's responsive enough but nothing dedicated isn't really there. Implement normal 2/3 breakpoints maybe.

- UI actions slice for displaying possible data fetching errors and the like.
