import propTypes from "prop-types";

const SecondaryButton = ({ value, url }) => {
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
      className="secondaryBtn pointer"
      onClick={handleClick}
      disabled={!url}
    />
  );
};

SecondaryButton.propTypes = {
  value: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

export default SecondaryButton;
