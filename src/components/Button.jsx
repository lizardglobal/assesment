const Button = ({ text, onClick }) => {
    return (
      <button type="button" onClick={onClick} className="btn btn-primary">
        {text}
      </button>
    );
  }

  Button.defaultProps = {
      text: 'Assessment'
  }
  
  export default Button;
  