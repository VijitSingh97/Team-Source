import React from "react";
import Page from "../../components/Page";import { graphql } from "gatsby";

import { Link } from "gatsby";
import withRoot from "../../utils/withRoot";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import firebase from "firebase";

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: '', pass:''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);

        if(!firebase.app){
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
    }
    handleSubmit(event) {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('An error was recieved: ' + errorCode + ': ' + errorMessage);
            // ...
        });

        console.log('A email was submitted: ' + this.state.email);
        console.log('A pass was submitted: ' + this.state.pass);
        event.preventDefault();
    }
    handleEmail(event) {
        this.setState({email: event.target.value});
    }  
    handlePass(event) {
        this.setState({pass: event.target.value});
    }  
    render() {
        const classes = styles;
        return (
        <Page> 
            <main className={classes.main} >
      <CssBaseline />classes
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmail} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handlePass}/>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
</main>
<Link to="/signup">
    <Button
      variant="contained"
      color="secondary"
    >
      Sign Up
    </Button>
  </Link>
        </Page>
        
    )
}
}
export default withRoot(SignIn);