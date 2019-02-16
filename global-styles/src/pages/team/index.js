import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Rocket } from "mdi-material-ui";
import withRoot from "../../utils/withRoot";

const Team = props => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Meet the Team">
      <SEO title="Meet the Team" />
      <Typography paragraph>
        We are here to help! Let us know what we can do. And we're of course
        always interested to find new recruits to join our amazing team. We are
        here to help! Let us know what we can do. And we're of course always
        interested to find new recruits to join our amazing team. We are here to
        help! Let us know what we can do. And we're of course always interested
        to find new recruits to join our amazing team.
      </Typography>

      <GridList cellHeight={500} cols={3}>
        {teams.map(edge => {
          const {
            node: {
              frontmatter: { path, title, image, jobtitle },
            },
          } = edge;
          return (
            <Link key={path} to={path}>
              <GridListTile cols={1}>
                <img src={withPrefix(image)} alt={title} />
                <GridListTileBar
                  title={title}
                  subtitle={jobtitle}
                  actionIcon={
                    <IconButton
                      className="teamIcon"
                      style={{ color: "rgba(255, 255, 255, 0.54)" }}
                    >
                      <Rocket />
                    </IconButton>
                  }
                />
              </GridListTile>
            </Link>
          );
        })}
      </GridList>
    </Page>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            jobtitle
          }
        }
      }
    }
  }
`;

export default withRoot(Team);
