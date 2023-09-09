import React, {createContext} from 'react';

export const PruebaContext = createContext({
    user: {name: '', email: ''},
    setUser: () => {}
});
