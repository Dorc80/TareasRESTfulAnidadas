export interface Tarea {
    _id: string;
    completed: boolean;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface TareasResponse {
    message: string;
    tareas: Tarea[];
}

export interface TareaResponse {
    message: string;
    tarea: Tarea;
}