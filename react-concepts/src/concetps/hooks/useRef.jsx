// Accesses a DOM element directly or keeps a mutable object that does not cause re-renders when changed.

import React, { useRef, useEffect } from 'react';
function TextInput() {
  const inputRef = useRef(null);

  useEffect(() => {
	inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} />;
}
export default TextInput;
