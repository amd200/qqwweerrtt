import React, { useEffect, useState } from 'react'
import Heading from './Heading';
import Table from 'react-bootstrap/Table';
import Loading from './Loading';
import { Container } from 'react-bootstrap';

function Slah() {
  const [mydata, setMyData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const today = new Date();
    const formattedDate = today.getDate().toString().padStart(2, '0') + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getFullYear();
    fetch(`https://api.aladhan.com/v1/timingsByCity/${formattedDate}}?city=cairo&country=egypt&method=8`)
    .then((res)=>res.json())
    .then((data)=> {
      setMyData(data.data)
      setLoading(false);
  })
  },[])
  return (
    <div className="slah sec">
      {loading ? 
      (<Loading />)
      : (
      <Container className=' d-flex align-items-center flex-column'>
      <Heading h="مواقيت الصلاة بتوقيت القاهرة"></Heading>
      <Table striped bordered hover>
      <tbody>
        <tr>
          <th>الصلاة </th>
          <th>المعاد</th>
        </tr>
        <tr>
          <th>الفجر</th>
          <th>{parseInt(mydata.timings.Fajr) > 12 ? `0${parseInt(mydata.timings.Fajr)-12}:${mydata.timings.Fajr.slice(3,5)} م` : mydata.timings.Fajr + ' ص'}</th>
        </tr>
        <tr>
          <th>الظهر</th>
          <th>{parseInt(mydata.timings.Dhuhr) > 12 ? `0${parseInt(mydata.timings.Dhuhr)-12}:${mydata.timings.Dhuhr.slice(3,5)} م` : mydata.timings.Dhuhr + ' ص'}</th>
        </tr>
        <tr>
          <th>العصر</th>
          <th>{parseInt(mydata.timings.Asr) > 12 ? `0${parseInt(mydata.timings.Asr)-12}:${mydata.timings.Asr.slice(3,5)} م` : mydata.timings.Asr + ' ص'}</th>
        </tr>
        <tr>
          <th>المغرب</th>
          <th>{parseInt(mydata.timings.Maghrib) > 12 ? `0${parseInt(mydata.timings.Maghrib)-12}:${mydata.timings.Maghrib.slice(3,5)} م` : mydata.timings.Maghrib + ' ص'}</th>
        </tr>
        <tr>
          <th>العشاء</th>
          <th>{parseInt(mydata.timings.Isha) > 12 ? `0${parseInt(mydata.timings.Isha)-12}:${mydata.timings.Isha.slice(3,5)} م` : mydata.timings.Isha + ' ص'}</th>
        </tr>
      </tbody>
    </Table>
    </Container>
      )
    }
    </div>
  )
}


export default Slah
