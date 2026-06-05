// 載入元件
import React, { useEffect, useState, useCallback } from 'react'
import '../../css/weather.css'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import dayjs from 'dayjs'

// 載入圖示
import AirFlowIcon from './images/airFlow.svg?react'
import RainIcon from './images/rain.svg?react'
import RefreshIcon from './images/refresh.svg?react'
import LoadingIcon from './images/loading.svg?react'
import WeatherIcon from './Weathericon'
const theme = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px 0 #999999',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282',
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc',
  },
}

//卡片大小
const WeatherCard = styled.div`
  position: relative;
  width: 100%;
  height: 272px;
  aspect-ratio: 1/1;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  border-radius: 20px;
  padding: 15px;
`
//縣市
const Location = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
`
//天氣狀況
const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
`
//控制氣溫及氣象icon
const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
//氣溫
const Temperature = styled.div`
  color: ${({ theme }) => theme.temperatureColor};
  font-size: 24px;
  font-weight: 300;
  display: flex;
`
//度c
const Celsius = styled.div`
  font-weight: normal;
  font-size: 24px;
`
//風速
const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  ${'' /* margin-bottom: 20px; */}

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`
//雨量
const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
  color: ${({ theme }) => theme.textColor};

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`
//重整大小
const Refresh = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.textColor};

  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    /*使用rotate動畫效果在svg圖示上 */
    animation: rotate infinite 1.5s linear;
    animation-duration: ${({ isLoading }) => (isLoading ? '1.5s' : '0s')};
  }
  /* STEP 1：定義旋轉的動畫效果，並取名為 rotate */
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`

function Weather({ location }) {
  const AUTHORIZATION_KEY = import.meta.env.VITE_WEATHER_KEY
  const LOCATION_NAME = location || '臺北市'

  const fetchWeatherForecast = async () => {
    try {
      const response = await fetch(
        `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${AUTHORIZATION_KEY}&LocationName=${LOCATION_NAME}`
      )
      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      const data = await response.json()

      // ⚠️ 注意：Locations 和 Location 都是大寫
      const locationData = data.records.Locations[0].Location[0]

      const weatherElements = locationData.WeatherElement.reduce(
        (acc, item) => {
          if (
            [
              '天氣現象',
              '12小時降雨機率',
              '最大舒適度指數',
              '平均溫度',
              '風速',
            ].includes(item.ElementName)
          ) {
            acc[item.ElementName] = item.Time[0].ElementValue[0]
          }
          return acc
        },
        {}
      )

      return {
        observationTime: locationData.WeatherElement[0].Time[0].StartTime,
        locationName: locationData.LocationName,
        description: weatherElements['天氣現象']?.Weather ?? '',
        weatherCode: weatherElements['天氣現象']?.WeatherCode ?? 0,
        rainPossibility:
          weatherElements['12小時降雨機率']?.ProbabilityOfPrecipitation ?? 0,
        comfortability:
          weatherElements['最大舒適度指數']?.MaxComfortIndexDescription ?? '',
        temperature: weatherElements['平均溫度']?.Temperature ?? 0,
        windSpeed: weatherElements['風速']?.WindSpeed ?? 0,
      }
    } catch (error) {
      console.error('fetchWeatherForecast failed:', error)
      return null
    }
  }
  const [currentTheme, setCurrentTheme] = useState('light')
  // 定義會使用到的資料狀態
  const [weatherElenment, setWeatherElement] = useState({
    observationTime: new Date(),
    locationName: '',
    description: '',
    windSpeed: 0,
    temperature: 0,
    rainPossibility: 0,
    comfortability: '',
    weatherCode: 0,
    isLoading: true,
  })
  const fetchData = useCallback(async () => {
    setWeatherElement((prevState) => ({
      ...prevState,
      isLoading: true,
    }))

    const [currentWeather, weatherForecast] = await Promise.all([
      // fetchCurrentWeather(),
      fetchWeatherForecast(),
    ])

    setWeatherElement({
      ...currentWeather,
      ...weatherForecast,
      isLoading: false,
    })
  }, [])

  useEffect(() => {
    fetchData()
    // console.log(observationTime)
  }, [fetchData])

  const {
    observationTime,
    locationName,
    description,
    windSpeed,
    temperature,
    rainPossibility,
    isLoading,
    comfortability,
    weatherCode,
  } = weatherElenment

  return (
    <>
      <div>
        <div className="f-Brown f-24">天氣</div>
        <ThemeProvider theme={theme[currentTheme]}>
          {/* {console.log('render,isLoading:,isLoading')} */}
          <WeatherCard>
            <Location>{locationName}</Location>
            <Description>
              {description}
              {comfortability}
            </Description>
            <CurrentWeather>
              <Temperature>
                {Math.round(temperature)}
                <Celsius>℃</Celsius>
              </Temperature>
              <WeatherIcon weatherCode={weatherCode} moment="night" />
            </CurrentWeather>
            <AirFlow>
              <AirFlowIcon />
              {windSpeed} m/h
            </AirFlow>
            <Rain>
              <RainIcon />
              {rainPossibility}%
            </Rain>
            <Refresh onClick={fetchData} isLoading={isLoading}>
              最後觀測時間：
              {new Intl.DateTimeFormat('zh-TW', {
                hour: 'numeric',
                minute: 'numeric',
              }).format(dayjs(observationTime))}{' '}
              {isLoading ? <LoadingIcon /> : <RefreshIcon />}
            </Refresh>
          </WeatherCard>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Weather
