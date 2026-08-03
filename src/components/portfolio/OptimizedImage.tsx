import { useState, useEffect, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string; // Very small thumbnail or base64 data URL
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  placeholderSrc,
  loading = "lazy",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset loaded state if source changes
    setIsLoaded(false);

    const img = new Image();
    img.src = src;
    if (img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-muted/10 ${className}`}>
      {/* Blur Placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 z-0 bg-card/60 backdrop-blur-xl animate-pulse"
          style={
            placeholderSrc
              ? {
                  backgroundImage: `url(${placeholderSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
      )}

      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-lg"
        }`}
        {...props}
      />
    </div>
  );
}
export default OptimizedImage;
