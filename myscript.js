"use strict";

const faqItems = document.querySelectorAll(".faq-main");

faqItems.forEach((faq) => {
    const questionBox = faq.querySelector(".question-box");
    const answerMain = faq.querySelector(".answer-main");
    const answerContainer = faq.querySelector(".answer-container");
    const icon = faq.querySelector(".icon");
    const iconImages = icon.querySelectorAll(".icon-img");

    questionBox.addEventListener("click", () => {
        // Close any other open FAQs
        faqItems.forEach((item) => {
            if (item !== faq) {
                const otherAnswerMain = item.querySelector(".answer-main");
                const otherIcon = item.querySelector(".icon");
                const otherIconImages = otherIcon.querySelectorAll(".icon-img");

                otherAnswerMain.style.height = "0px";
                otherIcon.classList.remove("rotate");
                otherIconImages[0].classList.remove("hidden");
                otherIconImages[1].classList.add("hidden");
            }
        });

        // Toggle the current FAQ
        const isOpen = answerMain.style.height && answerMain.style.height !== "0px";
        if (isOpen) {
            answerMain.style.height = "0px";
            iconImages[0].classList.remove("hidden"); // Show add icon
            iconImages[1].classList.add("hidden"); // Hide remove icon
        } else {
            answerMain.style.height = `${answerContainer.scrollHeight}px`;
            iconImages[0].classList.add("hidden"); // Hide add icon
            iconImages[1].classList.remove("hidden"); // Show remove icon
        }
        
        icon.classList.toggle("rotate");
    });
});


