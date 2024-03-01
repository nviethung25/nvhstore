import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import { fomatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);
  const [menu] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.HOME,
    },
  ]);

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  hello@gmail.com
                </li>
                <li>Miễn phí ship đơn từ {fomatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link>
                    <AiOutlineGooglePlus />
                  </Link>
                </li>
                <li>
                  <Link>
                    <AiOutlineTwitter />
                  </Link>
                </li>
                <li>
                  <Link>
                    <AiOutlineUser />
                    <span>Đăng nhập</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <h1>NVH STORE</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {menu?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header__menu__dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__cart__price">
                <span>{fomatter(1234567)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero__categories_container">
          <div className="col-lg-3 hero__categories">
            <div
              className="hero__categories__all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to="#">Thịt tươi</Link>
              </li>
              <li>
                <Link to="#">Rau củ</Link>
              </li>
              <li>
                <Link to="#">Nước trái cây</Link>
              </li>
              <li>
                <Link to="#">Trái cây</Link>
              </li>
              <li>
                <Link to="#">Hải sản</Link>
              </li>
              <li>
                <Link to="#">Thức ăn nhanh</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">Phai</div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
