import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import DeleteOutlineIcon from '@mui/icons-material/Delete';







const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

const addData=()=>{
  setData([...data, {name,email}]);
  setName("");
  setEmail("");
}

const removeItem=(index)=>{
  let arr =data;
  arr.splice(index,1)
  setData([...arr]);

}

  return (
    <div>
      
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(e)=>setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{background:"white",border:"2px solid black",borderRadius:"12px"}}
          />
          <TextField
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{background:"white",border:"2px solid black",borderRadius:"12px"}}
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/*Data*/}
      <div className="data">
        <div className="data_val"> 
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
          </div>
        {
          data.map((element,index)=>{
            return(  <div key={index} className="data_val"> 
     
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Button onClick={()=>removeItem(index)} style={{background:"rgb(160, 11, 23)",color:"black",height:"40px",margin:"35px 35px",}}  variant="outlined" color="error">
            <DeleteOutlineIcon/>
        </Button>
            
          </div>)
          })
        }


      </div>
    </div>
  );
};

export default About;
