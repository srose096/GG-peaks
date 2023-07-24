import React from 'react';
import "../Styles/Mountain.css";
import MountainMap from "../img/TrailMap.jpg";

const Mountain = () => {
  // Sample trail data (41 rows)
  const trailData = [
    { number: 1, name: 'Powder Paradise', difficulty: 'Easy' },
    { number: 2, name: 'Snowy Slopes', difficulty: 'Easy' },
    { number: 3, name: 'Alpine Adventure', difficulty: 'Easy' },
    { number: 4, name: 'Glacier Glide', difficulty: 'Easy' },
    { number: 5, name: 'Frosty Falls', difficulty: 'Easy' },
    { number: 6, name: 'Misty Meadows', difficulty: 'Easy' },
    { number: 7, name: 'Crystal Crest', difficulty: 'Easy' },
    { number: 8, name: 'Whispering Pines', difficulty: 'Easy' },
    { number: 9, name: 'Polar Peak', difficulty: 'Easy' },
    { number: 10, name: 'Mountain Majesty', difficulty: 'Easy' },
    { number: 11, name: 'Ski Slope Serenity', difficulty: 'Easy' },
    { number: 12, name: 'Fresh Powder Trail', difficulty: 'Easy' },
    { number: 13, name: 'Winter Wonderland', difficulty: 'Easy' },
    { number: 14, name: 'Slope of Dreams', difficulty: 'Easy' },
    { number: 15, name: 'Evergreen Run', difficulty: 'Intermediate' },
    { number: 16, name: 'Snowflake Slope', difficulty: 'Intermediate' },
    { number: 17, name: 'Alpine Ascent', difficulty: 'Intermediate' },
    { number: 18, name: 'Frostbite Freeway', difficulty: 'Intermediate' },
    { number: 19, name: 'Mogul Madness', difficulty: 'Intermediate' },
    { number: 20, name: 'Glacier Glade', difficulty: 'Intermediate' },
    { number: 21, name: 'Whistling Woods', difficulty: 'Intermediate' },
    { number: 22, name: 'Avalanche Alley', difficulty: 'Intermediate' },
    { number: 23, name: 'Crisp Corduroy', difficulty: 'Intermediate' },
    { number: 24, name: 'Icicle Incline', difficulty: 'Intermediate' },
    { number: 25, name: 'Snowy Spire', difficulty: 'Intermediate' },
    { number: 26, name: 'Ski Lift Lane', difficulty: 'Intermediate' },
    { number: 27, name: 'Pine Peak Path', difficulty: 'Intermediate' },
    { number: 28, name: 'Winter Walkway', difficulty: 'Intermediate' },
    { number: 29, name: 'Steep Summit', difficulty: 'Intermediate' },
    { number: 30, name: 'Advanced Adventure', difficulty: 'Advanced' },
    { number: 31, name: 'Black Diamond Bluff', difficulty: 'Advanced' },
    { number: 32, name: 'Double Black Diamond Drop', difficulty: 'Advanced' },
    { number: 33, name: 'Extreme Excelsior', difficulty: 'Advanced' },
    { number: 34, name: 'Death-Defying Descent', difficulty: 'Advanced' },
    { number: 35, name: 'Gravity Gorge', difficulty: 'Advanced' },
    { number: 36, name: 'Ski Extreme Slope', difficulty: 'Advanced' },
    { number: 37, name: 'Vertical Velocity', difficulty: 'Advanced' },
    { number: 38, name: 'Adrenaline Alley', difficulty: 'Advanced' },
    { number: 39, name: 'Big Air Boulevard', difficulty: 'Advanced' },
    { number: 40, name: 'Thrill Seeker Trail', difficulty: 'Advanced' },
    { number: 41, name: 'Endless Excitement', difficulty: 'Advanced' },
  ];

  return (
    <div className="mountain">

      <div className="mountain-map">
        <img src={MountainMap} alt="Mountain Map" />
      </div>

      <div className="trail-table-container">
        <h2>Trails</h2>
        <table className="trail-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {trailData.map((trail) => (
              <tr key={trail.number}>
                <td>{trail.number}</td>
                <td>{trail.name}</td>
                <td>{trail.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mountain;
