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

        changeImage(days);

        this.refs.dayTitle.innerHTML = String(days).padStart(2, "0");
        this.refs.hoursTitle.innerHTML = String(hours).padStart(2, "0");
        this.refs.minsTitle.innerHTML = String(mins).padStart(2, "0");
        this.refs.secsTitle.innerHTML = String(secs).padStart(2, "0");
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
const changeImage = time => {
    const refs = {
        image: document.querySelector(".image-js")
    };
    const imageData = [
        "./image/1.jpg",
        "./image/2.jpg",
        "./image/3.jpg",
        "./image/4.jpg",
        "./image/5.jpg",
        "./image/6.jpg",
        "./image/7.jpg",
        "./image/8.jpg",
        "./image/9.jpg",
        "./image/10.jpg",
        "./image/11.jpg",
        "./image/12.jpg",
        "./image/13.jpg",
        "./image/14.jpg",
        "./image/15.jpg",
        "./image/16.jpg",
        "./image/17.jpg"
    ];

    const changeImage = count => {
        refs.image.src = imageData[count];
    };

    //changeImage(Math.trunc(time / 2));

    if (time >= 0 && time < 2) {
        changeImage(0);
    } else if (time >= 2 && time < 4) {
        changeImage(16);
    } else if (time >= 4 && time < 6) {
        changeImage(15);
    } else if (time >= 6 && time < 8) {
        changeImage(14);
    } else if (time >= 8 && time < 10) {
        changeImage(13);
    } else if (time >= 10 && time < 12) {
        changeImage(12);
    } else if (time >= 12 && time < 14) {
        changeImage(11);
    } else if (time >= 14 && time < 16) {
        changeImage(10);
    } else if (time >= 16 && time < 18) {
        changeImage(9);
    } else if (time >= 18 && time < 20) {
        changeImage(8);
    } else if (time >= 20 && time < 22) {
        changeImage(7);
    } else if (time >= 22 && time < 24) {
        changeImage(6);
    } else if (time >= 24 && time < 26) {
        changeImage(5);
    } else if (time >= 26 && time < 28) {
        changeImage(4);
    } else if (time >= 28 && time < 30) {
        changeImage(3);
    } else if (time >= 30 && time < 32) {
        changeImage(2);
    } else if (time >= 32 && time < 34) {
        changeImage(1);
    } else if (time >= 34 && time < 38) {
        changeImage(0);
    } else {
        changeImage(0);
    }
};
