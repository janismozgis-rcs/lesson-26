import { useState } from 'react';

function Homework() {
  const [text, setText] = useState('');
  const titleStyle = {color: 'yellow'};

  const changeText = (event) => {
    const newValue = event.target.value;
    setText(newValue);
  }

  let title = 'Got nothing... :(';
  if (text.length > 0) {
    title = text;
  }

  if (title === 'red') {
    titleStyle.color = 'red';
  }
  if (title === 'green') {
    titleStyle.color = 'green';
  }
  if (title === 'blue') {
    titleStyle.color = 'blue';
  }

  return (
    <div>
      <h1 style={titleStyle}>{title}</h1>
      <input value={text} onChange={changeText} />
    </div>
  );
}

export default Homework;
