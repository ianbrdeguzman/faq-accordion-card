class Question {
    constructor() {
        this.questionTitle = document.querySelectorAll('.question-title');
    }
    update() {
        this.questionTitle.forEach((question) => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });
    }
}

const question = new Question();
question.update();
