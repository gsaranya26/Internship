import dynamic from "next/dynamic";

const ProductImage = dynamic(() => import("../components/ProductImage"), { loading: () => <p>Loading...</p> });

export default function Product() {
  // Example products array for demonstration
  const products = [
    { id: 1, title: "Sample Product", image: "/sample.jpg" }
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            <h2>{prod.title}</h2>
            <ProductImage src={prod.image} alt={prod.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}