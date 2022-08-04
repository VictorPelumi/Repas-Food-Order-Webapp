import React, { Fragment } from "react";
import meal2 from "../../assets/meal2.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Repas</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meal2} alt="A table full of diverse foods!" />
      </div>
    </Fragment>
  );
};

export default Header;
