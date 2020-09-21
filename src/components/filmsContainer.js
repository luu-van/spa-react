import React from 'react';
import Film from './film';
import Films from './films';
import {Route} from 'react-router-dom';
import { FilmList } from '../data/films';

const FilmContainer = (props) => {
    let filmUrl = FilmList.map((film) => {
        return (
            <Route path={`/films/${film.url}`}  render={() => <Film image={film.profile_img} name={film.name} details={film.description} />} />
        );
    });

    return (
        <React.Fragment>
            <Route exact path="/films" render={() => <Films title="Best Films" />} />
            {filmUrl}
        </React.Fragment>
        
    );
};

export default FilmContainer;