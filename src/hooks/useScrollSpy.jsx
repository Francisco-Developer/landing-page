import { useEffect, useState } from 'react';

const useScrollSpy = (menuItems, offset = 0) => {
	const [activeId, setActiveId] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + offset;

			for (let i = menuItems.length - 1; i >= 0; i--) {
				const section = document.getElementById(menuItems[i].id);
				if (section.offsetTop <= scrollPosition) {
					setActiveId(menuItems[i].id);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [menuItems, offset]);

	return activeId;
};

export default useScrollSpy;
