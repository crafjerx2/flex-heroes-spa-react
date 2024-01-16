import React from 'react';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;
  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const imageUrl = `./assets/heroes/${id}.jpg`;

  // const charactersByhero = (<p>{characters}</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={imageUrl} alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <CharactersByHero alter_ego={alter_ego} characters={characters} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>


            </div>

          </div>
          <div className="d-grid mt-1">
            <Link to={`/hero/${id}`}
              className="btn btn-success"
            >
              Read more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
