import React from "react"
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

const TaskFilter = ({ startDate, endDate, setStartDate, setEndDate }) => {
  function updateStartDate(date) {
    const newStartDate = date.setDate(date.getDate())
    const newEndDate = date.setDate(date.getDate() + 90)
    setStartDate(newStartDate)
    setEndDate(newEndDate)
  }

  function updateEndDate(date) {
    const newEndDate = date.setDate(date.getDate())
    const newStartDate = date.setDate(date.getDate() - 90)
    setStartDate(newStartDate)
    setEndDate(newEndDate)
  }

  return (
    <>
      <FilterStyles>
        <div className="filterblocks">
          <div>
            <p>Calendar Start:</p>
            <ReactDatePicker
              selected={startDate}
              onChange={date => updateStartDate(date)}
              monthsShown={2}
            />
            <p>Calendar End:</p>
            <ReactDatePicker
              selected={endDate}
              onChange={date => updateEndDate(date)}
              monthsShown={2}
            />
          </div>
          <div>
            <p>Filters:</p>
            Filter 1:
            <br />
            Filter 2:
          </div>
          <div>
            <p>Buttons:</p>
            Find:
            <br />
            Other stuff:
          </div>
        </div>
      </FilterStyles>
    </>
  )
}

export default TaskFilter
