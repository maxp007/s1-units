import React from 'react'
import {sortByDate, sortByItemCount, sortByItemNames} from './sortOrders';

describe('sortByItemCount function', () => {
    it('orders are null', () => {
        const result = sortByItemCount(null, null);
        expect(result).toEqual(0);
    });

    it('orders are not objects', () => {

        const result = sortByItemCount(1, 1);
        expect(result).toEqual(0);
    });

    it('items are null', () => {
        const order1 = {
            items: [null, 'item2'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });

    it('items count1 > items count2 ', () => {
        const order1 = {
            items: ['item1', 'item2', 'item3'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(1);
    });


    it('items count1 < items count2', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['1', '2', '3'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(-1);
    });


    it('same items count', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });
});

describe('SortByDate function', () => {
    it('orders are null', () => {
        const result = sortByDate(null, null);
        expect(result).toEqual(0);
    });

    it('orders are not objects', () => {
        const result = sortByDate(1, 1);
        expect(result).toEqual(0);
    });
    it('date is null equal', () => {
        const order1 = {
            date: null,
        };

        const order2 = {
            date: 1,
        };

        const result = sortByDate(order1, order2);
        expect(result).toBe(0);
    });
    it('dates are equal', () => {
        const order1 = {
            date: 1,
        };

        const order2 = {
            date: 1,
        };

        const result = sortByDate(order1, order2);
        expect(result).toBe(0);
    });
    it('date1 < date2', () => {
        const order1 = {
            date:1,
        };

        const order2 = {
            date:2,
        };

        const result = sortByDate(order1, order2);
        expect(result).toBe(1);
    });
    it('date1 > date2', () => {
        const order1 = {
            date: 2,
        };

        const order2 = {
            date: 1,
        };

        const result = sortByDate(order1, order2);
        expect(result).toBe(-1);
    });
});

describe('SortByItemNames function', () => {
    it('orders are null', () => {
        const result = sortByItemNames(null, null);
        expect(result).toEqual(0);
    });

    it('orders are not objects', () => {
        const result = sortByItemNames(1, 1);
        expect(result).toEqual(0);
    });

    it('item names are null', () => {
        const order1 = {
            items: [null, 'item2'],
        };

        const order2 = {
            items: ['item1', 'item2'],
        };

        const result = sortByItemNames(order1, order2);
        expect(result).toEqual(0);
    });


    it('names are equal', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['item1', 'item2'],
        };

        const result = sortByItemNames(order1, order2);
        expect(result).toBe(0);
    });

    it('name1 < name2', () => {
        const order1 = {
            items: ['item1', 'item1'],
        };

        const order2 = {
            items: ['item3', 'item4'],
        };

        const result = sortByItemNames(order1, order2);
        expect(result).toBe(-1);
    });

    it('name1 > name2', () => {
        const order1 = {
            items: ['item3', 'item4'],
        };

        const order2 = {
            items: ['item1', 'item2'],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(1);
    });

});
