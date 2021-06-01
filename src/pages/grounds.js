import * as React from "react"
import { Link, graphql } from "gatsby"
import { Map, GoogleApiWrapper } from "google-maps-react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    {data.allTaxonomyTermFootballGrounds.edges.map(edge => (
      <>
        <h3>{edge.node.name}</h3>
        <div className="">{edge.node.field_address.value}</div>
        <div className="">{edge.node.field_pitch_type}</div>
        <div className="">{edge.node.field_travel_time} mins.</div>
        <div className="">{edge.node.field_distance}km</div>
        <div className="gmap">
          <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
          />
        </div>
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
