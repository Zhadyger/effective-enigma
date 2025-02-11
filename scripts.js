let currentQuestionIndex = 0;
const questions = [
    "What is your favorite activity?",
    "Do you like working with others or alone?",
    "What subjects do you enjoy the most at school?",
    "Do you prefer indoor or outdoor activities?"
];

function startExploration() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('story').classList.remove('hidden');
    showStory();
}

function showStory() {
    const storyContent = document.getElementById('story-content');
    storyContent.textContent = "Once upon a time, there was a brave explorer who wanted to find their dream job...";
}

function nextStory() {
    document.getElementById('story').classList.add('hidden');
    document.getElementById('test').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = document.getElementById('question');
    question.textContent = questions[currentQuestionIndex];
}

function nextQuestion() {
    const answer = document.getElementById('answer').value;
    if (answer.trim() === "") {
        alert("Please provide an answer.");
        return;
    }

    // Mock AI response
    const aiResponse = getAIResponse(answer);
    console.log(aiResponse);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('answer').value = "";
    } else {
        showResult(aiResponse);
    }
}

function getAIResponse(answer) {
    // Mock function to simulate AI response
    const responses = [
        "Engineer",
        "Artist",
        "Scientist",
        "Teacher",
        "Doctor"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function showResult(career) {
    document.getElementById('test').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    const resultContent = document.getElementById('result-content');
    resultContent.textContent = `Your recommended career is: ${career}`;
}
