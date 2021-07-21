import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.edges.map((edge) => (
          <li key={edge.node.id}>{edge.node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};
export default BlogPage;

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
