import Image from 'next/image'; // Import Next.js Image component
import logo from '../logo-no-background.png'; 
import '../globals.css'; // Import global styles

const Header = () => {
    return (
        <header className="relative w-full h-20 overflow-hidden bg-gray">
            <h1 className="sr-only">BatchFlow</h1> {/* Screen reader text for accessibility */}
            <div className="absolute top-4 left-0 right-0 bottom-0 flex items-center justify-center">
                <Image 
                    src={logo}
                    alt="BatchFlow Logo"
                    fill // Use layout fill to cover the container
                    className="object-contain" // Maintain aspect ratio
                />
            </div>
        </header>
    );
};

export default Header;
