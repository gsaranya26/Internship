import dynamic from "next/dynamic";
const ProductImage = dynamic(() => import("../components/ProductImage"), { loading: () => <p>Loading...</p> });
