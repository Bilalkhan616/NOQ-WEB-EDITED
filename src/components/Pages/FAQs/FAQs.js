import React from "react";
import Header from "./Headerrr";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    paddingLeft: theme.spacing(24),
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(20),
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(12),
    },

    [theme.breakpoints.down("xs")]: {
      width: '60%',
      paddingLeft: theme.spacing(9),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "white",
  },
  acoordionLines: {
    backgroundColor: "#e75788",
    marginBottom: "25px",
  },
  contentTypographys: {
    //for content typography ..
  },
}));

const FAQs = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div>
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 6</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 7</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 8</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 9</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 10</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 11</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acoordionLines}
            >
              <Typography className={classes.heading}>FAQs 12</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.contentTypographys}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
