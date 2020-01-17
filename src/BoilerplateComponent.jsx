import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.object
};

const defaultProps = {
  styles: {
    label: {
      fontFamily: "Comic Sans MS",
      color: "green"
    },
    input: {
      background: "#ddd",
      border: "1px solid red"
    }
  }
};

const BoilerplateComponent = props => {
  const styles = props.styles || {};

  const handleChange = e => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <label style={styles.label}>{props.label}</label>
      <input type="text" style={styles.input} onChange={handleChange} />
    </div>
  );
};

BoilerplateComponent.propTypes = propTypes;
BoilerplateComponent.defaultProps = defaultProps;

export default BoilerplateComponent;
