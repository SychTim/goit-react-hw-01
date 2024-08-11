import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from "./FriendList.module.css";

export default function FriendList({frends}) {
    return (
        <ul className={css.list}>{frends.map(friend => {
            return (
                <li className={css.item} key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            ) 
        })}</ul>
    )
}

FriendList.propTypes = {
    frends: PropTypes.array,
};