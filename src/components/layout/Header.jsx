import { useEffect, useState } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy';
const menuItems = [
	{ id: 'home', label: 'Inicio' },
	{ id: 'services', label: 'Servicios' },
	{ id: 'portfolio', label: 'Portfolio' },
	{ id: 'pricing', label: 'Precios' },
	{ id: 'contact', label: 'Contacto' },
];
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const activeId = useScrollSpy(menuItems, 100);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMenuClick = () => {
		setIsMenuOpen(false);
	};
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={` ${scrolled ? 'header active' : 'header'}`}>
			<div className="header__content">
				<a href="#home" className="logo">
					John Doe
				</a>
				<nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
					{menuItems.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className={activeId === item.id ? 'active' : ''}
							onClick={handleMenuClick}
						>
							{item.label}
						</a>
					))}
				</nav>
				<button
					className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
					onClick={toggleMenu}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
	);
};

export default Header;
