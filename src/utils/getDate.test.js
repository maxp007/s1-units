import React from 'react'
import {getDate,} from './getDate';


describe('getDate function', () => {

    it('timestamp is as expected', () => {
        const first_timestamp = 0;
        const date =  getDate(first_timestamp);
        expect(date).toEqual('1 января, чт, 1970 год');
    });
});
