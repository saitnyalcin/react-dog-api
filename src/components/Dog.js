import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
          <img src={dog.url} alt="" height="400px" width="400px" />

          <div>
            {dog.breeds.map(details => (
              <div>
                <p>{details.name}</p>
                <p>{details.bred_for}</p>
                <p>{details.breed_group}</p>
                <p>{details.life_span}</p>
                <p>{details.temperament}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
