import NoPostImage from "../../../img/no-post-image.png";
import ReactImageFallback from "react-image-fallback";
export default function PostImage({ url }) {
  
  return (
    <ReactImageFallback
      src={url}
      fallbackImage={NoPostImage}
      className="h-48 m-auto"
      alt=""
    />
  );
}
