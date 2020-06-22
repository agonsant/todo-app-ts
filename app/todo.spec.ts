import { TodoList } from './todo'

test('When Todo List is created, it should be instantiated', () => {
    const todoList = new TodoList();
    expect(todoList).toBeDefined();
})