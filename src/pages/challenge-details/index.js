import React from "react";
import { graphql } from "gatsby";
import Page from "../../components/Page";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withRoot from "../../utils/withRoot";
import testImage from "../../img/test-image.jpg";
import "./index.css";

const ChallengeDetails = props => {
  return (
    <Page>
      <Grid
        container
        direction="row"
        spacing={24}
        alignItems="stretch"
      >
        <Grid item xs={3} >
          <Paper>
            <img className="company-image" alt="complex" src={testImage} />
          </Paper>
        </Grid>
        <Grid item xs={9} alignItems="stretch">
          <Paper className="company-name">
            <Typography variant="h2" component="h2" align="center">
              Company Name
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} alignContent="center">
          <Paper className="description-center">
           <Typography variant="h4" component="h4"> 
              test test test test test test test test test test test test test test test test test test test test test
              test test test test test test test test test test test test test test 
            </Typography>
          </Paper>
        </Grid>
        <Grid container xs={12} justify="center">
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              Submit Response  
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  )
}

export default withRoot(ChallengeDetails)

