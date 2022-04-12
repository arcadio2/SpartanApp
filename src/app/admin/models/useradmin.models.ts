import { User } from '../../models/user.model';
export interface UserRole{
    user:User;
    isAdmin:boolean;
    isInstructor:boolean;

}