import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsProvider ";

export default function ProdectsByCategory({ category }) {
    const { products } = useContext(ProductsContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const DataUrl = category?.url;

    useEffect(() => {
        if (DataUrl) {
            fetch(DataUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data.products || []);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setError(error);
                    setLoading(false);
                });
        } else {
            setData(products); 
            setLoading(false);
        }
    }, [DataUrl, products]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="box">
            <div className="prodect-box">
                {data.length > 0 ? (
                    data.map((product, index) => (
                        <div key={index} className="product">
                            <img src={product.thumbnail} alt={product.title} />
                            <div className="text">
                                <h3>{product.title}</h3>
                                <h5>{product.description}</h5>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No products available</div>
                )}
            </div>
        </div>
    );
}
