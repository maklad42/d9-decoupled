import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import "../styles/reset.css"
import "../styles/d9-decoupled.css"

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
          <li>
            <Link to={"/teammates"}>Team Mates</Link>
          </li>
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
