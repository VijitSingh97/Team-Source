import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../utils/withRoot";
import Chip from "@material-ui/core/Chip";
import { Robot } from "mdi-material-ui";
import "./index.css";
import firebase from "firebase";
import capitalFactoryLogo from '../images/Capital Factory Logo.png'


const styles = theme => ({
    root: {
      backgroundColor: "#2F3136",
    },
  });
class Home extends React.Component{
    async componentDidMount() {
      if(!firebase.apps.length){
        // Initialize Firebase
        var config = {
          apiKey: "AIzaSyAqFMUVjL_ENCC5H3rYYqqjak2JAO2UHPY",
          authDomain: "team-source.firebaseapp.com",
          databaseURL: "https://team-source.firebaseio.com",
          projectId: "team-source",
          storageBucket: "team-source.appspot.com",
          messagingSenderId: "79140289819"
        };        
  
        firebase.initializeApp(config);
      }
      
      const snapshot = await firebase.firestore().collection('Challenges').get()
      const challenges = snapshot.docs.map(doc=> doc.data());
      console.log("challenges");
      console.log(challenges);

      



      // var getDoc = challenges.get()
      //   .then(doc => {
      //     if (!doc.exists) {
      //       console.log('No such document!');
      //     } else {
      //       console.log('Document data:', doc.data());
      //     }
      //   })
      //   .catch(err => {
      //     console.log('Error getting document', err);
      //   });
    }
    
 

    
    render(props) {
      const products = this.props.data.allMarkdownRemark.edges;
      return (
        <Page title="TeamSource">
          <SEO title="Home">
            <meta
              name="description"
              content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
            />
          </SEO>

        { <HomeFeatures /> }
        <Grid
          spacing={24}
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item xs={12} md={10} style={{ minHeight: "523px" }}>
            <Card
              title="Capital Factory"
              avatar={
                <Avatar>
                  <img src={capitalFactoryLogo} style={{height: '40px', width: '40px'}} />
                </Avatar>
              }
              action={
                <>
                </>
              }
            >
            </Card>
          </Grid>
        </Page>
      )
    }
  };

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
            image
          }
          excerpt
        }
      }
    }
  }
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
