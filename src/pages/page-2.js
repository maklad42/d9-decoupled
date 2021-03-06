import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

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
          <GatsbyImage
            image={edge.node.relationships.field_image.localFile}
            alt="testpic alt text"
          />
          {/* <StaticImage
            src="http://dev.d9-sandbox.io/sites/default/files/2021-05/generateImage_vXQQFL.png"
            alt="testpic"
          /> */}
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
          id
          body {
            value
          }
          created
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 200
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
