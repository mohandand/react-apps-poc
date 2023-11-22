import React, { useEffect, useState } from 'react';
import './infinitescroll.css';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    console.log('I am excuted');
    for (let i = 0; i < 9; i++) {
      fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((data) => data.json())
        .then((res) => {
          let newData = data;
          newData.push(res.message);
          setData([...newData]);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      // Use window.scrollY to get the current scroll position
      if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 100) {
        // Decreased the 100 to 50 to trigger loading a bit earlier
        if (!loading) {
          setLoading(true);
          fetchData();
        }
      }
    };

    // Use passive: true for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup the scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div className="infinitescroll-container">
      {data.map((img) => {
        return <img src={img} />;
      })}
    </div>
  );
}
