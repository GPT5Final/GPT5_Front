import React, { useState } from 'react'
import MapContainer from '../components/MapContainer'

function LandingPage() {
  const [MapInput, setMapInput] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setMapInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(location)
    setMapInput('')
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="검색어를 입력하세요" onChange={onChange} value={location} />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  )
}

export default LandingPage