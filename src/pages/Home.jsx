import React, { useEffect, useState} from 'react';
import Spinner from '../components/Spinner';
import {Product} from "../components/Product";

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    // creating a useState for loading
    const [loading, setLoading] = useState(false);

    // creating a useState for posts
    const [items, setitems] = useState({});

    // creating a async function to fetch the data from the api 
    async function fetchApiData(){
      setLoading(true);
        let url = API_URL;

        try{
            let response = await fetch(url);
            let data = await response.json();
            setitems(data);
        }
        catch(err){
          console.log(err);
          setitems([]);
        }
        setLoading(false);
    }


    // using useEffect to call the async function
    useEffect( () => {
        fetchApiData();
    },[])


  return (
    <div>
      {
        loading ? <Spinner/> :
        items.length > 0 ? (
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
            {
              items.map((item)=> (
                <Product key={item.id} item={item} />

              ))
            }
          </div>
        ) : 
        (<div className='flex justify-center items-center'>
            <p className='text-gray-700 font-semibold text-xl text-left truncate w-40 mt-[15%]'>
            No Data found   !
            </p>
        </div>)
      }
    </div>
  )
}

export default Home;
