import React from 'react';
import Actres from './actres';
import Actress from './actress';
import {Route} from 'react-router-dom';
import { ActressList } from '../data/actress';

const ActressContainer = (props) => {
    let actressUrl = ActressList.map((actres) => {
        return (
            <Route path={`/actress/${actres.url}`}  render={() => <Actres image={actres.profile_img} name={actres.name} details={actres.description} />} />
        );
    });

    return (
        <React.Fragment>
            <Route exact path="/actress" render={() => <Actress title="Best Actress" />} />
            {actressUrl}
        </React.Fragment>
        
    );
};

export default ActressContainer;
