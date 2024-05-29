import { Link } from 'react-router-dom';
import LogoImg from '@aquariux/assets/images/aq-logo.png';

const Header = () => {
  return (
    <header className="fixed z-50 w-full border-b border-solid border-slate-300/20 bg-black/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 justify-between">
          <div className="flex shrink-0 items-center">
            <Link to="/">
              <img src={LogoImg} alt="logo" title="Aquariux" className="h-12" />
            </Link>
          </div>
          <nav className="flex grow justify-end">
            <ul className="flex flex-wrap items-center justify-end">
              <li className="px-6">
                <Link
                  to="/"
                  className="text-sm font-bold text-gray-300 duration-150 hover:text-cyan-500"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
