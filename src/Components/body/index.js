// import React from "react";

// const Body = () => {
//   return <div
//   style={{

//  float:"left",
//   }}>

//     <h1>Program Manager</h1>
//      <hr size="4" width="40%" color="black"></hr>
//     <br/>
//     <div class="spacing">
//     <h4>Fitness Nutrition Journey</h4>
//     <hr size="4" width="500%" color="black"></hr>

//     </div>

//   </div>;
// };

// export default Body;

import React, { useState } from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import { BsChatSquare } from "react-icons/bs";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  const cards = [
    { name: "0", lname: "10", isActive: false, logo: 1 },
    { name: "1", lname: "11", isActive: false },
    { name: "2", lname: "12", isActive: true },
    { name: "3", lname: "13", isActive: true },
    { name: "4", lname: "14", isActive: false },
    { name: "5", lname: "15", isActive: false },
  ];

  return (
    <table>
      <tr>
        <th>HELLO</th>
        <th>HELLO</th>
        <th>HELLO</th>
      </tr>
      <tr>
        {cards.map((i) => (
          <td>
            <Card kunal={i} />
          </td>
        ))}
      </tr>
    </table>
  );
}

function Card(props) {
  // const {} = props;
  console.log(props);
  const [isActive, setIsActive] = useState(props.kunal.isActive);

  return (
    <div
      style={{ height: "10vh", width: "100%", backgroundColor: "palegreen" }}
    >
      {props.kunal.name} - {props.kunal.lname}
      {isActive ? (
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setIsActive(false)}
        >
          Active
        </button>
      ) : (
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setIsActive(true)}
        >
          Deactive
        </button>
      )}
      {!isActive && (
        // <div
        //   style={{
        //     height: "20vh",
        //     width: "20vh",
        //     backgroundColor: "orange",
        //     borderRadius: "50%",
        //   }}
        // ></div>
        <span>{props.kunal.logo}</span>
      )}
      {props.kunal.logo === 3 && <BsChatSquare />}
    </div>
  );
}

export default Table;
