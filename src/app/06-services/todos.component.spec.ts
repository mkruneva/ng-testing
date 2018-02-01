import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    const fake_todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => Observable.from([fake_todos]));

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(fake_todos);
  });

  it('should call the server to save changes when a new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake((t) => Observable.empty());

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo returned from the server ', () => {
    const fake_todo = {id: 1};
    const spy = spyOn(service, 'add').and.returnValue(Observable.from([fake_todo]));

    component.add();

    expect(component.todos.indexOf(fake_todo)).toBeGreaterThan(-1);
  });

  it('should set message property if error is returned from server when adding new todo ', () => {
    const err = 'error from server on add todo method';
    const spy = spyOn(service, 'add').and.returnValue(Observable.throw(err));

    component.add();

    expect(component.message).toBeDefined();
    expect(component.message).toBe(err);
  });

  it('should call the server to delete a todo item if user confirms', () => {
    const spyConfirm = spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if user clicks cancel', () => {
    const spyConfirm = spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
