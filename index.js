"use strict";

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".seconds");

const countDownDate = new Date("July 19, 2024 15:37:25").getTime();

const x = setInterval(function () {
	const now = new Date().getTime();
	const dateDistance = countDownDate - now;

	const day = Math.floor(dateDistance / (1000 * 60 * 60 * 24));

	const hour = Math.floor(
		(dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);

	const minute = Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60));

	const second = Math.floor((dateDistance % (1000 * 60)) / 1000);

	days.textContent = day;
	hours.textContent = String(hour).padStart(2, 0);
	minutes.textContent = String(minute).padStart(2, 0);
	seconds.textContent = String(second).padStart(2, 0);
}, 1000);
