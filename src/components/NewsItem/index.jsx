import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

import { dateTool } from "utils/tools";
export default ({ list, href }) => {
  return (
    <Link key={list.id} to={`${href}/${list.id}`} className="newsItem">
      <img src={list.img} alt="" />
      <h6 className="title">{list.title}</h6>
      {list.start ? (
        <p>
          展览时间{dateTool(list.start)}-{dateTool(list.end)}
        </p>
      ) : null}
      <dl className="info">
        <dt>
          <span>{list.created_at.split(" ")[0]}</span>
          <span className="platform">{list.platform}</span>
        </dt>
        <dd className="right">
          <span>
            <i className="iconfont icon-eye " />
            {list.visit_count || list.view_count}
          </span>
          <span>
            <i className="iconfont icon-share " />
            {list.share_count}
          </span>
        </dd>
      </dl>
    </Link>
  );
};
