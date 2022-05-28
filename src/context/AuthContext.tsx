/* eslint-disable prettier/prettier */

// el context es otro componente es otro componente tradicional.

import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// PASO 1. necesitamos saber como luze la infirmacion que será compartida.
// cuando en otro componente necesite saber el tipo que usa mi state,
// podré importar esta interface.
export interface AuthState {
  isLoggedIn: boolean,
  userName?: string,
  favoriteIcon?: string,
}

// PASO 2. necesito definir el estado inicial de la aplicación,
// osea que datos tendrá nada más sea ejecutada por primera vez.
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// usaremos esta interface para definir como luce la información
// que expone el context.
export interface AuthStateProps {
  authState: AuthState,
  singIn: () => void,
  changeFavoriteIcon: (iconName: string) => void,
  singOut: () => void,
  singInWithUser: (userName: string) => void,
}

// PASO 3. crear el contexto de la aplicación.
// necesita el valor por defecto, osea. la informacion que será
// proporcionado a los componentes hijos.
export const AuthContext = createContext({} as AuthStateProps);

// PASO 4. crear un componente que proveera la informaciona los hijos.
export const AuthProvider = ({ children }: any) => {

  // PASO 7. crear un estado donde almacenar toda la información
  // que será compatida a travez de toda la aplicación.
  // Puede ser desde un useState o useReducer hasta un Reducex como tal.

  // PASO 8. crear una funcion encargada de actualizar y retornar el
  // estado actualizado, 'reducer' en esta caso.
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  // PASO 11. 'dispatch' es una función que nos ayuda a disparar todas
  // las acciones que deseamos ejecutar.

  // PASO 14. crear las diferentes funciones que serán llamadas para actualizar
  // el estado mediante el dispatch
  const singIn = () => {
    // PASO 14.1. al ejecutarse esta función se ejecutara el dispatch
    // donde a su vez, ejecutara toda la logica definida en el reducer
    // para el caso definido en el 'type', es decir.
    //  1- ira al reducer y evaluzara el caso definido en el type.
    //  2- en funcion del tipo definido, ejecutara toda la logica del caso deseado.
    //  3- como el reducer tiene la unica misión de evaluar un caso y revolver un nuevo estado
    //     mediante la evaluación del switch se ejecutarán todas las modificiones correspondiente.
    dispatch({ type: 'sing-in' });
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'change-fav-icon', payload: iconName });
  };

  const singOut = () => {
    dispatch({ type: 'sing-out' });
  };

  const singInWithUser = (userName: string) => {
    dispatch({ type: 'sing-in-with-user', payload: userName });
  };

  return (
    <AuthContext.Provider value={{
      authState,
      singIn,
      changeFavoriteIcon,
      singOut,
      singInWithUser,
    }} >
      { children }
    </AuthContext.Provider>
  );
};

// PASO 5. este componente debe ser llamado en el punto más
// alto de la aplicacioón.
