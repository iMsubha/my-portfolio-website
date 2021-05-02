import React from "react";

const progressBar = (props) => {
  const { bgcolor, completed,title } = props;
  console.log(props.name);
  const containerStyles = {
    height: 20,
    width: '60%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: '20px'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div className="d-flex justify-content-around align-items-center mt-5">
    <h6>{title}</h6>
    <div style={containerStyles} >
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>

    </div>
  );
};

export default progressBar;