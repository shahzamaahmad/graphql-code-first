
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Book {
    id: number;
    author: string;
    name: string;
    price: number;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
}

type Nullable<T> = T | null;
