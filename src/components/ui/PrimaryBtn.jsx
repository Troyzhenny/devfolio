import propTypes from "prop-types";

const PrimaryBtn = ({ value, url }) => {
  const handleClick = () => {
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error('Invalid URL');
    }
  };

  return (
    <input
      type="button"
      value={value}
      className="primary--btn pointer"
      onClick={handleClick}
      disabled={!url}
    />
  );
};

PrimaryBtn.propTypes = {
  value: propTypes.string.isRequired,
  url: propTypes.string,
};

export default PrimaryBtn;
