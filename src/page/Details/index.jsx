import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Ditailes = () => {
  const [ditailes, setDitailes] = useState({});
  let params = useParams();
 
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get( `https://cargo.jadeh.co/cargo/cargoSearch?id=${params.id}`);
        setDitailes(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="Container App ">
      <div className="Row">
        <div className="col-md-12 header-detail">
          <p className="detail-nav">جزییات بار</p>
         
        </div>
      </div>
      <p>{ditailes.name}</p>
      
    </div>
  );
};

export default Ditailes;
