import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import styled from 'styled-components'

const StyledDateInput = styled(DatePicker)`
  padding: 10px 15px;
  width: 175px;
  outline: 0;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 2px;
`

const DateInput = ({ selectedDate, handleDateChange, placeholderText }) => {
  return (
    <StyledDateInput
      placeholderText={placeholderText}
      selected={selectedDate}
      onChange={handleDateChange}
    />
  )
}

export default DateInput

