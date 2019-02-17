import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { MaterialUi, Logout, WhiteBalanceAuto } from "mdi-material-ui";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from '../images/logo2.png'
import { createMuiTheme } from '@material-ui/core/styles';


const Header = props => {
  return (
    <AppBar id="appBar" style={{background: '#6188F3', height: '75px'}}>
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          spacing={16}
          style={{marginTop: '2px'}}
        >
          <Grid item>
          < Link to=""><img className={Header.img} alt="logo" src={logo} /></Link>
          </Grid>
          <Grid item>
            <Hidden smDown>
              <Typography
                style={{ color: "#efefef", flex: 1, fontFamily: 'Saira Extra Condensed' }}
                component="span"
                variant="caption"
              >
                <Menu />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </AppBar>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
