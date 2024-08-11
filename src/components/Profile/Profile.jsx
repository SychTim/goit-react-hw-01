import PropTypes from 'prop-types';
import css from "./Profile.module.css";

export default function Profile({userData: {username, tag, location, avatar, stats: {followers, views, likes}}}) {
    return (<div className={css.profile}>
                <div className={css.information}>
                <img className={css.img}
                    src={avatar}
                    alt={username}
                />
                <p className={css.name}>{username}</p>
                <p className={css.text}>{tag}</p>
                <p className={css.text}>{location}</p>
                </div>
            
                <ul className={css.list}>
                <li className={css.item}>
                    <span>Followers</span>
                    <span className={css.value}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span>Views</span>
                    <span className={css.value}>{views}</span>
                </li>
                <li className={css.item}>
                    <span>Likes</span>
                    <span className={css.value}>{likes}</span>
                </li>
                </ul>
            </div>);
};

Profile.propTypes = {
    userData: PropTypes.object,
    stats: PropTypes.object,
};