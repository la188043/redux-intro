import { useSelector, useDispatch } from 'react-redux';

import createAction from '../utils/createAction.utils';

import { SIGN_IN, SIGN_OUT } from '../actions/auth.actionTypes';
import { RootState } from '../reducers/RootState';

const Auth = () => {
  const isLogged = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  return (
    <>
      {isLogged && <h3>Information I shouldn't see if I'm not logged in</h3>}
      <div className="buttons">
        <button
          className="button"
          onClick={() => dispatch(createAction(SIGN_IN))}
        >
          Log in
        </button>
        <button
          className="button"
          onClick={() => dispatch(createAction(SIGN_OUT))}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Auth;
