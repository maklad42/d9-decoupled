import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
// import { Map, GoogleApiWrapper } from "google-maps-react"

import Layout from "../components/layout"

// const mapStyles = {
//   width: "20%",
//   height: "20%",
// }

const Grounds = styled.div`
  h3 {
    color: rebeccapurple;
  }

  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 25px;
  width: 90%;

  div.ground {
    background-color: #f4f4f4;
    padding: 10px;
  }

  div.ground-details {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    align-items: stretch;
    justify-items: stretch;
  }

  div.ground-details div {
    background-color: #fafafa;
    margin: 5px;
    padding: 5px;
  }

  div.ground.address {
  }

  div.ground.pitch {
  }

  div.ground.travel {
  }

  div.ground.distance {
  }

  div.ground.gmap {
  }
`

const GroundsList = ({ data }) => (
  <Layout>
    <Grounds>
      {data.allTaxonomyTermFootballGrounds.edges.map((edge, i) => (
        <div key={i} className="ground">
          <h3>{edge.node.name}</h3>
          <div className="address">{edge.node.field_address.value}</div>
          <div className="ground-details">
            <div className="pitch">{edge.node.field_pitch_type}</div>
            <div className="travel">{edge.node.field_travel_time} mins.</div>
            <div className="distance">{edge.node.field_distance}km</div>
          </div>
          <div className="gmap">
            {/* <Map
            google={data.google}
            defaultZoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
          /> */}
          </div>
        </div>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Grounds>
  </Layout>
)

export default GroundsList

export const query = graphql`
  query {
    allTaxonomyTermFootballGrounds {
      edges {
        node {
          id
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
