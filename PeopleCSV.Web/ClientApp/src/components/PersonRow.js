import React from "react";

const PersonRow = ({ person }) => {
  const { firstName, lastName, email, age, address } = person;
  return (

<div className="card mb-3" style={{maxWidth:540}}>
<div className="row g-0">
  <div className="col-md-4">
    <img src='https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png'/>
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">{firstName} {lastName}</h5>
      <p className="card-text">Age: {age}</p>
      <p className="card-text">Address: {address}</p>
      <p className="card-text">Email: {email}</p>
    </div>
  </div>
</div>
</div>
  );
  }

export default PersonRow;
