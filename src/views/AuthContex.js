import React from "react";

// Global que se va a compartir
export const AuthContext = React.CreateContext("Leonardo");

//Quien lo comparte
export const AuthProvider = AuthContext.Provider;

//Quien lo consume
export const AuthConsumer = AuthContext.Consumer;
