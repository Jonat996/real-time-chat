import { useEffect, useState } from "react";
import "./firebase/config";
import { Button, TextField } from "@mui/material";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase/config";
import { addMessage } from "./firebase/register.manager";

function App() {
  const [messages, setMessages] = useState<any>([]);
  useEffect(() => {
    getOnlyCategories();
  }, [messages]);

  const [text, setText] = useState("");
  const getOnlyCategories = async () => {
    const MessagesArray: any = [];
    const messages = collection(db, "messages");

    onSnapshot(messages, (q) => {
      setMessages([]);
      q.forEach((doc) => MessagesArray.push(doc.data()));
      setMessages(MessagesArray);
    });
  };

  return (
    <div className="App">
      <div className="contenido">
         <ol>
        {messages.map((m:any) => {
          return <li>{m.message} </li>;
        })}
        </ol>
     
      </div>
      <div className="mensaje">
        {" "}
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(t) => setText(t.target.value)}
        />
        <Button onClick={() => addMessage(text)}>Send</Button>
      </div>
    </div>
  );
}

export default App;
