import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Gtd = () => <Layout>Some text.</Layout>

export default Gtd

export const query = graphql`
  query {
    allNodeTodo {
      edges {
        node {
          title
          field_start_date
          field_due_by
          relationships {
            field_project {
              field_project_active
              name
            }
          }
        }
      }
    }
  }
`
