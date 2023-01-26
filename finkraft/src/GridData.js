import React, { useEffect, useState } from "react";
import { US_DATA, VEHICLES_DATA } from "./constants";
const GridData = (props) => {
  const [data, updateData] = useState(null);
  useEffect(() => {
    let url = "";
    if (props.selectedData == "us-data") {
      url = US_DATA;
    } else if (props.selectedData == "vehicle-data") {
      url = VEHICLES_DATA;
    }
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        updateData(res);
      });
  }, [props.selectedData]);

  if (!data) return <div></div>;

  return <div></div>;
};

export default GridData;
