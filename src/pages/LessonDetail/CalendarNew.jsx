import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../../css/calendar.css'

function CalendarNew({ date, setDate, setLimit, lessonDate }) {
  const dateStr = lessonDate || '2023-01-01,2023-01-01'
  const startDate = new Date(dateStr.split(',')[0])
  const endDate = new Date(dateStr.split(',')[1])

  return (
    <>
      <div>
        <h2 className="f-Brown f-24 font-B">選擇日期</h2>
        <Calendar
          onChange={setDate}
          value={date}
          maxDate={endDate}
          minDate={startDate}
          className="f-Brown font-M f-16"
        />
      </div>
    </>
  )
}

export default CalendarNew
