import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../components';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const localtion = useLocation();

  const { q = '' } = queryString.parse(localtion.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Hero Search</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="search for a hero"
              name="searchText"
              autoCapitalize="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-success mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}>
            Search hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <div className="mb-1">
                <HeroCard key={hero.id} {...hero} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};
