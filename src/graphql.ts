
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateStudentInput {
    name: string;
    email: string;
    age: number;
}

export class Student {
    id: string;
    name: string;
    email: string;
    age?: Nullable<number>;
    createdAt: string;
    updatedAt?: Nullable<string>;
}

export abstract class IQuery {
    abstract getStuff(): string | Promise<string>;
}

export abstract class IMutation {
    abstract createStudent(student: CreateStudentInput): Student | Promise<Student>;
}

type Nullable<T> = T | null;
