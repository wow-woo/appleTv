import React, { useState } from "react";
import Column from "../wrappers/Column";
import Row from "../wrappers/Row";
import AppCard from "../cards/AppCard";
import { apps1, apps2, apps3, apps4, apps5 } from "../../data";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Row className="highlight-row">
        <div className="centered-container">
          {apps1.map((app) => {
            return (
              <Column key={app.caption} className="col-5">
                <AppCard
                  img={app.img}
                  onChange={() => {}}
                  type={app.type}
                  caption={app.caption}
                />
              </Column>
            );
          })}
        </div>
      </Row>
    </div>
  );
};

export default HomePage;
