
import css from "./Profile.module.css"
import PropTypes from "prop-types";

export default function Profile({
    username,
    tag,
    location,
    avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png" ,
    stats,

}) {
    return (
        <div className={css.profile}>
<div className={css.description}>
<img src={avatar} alt='User' className={css.avatar} />
<p className={css.name}>{username}</p>
<p className={css.tag}>{tag}</p>
<p className={css.location}>{location}</p>
</div>
<ul className={css.stats}>
    <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
    <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
    <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
    </li>
</ul>
        </div>
    )
}
Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
      }),
  };
