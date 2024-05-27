	/*---------------------------------
	
				MENU-BURGER
	
	---------------------------------*/

	function showMenu() {
		// Get button elements
		const headerMenu = document.querySelector(".header");

		// Change class
		headerMenu.classList.toggle("show");
	}


document.addEventListener('DOMContentLoaded', () => {
	/*---------------------------------
				SPOILER
	---------------------------------*/
	const spoilers = document.querySelectorAll('.questions__spoiler');
	spoilers.forEach(spoiler => {
		spoiler.addEventListener('click', () => {
			spoilers.forEach(s => s.classList.remove('questions__spoiler_active'));
			spoiler.classList.toggle('questions__spoiler_active');
		});
	});

	/*---------------------------------
				PHONE MASK
	---------------------------------*/
	const phoneInput = $('.form-input--phone');
	phoneInput.on('input', function () {
		$(this).toggleClass('form-input--phone--active', this.value.trim() !== '');
	});
	phoneInput.mask('+7(000) 000 0000');

	/*---------------------------------
			MODAL MANAGEMENT
	---------------------------------*/
	const toggleModalClass = (nameModal, newClass, action) => {
		document.querySelectorAll(`.${nameModal}`).forEach(element => {
			element.classList[action](newClass);
		});
		if (action === 'remove') document.body.style.overflowY = 'auto';
	};

	window.openModal = (nameModal, newClass) => toggleModalClass(nameModal, newClass, 'add');
	window.closeModal = (nameModal, newClass) => toggleModalClass(nameModal, newClass, 'remove');

	/*---------------------------------
				SLIDER
	---------------------------------*/
	const initSlider = (containerSelector, slideSelector, leftBtnSelector, rightBtnSelector, slideWidth, visibleSlides) => {
		const container = document.querySelector(containerSelector);
		const slides = document.querySelectorAll(slideSelector);
		const btnLeft = document.getElementById(leftBtnSelector);
		const btnRight = document.getElementById(rightBtnSelector);
		let currentIndex = 0;

		const updateSliderPosition = () => {
			const offset = -currentIndex * slideWidth;
			container.style.transform = `translateX(${offset}px)`;
		};

		btnLeft.addEventListener('click', () => {
			if (currentIndex > 0) currentIndex--;
			updateSliderPosition();
		});

		btnRight.addEventListener('click', () => {
			if (currentIndex < slides.length - visibleSlides) currentIndex++;
			updateSliderPosition();
		});
		updateSliderPosition(); // Initialize the first position
	};

	initSlider('.transportation__type-slider-container', '.transportation__type-slide', 'slider-button-left', 'slider-button-right', 440, 3);

	/*---------------------------------
			ALL-IN-ONE SLIDER
	---------------------------------*/
	const controls = document.querySelectorAll('.all-in-one__control');
	const slides = document.querySelectorAll('.slider-screen__image');
	controls.forEach((control, index) => {
		control.addEventListener('click', () => {
			slides.forEach(slide => slide.classList.remove('slider-screen__image_active'));
			controls.forEach(ctrl => ctrl.classList.remove('active'));
			slides[index].classList.add('slider-screen__image_active');
			control.classList.add('active');
		});
	});

	/*---------------------------------
			MOBILE SLIDER
	---------------------------------*/
	const sliderImages = document.querySelectorAll('.mobile-slider__image');
	const sliderTexts = document.querySelectorAll('.mobile-slider__controls-text');
	const controlLeft = document.querySelector('.mobile-slider__control-left');
	const controlRight = document.querySelector('.mobile-slider__control-right');
	let currentIndex = 0;

	const updateMobileSlider = (index) => {
		sliderImages.forEach((img, i) => img.classList.toggle('mobile-slider__image_active', i === index));
		sliderTexts.forEach((text, i) => text.classList.toggle('mobile-slider__controls-text_active', i === index));
	};

	controlLeft.addEventListener('click', () => {
		if (currentIndex > 0) {
			currentIndex--;
			updateMobileSlider(currentIndex);
		}
	});

	controlRight.addEventListener('click', () => {
		if (currentIndex < sliderImages.length - 1) {
			currentIndex++;
			updateMobileSlider(currentIndex);
		}
	});

	updateMobileSlider(currentIndex); // Initialize the first slide as active
});
