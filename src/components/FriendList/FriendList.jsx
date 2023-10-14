
import css from "./FriendList.module.css";
import clsx from "clsx";

import PropTypes from "prop-types";

export default function FriendList({friends}) {
    return (
        <ul className={css["friends-list"]}>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem
                 avatar={avatar}
                 name={name}
                 isOnline={isOnline}
                 key={id}
                />
            ))}
        </ul>
    )
}

function FriendListItem({avatar, name, isOnline}) {
    return (
        <li 
         className={css.item}
        >
            <span className={clsx([css.status], isOnline && [css.isOnline])}></span>
            <img
             className={css.avatar}
             src={avatar}
             alt="User avatar"
             width="40"
            />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
  };

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}