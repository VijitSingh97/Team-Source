import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";


const MyCard = ({ children, title, imageSrc, subheader, avatar, action, style = {} }) => (
  <Card style={style}>
    <CardHeader
      avatar={avatar ? avatar : null}
      title={title}
      subheader={subheader ? subheader : null}
    />
    <CardMedia image={imageSrc} style={{height: "500px"}}/>
    <CardContent>{children}</CardContent>
    <CardActions style={{ float: "right" }}>{action}</CardActions>
  </Card>
);

export default MyCard;
