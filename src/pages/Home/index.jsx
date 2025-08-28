import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import ProductDetail from "../../components/ProductDetail";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((item, index) => (
          <div>
            <Card key={index} data={item} />
          </div>
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
