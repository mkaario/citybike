import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage_wrapper">
        <div className="welcome_message">
          <p className="welcome">
            Welcome to the starting page of a React example and testing project,
            based on Citybike assignment from 2023.
          </p>
          <p>
            By selecting an option from above you can view both travelled
            journeys as well as available stations. Browse away!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
