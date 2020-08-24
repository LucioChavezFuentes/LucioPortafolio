import React from 'react';
import { Switch, Route } from 'react-router-dom';
//components
import AllProjectsLink from 'components/AllProjectsLink/AllProjectsLink';
import AboutLucioLink from 'components/AboutLucioLink/AboutLucioLink';

const LinkShifter = () => {

    return (

        <Switch>

            <Route path='/' exact component={AllProjectsLink} />

            <Route path='/email' exact component={AllProjectsLink} />

            <Route path='/projects' exact component={AboutLucioLink} />

            <Route path='/projects/:anyPath' exact component={AboutLucioLink} />
            
        </Switch>
    )
}

export default LinkShifter
