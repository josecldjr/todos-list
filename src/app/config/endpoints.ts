
/** Url base da API */
const API_BASE_URL = 'https://todowebservice.herokuapp.com/api'

/** Url base do webapp */
const APP_NASE_URL = 'http://localhost:4200'

export default {
    todos: {
        /** Endpoit padrão para todo's */
        default:`${API_BASE_URL}/todos`,

        /** Endpoint para get de todo único */
        get: `${API_BASE_URL}/todos/:id`,
    }

}
