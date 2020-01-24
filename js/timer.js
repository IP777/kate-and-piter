class CountdownTimer {
	constructor({ selector, targetDate }) {
		this.elem = document.querySelector(selector);
		this.targetDate = targetDate;
		this.refs = {
			dayTitle: this.elem.querySelector("[data-value=days]"),
			hoursTitle: this.elem.querySelector("[data-value=hours]"),
			minsTitle: this.elem.querySelector("[data-value=mins]"),
			secsTitle: this.elem.querySelector("[data-value=secs]")
		};
	}

	timeFunc(time) {
		const days = Math.floor(time / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
		const secs = Math.floor((time % (1000 * 60)) / 1000);

		this.refs.dayTitle.innerHTML = days;
		this.refs.hoursTitle.innerHTML = hours;
		this.refs.minsTitle.innerHTML = mins;
		this.refs.secsTitle.innerHTML = secs;
	}

	start() {
		this.timerId = setInterval(() => {
			const time = this.targetDate - Date.now();
			this.timeFunc(time);
		}, 1000);
	}
}

const contTimer = new CountdownTimer({
	selector: "#timer-1",
	targetDate: new Date("March 3, 2020")
});

contTimer.start();
//--------------------------------------------------------------------
