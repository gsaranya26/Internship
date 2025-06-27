import Image from "next/image";
export default function ProductImage({ src, alt }) {
  return <Image src={src} alt={alt} width={200} height={200} priority />;
}