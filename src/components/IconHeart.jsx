import PropTypes from 'prop-types';

const IconHeart = ({ filled }) => {
  return (
    <svg
      width="40px"
      viewBox="-1 -2 18 18"
      fill={filled ? "red" : "white"}
    >
      <path
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
};

IconHeart.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default IconHeart;