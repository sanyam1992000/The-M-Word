import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./BCard.css";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function BCard({ title, actions }) {
  const classes = useStyles();

  return (
    <Link to="#" className="link">
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
        />
        <CardContent className={classes.cardContent}>
          <Typography>{title}</Typography>
        </CardContent>
        <CardActions>
          {actions.map((action) => (
            <Button size="small" color="primary">
              {action}
            </Button>
          ))}
        </CardActions>
      </Card>
    </Link>
  );
}

export default BCard;
