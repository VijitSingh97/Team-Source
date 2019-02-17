import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import Typography from "@material-ui/core/Typography";

import SEO from "../../components/SEO";
import Page from "../../components/Page";
import withRoot from "../../utils/withRoot";
import firebase from "firebase";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "../../components/Card";
import { Gift } from "mdi-material-ui";
import Button from "@material-ui/core/Button";


class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {
        name: "",
        prof_pic_url: ""  
      },
      currentChallenges: [],
      pastChallenges: [],
      currentChallengesDescriptions: [],
      pastChallengesDescriptions: []
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
    //console.log("propspsdadasdfasdfrinting ");

    var user_id = this.props.location.search.substring(4);
    //console.log(user_id)
    var self = this;

    await firebase.firestore().collection('Users').doc(user_id).onSnapshot((snapshot) => {
      //console.log("snapshot");
      //console.log(snapshot);
      self.setState({
        user: snapshot.data()
      })

    });
    
    const currentSnapshot = await firebase.firestore().collection('Users').doc(user_id).collection("current_challenges").get();
    const currentChallenges = currentSnapshot.docs.map(doc=> doc.data());
    this.setState({
      currentChallenges: currentChallenges
    });

    const pastSnapshot = await firebase.firestore().collection('Users').doc(user_id).collection("previous_challenges").get();
    const pastChallenges = pastSnapshot.docs.map(doc=> doc.data());
    this.setState({
      pastChallenges: pastChallenges
    });

    
      
    currentChallenges.forEach(async(challenge) => {
      //console.log("challenge description")
      // console.log(Object.values(challenge)[0])
      const currentSnapshot = await firebase.firestore().doc(Object.values(challenge)[0]).get();
      // console.log("currentSnapshot");
      // console.log(currentSnapshot);
      const currentChallengesDescription = currentSnapshot.data();
      // console.log(currentChallengesDescription);
      const currentChallengesDescriptions = this.state.currentChallengesDescriptions;
      currentChallengesDescription.company_name = Object.values(challenge)[0].split("/")[2];
      currentChallengesDescription.task = Object.values(challenge)[0].split("/")[4];
      currentChallengesDescriptions.push(currentChallengesDescription)
      this.setState({
        currentChallengesDescriptions
      });
    });

    pastChallenges.forEach(async(challenge) => {
      console.log("pchallenge description up top")
      console.log(Object.values(challenge)[0])
      const currentSnapshot = await firebase.firestore().doc(Object.values(challenge)[0]).get();
      console.log("pcurrentSnapshot");
      console.log(pastChallengesDescription);
      const pastChallengesDescription = currentSnapshot.data();
      console.log(pastChallengesDescription);
      const pastChallengesDescriptions = this.state.pastChallengesDescriptions;
      pastChallengesDescription.company_name = Object.values(challenge)[0].split("/")[2];
      pastChallengesDescription.task = Object.values(challenge)[0].split("/")[4];
      pastChallengesDescriptions.push(pastChallengesDescription)
      this.setState({
        pastChallengesDescriptions
      });
    });
    
}
  render() {
    //console.log("state");
    //console.log(this.state)
      

    //DocumentReference userRef = db.document(this.state.currentChallenges[i]);
    
    // console.log("currentChallenges")
    // console.log(this.state.currentChallenges)

    //console.log("currentChallengesDescriptions");
    //console.log(this.state.currentChallengesDescriptions);

    // for (var key in this.state.currentChallenges) {
    // /   console.log("Key: " + key);
    // //   console.log("Value: " + this.state.currentChallenges[key]);
    // // }
    
    const challenges = this.state.currentChallengesDescriptions;
    const pchallenges = this.state.pastChallengesDescriptions;
    console.log("challenge descriptions");
    console.log(challenges)

    console.log("pchallenge descriptions");
    console.log(pchallenges)
    
    return (
      <Page title={this.state.user.name}>
        <SEO title={this.state.user.name} />
        <Typography>
          Current Projects
        </Typography>
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
                    title={challenge.company_name + ": " + challenge.task}
                    subheader={"Due: " + challenge.time_limit.toDate().toDateString()}
                    avatar={
                      <Avatar>
                        <Gift />
                      </Avatar>
                    }
                    style={{marginBottom: "100px"}}
                    children={"Equity Award: " + challenge.equity_award + "\nCash Award: " + challenge.cash_award + "\nChallenge Description: " + challenge.description}
            
                  >
                  </Card>
                   )
                })
              }
              
            </Grid>
          </Grid>
        

        <Typography>
          Past Projects
        </Typography>
        <Grid
            spacing={24}
            container
            direction="row"
            alignItems="flex-start"
            justify="center"
          >
            <Grid item xs={12} md={10} style={{ minHeight: "523px" }}>
              
              {
                pchallenges.map((challenge) => {
                  return   (<Card
                    title={challenge.company_name + ": " + challenge.task}
                    subheader={"Due: " + challenge.time_limit.toDate().toDateString()}
                    avatar={
                      <Avatar>
                        <Gift />
                      </Avatar>
                    }
                    style={{marginBottom: "100px"}}
                    children={"Equity Award: " + challenge.equity_award + "\nCash Award: " + challenge.cash_award + "\nChallenge Description: " + challenge.description}
            
                  >
                  </Card>
                   )
                })
              }
              
            </Grid>
          </Grid>

      </Page>
    );
  }
}



export default withRoot(User);
