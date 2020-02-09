import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Geners from './pages/Genres'
import FormNew from './components/FormNew'
import FormEdit from './components/FormEdit'
import NotFound from './pages/NotFound'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/genres' exact component={Geners}/>
                <Route path='/genres/newGenres' exact component={FormNew}/>
                <Route path='/genres/:id' exact component={FormEdit}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes