export interface User {
    id: number;
    email: string;
    password: string;
}
export declare class UsersService {
    constructor();
    private readonly users;
    findOne(email: string): Promise<User>;
}
