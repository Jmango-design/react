import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: " looking forward to it I can't wait to try it out. Lol",
      name: "Mari Bel",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/667208/pexels-photo-667208.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      desc: "Just let me know as soon as it's up so I can post my guitar skills.Haha",
      name: "Sanjay Gunta",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/977971/pexels-photo-977971.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
