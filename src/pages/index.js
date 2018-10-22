import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";

const Layout = props => {
  const {
    data: {
      allMarkdownRemark: { edges }
    }
  } = props;
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "avenir"
        }}
      >
        {edges.map(post => {
          const { frontmatter } = post.node;
          return (
            <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
              <p>{frontmatter.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Layout;
