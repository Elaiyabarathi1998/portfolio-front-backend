import { FaEdit, FaTrash } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
  id: number;
  name: string;
  email: string;
  number: string;
  message: string;
}

const DetailData: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  // const [isHovered, setIsHovered] = useState(false);

  const cardContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    width: '200px',
    padding: '2em',
    color: '#fffjkjn',
    margin: '20px',
    // transformStyle: 'preserve-3d',
  };

  // const handleCardHover = () => {
  //   setIsHovered(!isHovered);
  // };

  const layersStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    // transformStyle: 'preserve-3d',
    zIndex: -1,
  };

  const layerStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: '1em',
    background: 'var(--bi)',
    boxShadow: '0 0 0.5em #000d inset',
  };

  const iconsStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
  };

  useEffect(() => {
    axios
      .get<DataItem[]>('http://localhost:3000/formdata')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  });

  const handleDeleteCard = async (id: number) => {
    try {
      // Send a DELETE request to the API
      await axios.delete(`http://localhost:3000/formdata/${id}`);
      
      // If the request is successful, remove the card from the data state
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  

  return (
    <div>
      <h2>Detail Data</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div style={cardContainerStyle}>
          {data.map((item) => (
            <div key={item.id} className="card-container" style={cardContainerStyle}>
              <div
                className="card"
                style={cardStyle}
                // onMouseEnter={handleCardHover}
                // onMouseLeave={handleCardHover}
              >
                <br />
                <h3>Name: {item.name}</h3>
                <p>Email: {item.email}</p>
                <p>Number: {item.number}</p>
                <p>Message: {item.message}</p>
                <div className="icons" style={iconsStyle}>
                  <div
                    className="icon"
                    style={{
                      backgroundColor: 'orange',
                      borderRadius: '50%',
                      padding: '10px',
                      display: 'inline-block',
                      marginRight: '5px',
                    }}
                  >
                    <FaEdit style={{ color: 'black', width: '25px', height: '25px' }} />
                  </div>
                  <div
                    className="icon"
                    style={{
                      backgroundColor: 'orange',
                      borderRadius: '50%',
                      padding: '10px',
                      display: 'inline-block',
                    }}
                  >
                    <FaTrash
                      style={{ color: 'black', width: '25px', height: '25px', cursor: 'pointer' }}
                      onClick={() => handleDeleteCard(item.id)} // Call the delete function
                    />
                  </div>
                </div>
                <div className="layers" style={layersStyle}>
                  <div className="layer" style={layerStyle}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailData;
