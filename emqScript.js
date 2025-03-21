$(document).ready(function() {
    console.log("Document is ready");

    let questionCount = 1;

    // Function to add a new answer input
    function addAnswerInput(questionBlock) {
        console.log("Adding answer input to question block:", questionBlock);
        const answerInput = `
            <div class="input-group mb-2">
                <input type="text" class="form-control answer" placeholder="Enter answer">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary add-answer-btn" type="button">+</button>
                </div>
            </div>`;
        $(questionBlock).append(answerInput);
    }

    // Add new answer input on button click
    $('#questions').on('click', '.add-answer-btn', function() {
        console.log("Add answer button clicked");
        addAnswerInput($(this).closest('.question-block'));
    });

    // Add new question block
    $('#addQuestionBtn').click(function() {
        console.log("Add question button clicked");

        questionCount++;
        const questionBlock = `
            <div class="question-block mb-4" style="display: inline-block;">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h4 class="mb-0">Question ${questionCount}:</h4>
                </div>
                <div class="input-group mb-2">
                    <input type="text" class="form-control answer" placeholder="Enter answer">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary add-answer-btn" type="button">+</button>
                    </div>
                </div>
            </div>`;

        $('#questions').append(questionBlock);

        // Scroll to the newly added question block
        $('#questions').animate({
            scrollLeft: $('#questions')[0].scrollWidth
        }, 500);
    });

    // Download button click event
    $('#downloadBtn').click(function() {
        console.log("Download button clicked");

        const data = {};
        $('.question-block').each(function(index) {
            const questionNumber = index + 1;
            const answers = $(this).find('.answer').map(function() {
                return $(this).val();
            }).get();
            data[`Q${questionNumber}`] = answers;
        });

        let textContent = '';
        for (const [question, answers] of Object.entries(data)) {
            textContent += `${question}:${answers.join(',')}\n`;
        }

        console.log("Generated text content:", textContent);

        const blob = new Blob([textContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'emq.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
