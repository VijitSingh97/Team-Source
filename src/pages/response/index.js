import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link'
import firebase from 'firebase'

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

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  body: {
      backgroundColor: 'white',
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 10,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class OutlinedTextFields extends React.Component {

constructor(props) {
    super(props);
    this.state = {idea: '', bench1: '', bench2:'', bench3: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIdea = this.handleIdea.bind(this);
    this.handleBench1 = this.handleBench1.bind(this);
    this.handleBench2 = this.handleBench2.bind(this);
    this.handleBench3 = this.handleBench3.bind(this);

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
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
    });
    }

    handleIdea(event) {
        this.setState({idea: event.target.value});
    }  
    handleBench1(event) {
        this.setState({retype_email: event.target.value});
    }  
    handleBench2(event) {
        this.setState({pass: event.target.value});
    }  
    handleBench3(event) {
        this.setState({retype_pass: event.target.value});
    }

  render() {
    const { classes } = this.props;

    console.log("Hello!")
    console.log(localStorage.getItem("storageName"));

    return (
      <form className={classes.container} noValidate autoComplete="off">  
        <TextField
          id="idea"
          label=""
          style={{ margin: 8 }}
          placeholder="Insert genius idea here"
          fullWidth
          multiline
          rows="17"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="bench1"
          label="Benchmark 1"
          style={{ margin: 8 }}
          placeholder="Write a 2 page business plan"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="bench2"
          label="Benchmark 2"
          style={{ margin: 8 }}
          placeholder="Design the home page UI"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="bench3"
          label="Benchmark 3"
          style={{ margin: 8 }}
          placeholder="Create the data structure"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button 
            type = "submit"
            href = "/" 
            variant="contained" 
            component="span" 
            className={classes.button}>
                <Link to href= "/"> Upload </Link>
        </Button>
    </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
