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
    constructor(props) {
      super(props);
      this.state = {
        challenges: []
      }
    }
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
      let challenges = snapshot.docs.map(doc=> { return {...doc.data(), ...{id: doc.id, benchMarks: []}}});

      challenges.forEach(async(challenge) => {
        let currentSnapshot = await firebase.firestore().collection("Challenges/"+challenge.id+"/Benchmark").get();
        let benchMarks = currentSnapshot.docs.map(doc => { return {...doc.data(), ...{id: doc.id}}});
        let updatedChallenges = this.state.challenges.map((currentChallenge) => {
          if(challenge.id === currentChallenge.id){
            return {...currentChallenge, ...{benchMarks}}
          }
          return currentChallenge
        })
        this.setState({
          challenges: updatedChallenges
        });
      });
    
      this.setState({
        challenges: challenges
      });

    }

    handleSubmit(event) {
      const challenges = this.state.challenges
      localStorage.setItem("company",challenges.company.toString());
    }

    render() {


      var user = firebase.auth().currentUser;
      if(user) {
        // console.log("user_token");
        //console.log(user.uid);
      }

      const challenges = this.state.challenges;
      console.log("render challenges");
      console.log(challenges);

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
              
              {
                challenges.map((challenge) => {
                  return   (<Card
                    title={challenge.company_name}
                    subheader={challenge.created_on.toDate().toDateString()}
                    avatar={
                      <Avatar src={challenge.logo}/>
                    }
                    imageSrc={challenge.image_url}
                    style={{marginBottom: "100px", fontSize: '1.2rem'}}
                    benchmarks={challenge.benchMarks}
                    children={challenge.challenge_description}
                    action={
                      <>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          style={{backgroundColor: '#6188F3'}}
                          className={this.props.classes.root}
                        >
                          <Link to="/response" component={challenge.company}>Accept the Challenge</Link>
                        </Button>
                      </>
                    }
                  >
                  </Card>
                   )
                })
              }
              
            </Grid>
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
