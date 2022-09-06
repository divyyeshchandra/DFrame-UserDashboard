import React from "react";
import styles from "./Navbar.module.css";
import dFrameLogo from "../../assets/Images/d-frame-logo.png";
import Button from "@mui/material/Button";

const Navbar = (props) => {
  return (
    /* Creating a new div with the className of container and  logoContainer. */
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        {/*Creating a new img element with the src of dFrameLogo and the alt of logo. */}
        <img src={dFrameLogo} alt="logo" className={styles.logo} />
        {/*Creating a new span with the className of name.*/}
        <span className={styles.name}>D Frame</span>
      </div>
      {/*Adding  an onClick event to the button with the signOut function.*/}
      {props.signOut && (
        /*Creating a new button with the className of signOutButton and the variant of contained. */
        <Button
          className={styles.signOutButton}
          variant="contained"
          onClick={props.signOut}
          //Adding a marginRight of 2rem to the button
          sx={{ marginRight: "2rem" }}
        >
          Sign Out
        </Button>
      )}
    </div>
  );
};

export default Navbar;
