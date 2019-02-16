import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";
import withRoot from "../../utils/withRoot";

const Products = props => {
  const products = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Products">
      <SEO title="Products" />
      <List items={products} />
    </Page>
  );
};

export const query = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`;

export default withRoot(Products);
