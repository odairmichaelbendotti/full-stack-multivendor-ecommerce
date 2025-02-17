import React, { useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';

const App = () => {

    // Passar o useState allRoutes para o spread operator allRoutes de Router.jsx
    const [allRoutes, setAllRoutes] = useState([...publicRoutes])

    console.log(allRoutes)

    return <Router allRoutes={allRoutes} />

};

export default App;