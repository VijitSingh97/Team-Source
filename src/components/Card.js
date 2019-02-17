import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class MyCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render(){
    const { children, title, imageSrc, subheader, avatar, action, style = {}, benchmarks } = this.props
    return (
      <Card style={style}>
        <CardHeader
          avatar={avatar ? avatar : null}
          title={title}
          subheader={subheader ? subheader : null}
        />
        <CardMedia image={imageSrc} style={{height: "500px"}}/>
        <CardContent>{children}</CardContent>
        <CardActions>
        <IconButton
          onClick={this.handleExpandClick}
          style={{marginLeft: "auto", transform: this.state.expanded ? "rotate(180deg)" : "rotate(0deg)"}}  
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <List dense={true}>
                {
                  benchmarks.map((benchmark) => {
                    return (<ListItem>
                      <ListItemText
                        primary={benchmark.id}
                      />
                    </ListItem>)
                  })
                }
              </List>
          </CardContent>
        </Collapse>
        <CardActions style={{ float: "right" }}>{action}</CardActions>
        
        
      </Card>
    )
  }
}
export default MyCard;
