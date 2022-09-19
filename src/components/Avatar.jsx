import { useState, useEffect } from "react";

export default function Avatar({ fileName }) {
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchAvatar = async () => {
      const response = await import(`../img/${fileName}`); // change relative path to suit your needs
      setImage(response.default);
    };

    fetchAvatar();
  }, [fileName]);

  return (
    <div className="col-span-2 md:col-span-1">
      <div className="h-auto grid grid-cols-5">
        <div className="col-start-3 col-span-2">
          <img src={image} className="rounded-full" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
