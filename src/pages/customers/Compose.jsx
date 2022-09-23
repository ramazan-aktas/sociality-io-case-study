import React from 'react'
import { useParams } from "react-router-dom";
export default function Compose() {
  const {companyName} = useParams()
  return (
    <div className='w-full text-center'>Compose page. Some actions paired with useParam. Current company: {companyName}</div>
  )
}
