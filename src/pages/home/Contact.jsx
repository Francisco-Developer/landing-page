import Title from '../../components/common/Title';
import img from '../../assets/images/div4.jpg';

import HeaderTitle from '../../components/common/HeaderTitle';
import Form from '../../components/common/Form';
const Contact = () => {
	return (
		<>
			<HeaderTitle
				title="La comunicacion importa"
				subtitle="Respondemos todas tus preguntas"
				img={img}
			/>
			<section id="contact" className="contact">
				<div className="overlay"></div>
				<div className="container">
					<Title title="Contacto" subtitle="Estamos a un mensaje de vos" />
					<div className="contact__content">
						<div className="contact__form">
							<h3>Escribeme</h3>
							<Form />
						</div>
						<div className="contact__info">
							<h3>Más Info</h3>

							<a href=" ">
								<i className="bx bx-phone"></i>
								Tel: 387-555555
							</a>
							<a href=" ">
								<i className="bx bx-headphone"></i>
								Fax: 333-33333
							</a>
							<a href=" ">
								<i className="bx bxs-envelope"></i>
								@fotografia
							</a>
							<a href=" ">
								<i className="bx bxs-map"></i>
								Av. San Martín - Capital
							</a>
							<div className="socials">
								<h3>También nos encontras en:</h3>

								<div>
									<a href=" ">
										<i className="bx bxl-facebook-circle"></i>
									</a>
									<a href=" ">
										<i className="bx bxl-github"></i>
									</a>
									<a href=" ">
										<i className="bx bxl-telegram"></i>
									</a>
									<a href=" ">
										<i className="bx bxl-instagram-alt"></i>
									</a>
									<a href=" ">
										<i className="bx bxl-linkedin-square"></i>
									</a>
									<a href=" ">
										<i className="bx bxl-behance"></i>
									</a>
									<a href=" ">
										<i className="bx bxl-youtube"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
