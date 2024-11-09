import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = ({business}) => {
  return (
    <div className={styles.BusinessList}>
      {Object.keys(business).map(busines => <Business key={busines} business={business[busines]}/> )}
    </div>
  );
};

export default BusinessList;
