import React from "react";
import ContentLoader from "react-content-loader";

const ProfessionLoader = (props) => (
  <div className="col-lg-4 col-md-6 pt-2">
    <ContentLoader
      speed={2}
      width={530}
      height={170}
      viewBox="0 0 530 170"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="1" rx="10" ry="10" width="85" height="85" />
      <rect x="120" y="13" rx="10" ry="10" width="137" height="28" />
      <rect x="120" y="54" rx="10" ry="10" width="287" height="21" />
    </ContentLoader>
  </div>
);

export default ProfessionLoader;
