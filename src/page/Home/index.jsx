/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import Iconmaterial from '../../assets/icons/search.png';
import './styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function Home() {
  const [citis, setCitis] = useState([]);
  const [search, setSearch] = useState('');


  // search data
  useEffect(() => {
    const request = async () => {
      const res = await axios.get(
        `https://cargo.jadeh.co/cargo/cargoSearch?&searchValue=${search}`
      );
      const posts =res.data.data.slice(0,4);
      setCitis(posts);
    };

    setTimeout(() => {
      request();
    }, 3000);

  }, [citis, search]);


  // currentPage
  const requestcurrentPage = async (currentPage) => {
    const res = await axios.get(
      `https://cargo.jadeh.co/cargo/cargoSearch?&page=${currentPage}`
      
    );
    const data =res.data.data;
    setCitis(data);
  };



  const handlePageClick =async (data) => {
    console.log(data.selected);
    let currentPage = data + 1;
    let formServer=await requestcurrentPage(currentPage)
    setCitis(formServer);
  };



  return (
    <div className="Container App ">
      <div className="Row">
        <div className="col-md-12 header">
          <div className="input">
            <input
              type="text"
              className="input-app"
              placeholder="جستوجو"
              onChange={(e) => {
                setSearch(e.target.value);
                citis.filter((value) => {
                  value.city.includes(search);
                });
              }}
              value={search}
            />

            <div className="icon-img">
              <img src={Iconmaterial} alt="" className="icon" />
            </div>
          </div>
        </div>

        <div>
          {citis &&
            citis.map((Indexcity) => (
              <div key={Indexcity.id} className="items">
            
                <p className="name-items">{Indexcity.name}</p>
                <hr />
                <p className="city-items">
                  {Indexcity.city} _ {Indexcity.state}
                </p>
                <p className="city-items">{Indexcity.payaneh_type}</p>
                <p className="city-items">{Indexcity.cargo_type}</p>

                <Link to={`/page/${Indexcity.id}`} className={'link-details'}>
                  مشاهده جزییات
                </Link>
              </div>
            ))}

       
        </div>
        <div className="pagination-background">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={citis}
              pageCount={8}
              previousLabel="previous"
              renderOnZeroPageCount={null}
              containerClassName={'pagination justify-content-center mt-5'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
              activeLinkClassName={'active'}
            />
          </div>
      </div>
    </div>
  );
}

export default Home;
