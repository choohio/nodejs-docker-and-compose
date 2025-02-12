import { User } from './users/entities/user.entity';

export interface ICustomReq extends Request {
  user: User;
}
