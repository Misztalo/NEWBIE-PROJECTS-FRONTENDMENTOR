const labels = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input')
const lineButton = document.querySelector('.line-button')
const errorsP = document.querySelectorAll('.errorP')

const years = document.querySelector('.yearsNumber')
const months = document.querySelector('.monthsNumber')
const days = document.querySelector('.daysNumber')

const date = new Date()
let currentDay = date.getDate()
let currentMonth = date.getMonth() + 1
let currentYear = date.getFullYear()

let ourYear
let ourMonth
let ourDay


const changeInfo = () => {
	years.textContent = ourYear
	months.textContent = ourMonth
	days.textContent = ourDay
}

const emptyChecker = () => {
	if (inputs[0] === "" && inputs[1] === "" && inputs[2] === "") {
		clearInputsError()
	} else {
		inputsMonthWithDaysTrueChecker()
		changeInfo()
	}
}

const yearCalculator = () => {
	ourYear = currentYear - inputs[2].value
}

const monthCalculator = () => {
	if (currentMonth >= inputs[1].value) {
		ourMonth = currentMonth - inputs[1].value
	} else {
		ourYear--
		ourMonth = 12 + currentMonth - inputs[1].value
	}
}

const dayCalculator = () => {
	if (currentDay >= inputs[0].value) {
		ourDay = currentDay - inputs[0].value
	} else {
		ourMonth--
		ourDay = 30 + currentDay - inputs[0].value
	}
}

const inputsMonthWithDaysTrueChecker = () => {
	if (
		(inputs[1].value === '1' && inputs[0].value <= 31) ||
		(inputs[1].value === '2' && inputs[0].value <= 28) ||
		(inputs[1].value === '3' && inputs[0].value <= 31) ||
		(inputs[1].value === '4' && inputs[0].value <= 30) ||
		(inputs[1].value === '5' && inputs[0].value <= 31) ||
		(inputs[1].value === '6' && inputs[0].value <= 30) ||
		(inputs[1].value === '7' && inputs[0].value <= 31) ||
		(inputs[1].value === '8' && inputs[0].value <= 31) ||
		(inputs[1].value === '9' && inputs[0].value <= 30) ||
		(inputs[1].value === '10' && inputs[0].value <= 31) ||
		(inputs[1].value === '11' && inputs[0].value <= 30) ||
		(inputs[1].value === '12' && inputs[0].value <= 31)
	) {
		if (currentYear >= inputs[2].value) {
			dayCalculator()
			monthCalculator()
			yearCalculator()
			clearErrors()
		} else {
			yearsError()
		}
	} else {
		daysError()
		monthsError()
	}
}

const daysError = () => {
	errorChanger()
	errorsP[0].textContent = 'Must be a valid date'
	errorsP[0].style.color = 'var(--Light-red)'
}

const monthsError = () => {
	errorChanger()
	errorsP[1].textContent = 'Must be a valid month'
	errorsP[1].style.color = 'var(--Light-red)'
}

const yearsError = () => {
	errorChanger()
	errorsP[2].textContent = 'Must be in the past'
	errorsP[2].style.color = 'var(--Light-red)'
}

const clearInputsError = () => {
	errorChanger()
	errorsP[0].textContent = 'This field is required'
	errorsP[1].textContent = 'This field is required'
	errorsP[2].textContent = 'This field is required'
}

const errorChanger = () => {
	labels[0].style.color = 'var(--Light-red)'
	labels[1].style.color = 'var(--Light-red)'
	labels[2].style.color = 'var(--Light-red)'
	inputs[0].style.borderColor = 'var(--Light-red)'
	inputs[1].style.borderColor = 'var(--Light-red)'
	inputs[2].style.borderColor = 'var(--Light-red)'
}

const clearErrors = () => {
	labels[0].style.color = 'var(--Smokey-grey)'
	labels[1].style.color = 'var(--Smokey-grey)'
	labels[2].style.color = 'var(--Smokey-grey)'
	inputs[0].style.borderColor = 'var(--Light-grey)'
	inputs[1].style.borderColor = 'var(--Light-grey)'
	inputs[2].style.borderColor = 'var(--Light-grey)'
	errorsP[0].textContent = ''
	errorsP[1].textContent = ''
	errorsP[2].textContent = ''
}

lineButton.addEventListener('click', emptyChecker)
