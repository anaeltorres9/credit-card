import styles from '../styles/CardThanks.module.css';

export default function CardThanks({ setFormData, animateSlider }) {
	const resetForm = () => {
		setFormData({ name: null, number: null, mm: null, yy: null, cvc: null });
		animateSlider(false);
	};

	return (
		<div className={styles.cardThanks}>
			<img src='/public/assets/icon-complete.svg' alt='' />
			<p className={styles.firstParagraph}>Thank you!</p>
			<p className={styles.lastParagraph}>We've added your card details</p>
			<button className={styles.btnPrimary} onClick={resetForm}>
				Continue
			</button>
		</div>
	);
}
