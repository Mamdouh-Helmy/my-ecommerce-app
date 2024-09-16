import { useEffect, useState } from "react";

export default function ProdectsByCategory({category}) {
    const [data , setData] = useState([]);
    console.log(data);
    const DataUrl = category?.url;
    useEffect(() => {
        fetch(DataUrl)
        .then((response) => response.json())
        .then((data) => setData(data.products))
        .catch((error) => console.error("Error:", error));
    }, [DataUrl])
  return (
    <div className="box">
        <div className="prodect-box">
            {data.map((product, index) => (
                <div key={index} className="product">
                    <img src={product.thumbnail} alt={product.title} />
                    <div className="text">
                        <h3>{product.title}</h3>
                        <h5>{product.description}</h5>
                        <p>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
