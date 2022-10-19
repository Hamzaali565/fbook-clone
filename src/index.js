import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faShare, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function Post(props) {
  return (<>
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
    </>
  );
}
ReactDom.render(
<>
<Post name = "Sultan Saeed"
 profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ3K8qhjVc4IBNtD8-B9-UjinDocH4fh2h7xO9VTW&s"
 postDate = "14 Sep 2022"
 postText= "One Bad Chapter Doesn't Mean your Story is Over"
 postImage ="https://i.pinimg.com/564x/4f/80/43/4f80437432fd5dbfecf3204e666c3047.jpg"
 
 
 
 
 />
 
<Post name = "Fahad Bedani"
 profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ3K8qhjVc4IBNtD8-B9-UjinDocH4fh2h7xO9VTW&s"
 postDate = "14 aug 2022"
 postText= "One Bad Chapter Doesn't Mean your Story is Over"
 postImage ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSA-HV8v9xZNgCGt394x0wHvARowqgXvxwgIPGHmPL&s"
 
 
 />
<Post name = "Muhammad Hamza Ali"
 profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ3K8qhjVc4IBNtD8-B9-UjinDocH4fh2h7xO9VTW&s"
 postDate = "14 jul 2022"
 postText= "One Bad Chapter Doesn't Mean your Story is Over"
 postImage ="https://www.desicomments.com/wp-content/uploads/2018/11/Jerry-Sitting-On-Tom-Head-600x748.png"/>
 

</>
, document.querySelector("#root"));
