import PropTypes from 'prop-types';

function UserPerfil({ avatar, name, description }) {
  return (
    <div className='cont_userPerfil'>
      <div>
        <img src={avatar} alt={`${name} avatar`} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default UserPerfil;

UserPerfil.propTypes = {
  avatar: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
};
