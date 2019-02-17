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
import lockIcon from '../../images/lockIcon.png';

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

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: '', retype_email: '', pass:'', retype_pass: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleRetypeEmail = this.handleRetypeEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleRetypePass = this.handleRetypePass.bind(this);
    
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
    }
    handleSubmit(event) {
      if(this.state.email === this.state.retype_email && this.state.pass === this.state.retype_pass){
        console.log('Matching emails and passes');
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('An error was recieved: ' + errorCode + ': ' + errorMessage);
          // ...
      });
      }
      else{
        console.log('Emails and passes do NOT match');
      }

      console.log('A email was submitted: ' + this.state.email);
      console.log('Your retyped email was: ' + this.state.retype_email);
      console.log('A pass was submitted: ' + this.state.pass);
      console.log('Your retyped pass was: ' + this.state.retype_pass);
      event.preventDefault();
    }
    handleEmail(event) {
        this.setState({email: event.target.value});
    }  
    handleRetypeEmail(event) {
      this.setState({retype_email: event.target.value});
    }  
    handlePass(event) {
        this.setState({pass: event.target.value});
    }  
    handleRetypePass(event) {
        this.setState({retype_pass: event.target.value});
    }
    render() {
        const classes = styles;
        return (
        <Page> 
            <main className={classes.main} >
      <CssBaseline />
      <Paper className={classes.paper}
        style={{
          margin: '25px auto 0 auto',
          width: '475px',
          height: '580px',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 0 15px white',
          fontFamily: 'Saira Extra Condensed !important'
        }}>
        <Avatar className={classes.avatar} style={{
          margin: '0 auto',
          width: '60px',
          height: '60px'
        }}>
          <img src={lockIcon} style={{width: '60px', height: '60px'}}/>
        </Avatar>
        <Typography component="h1" variant="h4" style={{textAlign: 'center', paddingTop: '10px'}}>
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmail} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="retype_email">Confirm Email Address</InputLabel>
            <Input id="retype_email" name="retype_email" autoComplete="retype_email" onChange={this.handleRetypeEmail} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handlePass}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="retype_pass">Confirm Password</InputLabel>
            <Input name="retype_password" type="password" id="retype_password" autoComplete="current-password" onChange={this.handleRetypePass}/>
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
            style={{
              margin: '30px 0',
              backgroundColor: '#6188F3'
            }}
          >
            Sign Up
          </Button>
          
        </form>
        
      </Paper>
</main>

</Page> 
    )
}
}
export default withRoot(SignUp);