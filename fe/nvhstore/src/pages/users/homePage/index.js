import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import cat4Img from "assets/users/images/categories/cat-4.jpg";
import cat5Img from "assets/users/images/categories/cat-5.jpg";
import cat6Img from "assets/users/images/categories/cat-6.jpg";

import feature1Img from "assets/users/images/featured/featured-1.jpg";
import feature2Img from "assets/users/images/featured/featured-2.jpg";
import feature3Img from "assets/users/images/featured/featured-3.jpg";
import feature4Img from "assets/users/images/featured/featured-4.jpg";
import feature5Img from "assets/users/images/featured/featured-5.jpg";
import feature6Img from "assets/users/images/featured/featured-6.jpg";
import feature7Img from "assets/users/images/featured/featured-7.jpg";
import feature8Img from "assets/users/images/featured/featured-8.jpg";

import banner1Img from "assets/users/images/banner/banner-1.jpg";
import banner2Img from "assets/users/images/banner/banner-2.jpg";

import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fomatter } from "utils/fomater";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Cam tươi",
    },
    {
      bgImg: cat2Img,
      name: "Trái cây khô",
    },
    {
      bgImg: cat3Img,
      name: "Rau củ tươi",
    },
    {
      bgImg: cat4Img,
      name: "Hải sản",
    },
    {
      bgImg: cat5Img,
      name: "Sữa hộp",
    },
    {
      bgImg: cat6Img,
      name: "Thịt bò",
    },
  ];

  const featProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: feature1Img,
          name: "Thịt bò nạc",
          price: 20000,
        },
        {
          img: feature2Img,
          name: "Chuối",
          price: 17800,
        },
        {
          img: feature3Img,
          name: "Ổi",
          price: 21000,
        },
        {
          img: feature4Img,
          name: "Dưa hấu",
          price: 44000,
        },
        {
          img: feature5Img,
          name: "Nho Mỹ",
          price: 127800,
        },
        {
          img: feature6Img,
          name: "Tôm sú",
          price: 190000,
        },
        {
          img: feature7Img,
          name: "Xúc xích Đức",
          price: 105000,
        },
        {
          img: feature8Img,
          name: "Cá hồi",
          price: 350000,
        },
      ],
    },
    freshMeat: {
      title: "Thịt tươi",
      products: [
        {
          img: feature1Img,
          name: "Thịt bò nạc",
          price: 20000,
        },
      ],
    },
    fruits: {
      title: "Trái cây",
      products: [
        {
          img: feature2Img,
          name: "Chuối",
          price: 17800,
        },
        {
          img: feature3Img,
          name: "Ổi",
          price: 21000,
        },
        {
          img: feature4Img,
          name: "Dưa hấu",
          price: 44000,
        },
        {
          img: feature5Img,
          name: "Nho Mỹ",
          price: 127800,
        },
      ],
    },
    seafood: {
      title: "Hải sản",
      products: [
        {
          img: feature6Img,
          name: "Tôm sú",
          price: 190000,
        },
        {
          img: feature8Img,
          name: "Cá hồi",
          price: 350000,
        },
      ],
    },
    fastfood: {
      title: "Thức ăn nhanh",
      products: [
        {
          img: feature7Img,
          name: "Xúc xích Đức",
          price: 105000,
        },
      ],
    },
  };

  const renderFeatureProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      console.log(key, index);
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];

      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div className="col-lg-3" key={j}>
            <div className="featured__item">
              <div
                className="featured__item__pic"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{fomatter(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/*Categories Begin*/}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/*Categories End*/}
      {/*Featured Begin*/}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeatureProducts(featProducts)}
        </div>
      </div>
      {/*Featured End*/}
      {/*Banner Begin*/}
      <div className="container">
        <div className="banner">
          <div className="banner_pic">
            <img src={banner1Img} alt="banner" />
          </div>
          <div className="banner_pic">
            <img src={banner2Img} alt="banner" />
          </div>
        </div>
      </div>
      {/*Banner End*/}
    </>
  );
};

export default memo(HomePage);
