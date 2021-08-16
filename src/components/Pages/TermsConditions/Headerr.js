import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const Headerr = () => {
  const useStyles = makeStyles((theme) => ({
    paperOne: {
      height: "45vh",
      backgroundColor: "yellow",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      background: "linear-gradient(45deg, #e75788 30%, #6f42c1 90%)",
      [theme.breakpoints.down("md")]: {
        backgroundColor: "blue",
        height: "40vh",
      },

      [theme.breakpoints.down("sm")]: {
        backgroundColor: "orange",
        height: "40vh",
      },

      [theme.breakpoints.down("xs")]: {
        height: "40vh",
      },
    },
    typographyHeading: {
      fontSize: "5em",

      [theme.breakpoints.down("md")]: {
        fontSize: "4em",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "3em",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "3em",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paperOne}>
        <Typography className={classes.typographyHeading} align="center">
          Terms and Conditions
        </Typography>
      </Paper>
    </div>
  );
};

export default Headerr;
