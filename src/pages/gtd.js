import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Gtd = ({ data }) => (
  <Layout>
    {data.allNodeTodo.edges.map(todo => (
      <>
        <div className="todo">{todo.node.relationships.field_project.name}</div>
        <div className="todo">{todo.node.title}</div>
        <div className="todo">Start: {todo.node.field_start_date}</div>
        <div className="todo">Due: {todo.node.field_due_date}</div>
      </>
    ))}
  </Layout>
)

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
