import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import { LESSON_DETAIL_DATA } from '../../components/api_config'
import { useParams } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css'
import '../../css/calendar.css'
import axios from 'axios'

function CalendarNew(props) {
  //日期
  const { date, setDate } = props

  //取得資料
  const [data, setData] = useState({
    rows: [],
    lesson_date: '2023-01-01',
  })

  // const [limit, setLimit] = useState(0)

  const { sid } = useParams()

  const startDate = new Date(data.lesson_date.split(',')[0])
  const endDate = new Date(data.lesson_date.split(',')[1])

  const getListData = async () => {
    const res = await axios.get(`${LESSON_DETAIL_DATA}/${sid}`)
    // console.log(res)
    setData(res.data)
    // setLimit(res.data.limit[0].lesson_uplimit)
    // console.log(res.data.limit[0].lesson_uplimit)
  }

  useEffect(() => {
    getListData(sid).then(() => {})
  }, [sid])

  return (
    <>
      <div>
        <h2 className="f-Brown f-24">選擇日期</h2>
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
