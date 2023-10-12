
import css from "./Profile.module.css"
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
<p className='name'>{username}</p>
<p className='tag'>{tag}</p>
<p className='location'>{location}</p>
</div>
<ul className={css.stats}>
    <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
    </li>
    <li>
    <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
    </li>
    <li>
    <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
    </li>
</ul>
        </div>
    )
}

