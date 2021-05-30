import axios from "axios";
import { data } from "jquery";
import React, { useState} from "react";

const Generate = () =>{
    const [amount, setAmount] = useState(0)

 const onTextChange = e =>{
        setAmount(e.target.value);
        console.log(amount);
    }

const onSubmit = async e =>{

    const {data} = await axios.post(`/api/file/generate/${amount}`)
    .then(Response =>window.location = (`api/file/generate/${amount}`))
}




return (
  <div className="container" style={{ margintop: 150 }}>
      <div className="row" style={{justifyContent: "center", }}>
        <input type="text" onChange={onTextChange} className="form-control-lg" name="amount" placeholder="Amount" />
      
        <div className="col-md-4">
          <button className="btn btn-primary btn-lg" onClick={onSubmit}>Generate</button>
       </div>
      </div>
    </div>
  
 
);
}
export default Generate 
