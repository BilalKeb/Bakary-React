import React from 'react';

class Button extends React.Component {
  render() {
    const { handleClick, children, isSelected } = this.props

    console.log("this.props  Button :", this.props)

    return (
      <>
        <button 
          className={`
            btn btn-warning m-3
            ${isSelected && "btn-warning"}
          `}
          onClick={() => handleClick(children)}
        >
          {children}
        </button>
      </>
    );
  }
}

export default Button;