import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Signup=()=>{
    return (
        <div style={{background: "linear-gradient(#e66465, #9198e5)"}} >
            
        <Card sx={{ minWidth: 300 }}>
      <CardContent style={{justifyContent:"center", background: "linear-gradient(skyblue,white)"}}>
      <h1 style={{textAlign:"center", fontSize:"20px"}}>Register Your fields</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
         
        <Button variant="contained" size="small" >Signup</Button>
      </CardActions>
    </Card>
       
        </div>
      );
}
export default Signup;