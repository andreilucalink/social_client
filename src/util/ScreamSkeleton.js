import React, { Fragment } from "react";
import NoImg from "../images/no-image.png";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  ...theme.spreadThis,
  card: {
    marginLeft: 4,
    display: "flex",
    marginBottom: 20
  },
  cardContent: {
    marginTop: 5,
    width: "100%",
    flexDirection: "column",
    padding: 30
  },
  cover: {
    minWidth: 200,
    objectFit: "cover"
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 10
  },
  date: {
    height: 12,
    width: 90,
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0, 0.3)"
  },
  fullLine: {
    height: 13,
    width: "95%",
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0, 0.6)"
  },
  halfLine: {
    height: 12,
    width: "50%",
    marginBottom: 10,
    backgroundColor: theme.palette.primary.main
  }
});

const ScreamSkeleton = props => {
  const { classes } = props;
  const content = Array.from({ length: 5 }).map((item, index) => (
    <Card key={index} className={classes.card}>
      <CardMedia className={classes.cover} image={NoImg} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
        <div className={classes.halfLine} />
      </CardContent>
    </Card>
  ));
  return <Fragment>{content}</Fragment>;
};

ScreamSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSkeleton);
