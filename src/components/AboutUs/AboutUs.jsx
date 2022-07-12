import React from "react";
import { Collapse } from "antd";
import "./AboutUs.css";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const AboutUs = () => {
  return (
    <div className="container">
      <div className="about_cols">
        <div className="about_cols_1">
          <h1 className="about-3_1-title">About Us</h1>
          <img
            id="about_cols_1_img"
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <p id="about_cols_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis aliquam dolorum nam officia iusto quisquam ex enim modi
            ipsam accusantium blanditiis, at a ullam sunt pariatur hic natus
            itaque voluptatem! Velit incidunt asperiores odio corrupti eveniet,
            excepturi reprehenderit amet aliquid ullam eius! Nulla odit facere
            reiciendis corrupti, deserunt non alias. Reiciendis, harum labore
            voluptatum impedit nemo ratione aliquid eaque vel atque. Enim
            accusamus perspiciatis non!!!
          </p>
        </div>
        <div className="about_cols_2">
          <h1 className="about-3_1-title">Faqs</h1>
          <Collapse className="about_cols_2_collapse" accordion>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 4" key="4">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 5" key="5">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 6" key="6">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;