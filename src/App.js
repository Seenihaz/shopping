
import './App.css';
import TextField from '@mui/material/TextField';
import Signup from './signup';
import Login from './Login'
function App(){
  return(
    <div className="container"  >
      {/* <form>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
          
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password"></input>
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" name="copassword" placeholder="Enter password"></input>
          </div>
        </div>
      </form> */}
     
      <Signup />
      
      
    </div>
  )
}

export default App;
