import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DogDetails from './DogDetails';

export default function Dog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.thedogapi.com/v1/images/search')
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      {data.map(dog => (
        <div key={dog.id}>
          <div className="main-flex-container">
            <div>
              {dog.breeds.map(details => (
                <DogDetails
                  key={details.id}
                  name={details.name}
                  bred_for={details.bred_for}
                  breed_group={details.breed_group}
                  life_span={details.life_span}
                  temperament={details.temperament}
                />
              ))}
            </div>
            <div>
              <img src={dog.url} alt="" height="400px" width="400px" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
