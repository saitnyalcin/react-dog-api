import React, { useEffect, useState } from "react";
import DogDetails from "./DogDetails";

export default function Dog() {
  const [data, setData] = useState([]);

  async function fetchData() {
    await fetch("https://api.thedogapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((dog) => (
        <div key={dog.id}>
          <div className="main-flex-container">
            <div>
              {dog.breeds.map((details) => (
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
