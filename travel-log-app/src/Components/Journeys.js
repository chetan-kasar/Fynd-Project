import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Journeys = (props) => {

    const cardStyle = {
        width: "15rem",
        float: "left",
        marginLeft:"2.5%",
        marginBottom: "2%",
    }

    const[userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://fynd-project-backend.vercel.app/get")
          .then(response => {
            setUserData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return (
      <div>
        {
          userData.map((ele)=>{
              return (
                  <>
                      <div className="card" style={cardStyle}>
                          <img src= {`data:image/jpeg;base64,${ele.titleData.titleImage}`} className="card-img-top2" alt="..."/>
                          <div className="card-body">
                              <h5 className="card-title">{ele.titleData.title}</h5>
                              <p className="date-time--txt">{ele.dateTime.date}</p>
                              <p className="date-time--txt">{ele.dateTime.time}</p>
                              <Link onClick={()=>{props.cardClick(ele)}} to={"/usercomponent"} className="card-link stretched-link"></Link>                       
                          </div>
                      </div>
                  </>
              )
          })
        }
      </div>
    )
}

export default Journeys
