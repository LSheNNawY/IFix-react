import React from "react";
import ContentLoader from "react-content-loader";

const UserLoader = (props) => (
  <div className="col-lg-3 col-md-6">
    <ContentLoader
      speed={2}
      width={390}
      height={380}
      viewBox="0 0 430 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="390" height="380" />
    </ContentLoader>
  </div>
);

export default UserLoader;
