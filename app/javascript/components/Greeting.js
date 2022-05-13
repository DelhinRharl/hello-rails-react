import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/greeting';
const Greeting = () => {
  const { message } = useSelector((state) => state.greetings);
 const dispatch = useDispatch();
  return (
    <React.Fragment>
      <p>{message}</p>
        <button onClick={() => dispatch(fetchMessage())}>Get New Message</button>
    </React.Fragment>
  );
};

export default Greeting;
