import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./style/style";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/Posts";

function App() {
  const [currentId, setCurrentId] = useState(0);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="fixed" color="inherit">
        <Typography className={classes.heading} variant="h4" align="left">
          Yaddein
        </Typography>
      </AppBar>

      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          // direction="column-reverse"
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
