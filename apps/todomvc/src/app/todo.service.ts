import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

    // Placeholder for last id so we can simulate
    // automatic incrementing of id's
    lastId: number = 0;

    // Placeholder for todo's
    todos: Todo[] = [];

    constructor(private http: HttpClient) {}

    search(text): Observable<Todo[]> {
        return this.http.get<Todo[]>('tasks/search?title=' + text);
    }

    showActive(): Observable<Todo[]> {
        return this.http.get<Todo[]>('tasks/active');
    }

    // Simulate GET /todos
    getAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('tasks');
    }

    // Simulate POST /todos
    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>('tasks', todo);
    }

    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): Observable<Todo> {
        return this.http.delete<Todo>('tasks/' + id);
    }

    // Simulate PUT /todos/:id
    updateTodoById(todo): Observable<Todo> {
        return this.http.patch<Todo>('tasks', todo);
    }

    // Toggle todo complete
    toggleTodoComplete(todo: Todo) {
        return this.http.patch<Todo>('tasks', todo);
    }
}