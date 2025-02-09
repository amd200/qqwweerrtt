import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Heading from './Heading';
import Loading from './Loading';

const Azkar = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.hisnmuslim.com/api/ar/27.json')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        const azkarData = data["أذكار الصباح والمساء"].map((zekr) => ({
          ...zekr,
          REMAIN_REPEAT: zekr.REPEAT, 
        }));
        setData(azkarData);
      });
  }, []);

  const handleRepeatClick = (id) => {
    setData((prevData) =>
      prevData.map((zekr) =>
        zekr.ID === id && zekr.REMAIN_REPEAT > 0
          ? { ...zekr, REMAIN_REPEAT: zekr.REMAIN_REPEAT - 1 } 
          : zekr
      )
    );
  };

  return (
    !loading ? (
      <div className="azkar sec">
        <Heading h="أذكار الصباح والمساء" />
        <Container className="d-flex flex-column align-items-center gap-5 mt-5">
          {data.map((zekr) => {
            const remainRepeat = zekr.REMAIN_REPEAT; 
            return (
              <Card border="dark" key={zekr.ID}>
                <Card.Header className='d-flex justify-content-between p-4'>
                  <div className='d-flex align-items-center'>
                  عدد مرات التكرار : <span className='fw-bold text-danger fs-4 px-2'>{remainRepeat}</span>
                  </div>
                  <Button className={remainRepeat === 0 ? 'green' : ''} onClick={() => handleRepeatClick(zekr.ID)}>
                    {remainRepeat > 0 ? "احسب مرة" : "انتهيت"}
                  </Button>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{zekr.ARABIC_TEXT || 'ss'}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </div>
    ) : <Loading />
  );
};

export default Azkar;
