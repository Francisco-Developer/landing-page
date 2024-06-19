import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Slider = ({ children }) => {
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
	const [currentIndex, setCurrentIndex] = useState(0);
	const childrenArray = Array.isArray(children) ? children : [children];
	const [move, setMove] = useState(0);

	const itemCount = childrenArray.length;

	useEffect(() => {
		const handleResize = () => setViewportWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const itemsPerPage = viewportWidth >= 1024 ? 3 : 1;
	const maxIndex = itemCount - itemsPerPage;

	const nextSlide = () => {
		if (currentIndex < maxIndex) {
			setCurrentIndex(currentIndex + 1);
			setMove(move - 100 / itemCount);
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			setMove(move + 100 / itemCount);
			setCurrentIndex(currentIndex - 1);
		}
	};
	return (
		<div className="slider">
			<div
				className="slider__content"
				style={{
					width: `${(itemCount / itemsPerPage) * 100}%`,
					transform: `translateX(${move}%)`,
				}}
			>
				{childrenArray.map((child, index) => (
					<div key={index} style={{ width: `${100 / itemCount}%` }}>
						{child}
					</div>
				))}
			</div>
			<button
				className="slider__btns left"
				onClick={prevSlide}
				disabled={currentIndex === 0}
			>
				<i className="bx bx-chevron-left"></i>
			</button>
			<button
				className="slider__btns right"
				onClick={nextSlide}
				disabled={currentIndex >= maxIndex}
			>
				<i className="bx bx-chevron-right"></i>
			</button>
		</div>
	);
};
Slider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
export default Slider;
