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
    <div className="container" style={{marginTop: 20}}>
        <div className="row col-md-13" style={{alignContent:"center" }}>
            <button className="btn btn-danger btn-block" onClick={onDelete}>Delete All</button>
        </div>
     
          {!!people.length &&
            people.map((person) => (
              <PersonRow person={person} key={person.id} />
            ))}
      
    </div>
  </div>
)
}

export default Home;
