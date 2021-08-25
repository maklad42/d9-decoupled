import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Tasks from "../components/tasks"

const Gtd = ({ data }) => (
  <Layout>
    {data.allNodeTodo.group.map(edge => (
      <>
        <h3>{edge.edges[0].node.relationships.field_project.name}</h3>
        <div className="tasklist">
          <Tasks tasks={edge} />
        </div>
      </>
    ))}
  </Layout>
)

export default Gtd

export const query = graphql`
  query {
    allNodeTodo(sort: { fields: [field_due_by], order: ASC }) {
      group(field: relationships___field_project___name) {
        edges {
          node {
            title
            field_start_date
            field_due_by
            field_done
            field_sub_project
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
  }
`
