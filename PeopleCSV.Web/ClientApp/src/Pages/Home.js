import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonRow from '../components/PersonRow';

const Home = () =>{
    const [people, setPeople] = useState([]);

    
  useEffect(() => {
    const getPeople = async () => {
      const { data } = await axios.get("api/people/getpeople");
      setPeople(data);
    };

    getPeople();
  }, []);

  const onDelete =async () =>{
      await axios.post("api/people/delete")
  }

return(
    <div>
    <div className="container" style={{marginTop: 20}}>
        <div className="row col-md-13" style={{alignContent:"center" }}>
            <button className="btn btn-danger btn-block" onClick={onDelete}>Delete All</button>
        </div>
      <table className="table table-hover table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {!!people.length &&
            people.map((person) => (
              <PersonRow person={person} key={person.id} />
            ))}
        </tbody>
      </table>
    </div>
  </div>
)
}

export default Home;
