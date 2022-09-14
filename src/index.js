import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faShare, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function Post(props) {
  return (
    <div className="mainDiv">
    <div className="post">
     <div className="postHeader">
       <img  src={props.profilePhoto} className="profile"/>
      <div>
       {props.name}<br/>
       {moment(props.postDate).fromNow()}
       </div>
       </div>
       <div className="postText">
      {props.postText}
       </div>
       <div >
       <img  src={props.postImage} className="postImage" />
       </div>
      <hr/>
       <div className="botButtons">
      <FontAwesomeIcon icon={faThumbsUp}/>Like
     <FontAwesomeIcon icon={faComment}/>Commnet
      <FontAwesomeIcon icon={faShare}/>Share
      </div>
      <hr/>
      
      </div>
    </div>
  );
}
ReactDom.render(
<>
<Post name = "Sultan Saeed"
 profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ3K8qhjVc4IBNtD8-B9-UjinDocH4fh2h7xO9VTW&s"
 postDate = "14 Sep 2022"
 postText= "One Bad Chapter Doesn't Mean your Story is Over"
 postImage ="https://scontent.fkhi4-2.fna.fbcdn.net/v/t39.30808-6/306923614_5318032401649974_2417310871966049680_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFfvcFJgIxLT7pOw-9ESUh7XFVp_ITaE0RcVWn8hNoTREBhz5KMCOzLJVyOyh_hW1RfTWiRAKGmuCclgPJJ6Wg-&_nc_ohc=SeLoUamUzRYAX81AjJH&_nc_zt=23&_nc_ht=scontent.fkhi4-2.fna&oh=00_AT8GzbZ6e3z6I6QhzI1D6OIALQzzVJ7eWY0K1DHWv_Lecg&oe=63272DF2"
 
 
 
 
 />
 
<Post name = "Fahad Bedani"
 profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ3K8qhjVc4IBNtD8-B9-UjinDocH4fh2h7xO9VTW&s"
 postDate = "14 aug 2022"
 postText= "One Bad Chapter Doesn't Mean your Story is Over"
 postImage ="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/306602385_751661729467351_528837907484313187_n.jpg?stp=dst-jpg_s640x640&_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHq3nE_QFAApv0MRnOjYT1Y6ZFVERLday_pkVUREt1rLz5A6XcnXLTjfgQ4pksOJMcVvPRlM6F8Qm7fK_dPIUNW&_nc_ohc=VJ_lEi7qDNIAX8PXpbb&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AT8zBVeBSia2gRqKYHcO_f2AduO3VZdgsRzSJ-P8SYuRaQ&oe=63270A45"
 
 
 />
<Post name = "Muhammad Hamza Ali"
 profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ3K8qhjVc4IBNtD8-B9-UjinDocH4fh2h7xO9VTW&s"
 postDate = "14 jul 2022"
 postText= "One Bad Chapter Doesn't Mean your Story is Over"
 postImage ="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-6/307179039_1779080535793591_8565300619712794253_n.jpg?stp=dst-jpg_p552x414&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGdvUbdvMQlYak4BKM8KkTYaOX4eKmuOq1o5fh4qa46rcsoRoKM9p-ImABWwdIQJPuulxv-H0iBvEFMYcItxg-E&_nc_ohc=cI7xtP2b0vIAX-DKjQZ&tn=iJbtXxBCAgPS5bdR&_nc_zt=23&_nc_ht=scontent.fkhi4-4.fna&oh=00_AT_q5bgPymL-jaIo34G-jcRjBOkwMpZbfmLBbFxeLLWdpA&oe=632742B4"/>
 

</>
, document.querySelector("#root"));
