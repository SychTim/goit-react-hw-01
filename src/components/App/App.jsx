import userData from '../../userData.json';
import frendsList from "../../frendsList";
import transactions from "../../transactions.json"
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import './App.css';


export default function App() {
  return (
    <>
      <Profile userData={userData}/>
      <FriendList frends={frendsList}/>
      <TransactionHistory transactions={transactions}/>
    </>
  );
};
