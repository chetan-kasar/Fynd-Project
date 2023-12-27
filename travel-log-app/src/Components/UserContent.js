import React from 'react'
import { Link } from 'react-router-dom'

const UserContent = (props) => {
  const flightStyle = {
    height:"100px",
    width:"100px"
  }
  return (
    <div className="userData">
      <div className="child1">

        <div className="child2">
          <div className="heading">Title</div>
          <h1>{props.userData.titleData.title}</h1>
        </div>

        <div className="child2">
          <div className="heading">Weather</div>
          <img src={props.userData.weatherData.weatherImg}/>
          <h1>{props.userData.weatherData.weather}</h1>
          <h1>{props.userData.weatherData.temprature} &#8451;</h1>
        </div>

        <div className="child2">
          <div className="heading">Note</div>
          <p className="text-content">{props.userData.textContent.content}</p>
        </div>

        <div className="child3">
          <div className="heading">Flight</div>

          <div className='child3-s1'>
            <p className="p-1">{props.userData.flightData.fromInput}</p>
            <img style={flightStyle} src={require("../Icons/airplane.png")}/>
            <p className="p-2">{props.userData.flightData.toInput}</p>
          </div>

          <div className='child3-s2'>
            <p className="p-3">{props.userData.flightData.departure}</p>
            <p className="p-4">{props.userData.flightData.destination}</p>
          </div>
        </div>

        <div className="child4">
          <div className="heading">Photos</div>
          {
            props.userData.albumData.photos.map((ele)=>{
              return (<img className="photo-sec" src={`data:image/jpeg;base64,${ele.e}`}/>);
            })

          }
        </div>

      </div>
    </div>
  )
}

export default UserContent
