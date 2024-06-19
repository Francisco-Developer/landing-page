import Title from '../../components/common/Title';
import HeaderTitle from '../../components/common/HeaderTitle';
import img from '../../assets/images/div3.jpg';
import Slider from '../../components/common/Slider';
import img1 from '../../assets/images/user1.jpg';
import img2 from '../../assets/images/user2.jpg';
import img3 from '../../assets/images/user3.jpg';
import img4 from '../../assets/images/user4.jpg';

const Abouts = () => {
	const data = [
		{
			name: 'Esther Dina',
			img: img1,
			desc: 'No todo el mundo tiene claro lo que quieres, y a veces no se obtine el  mejor resultado. No te preocupes te asesoramos.',
			prof: 'Design',
		},
		{
			name: 'Luis Avendaño',
			img: img2,
			desc: 'No todo el mundo tiene claro lo que quieres, y a veces no se obtine el  mejor resultado. No te preocupes te asesoramos.',
			prof: 'Developer',
		},
		{
			name: 'Daniel Selaya',
			img: img3,
			desc: 'No todo el mundo tiene claro lo que quieres, y a veces no se obtine el  mejor resultado. No te preocupes te asesoramos.',
			prof: 'Developer',
		},
		{
			name: 'Maria Dann',
			img: img4,
			desc: 'No todo el mundo tiene claro lo que quieres, y a veces no se obtine el  mejor resultado. No te preocupes te asesoramos.',
			prof: 'Design',
		},
		{
			name: 'Maria Fernandez',
			img: img1,
			desc: 'No todo el mundo tiene claro lo que quieres, y a veces no se obtine el  mejor resultado. No te preocupes te asesoramos.',
			prof: 'Developer',
		},
	];
	return (
		<>
			<HeaderTitle
				title="Nuestros Equipo"
				subtitle="Expertos y profecionales"
				img={img}
			/>
			<section id="abouts" className="abouts">
				<div className="overlay"></div>
				<div className="container">
					<Title title="Nosotros" subtitle="Trabajar y prosperar" />
					<Slider>
						{data.map((item, i) => (
							<div className="slider-abouts" key={i}>
								<div className="img">
									<img src={item.img} alt={item.name} />
								</div>

								<h3>{item.prof}</h3>
								<span>{item.name}</span>
								<p>{item.desc}</p>
								<div className="socials">
									<a href="#w">
										<i className="bx bxl-facebook"></i>
									</a>
									<a href="#w">
										<i className="bx bxl-twitch"></i>
									</a>

									<a href="#w">
										<i className="bx bxl-linkedin"></i>
									</a>
									<a href="#w">
										<i className="bx bxl-github"></i>
									</a>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>
		</>
	);
};

export default Abouts;
