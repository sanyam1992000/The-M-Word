import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Base from "../../components/Base/Base";
import BCard from "../../components/cards/BCard";
import HeroSection from "../../components/hero/HeroSection";
import "./Home.css";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const action = ["view"];

const useStyle = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

function Home() {
  const classes = useStyle();
  return (
    <Base>
      <HeroSection />
      <div className="cards">
        <h1>Trending</h1>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <BCard
                  title="This is a media card. You can use this section to describe the content."
                  actions={action}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Base>
  );
}

export default Home;
