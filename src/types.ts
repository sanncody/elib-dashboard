export interface Author {
    _id: string;
    name: string;
    email: string;
}

export interface Book {
    _id: string;
    title: string;
    author: Author;
    genre: string;
    coverImage: string;
    file: string;
    createdAt?: Date;
    updatedAt?: Date;
}