import React, { useEffect, useState } from "react";
import { getApi } from "../api";

const Pictures = () => {
  const [url, setUrl] = useState("");

  useEffect(async () => {
    const res = await getApi.itemApi();
    const { data } = res;
    setUrl(data);
  }, []);
  console.log(url);
  return (
    <>
      <div>
        {url &&
          url.map((item) => <img src={item.imageurl} key={item.id}></img>)}
        {/* <button onClick={pictureUrl}></button> */}
      </div>
    </>
  );
};

// const Pictures = (props) => {
//   return (
//     <div>
//       {props.children.map((item) => {
//         return (
//           <div key={item.id}>
//             <img src={item.image_url}></img>
//             {item.title}
//             {item.price}원
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default Pictures;
