import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';


it('has a textarea a button', ()=>{
    const wrapped =mount(<CommentBox/>);
});