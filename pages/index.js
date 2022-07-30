import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
// import { excelDownloader } from '../libs/excelDownloader';

const Home = () => {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios.get('/api/weather-summary')
      .then((res) => {
        console.log(res?.data);
        setWeatherData(res?.data);
      })
      .catch((err) => err)
  }, []);

  if (!weatherData) return;

  return (
    <div>
      <p className="text-xs">통보문 내용: {weatherData}</p>

      <ul className="mt-5 divide-y-2">
        <li>
          <Link href="/">
            <a>(1). Home</a>
          </Link>
        </li>
        <li>
          <Link href="/download">
            <a>(2). Sample Excel Download</a>
          </Link>
        </li>
        <li>
          <Link href="/api/weather-summary">
            <a>(3). API: 기상청 중기예보 (통보문)</a>
          </Link>
        </li>
        <li>
          <Link href="/api/weather-data">
            <a>(4). API: 기상청 단기예보</a>
          </Link>
        </li>
      </ul>

    </div>
  )
};

export default Home;
