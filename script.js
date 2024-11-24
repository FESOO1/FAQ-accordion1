const faqItself = document.querySelectorAll('.faq-itself');
const faqItselfQuestionButtons = document.querySelectorAll('.faq-itself-question');


// LOOP 

for (let i = 0; i < faqItself.length; i++) {
    faqItselfQuestionButtons[i].addEventListener('click', () => {
        faqItself[i].classList.toggle('faq-itself-toggle');
    });
};