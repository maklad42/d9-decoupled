import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Gtd = ({ data }) => (
  <Layout>
    {data.allNodeTodo.group.map(grp => {
      <>
        <div className="todo">
          {grp.node[0].relationships.field_project.name}
        </div>
        <div className="todo">{grp.node.title}</div>
        <div className="todo">Start: {grp.node.field_start_date}</div>
        <div className="todo">Due: {grp.node.field_due_date}</div>
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
