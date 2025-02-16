'use client';
import { useEffect, useState } from 'react';


const Rating = () => {
  const [nonFraudRatio, setNonFraudRatio] = useState(null);

  useEffect(() => {
    fetch("/output.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Access non_fraud_ratio from the nested data object
        console.log(data.data.non_fraud_ratio);
        setNonFraudRatio(data.data.non_fraud_ratio);
      })
      .catch(error => console.error('Error:', error));
  }, []);
    
  return (
    <div className = "text-black">
      <h2 className="text-lg font-semibold mb-2">Rating</h2>
      <div className="border-2 border-black h-4 w-full rounded-full">   
        <div className="percentage h-3 w-full rounded-full bg-gradient-to-r from-[#f8764a] to-[#03b231] mb-2" style={{ width: `${(nonFraudRatio ?? 0) * 100}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="font-medium"></span>
        <span className="font-medium font-extrabold">Rating: {nonFraudRatio !== null ? nonFraudRatio * 100 : "Loading..."}%</span>
      </div>
    </div>
  );
}

export default Rating;




