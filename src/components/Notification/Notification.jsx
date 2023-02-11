import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css.color}>{message}</p>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

// geegge
export default Notification