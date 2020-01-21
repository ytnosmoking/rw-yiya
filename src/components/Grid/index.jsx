import React from "react";
import { Grid } from "antd-mobile";
import "./index.less";

export const GridLink = ({ list, renderItem, config = { columnNum: 4 } }) => {
  return (
    <Grid
      columnNum={config.columnNum}
      data={list}
      hasLine={false}
      square={false}
      className="grid"
      activeStyle={false}
      renderItem={renderItem}
    />
  );
};
