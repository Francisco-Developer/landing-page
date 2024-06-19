import { useState } from 'react';
import img1 from '../../assets/images/image1.jpg';
import img2 from '../../assets/images/image2.jpg';
import img3 from '../../assets/images/image3.jpg';
import img4 from '../../assets/images/image4.jpg';
import img5 from '../../assets/images/image5.jpg';
import img6 from '../../assets/images/image6.jpg';

const Gallery = () => {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const data = [
		{
			title: 'Viajes',
			subtitle: 'naturaleza, culturas',
			img: img1,
			like: 221,
		},
		{
			title: 'Momentos',
			subtitle: 'parte de tu vida',
			img: img4,
			like: 451,
		},
		{
			title: 'Profesionales',
			subtitle: 'moda, back',
			img: img2,
			like: 94,
		},
		{
			title: 'Bodas',
			subtitle: 'eventos especiales ',
			img: img6,
			like: 122,
		},
		{
			title: 'Artisticas',
			subtitle: 'urbanas, creatividad',
			img: img5,
			like: 61,
		},
		{
			title: 'Fiestas',
			subtitle: 'noche, reunión',
			img: img3,
			like: 301,
		},
	];

	const openLightbox = (index) => {
		setCurrentImageIndex(index);
		setLightboxOpen(true);
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
	};

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === data.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? data.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="gallery">
			{data.map((item, index) => (
				<div
					className="gallery__item"
					key={index}
					onClick={() => openLightbox(index)}
				>
					<img src={item.img} alt={item.title} />
					<div className="info">
						<div className="desc">
							<h3>{item.title}</h3>
							<h4>{item.subtitle}</h4>
						</div>
						<div className="like">
							<i className="bx bx-heart"></i>
							<span>{item.like}</span>
						</div>
					</div>
				</div>
			))}

			{/* Lightbox */}
			{lightboxOpen && (
				<div className="lightbox">
					<div className="lightbox-content">
						<img
							src={data[currentImageIndex].img}
							alt={data[currentImageIndex].title}
						/>
						<button className="close-btn" onClick={closeLightbox}>
							<i className="bx bx-x"></i>
						</button>

						<button className="nav-btn prev-btn" onClick={prevImage}>
							<i className="bx bx-chevron-left"></i>
						</button>
						<button className="nav-btn next-btn" onClick={nextImage}>
							<i className="bx bx-chevron-right"></i>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
