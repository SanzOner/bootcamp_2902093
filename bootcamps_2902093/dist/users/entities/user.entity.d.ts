export declare class User {
    id: number;
    name: string;
    email: string;
    role: roleUser;
    password: string;
}
declare enum roleUser {
    'Usuario' = 0,
    'Editor' = 1,
    'Administador' = 2
}
export {};
