import Title from '../../components/common/Title';
import img from '../../assets/images/div1.jpg';
import HeaderTitle from '../../components/common/HeaderTitle';
import Gallery from '../../components/common/Gallery';
const Portfolio = () => {
	return (
		<>
			<HeaderTitle
				title="Portafolio Original"
				subtitle="Vista previa de nuestros trabajos"
				img={img}
			/>
			<section id="portfolio" className="portfolio">
				<div className="overlay"></div>
				<div className="container">
					<Title title="Portafolio" subtitle="Nuestros mejores trabajos" />
					<Gallery />

					<a href=" ">
						<i className="bx bx-down-arrow-circle"></i>
						<span>VER MAS</span>
					</a>
				</div>
			</section>
		</>
	);
};
export default Portfolio;
