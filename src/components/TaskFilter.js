import React, { useState } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const TaskFilter = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [dueDate, setDueDate] = useState(new Date())
  return (
    <>
      <p>Start Date:</p>
      <ReactDatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        monthsShown={2}
      />
      <p>Due Date:</p>
      <ReactDatePicker
        selected={dueDate}
        onChange={date => setDueDate(date)}
        monthsShown={2}
      />
    </>
  )
}

export default TaskFilter
