import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    {data.allNodeArticle.edges.map(edge => (
      <>
        <h3>
          <Link to={edge.node.id}>{edge.node.title}</Link>
        </h3>
        <small>
          <em>{Date(edge.node.created)}</em>
        </small>
        <div
          style={{
            maxWidth: `300px`,
            marginBottom: `1.45rem`,
            width: `100%`,
          }}
        >
          <Img
            fluid={
              edge.node.relationships.field_image.localFile.childImageSharp
                .fluid
            }
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              edge.node.body.value.split(" ").splice(0, 50).join(" ") + "...",
          }}
        ></div>
      </>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          title
          body {
            value
          }
          created
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
