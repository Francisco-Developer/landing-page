const Form = () => {
	return (
		<form className="form">
			<input type="text" placeholder="Nombre" />
			<input type="text" placeholder="Correo" />

			<textarea placeholder="Mensaje" />
			<button type="submit" className="btn-primary">
				Enviar
			</button>
		</form>
	);
};
export default Form;
