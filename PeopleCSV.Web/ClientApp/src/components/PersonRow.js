import React from "react";

const PersonRow = ({ person }) => {
  const { firstName, lastName, email, age, address } = person;
  return (
<div className="container col-md-3 col-mt-4">
<div className="card">
  <img src="https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{firstName} {lastName}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Age: {age}</li>
    <li className="list-group-item">Email: <br/> {email}</li>
    <li className="list-group-item">Address: {address}</li>
  </ul>
</div>
</div>
);
  }

export default PersonRow;
