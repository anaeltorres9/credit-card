import { useState } from 'react';
import CardThanks from '../components/CardThanks';
import CardForm from '../components/CardForm';
import CreditCard from '../components/CreditCard';
import styles from '../styles/Home.module.css'; // Asegúrate de crear este archivo para los estilos de la página principal

function HomePage() {
	const [formData, setFormData] = useState({ name: null, number: null, mm: null, yy: null, cvc: null });
	const [validate, setValidate] = useState(false);

	const animateSlider = (validate) => {
		const axis = window.matchMedia('(max-width: 750px)').matches ? 'Y' : 'X';
		const cardOverflowDiv = document.querySelector('.cardOverflow > div');
		if (cardOverflowDiv) {
			cardOverflowDiv.style.transform = `translate${axis}(50${axis === 'Y' ? 'vh' : 'vw'})`;
		}

		document.body.classList.add('body-slider');

		setTimeout(() => {
			setValidate(validate);
			document.body.classList.remove('body-slider');
			if (cardOverflowDiv) {
				cardOverflowDiv.style.transform = 'translate(0)';
			}
		}, 500);
	};

	return (
		<div className={styles.container}>
			<CreditCard formData={formData} />
			<main className='cardOverflow'>
				<div>
					{validate ? (
						<CardThanks setFormData={setFormData} animateSlider={animateSlider} />
					) : (
						<CardForm setFormData={setFormData} animateSlider={animateSlider} formData={formData} />
					)}
				</div>
			</main>
			<footer className='attribution'>
				<p>
					Made with ♥️ by <a href='https://github.com/anaeltorres9' target='_blank' rel='noopener noreferrer'>Anael</a> - <a href='https://github.com/cosmoart/Interactive-card-details-form' target='_blank' rel='noopener noreferrer'>Repository</a>
				</p>
			</footer>
		</div>
	);
}

export default HomePage;
