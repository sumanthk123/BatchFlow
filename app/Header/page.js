import Image from 'next/image';
import logo from '../logo-no-background.png'; 
import './header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-logo">
                <Image 
                    src={logo}
                    alt="BatchFlow Logo"
                    fill
                    className="object-contain" 
                />
            </div>
        </header>
    );
};

export default Header;

