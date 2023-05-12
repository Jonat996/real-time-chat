import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

export const addMessage = async (message: string) => {
  try {
    await addDoc(collection(db, "messages"), {message});
  } catch (e) {
    console.log(e);
  }
};
