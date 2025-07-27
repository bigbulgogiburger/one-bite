import { useState } from 'react';
const Bulb = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleClick = () => setIsLightOn(!isLightOn);

  return (
    <div>
      {isLightOn ? (
        <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      )}
      <div>
        <h1>{isLightOn ? 'ON' : 'OFF'}</h1>
        <button onClick={handleClick}>
          {isLightOn ? 'Turn off' : 'Turn on'}
        </button>
      </div>
    </div>
  );
};

export default Bulb;
