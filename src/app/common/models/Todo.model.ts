
/**
 * MODEL
 * Model pata todo(tarefa)
 */
export class Todo {
    /** Id da tarefa */
    _id: string
    /** Descrição  */
    description: string
    /** Data em que a tarefa foi criada */
    createdAt: Date
    /** Se a tarefa já foi feita */
    done: boolean
}