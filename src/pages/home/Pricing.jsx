import Title from '../../components/common/Title';
import HeaderTitle from '../../components/common/HeaderTitle';
import img from '../../assets/images/div2.jpg';
const Pricing = () => {
	const data = [
		{
			title: 'Básico',
			pricing: '35',
			services: [
				'Fotos para eventos sociales',
				'Grabaciones de video',
				'Digitalizacion d fotos',
				'Edicion de imagen y video',
				'30 Impreciones en papel fotografico',
			],
		},
		{
			title: 'Medio',
			pricing: '65',
			services: [
				'Fotos para eventos sociales',
				'Grabaciones de video',
				'Digitalizacion d3 fotos',
				'Edicion de imagen y video',
				'30 Impreciones en papel fotografico',
				'Almacenamiento en nube',
			],
		},
		{
			title: 'Avanzado',
			pricing: '85',
			services: [
				'Fotos para eventos sociales',
				'Grabaciones de video',
				'Digitalizacion d3 fotos',
				'30 Impreciones en papel fotografico',
				'Almacenamiento en nube',
				'Soporte 24 hs.',
			],
		},
	];

	return (
		<>
			<HeaderTitle
				title="Nuestros Precios"
				subtitle="Siempre totalmente ascecibles"
				img={img}
			/>
			<section id="pricing" className="pricing">
				<div className="overlay"></div>
				<div className="container">
					<Title
						title="Precios"
						subtitle="Satisfacion garantizada a bajo costo"
					/>
					<div className="pricing__content">
						{data.map((item, i) => (
							<div className="item" key={i}>
								<h3>{item.title}</h3>
								<div className="text-pricing">
									{item.pricing}
									<sup>00</sup> <small>arg.</small>
								</div>
								<ul className="list">
									{item.services.map((li, j) => (
										<li key={j}>{li}</li>
									))}
								</ul>
								<a href=" ">Comprar Ahora</a>
							</div>
						))}
					</div>
					<div className="happy-clients">
						<h4>Clientes Felices</h4>
						<div className="smille">
							<span></span>
							<div>; )</div>
							<span></span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Pricing;
