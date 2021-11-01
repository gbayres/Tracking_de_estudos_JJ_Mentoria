function add(x: number, y: number): number {
    return x + y;
}

const multiply = (x: number, y: number): number => (x*y);

const subtract: (x: number, y: number) => number = (x, y) => (x - y);

type User = {
    name: string,
    id: number
}

type LevelAdmin = 'teacher' | 'coordinator' | 'manager';

type Admin = {
    isAdmin: true,
    level: LevelAdmin
};

type UserAdmin = User & Admin;

let daniel: UserAdmin = {
    name: 'daniel',
    id: 0,
    isAdmin: true,
    level: 'teacher'
}

type IsAdmin = (user: UserAdmin) => boolean;

const isAdmin: IsAdmin = user => !!(user as UserAdmin).isAdmin;