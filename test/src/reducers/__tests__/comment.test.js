import commentsReducers from 'reducers/comments';

import { SAVE_COMMENT } from 'actions/types'


it('handles actions of types SAVE_COMMENT', ()=>{
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };
    const newState = commentsReducers([], action);
    expect(newState).toEqual(['New Comment']);
})

it('handles action with unknown type', ()=>{
   const newState = commentsReducers([], {type: 'jfdkjfkdjfkdf'});
   expect(newState).toEqual([]);
})