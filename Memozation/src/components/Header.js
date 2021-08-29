import React from "react";

function Header({ number, increment }) {
  console.log("Header Render");
  return (
    <div>
      Header - {number}
      <br />
      <button onClick={increment}>+</button>
    </div>
  );
}

export default React.memo(Header);
//gereksiz yere render edilmemesi için memo kullanılır
