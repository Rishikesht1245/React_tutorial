const ErrorExample = () => {
  let count = 0;

  const handleCLick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h3>{count}</h3>
      <button type="submit" onClick={handleCLick}>
        Increase Count
      </button>
    </div>
  );
};

export default ErrorExample;
