import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { AuthCheck } from "reactfire"; // New Import
import { Suspense } from "react";

const useStyles = makeStyles({
  root: {
    padding: "0",
    margin: "0",
  },
  navbar_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: "0 0 0 0.45em",
  },
  logo_a: {
    color: "rgb(28,24,22)",
  },
  logo_navigation: {
    listStyle: "none",
    textTransform: "uppercase",
    textDecoration: "none",
  },
  navigation: {
    display: "flex",
  },
  nav_a: {
    display: "block",
    padding: "1em",
    color: "black",
  },
});

export const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <nav>
        <div className={classes.navbar_container}>
          <h1 className={`${classes.logo} `}>
            <Link
              to="#"
              className={`${classes.logo_a} ${classes.logo_navigation}`}
            >
              Heroes
            </Link>
          </h1>
          <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
            <li>
              <Link to="/" className={classes.nav_a}>
                Home
              </Link>
            </li>
            <Suspense fallback={"loading..."}>
              <AuthCheck
                fallback={
                  <li>
                    <Link to="/signin" className={classes.nav_a}>
                      Sign In
                    </Link>
                  </li>
                }
              >
                <li>
                  <Link to="/addHero" className={classes.nav_a}>
                    Add Hero
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className={classes.nav_a}>
                    Profile
                  </Link>
                </li>
              </AuthCheck>
            </Suspense>
          </ul>
        </div>
      </nav>
    </div>
  );
};
