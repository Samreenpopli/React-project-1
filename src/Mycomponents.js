import React from 'react';

const Mycomponents= () =>
{
  return (
    <div>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{backgroundColor:'red', width:'300px',minHeight:'200px'}}>This is the colour red</div>
      <div style={{backgroundColor:'blue',width:'300px',minHeight:'200px'}}>This is the colour blue</div>
    </div>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{backgroundColor:'black',width:'300px',minHeight:'200px'}}>This is the colour black</div>
      <div style={{backgroundColor:'yellow',width:'300px',minHeight:'200px'}}>This is the colour yellow</div>
    </div>
     
    </div>
  );
}

export default Mycomponents;
