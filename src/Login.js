
import React from "react";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Login=()=>{
    return (
        <div style={{background: "linear-gradient(#e66465, #9198e5)"}} >
            
        <Card sx={{ minWidth: 500 }}>
      <CardContent style={{justifyContent:"center", background: "linear-gradient(skyblue,white)"}}>
      <h1 style={{textAlign:"center", fontSize:"20px"}}>Login</h1>
      
      <div style={{textAlign:"center"}}>
      <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" /><br></br></div>
     
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
         
        <Button variant="contained" size="small" >Login</Button>
      </CardActions>

    </Card>

    <Tooltip title="Register now" enterDelay={500} leaveDelay={200}>
        <div style={{textAlign:"center"}}>
      <Button >Register</Button></div>
    </Tooltip>
   
       
        </div>
      );
}
export default Login