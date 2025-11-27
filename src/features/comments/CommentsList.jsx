import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, resetComments } from "./commentsSlice";

export default function CommentsList() {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");

  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (user.trim() === "" || text.trim() === "") return;
    dispatch(addComment({ user, text }));
    setText("");
    setUser("");
  };

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <input
        type="text"
        placeholder="Votre nom"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Votre commentaire"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <button
        onClick={handleAdd}
        style={{
          background: "#007bff",
          color: "white",
          padding: 10,
          width: "100%",
          border: "none",
          marginBottom: 10,
        }}
      >
        Ajouter le commentaire
      </button>

      <button
        onClick={() => dispatch(resetComments())}
        style={{
          background: "#444",
          color: "white",
          padding: 10,
          width: "100%",
          border: "none",
        }}
      >
        Réinitialiser
      </button>

      <h3 style={{ marginTop: 20 }}>Commentaires :</h3>

      <ul>
        {comments.map((c, index) => (
          <li key={index}>
            <strong>{c.user}</strong> : {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
