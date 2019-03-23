import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = ({ tabs, selectTabHandler, selectedTab }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
        tabs.map(tab => (
          <Tab
            selectTabHandler={selectTabHandler}
            selectedTab={selectedTab}
            tab={tab}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

Tab.propTypes = {
  tabs: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};
