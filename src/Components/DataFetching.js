import React, { useEffect,useState } from 'react'

const DataFetching = () => {
    const [dataItems, setDataItems]= useState([]);
    const [showData, setShowData]= useState(false);
    const fetchingData = async()=>{
        const url = "https://jsonplaceholder.typicode.com/comments";
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setDataItems(data)
    }
    useEffect(()=>{
        fetchingData(); 
    }, [dataItems])

   
  return (
    <div>
        <h1>Fetching Data</h1>
        <button onClick={()=> setShowData(!showData)}>{showData ? 'Hide Data': 'Show Data'}</button>
        {
            showData && dataItems.map(item=>(
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.email}</p>
                    <p>{item.body}</p>
                </div>
            ))  
        }
    </div>
  )
}

export default DataFetching