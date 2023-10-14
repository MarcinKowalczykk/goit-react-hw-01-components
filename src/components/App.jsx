import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from 'user';
import data from 'data';
import friends from 'friends';
import transactions from 'transactions';

export const App = () => {
  return (
    <>
    <Profile
    username = {user.username}
    tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
       <Statistics
              title="upload stats"
              stats={data}
            />
             <FriendList
              friends={friends}
            />
             <TransactionHistory 
              transactions={transactions}
            />
    </>
  );
};
