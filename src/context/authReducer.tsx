/* eslint-disable prettier/prettier */
import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'sing-in' }
  | { type: 'change-fav-icon', payload: string }
  | { type: 'sing-out' }
  | { type: 'sing-in-with-user', payload: string };

// PASO 9. esta es una simple funcion encargada de evaluar condiciones
// y en funcion de ellas crear las respectivas modificaciones al estado.
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  // PASO 9.1. mediante TypeScript le indico que simpre retornara un valor
  // del tipo definido como valor incial, de esa forma el retorno de un nuevo
  // estado estará siempre controlado.

  // PASO 10. los parametros definidos corresponden a
  //  - state: que debe ser del mismo tipo que el valor de retorno,
  //    ya que siempre devemos regresar un valor del mismo tipo pero
  //    con sus respectivas propiedades actualizadas.
  //  - action: corresponde a la accion que se desea ejecutar en el momento
  //    ya sea actualizar una propiedad o eliminarla por ejemplo, junto
  //    el nuevo valor a asignar, de forma que tendre en este parametro
  //    disponible el caso que se ejecutara junto el valor que se aplicara
  //    a "x" propiedad.


  // PASO 12. definir una forma de evaluar los diferentes posibles casos
  // que se pueden resolver dentro del recuder y en foncion de ellos SIEMPRE
  // devolver un estado del mismo tipo, ya sea actualizado o no.
  switch (action.type) {

    // PASO 13. NUNCA se debe mutar un state, simpre se debe crear una nueva
    // referencia del estado, esto para que React puede "darse cuenta" de que
    // el state fue actualizado.

    case 'sing-in':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'Daniel HC',
      };

    case 'change-fav-icon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'sing-out':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
      };

    case 'sing-in-with-user':
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload,
      };

    default:
      return state;
  }

};
