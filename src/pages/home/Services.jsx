import Slider from '../../components/common/Slider';
import Title from '../../components/common/Title';
import img1 from '../../assets/icon/smartphone.svg';
import img2 from '../../assets/icon/camera.svg';
import img3 from '../../assets/icon/cloud.svg';
import img4 from '../../assets/icon/idea.svg';

const Services = () => {
	const data = [
		{
			title: 'Calidades adaptable',
			img: img1,
			desc: 'No todo el mundo tiene claro lo que quiere, y a veces no se obtine el  mejor resultado. No te preocupes, que hablamos contigo y te asesoramos.',
		},
		{
			title: 'Editamos tus fotos',
			img: img2,
			desc: 'No todo el mundo tiene claro lo que quiere, y a veces no se obtine el  mejor resultado. No te preocupes, que hablamos contigo y te asesoramos.',
		},
		{
			title: 'Tus datos en la nube',
			img: img3,
			desc: 'No todo el mundo tiene claro lo que quiere, y a veces no se obtine el  mejor resultado. No te preocupes, que hablamos contigo y te asesoramos.',
		},
		{
			title: 'ideas Modernas',
			img: img4,
			desc: 'No todo el mundo tiene claro lo que quiere, y a veces no se obtine el  mejor resultado. No te preocupes, que hablamos contigo y te asesoramos.',
		},
	];
	return (
		<section id="services" className="services">
			<div className="overlay"></div>
			<div className="container">
				<Title
					title="Nuestros Servicios"
					subtitle="Nuestra metodologia para ayudarte"
				/>
				<Slider>
					{data.map((item, i) => (
						<div key={i} className="slider-services">
							<h3>{item.title}</h3>
							<img src={item.img} alt={item.title} />
							<p>{item.desc}</p>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Services;
