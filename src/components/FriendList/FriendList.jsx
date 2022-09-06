import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({friends}) => (<ul className="friend-list">
  {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
</ul>)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default FriendList;