import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Button } from 'react-bootstrap';
import Heading from './Heading';
import Loading from './Loading';
import { BrowserRouter,Routes, Route, useNavigate  } from "react-router";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function Quran()  {
  const [reciters, setReciters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qariId, setQariId] = useState('');
  const [selectQari, setSelectQari] = useState(false);
  const [selectedReciter, setSelectedReciter] = useState(null);
  const [selectedMoshaf, setSelectedMoshaf] = useState(null);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [selectedSurahName, setSelectedSurahName] = useState(null);
  const [suwar, setSuwar] = useState([]);
    useEffect(()=>{
      fetch('https://mp3quran.net/api/v3/reciters')
        .then((res)=> res.json())
        .then((data)=>{
          setReciters(data.reciters);
          setLoading(false);
        }).catch((error)=>{
          setError(error);
        })
    },[])  
    useEffect(()=>{
      fetch('https://mp3quran.net/api/v3/suwar')
      .then((res)=> res.json())
      .then((data)=>{
        setSuwar(data.suwar)
      })
    },[])
  return (
    <div className="quran sec gap-5 d-flex flex-column">
      {loading ? (<Loading />) : (
        <>
        {
          selectQari === false ? (
            <>
            <Heading h="القراء"></Heading>
            <Container className='d-flex justify-content-center gap-5 flex-wrap mt-2'>
            {reciters.map((reciter) => (
            <Card
              style={{ width: '18rem' }}
              key={reciter.id}
              onClick={() => {
                setSelectQari(true);
                setSelectedReciter(reciter);
              }}
              >
              <Card.Body className="text-center p-5 d-flex flex-column gap-4">
                <Card.Title className="fw-bold fs-5 text-dark">{reciter.name}</Card.Title>
                <Card.Text>عدد القراءات: <span>{reciter.moshaf.length}</span></Card.Text>
              </Card.Body>
            </Card>
          ))
}
          </Container>
            </>
        ) : (
          <>  
          <Heading h={selectedReciter.name}></Heading>
          <p className='fs-1 text-center'>{selectedSurahName}</p>
          {selectedMoshaf ? (
            selectedSurah ? (
            <Container className='d-flex justify-content-center gap-5 flex-wrap mt-2'>
              {/* <audio controls>
              <source src={selectedMoshaf.server + `${
                +selectedSurah < 10 ? '00'+selectedSurah : selectedSurah >= 10 && selectedSurah < 100  ? '0'+selectedSurah : selectedSurah 
              }.mp3` }type="audio/ogg"/>
              Your browser does not support the audio element.
              </audio> */}
                        <Button
          className='goBack'
          onClick={()=>{
            setSelectedSurah(null)
          }}
          >{'الرجوع'}</Button>
              <AudioPlayer
                autoPlay
                src={selectedMoshaf.server + `${
                  +selectedSurah < 10 ? '00'+selectedSurah : selectedSurah >= 10 && selectedSurah < 100  ? '0'+selectedSurah : selectedSurah 
                }.mp3` }
                onPlay={e => console.log("onPlay")}
                // other props here
              />
            </Container>
            ) : (
              <>
              <Container className='d-flex justify-content-center gap-5 flex-wrap mt-2'>
              {selectedMoshaf.surah_list.split(',').map((num)=>{
                const goodNum = parseInt(num);
                return(
                  <>
                  <Button
          className='goBack'
          onClick={()=>{
            setSelectedMoshaf(null)
          }}
          >{'الرجوع'}</Button>
                  <Card
                  style={{ width: '18rem' }}
                  key={num}
                  >
                  <Card.Body className="text-center p-5 d-flex flex-column gap-4"
                  onClick={()=>{
                    setSelectedSurah(suwar[goodNum-1].id)
                    setSelectedSurahName(suwar[goodNum-1].name)
                  }}
                  >
                    <Card.Title className="fw-bold fs-5 text-dark">{suwar[goodNum-1].name}</Card.Title>
                    {/* <Card.Text>عدد السور: <span>{moshaf.surah_list.split(',').length}</span></Card.Text> */}
                  </Card.Body>
                  </Card>      
                  </>
                )
              })}
            </Container>
              </>
            )
          )
          : (
            <Container className='d-flex justify-content-center gap-5 flex-wrap mt-2'>
            {selectedReciter.moshaf.map((moshaf)=> {
              return(
                <>
                <Button
          className='goBack'
          onClick={()=>{
            setSelectQari(false)
          }}
          >{'الرجوع'}</Button>
              <Card
              style={{ width: '18rem' }}
              key={moshaf.id}
              >
              <Card.Body className="text-center p-5 d-flex flex-column gap-4" onClick={
                ()=>{
                setSelectedMoshaf(moshaf)
                }
              }>
                <Card.Title className="fw-bold fs-5 text-dark">{moshaf.name}</Card.Title>
                <Card.Text>عدد السور: <span>{moshaf.surah_list.split(',').length}</span></Card.Text>
              </Card.Body>
              </Card>  
                </>
              )
            })}
          </Container>
          ) }
          
          </>
        )
      }
        </>        
      )} 
        
    </div>
    )
  ;
}
export default Quran;
