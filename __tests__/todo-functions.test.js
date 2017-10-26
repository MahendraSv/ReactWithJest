import { toggleDone, deleteTodo } from '../src/todo-functions';

describe('First Test Case', () => {
    
});

beforeEach(() => {
    const startState = {
        todos: [
            {id: 1, done: true, text: 'test'}
        ]
    };
})

test('toggleDone completes an incomplete todo', () => {
    const startState = {
        todos: [
            {id: 1, done: true, text: 'test'}
        ]
    };

    const finState = toggleDone(startState, 1);

    expect(finState.todos).toEqual([
        {id: 1, done: false, text: 'test'}
    ]);
});

test('deleteTodo deletes the todo it is given', () => {
    const startState = {
        todos: [
            {id: 1, done: false, text: 'test'}
        ]
    };

    const finState = deleteTodo(startState, 1);
    
        expect(finState.todos).toEqual([]);
});