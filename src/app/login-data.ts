import { InMemoryDbService } from 'angular-in-memory-web-api';

export class LoginData implements InMemoryDbService {
  createDb() {
    let userDetails = [
      
      {user: 'ester', password: '12345', description: 'Java'},
      {user: 'boaz', password: '12345', description: 'Java'}
      
    ];
    return { users: userDetails };
  }
} 