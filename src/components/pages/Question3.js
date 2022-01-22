import React, { useRef, useEffect } from 'react';

const Question3 = () => {
  const [disabled, setDisabled] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(true);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDisabled(true)
    }
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
    if (value.length === 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }


  return (
    isVisible && (
    <section ref={wrapperRef}>
    {disabled &&  'Please enter 6 characters'}
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">Password</label>
          <input
            type="password"
            value={inputValue}
            onChange={handleInputChange}
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mb-2" disabled={inputValue.length < 6}>Submit</button>
      </form>
    </section>
    )

  );
};

export default Question3;