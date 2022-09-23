import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Legend from "../../components/legend/Legend";
import Avatar from "../../components/Avatar";
import ListPostCards from "../../components/ListPostCards";
export default function Feed() {
  const { companyName } = useParams();
  const isTest = companyName === "socialorientation_test";
  const [isRead, setIsRead] = useState(false);
  useEffect(() => {
    const isReadLocal = JSON.parse(localStorage.getItem("isRead"));
    if (isReadLocal === true) {
      setIsRead(true);
    }

    return () => {};
  }, []);

  const readButtonHandler = () => {
    localStorage.setItem("isRead", true);
    setIsRead(true);
  };

  if (isTest) {
    return (
      <>
        {!isRead && (
          <div className="w-full text-center font-raleway px-24 leading-7 pb-8">
            <p>
              This only checks whether useParams has socialorientation_test
              value for its companyName key. Further filtering can be achieved
              through filter on data in the source code in{" "}
              <code>src/components/ListPostCards.jsx</code>.
            </p>
            <p>
              This is why the ListPostCards component is called with userName
              prop as a preparation.
            </p>
            <button
              type="button"
              onClick={() => readButtonHandler()}
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Close
            </button>
          </div>
        )}
        <div className="w-full grid grid-cols-4">
          <Legend />
          <Avatar fileName="Picture.png" alt="" />
        </div>

        {/* Right Column Top section END*/}
        <div className="grid grid-cols-1 xl:grid-cols-3 h-auto pb-12 gap-6">
          <ListPostCards userName={companyName} />
        </div>
      </>
    );
  } else {
    return (
      <div className="w-full text-center">
        Nothing to show. Try GO Company (4th logo)
      </div>
    );
  }
}
