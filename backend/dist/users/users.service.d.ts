export interface User {
    email: string;
    password: string;
}
export declare class UsersService {
    private readonly users;
    findOne(email: string): Promise<User>;
}
