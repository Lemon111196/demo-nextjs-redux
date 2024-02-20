export interface IAuth {
    isAuthenticated: boolean,
    user: any
};

export interface INote {
    id: number | string,
    title: string;
    content: string;
    status: string;
}

export interface NoteState {
    notes: INote[];
}