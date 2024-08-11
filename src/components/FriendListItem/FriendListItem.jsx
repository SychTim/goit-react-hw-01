import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css"


export default function FriendListItem({friend: {avatar, name, isOnline}}) { 
    return (<>
                <div>
                    <img className={css.img} src={avatar} alt={name} width="85" />
                    <p>{name}</p>
                    <p style={{color: isOnline ? "green" : "red"}}>{isOnline ? "Online" : "Offline"}</p>
                </div>
            </>)
}

FriendListItem.propTypes = {
    friend: PropTypes.object,
};