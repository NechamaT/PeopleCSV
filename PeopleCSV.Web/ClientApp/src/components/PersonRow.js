import React from "react";

const PersonRow = ({ person }) => {
  const { firstName, lastName, email, age, address } = person;
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>{email} </td>
    </tr>
  );
};

export default PersonRow;
