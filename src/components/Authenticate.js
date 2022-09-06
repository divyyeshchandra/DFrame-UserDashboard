import { useHistory } from 'react-router-dom';
import { loginUser } from '../services/magic';
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FormControl, FormControlLabel, FormGroup, Checkbox, OutlinedInput} from "@mui/material";
import styles from "./Authenticate.module.css";
import Navbar from './Navbar/Navbar';
import dFrameHero from "../assets/Images/d-frame-hero.png";

const Authenticate = ({ setStatus }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(null);
  const [checkedTC, setCheckedTC] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!checkedTC) {
      alert("Please accept the Terms and conditions.");
      return;
    }
    try {
      if (!email) {
      setLoading(false);
      setError('Email is Invalid');
      alert({error})
      return; 
    }
    try {
      await loginUser(email, setStatus);
      setLoading(false);
      history.replace('/Profile');
    } catch (error) {
      setError('Unable to log in');
      console.error(error);
    }
    } catch {
      // Handle errors if required!
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckedTC(!checkedTC);
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <Navbar />
      <Stack
        spacing={2}
        direction="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className={styles.blur1}></div>
        <div className={styles.blur2}></div>
        <div className={styles.hero}>
          <img
            src={dFrameHero}
            alt="Dframe logo"
            style={{ height: "35rem", width: "37rem" }}
          />
          <div
            className="container"
            style={{
              height: "8rem",
              width: "22rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span className={styles.formHeading}>Create Your Account</span>

            <FormControl sx={{ color: "white", width: "100%" }}>
              <OutlinedInput
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                sx={{ color: "white", border: "1px solid white" }}
              />
            </FormControl>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#49c0f3",
                      "&.Mui-checked": {
                        color: "#49c0f3",
                      },
                    }}
                    onChange={handleCheckboxChange}
                  />
                }
                label= "I agree to all the Terms and Conditions."
                style={{ color: "white" }}
              />
            </FormGroup>
            <Button variant="contained" onClick={handleSubmit}>
              Sign In
            </Button>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Authenticate;
