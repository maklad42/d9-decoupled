import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        Nakanoshima FC
        <ul>
          <li>
            <Link to={"/grounds"}>Grounds</Link>
          </li>
          <li>Team Mates</li>
        </ul>
      </li>
      <li>
        <Link to={"/blog-posts"}>Bloggy McBlogface</Link>
      </li>
      <li>
        <Link to={"/gtd"}>GTD Dashboard</Link>
      </li>
      <li>
        <Link to={"/page-2"}>Articles</Link>
      </li>
    </ul>
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
