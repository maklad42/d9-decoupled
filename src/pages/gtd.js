import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Tasks from "../components/tasks"
import TaskFilter from "../components/TaskFilter"

const dateNow = new Date()

const Gtd = ({ data }) => (
  <Layout>
    <TaskFilter startDate={dateNow} />
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
    allNodeTodo(
      sort: {
        fields: [field_sub_project, field_due_by, field_start_date]
        order: [ASC, ASC, ASC]
      }
    ) {
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
