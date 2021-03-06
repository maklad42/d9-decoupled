import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const Grounds = styled.div`
  h3 {
    color: rebeccapurple;
    text-align: center;
    height: 3rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  gap: 25px;
  width: 90%;

  div.ground {
    background-color: #f8f8f8;
    padding: 10px;
    box-shadow: 2px 2px 2px #ddd;
  }

  div.ground div.label {
    font-size: 0.8rem;
  }

  div.ground div.content {
    margin-bottom: 1rem;
    background-color: #fdfdfd;
    padding: 5px;
  }

  div.ground-details {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    align-items: stretch;
    justify-items: stretch;
  }

  div.ground-details div {
    background-color: #fcfcfc;
  }

  div.ground .address {
    height: 4rem;
  }

  div.ground.pitch {
  }

  div.ground.travel {
  }

  div.ground.distance {
  }

  div.gmap {
    position: relative;
    width: 90%;
    margin: auto;
  }

  div.gmap iframe {
    border: 1px solid grey;
    height: 300px;
    width: 100%;
    aspect-ratio: 1;
    margin: 0;
  }
`

const GroundsList = ({ data }) => (
  <Layout>
    <Grounds>
      {data.allTaxonomyTermFootballGrounds.edges.map((edge, i) => (
        <div key={i} className="ground">
          <h3>{edge.node.name}</h3>
          <div className="label">Address:</div>
          <div className="content address">{edge.node.field_address.value}</div>
          <div className="label">Details:</div>
          <div className="ground-details">
            <div className="content pitch">{edge.node.field_pitch_type}</div>
            <div className="content travel">
              {edge.node.field_travel_time} mins.
            </div>
            <div className="content distance">{edge.node.field_distance}km</div>
          </div>
          <div className="label">Map:</div>
          <div className="content gmap">
            <iframe
              title={edge.node.name}
              src={edge.node.field_google_map_iframe_}
            ></iframe>
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
          field_google_map_iframe_
          field_pitch_type
          field_travel_time
          field_address {
            processed
          }
        }
      }
    }
  }
`
