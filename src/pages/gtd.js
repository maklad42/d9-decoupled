import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Tasks from "../components/tasks"
import TaskFilter from "../components/TaskFilter"

// ToDo:
// Move the state declarations to 'GTD'
// Pass state to the components

// Set colors for schedule
//   - red:    today
//   - green:  active
//   - blue:   complete
//   - grey:   weekend

// Set classes on days td
//   - complete:  task is done
//   - active:    task is active on this day
//   - today:     the current day

// const dateNow = new Date()

export default function Gtd({ data }) {
  let startDt = new Date()
  let endDt = new Date()
  startDt.setDate(startDt.getDate() - 14)
  endDt.setDate(endDt.getDate() + 90)

  // const [todayDate, setTodayDate] = useState(new Date())
  const [startDate, setStartDate] = useState(startDt)
  const [endDate, setEndDate] = useState(endDt)

  return (
    <Layout>
      <h2>GTD Dashboard : Projects and Tasks</h2>
      <TaskFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {data.allNodeTodo.group.map((edge, i) => (
        <div className="projectwrapper" key={i}>
          <h3>{edge.edges[0].node.relationships.field_project.name}</h3>
          <div className="tasklist">
            <Tasks
              tasks={edge}
              calStartDate={startDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
        </div>
      ))}
    </Layout>
  )
}

// export default Gtd

export const query = graphql`
  query {
    allNodeTodo(
      filter: { field_done: { ne: true } }
      sort: {
        fields: [field_sub_project, field_due_by, field_start_date]
        order: [ASC, ASC, ASC]
      }
    ) {
      group(field: relationships___field_project___name) {
        edges {
          node {
            id
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
