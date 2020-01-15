import React from "react";
import { Icon } from "antd-mobile";

import Loadable from "react-loadable";

function LoadMore() {
  return <Icon type="loading"></Icon>;
}

export default name => {
  return Loadable({
    loader: () => import(`pages/${name}`),
    loading: LoadMore,
    delay: 1000
  });
};

export const LoadComponent = name => {
  return Loadable({
    loader: () => import(`component/${name}`),
    loading: LoadMore,
    delay: 1000
  });
};
