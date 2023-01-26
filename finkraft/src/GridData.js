import React, { useEffect, useState } from "react";
import { US_DATA, VEHICLES_DATA } from "./constants";
import Table from "react-bootstrap/Table";
// import Pagination from "react-bootstrap/Pagination";

// import Button from "react-bootstrap/Button";
const GridData = (props) => {
  // const [totalData, updateTotalData] = useState(null);
  const [data, updateData] = useState(null);
  const [sortData, updateSortData] = useState({});
  // const [activePage, updateActivePage] = useState(1);
  useEffect(() => {
    let url = "";
    if (props.selectedData === "us-data") {
      url = US_DATA;
    } else if (props.selectedData === "vehicle-data") {
      url = VEHICLES_DATA;
    }
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        if (props.selectedData === "us-data") res = res.data;
        // res.forEach((element, ind) => {
        //   element["id"] = ind;
        // });
        updateData(res);
      });
  }, []);
  useEffect(() => {
    if (sortData.type && sortData.column && data.length > 0) {
      let sortedData = data.sort((a, b) => {
        if (sortData.type === "asc")
          return a[sortData.column] < b[sortData.column] ? -1 : 1;
        else if (sortData.type === "desc")
          return b[sortData.column] < a[sortData.column] ? -1 : 1;
      });
      updateData(sortedData);
    }
  }, [sortData.type, sortData.column]);
  function handleButton(col, typ) {
    updateSortData({ column: col, type: typ });
  }
  if (!data) return <div></div>;
  if (data.length === 0) return <h1>no data found</h1>;
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {Object.keys(data[0]).map((item) => (
              <th>
                {item}
                <button onClick={() => handleButton(item, "asc")}>asc</button>
                <button onClick={() => handleButton(item, "desc")}>desc</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item["id"]}>
              {Object.values(item).map((d) => (
                <td>{d}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GridData;
