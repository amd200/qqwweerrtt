import React from 'react'
import Heading from './Heading'
function About()  {
  return (
    <div className="about sec container">
      <Heading h="من نحن ؟" p="نبذة مختصرة عن  فردوس"></Heading>
      <div className="text d-flex flex-column p-5 gap-3">
        <p className='fs-4'> <span className='fw-bold'>من نحن ؟</span> "نحن في موقع فردوس نسعى لتقديم خدمات متميزة تهدف إلى نشر العلم وتعليم القرآن الكريم. نحن نقدم محتوى قيم يساعد المسلمين على التعمق في فهم دينهم وتطبيقه في حياتهم اليومية."</p>
        <p className='fs-4'><span className='fw-bold'>رؤيتنا :</span> "نسعى أن نكون المصدر الأول والموثوق لتقديم خدمات تعليمية وتثقيفية تهتم بالقرآن الكريم والسنة النبوية، بهدف تعزيز القيم الإسلامية وتوفير بيئة تعليمية شاملة وميسرة لجميع الأعمار."</p>
        <p className="fs-4"> <span className='fw-bold'>رسالتنا :</span> "موقع فردوس هو منصة تهدف إلى تقديم القرآن الكريم وعلومه بأحدث الوسائل التقنية، بالإضافة إلى تقديم مجموعة متنوعة من الخدمات الإسلامية التي تساهم في توعية المسلم وتعليمه كيفية التقرب إلى الله."</p>
      </div>
    </div>
  )
}

export default About