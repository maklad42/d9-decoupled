import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Gtd = ({ data }) => (
  <Layout>
    {data.allNodeTodo.group.map(edge => {
      return edge.edges.map((todo, i) => (
        <>
          <h3>{todo.node.relationships.field_project.name}</h3>
          <div>{todo.node.title}</div>
          <div>{todo.node.field_start_date}</div>
          <div>{todo.node.field_due_by}</div>
        </>
      ))
    })}
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
