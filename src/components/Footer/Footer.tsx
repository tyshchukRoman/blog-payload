import Image from "next/image";
import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer | section-top">
      <div className="footer__top | container">
        {/* About */}
        <div className="footer__column footer__about">
          <h4 className="footer__title">About</h4>
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="footer__meta">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@jstemplate.net">info@jstemplate.net</a>
          </p>
          <p className="footer__meta">
            <strong>Phone:</strong> 880 123 456 789
          </p>
        </div>

        {/* Quick Link */}
        <div className="footer__column">
          <h4 className="footer__title">Quick Link</h4>
          <ul className="footer__list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/archived">Archived</Link></li>
            <li><Link href="/author">Author</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Category */}
        <div className="footer__column">
          <h4 className="footer__title">Category</h4>
          <ul className="footer__list">
            <li><Link href="/category/lifestyle">Lifestyle</Link></li>
            <li><Link href="/category/technology">Technology</Link></li>
            <li><Link href="/category/travel">Travel</Link></li>
            <li><Link href="/category/business">Business</Link></li>
            <li><Link href="/category/economy">Economy</Link></li>
            <li><Link href="/category/sports">Sports</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__column footer__newsletter">
          <h4 className="footer__title">Weekly Newsletter</h4>
          <p className="footer__text">
            Get blog articles and offers via email
          </p>

          <form className="footer__form">
            <input
              type="email"
              placeholder="Your Email"
              className="footer__input"
            />
            <button type="submit" className="footer__button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <div className="footer__copyright">
            <Image
              src="/images/logo-icon.svg"
              alt="MetaBlog"
              width={24}
              height={24}
            />
            <span>MetaBlog</span>
            <span>© JS Template 2023. All Rights Reserved.</span>
          </div>

          <ul className="footer__legal">
            <li><Link href="/terms">Terms of Use</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
