import * as fromUsersApp from './users-app.actions';

describe('loadUsersApps', () => {
  it('should return an action', () => {
    expect(fromUsersApp.loadUsersApps().type).toBe('[UsersApp] Load UsersApps');
  });
});
