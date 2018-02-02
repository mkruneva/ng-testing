import { UsersComponent } from './ex-4-user.component';
import { UserService } from './ex-4-user.service';

describe('UserComponent', () => {
  let component: UsersComponent;
  let service: UserService;

  beforeEach(() => {
      service = new UserService(null);
      component = new UsersComponent(service);
  });

  it('should create UserComponent', () => {
    expect(component).toBeTruthy();
  });
});
