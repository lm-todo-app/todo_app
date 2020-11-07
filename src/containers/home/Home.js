import React from "react";
import Box from "@material-ui/core/Box";
import { DefaultNavbar } from "../../stories/Navbar.stories.js";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";

const cardStyle = {
  height: "40vh",
};

// TODO: Add the box that is below the navbar to navbar component.
// TODO: Move the cards to a new component and story.
const Home = () => (
  <Box>
    <DefaultNavbar />
    <Box height={80} />
    <Container>
      <Grid
        row
        container
        alignItems="center"
        spacing={10}
        justify="space-evenly"
      >
        <Grid item sm={4} xs={12}>
          <Card elevation={3} style={cardStyle}>
            <CardHeader title="Hello World" />
          </Card>
        </Grid>
        <Grid item sm={4} xs={12} alignContent="center">
          <Card elevation={3} style={cardStyle}>
            <CardHeader title="Hello World" />
          </Card>
        </Grid>
        <Grid item sm={4} xs={12} alignItems="center">
          <Card elevation={3} style={cardStyle}>
            <CardHeader title="Hello World" />
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Home;
