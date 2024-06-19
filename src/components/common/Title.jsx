import PropTypes from 'prop-types';
const Title = ({ title, subtitle }) => {
	return (
		<div className="title">
			<h1>{title}</h1>
			<div className="subtitle">
				<div className="line"></div>
				<h2>{subtitle}</h2>
				<div className="line"></div>
			</div>
		</div>
	);
};
Title.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default Title;
