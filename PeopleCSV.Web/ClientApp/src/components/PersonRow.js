import React from "react";

const PersonRow = ({ person }) => {
  const { firstName, lastName, email, age, address, gender } = person;
  const female = gender === "female";
  return (
<div className="container col-md-3 mt-3">
<div className="card">
  
  
  {gender === 'Male' && <img  className="card-img-top" src="https://www.wigtontown.com/wp-content/uploads/2018/11/EmptyProfile-M.jpg" />}
   {gender == 'Female' && <img  className="card-img-top" src="http://www.hilaryflorekpr.co.uk/wp-content/uploads/2017/08/Our-People-Blank-Female.gif"/>}
  <div className="card-body">
    <h5 className="card-title">{firstName} {lastName}</h5>
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item">Age: {age}</li>
    <li className="list-group-item"> 
    <a href={email}>{email}</a> 
    </li>
    <li className="list-group-item" Tooltip title={address}>{address.substring(0, 25)}...</li>
  </ul>
</div>
</div>
);
  }

export default PersonRow;
