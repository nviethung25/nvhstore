import { memo } from "react";
import {
  AiOutlineFacebook,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.scss";
import { fomatter } from "utils/fomater";

const Header = () => {
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
          <div className="col-xl-3">LOGO</div>
          <div className="col-xl-6">MENU</div>
          <div className="col-xl-3">PHONE</div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
