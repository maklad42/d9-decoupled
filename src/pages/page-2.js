import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    {data.allTaxonomyTermFootballGrounds.edges.map(edge => (
      <>
        <h3>{edge.node.name}</h3>
        <p>{edge.node.field_address.value}</p>
        <p>{edge.node.field_pitch_type}</p>
        <p>{edge.node.field_travel_time} mins.</p>
        <p>{edge.node.field_distance}km</p>
        <Link to="/">Go back to the homepage</Link>
      </>
    ))}
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    allTaxonomyTermFootballGrounds {
      edges {
        node {
          name
          field_distance
          field_google_map
          field_pitch_type
          field_travel_time
          field_address {
            value
          }
        }
      }
    }
  }
`
