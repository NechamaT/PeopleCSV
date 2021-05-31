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
     const {data} =await axios.post("api/people/delete")
     setPeople(data);
  }

return(
    <div>
    <div className="row col-md-11 ">
    <div className="col-md-3 offset-md-3">
  </div>
            <button className="btn btn-danger btn-lg" onClick={onDelete}>Delete All</button>
        </div>
     <div className="row">
          {!!people.length &&
            people.map((person) => (
              <PersonRow person={person} key={person.id} />
            ))}
            </div>
            </div>
      
  

)
}

export default Home;
