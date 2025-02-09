import React, { useEffect, useState } from 'react';
import { Container,Card, Button } from 'react-bootstrap';
import Loading from './Loading';
import Heading from './Heading';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Radio = () => {
    const [data,setData] = useState(null);
    const [selectedRadio, setSelectedRadio] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      fetch('https://mp3quran.net/api/v3/radios?language=ar')
      .then((res)=>res.json())
      .then((data)=>{
        setLoading(false)
        setData(data.radios)
      })
    },[])
  
  return (
    <div className='radio sec  '>
    <Container className='d-flex flex-wrap justify-content-center gap-5 '>
      {
        !loading ? (
          <>
      <Heading h='الراديو'></Heading>
      {data.map((radio,i)=>{
        return(
          !selectedRadio ?
          (<Card
          style={{ width: '18rem' }}
          key={radio.id}
          >
          <Card.Body className="text-center p-5 d-flex flex-column gap-4"
          onClick={()=>{
            setSelectedRadio(radio)
          }}
          >
            <Card.Title className="fw-bold fs-5 text-dark">{radio.name}</Card.Title>
          </Card.Body>
          </Card>) : selectedRadio && selectedRadio.id === radio.id ?
          (
          <>
          <Button
          className='goBack'
          onClick={()=>{
            setSelectedRadio(null)
          }}
          >{'الرجوع'}</Button>
          <p className='fw-bold fs-3'>راديو : {radio.name}</p>
          <AudioPlayer
        autoPlay
        src={selectedRadio.url}
        // other props here
      />
          </>
        ) : ''

        )
      })} </>
    ) : (<Loading />)
    }
    </Container>'
    </div>
  );
}

export default Radio;
