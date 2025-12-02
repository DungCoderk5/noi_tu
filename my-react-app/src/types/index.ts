export type User = {
    id: number;
    name: string;
    email: string;
};

export interface ApiResponse<T> {
    data: T;
    error?: string;
}

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};