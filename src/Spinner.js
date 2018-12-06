import React from 'react';

const Spinner = (props) => {
  return (
    <div style={{height: '100vh', border: 0}} className="ui segment">
      <div className="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
    </div>
  );
}

Spinner.defaultProps = {
  message: "Loading..."
}

export default Spinner;
