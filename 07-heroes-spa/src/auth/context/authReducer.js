import { types } from "../types/types";

// Creamos el reducer para manejar las acciones de nuestro contexto, en el que utilizamos los types declarados en nuestro archivo types, para determinar las acciones y el retorno de las mismas
// El estado inicial que tenemos como primer argumento del reducer, es un objeto vacio, que luego se cambiara segun las acciones del reducer
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        // En el caso del type.login, retornamos la desestructuración del state, por si se añaden nuevas propiedades en un futuro
        // Y establecenmos el logged como true, ya que el usuario se ha loggeado y tambien pasamos el nombre del usuario que sera igual al action.payload
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        // En elcaso del logout, pasamos el logged a false ya que el usuario ha cerrado la sesión y ademas eliminamos el name, ya que al no existir un user loggeado, tampoco existe un name.
        case types.logout:
            return {
                logged: false,
            };
        // En el caso de que recibamos una acción que no sea ninguna de las definidas, simplemente en el default regresamos el state, que seria igual al estado inicial que pasamos como primer argumento, es decir un objeto vacio.
        default:
            return state;
    }

}