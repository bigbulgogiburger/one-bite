const Button = ({ text, color = 'black', children }) => {
  const handleClick = (event) => {
    console.log(event);
    console.log(text);
  };

  return (
    <button onClick={handleClick} style={{ color }}>
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
