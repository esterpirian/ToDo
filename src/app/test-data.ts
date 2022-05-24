import { InMemoryDbService } from 'angular-in-memory-web-api';
import{Article} from './models/article'
export class TestData implements InMemoryDbService {
  createDb() {
    let articleDetails = [
      {id: '1', title: 'Core Java Tutorial', category: 'Java'},
      {id: '2', title: 'Angular Tutorial', category: 'Angular'},
      {id: '3', title: 'Hibernate Tutorial', category: 'Hibernate'}
    ];
    let userDetails = [
      {user: 'ester', password: '12345', description: 'xxx'},
      {user: 'boaz', password: '12345', description: 'Java'}
      
    ];
    let usersDataSa = [
      {}
    ];
    return { articles: articleDetails,users:userDetails ,usersData:usersDataSa};

  
    
  }
} 