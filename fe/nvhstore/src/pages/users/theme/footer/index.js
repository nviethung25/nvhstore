import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__about">
              <h1 className="footer__about__logo">NVH STORE</h1>
              <ul>
                <li>Địa chỉ: K54/H25/01 Đồng Kè</li>
                <li>Liên hệ: 0123 456 789</li>
                <li>Email: nvhstore@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h3>Cửa hàng</h3>
              <ul>
                <li>
                  <Link to="">Liên hệ</Link>
                </li>
                <li>
                  <Link to="">Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="">Giỏ hàng</Link>
                </li>
                <li>
                  <Link to="">Danh sách yêu thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__widget">
              <h3>Khuyến mãi & ưu đãi</h3>
              <p>Đăng ký nhận thông tin</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Nhập email" />
                  <button type="submit" className="button-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer__widget__social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <AiOutlineGooglePlus />
                  </div>
                  <div>
                    <AiOutlineTwitter />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
