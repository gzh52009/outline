declare class User {
    name: string;
    readonly age: number;
    private gender;
    protected score: number;
    static type: string;
    constructor(name: string, gender?: string);
    sayHello(): string;
}
declare const lx: User;
declare class Student extends User {
    constructor(name: string, gender?: string);
    getScore(): number;
}
declare const xiaoxie: Student;
