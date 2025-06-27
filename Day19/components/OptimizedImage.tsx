import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
}: OptimizedImageProps) {
  return (
    <div
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        background: "#f1f5f9",
        maxWidth: "100%",
        boxShadow: "0 4px 24px #bae6fd66",
        display: "inline-block",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
        // No placeholder, no blurDataURL
      />
    </div>
  );
}