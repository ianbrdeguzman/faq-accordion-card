import { questions } from './data.js';
import { backgrounds } from './backgrounds.js';

class Question {
    displayData() {
        questions.forEach((item) => {
            const { title, answer } = item;
            const container = document.querySelector('.question-container');
            const html = `
                <div class="question">
                    <div class="question-title">
                        <p>${title}</p>
                        <img src="./images/icon-arrow-down.svg" alt="Icon-Arrow-Down">
                    </div>
                    <div class="question-answer">
                         <p>${answer}</p>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
    displayBG() {
        backgrounds.forEach((item) => {
            const { id, title, src } = item;
            const container = document.querySelector('header');
            const html = `
                <div class="img-container-${id}">
                    <img src="${src}" alt="${title}"/>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
    update() {
        this.displayData();
        this.displayBG();
        this.questionTitle = document.querySelectorAll('.question-title');
        this.questionTitle.forEach((question) => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });
    }
}

export default Question;
