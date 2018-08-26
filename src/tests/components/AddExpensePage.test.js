import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

describe('AddExpensePage', () => {
    test('should render AddExpensePage correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('AddExpensePage', () => {
    test('should handle addExpense', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
    });
});