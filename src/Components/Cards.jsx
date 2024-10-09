

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/reducers/apiReducers';
import { addToCart } from '../Redux/actions/cartAction';

function Cards() {
  const { data, loading, error,searchData , search } = useSelector((state) => state.posts);
  const { cartItems } = useSelector((state) => state.cart);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  // console.log(searchData,"......")
  const HandlePagination=(seletctedPage)=>{
    if(
      seletctedPage>=1 &&
      seletctedPage <= Math.ceil(data.length/itemsPerPage) && 
      seletctedPage !==page
    )

    setPage(seletctedPage);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

      if (loading) return <h2 className='text-center mt-4 fs-1 text-success.'>Loading...😴</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <div className="container py-5">
        <div className="row">
          {search!="" ?   searchData.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((curElem) => {
              return (
                <div className="col-md-4 mb-4" key={curElem?.id}>
                  <div className="card h-100 shadow-sm p-2">
                    <img
                      src={curElem.image}
                      className="card-img-top"
                      alt={curElem.title}
                      style={{ objectFit: 'contain', height: '150px' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{curElem.title}</h5>
                      <p className="card-text text-muted">
                        Price: <span className="fw-bold">${curElem.price}</span>
                      </p>
                      <div className="mt-auto">
                        <button
                          className="btn btn-primary w-100"
                          onClick={() => dispatch(addToCart(curElem))}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>

                  </div>
                  </div>
              );
            })  : data &&
            data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((curElem) => {
              return (
                <div className="col-md-4 mb-4" key={curElem?.id}>
                  <div className="card h-100 shadow-sm p-2">
                    <img
                      src={curElem.image}
                      className="card-img-top"
                      alt={curElem.title}
                      style={{ objectFit: 'contain', height: '150px' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{curElem.title}</h5>
                      <p className="card-text text-muted">
                        Price: <span className="fw-bold">${curElem.price}</span>
                      </p>
                      <div className="mt-auto">
                        <button
                          className="btn btn-primary w-100"
                          onClick={() => dispatch(addToCart(curElem))}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>

                  </div>
                  </div>
              );
            })
            }
        </div>
        {
        search==''&&  data.length>0 && <div className='pagination  d-flex  justify-content-center text-align-center p-2 gap-3'>
            <span className='p-2' onClick={()=>HandlePagination(page-1)}>⏮</span>
            {[...Array(Math.ceil(data.length / itemsPerPage))].map((_,i)=>{
              return <span className={`page-item ${i+1 === page ? 'active  border border-primary p-2 bg-primary text-white text-center ' : 'border p-2 text-center'}`} onClick={()=>HandlePagination(i+1)} key={i}>{i+1}</span>
            })
            }
            <span className='p-2' onClick={()=>HandlePagination(page+1)}>⏭</span>
          </div>
        }

       
      </div>
    </>
  );
}

export default Cards;
