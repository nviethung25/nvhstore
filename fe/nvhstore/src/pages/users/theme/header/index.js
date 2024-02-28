import { memo, useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.scss";
import { fomatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [menu, setMenu] = useState([
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
    </>
  );
};

export default memo(Header);
