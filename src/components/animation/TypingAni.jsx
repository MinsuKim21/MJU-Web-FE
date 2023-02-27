import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function TypingAni({ children, textColor, fontSize, fontWeight }) {
  const txt = `${children}`;
  console.log(txt);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(text);
      setText(text + txt[count]);
      setCount(count + 1);
    }, 120);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="w-full">
      <pre className={`${textColor} ${fontSize} ${fontWeight} inline animate-typingCursor`}>{text}</pre>
    </div>
  );
}

TypingAni.propsTypes = {
  children: PropTypes.node.isRequired,
};

TypingAni.defaultProps = {
  textColor: 'text-white',
  fontSize: 'text-9xl',
  fontWeight: 'font-black',
};
