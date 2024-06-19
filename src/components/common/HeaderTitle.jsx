import PropTypes from 'prop-types';
const HeaderTitle = ({ title, subtitle, img }) => {
	return (
		<div
			className="header-title"
			style={{
				background: `url(${img}) no-repeat`,
				backgroundSize: `cover`,
				backgroundPosition: `center top`,
			}}
		>
			<div className="header-title__content">
				<h1>{title}</h1>
				<h3>{subtitle}</h3>
			</div>
		</div>
	);
};
HeaderTitle.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};
export default HeaderTitle;
