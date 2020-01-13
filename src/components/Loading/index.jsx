import React from "react";
import { Icon } from "antd-mobile";

import Loadable from "react-loadable";

const loading = <Icon type="loading" spin></Icon>;

export default name => {
  return Loadable({
    loader: () => import(`pages/${name}`),
    loading,
    delay: 1000
  });
};

export const LoadComponent = name => {
  return Loadable({
    loader: () => import(`component/${name}`),
    loading,
    delay: 1000
  });
};
