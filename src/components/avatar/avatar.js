import React from 'react'
import Person from '../assets/manq.png';
import './avatar.css';

export default function Avatar() {
  return (
    <div className="person_wrap">
    <img src={Person} alt='' />
    </div>
  )
}
