function Time() {
    let currentTime = new Date().toLocaleTimeString();
  
    return (
      <h2>
        {currentTime}
      </h2>
    );
  }
  
  export default Time;