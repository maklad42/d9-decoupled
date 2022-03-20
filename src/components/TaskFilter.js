import React, { useState } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styled from "styled-components"

const FilterStyles = styled.div`
  width: 50%;
  margin: 1rem 0;
  background-color: aliceblue;
  padding: 1rem;
  .filterblocks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`

const TaskFilter = ({ startDate, endDate, changeDate }) => {
  // const startDt = new Date()
  // startDt.setDate(startDt.getDate() - 14)
  // const endDt = startDt.setDate(startDt.getDate() + 90)

  // const [todayDate, setTodayDate] = useState(new Date())
  // const [startDate, setStartDate] = useState(startDt)
  // const [dueDate, setDueDate] = useState(endDt)
  return (
    <>
      <FilterStyles>
        <div className="filterblocks">
          <div>
            <p>Today:</p>
            {/* <ReactDatePicker
              selected={todayDate}
              onChange={date => setTodayDate(date)}
              monthsShown={2}
            /> */}
          </div>
          <div>
            <p>Start Date:</p>
            <ReactDatePicker
              selected={startDate}
              onChange={date => changeDate(date)}
              monthsShown={2}
            />
          </div>
          <div>
            <p>Due Date:</p>
            <ReactDatePicker
              selected={endDate}
              onChange={date => setDueDate(date)}
              monthsShown={2}
            />
          </div>
        </div>
      </FilterStyles>
    </>
  )
}

export default TaskFilter
