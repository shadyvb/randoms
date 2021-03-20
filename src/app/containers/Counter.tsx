import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames-prefix';

import { actions, selectors } from '../store/slices/counter';

export function Counter () {
  const { increment, decrement, incrementByAmount, incrementAsync } = actions;
  const { selectCount } = selectors;

  const count = useSelector( selectCount );
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState( '2' );
  const cx = classnames( 'counter' );

  return (
    <div className={cx( '' )}>
      <div className={cx( '__row' )}>
        <button
          className={cx( '__button' )}
          aria-label="Increment value"
          onClick={() => dispatch( increment() )}
        >
          +
        </button>
        <span className={cx( '__value' )}>{count}</span>
        <button
          className={cx( '__button' )}
          aria-label="Decrement value"
          onClick={() => dispatch( decrement() )}
        >
          -
        </button>
      </div>
      <div className={cx( '__row' )}>
        <input
          className={cx( '__textbox' )}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount( e.target.value )}
        />
        <button
          className={cx( '__button' )}
          onClick={() =>
            dispatch( incrementByAmount( Number( incrementAmount ) || 0 ) )
          }
        >
          Add Amount
        </button>
        <button
          className={cx( '__asyncButton' )}
          onClick={() => dispatch( incrementAsync( Number( incrementAmount ) || 0 ) )}
        >
          Add Async
        </button>
      </div>
    </ div>
  );
}
