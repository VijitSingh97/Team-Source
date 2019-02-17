
import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import withRoot from "../../utils/withRoot";
import firebase from "firebase";

class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {
        name: "",
        prof_pic_url: ""  
      },
      currentChallenges: {},
      pastChallenges: {}

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

  const pastSnapshot = await firebase.firestore().collection('Users').doc(user_id).collection("past_challenges").get();
  const pastChallenges = pastSnapshot.docs.map(doc=> doc.data());
  this.setState({
    pastChallenges: pastChallenges
  });
}
  render() {
    // console.log("state");
    console.log(this.state)

    for(var i = 0; i < this.state.currentChallenges.length; i++){
      console.log(this.state.currentChallenges[i]);
     //DocumentReference userRef = db.document(this.state.currentChallenges[i]);
    }

    for (var key in this.state.currentChallenges) {
      console.log("Key: " + key);
      console.log("Value: " + this.state.currentChallenges[key]);
    }
    

    return (
      <Page title={this.state.user.name}>
        <SEO title={this.state.user.name} />
        <Typography paragraph>
          We are here to help! Let us know what we can do. And we're of course
          always interested to find new recruits to join our amazing team. We are
          here to help! Let us know what we can do. And we're of course always
          interested to find new recruits to join our amazing team. We are here to
          help! Let us know what we can do. And we're of course always interested
          to find new recruits to join our amazing team.

        </Typography>
        
      </Page>
    );
  }
}



export default withRoot(User);
