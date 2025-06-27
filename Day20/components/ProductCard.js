import React from "react";
export default React.memo(function ProductCard({ prod }) {
  return <div>{prod.title}</div>;
});