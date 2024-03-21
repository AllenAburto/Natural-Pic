export const Footer = () => {
	const currentYear = new Date().getFullYear();
  
	return (
	  <footer className="bg-green text-center text-light p-4">
		<p className="mb-0">
		  © Alexis Aburto Q. {currentYear}. Todos los derechos reservados.
		</p>
	  </footer>
	);
  };