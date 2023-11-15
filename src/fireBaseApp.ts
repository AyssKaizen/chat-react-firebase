import { initializeApp } from 'firebase/app';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAUfsjupn0QvE1vR-nbqHb0CaCi8XNeyMM",
    authDomain: "chat-react-next.firebaseapp.com",
    databaseURL: "https://chat-react-next-default-rtdb.europe-west1.firebasedatabase.app",
};

const firebaseApp = initializeApp(firebaseConfig);
const databaseTest = getDatabase(firebaseApp)



export {firebaseApp};
export default databaseTest;



