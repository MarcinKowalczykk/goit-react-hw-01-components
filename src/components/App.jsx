import Profile from "./profile/Profile";
import user from 'user';
// import Statistics from "./statistics/Statistics"
export const App = () => {
  return (
    <Profile
    username = {user.username}
    tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    
  );
};
