import React from "react";
import { Icon } from "antd-mobile";

import Loadable from "react-loadable";

function LoadMore() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon type="loading"></Icon>
    </div>
  );
}

export default name => {
  return Loadable({
    loader: () => import(`pages/${name}`),
    loading: LoadMore,
    delay: 300
  });
};

export const LoadComponent = name => {
  return Loadable({
    loader: () => import(`component/${name}`),
    loading: LoadMore,
    delay: 300
  });
};
