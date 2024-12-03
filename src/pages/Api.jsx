import { useEffect, useState } from "react";

function Api() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      console.log(result.products);

      const finalResult = result.products;
      setProducts(finalResult);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length || products) {
      return;
    }
    const timer = setTimeout(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(timer);
  }, [products, products.length]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Product List</h2>
          <h3>
            Displaying data as it comes from api without using map or any other
            loop
          </h3>
          {JSON.stringify(products)}
        </div>
      )}
    </div>
  );
}

export default Api;
