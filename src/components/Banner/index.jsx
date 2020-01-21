import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd-mobile";
import "./index.less";

export const ImageBanner = ({ list }) => {
  return (
    <Carousel autoplay infinite autoplayInterval={4000}>
      {list.map(val => (
        <a key={val.id} href={val.url} className="banner">
          <img
            src={val.img}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              verticalAlign: "top"
            }}
          />
        </a>
      ))}
    </Carousel>
  );
};

export const MsgBanner = ({ list }) => {
  return (
    <Carousel
      vertical
      dots={false}
      dragging={false}
      swiping={false}
      autoplay={true}
      infinite
      speed={300}
      autoplayInterval={2000}
      resetAutoplay={false}
    >
      {list.map((item, index) => (
        <div key={index} className="msgbanner">
          {item.content && item.show === 1 ? (
            <Link to={`/home/toplinedetail/${item.id}`}>{item.title}</Link>
          ) : (
            <p>{item.title}</p>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export const MallBanner = ({ list }) => {
  const [slideIndex, setSlide] = useState(0);
  return (
    <div className="mall-banner">
      <Carousel
        cellSpacing={20}
        slideWidth={0.4}
        infinite
        beforeChange={(from, to) => setSlide(to)}
        afterChange={index => console.log(index)}
      >
        {list.map((val, index) => (
          <Link
            key={val.id}
            to={`/mall/artist-info/${val.id}`}
            className="loop-item"
            style={{
              display: "block",
              position: "relative"
            }}
          >
            <div
              className="item"
              style={{ transform: `scale(${slideIndex === index ? 1 : 0.8})` }}
            >
              <div className="avatar">
                <img src={val.artist.avatar_img} alt="" />
              </div>
              <div className="poster">
                <img src={val.work_img} alt="" />
              </div>
              <h4>{val.artist.name}</h4>
              <p>《{val.work_title}》</p>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
