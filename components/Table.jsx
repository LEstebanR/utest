import styled from "styled-components";

const Table = styled.table`
  width: 50%;
  height: 70%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0px 0px 5px #006efa;
  
  th {
    text-align: left;
    padding: 10px;
    border: 1px solid black;
    background-color: #0045a5;
    color: white;

  }
  td {
    padding: 10px;
    border: 1px solid black;
    font-weight: lighter
  }
`;


export default Table;