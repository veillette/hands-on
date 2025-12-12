/**
 * @fileoverview MyST Plugin for embedding H5P interactive questions
 *
 * This plugin provides custom MyST directives for embedding H5P-style interactive
 * questions in the textbook. It supports:
 * - Embedding H5P content from h5p.org via iframe
 * - Self-contained question types (multiple choice, true/false, fill-in-blank)
 *
 * The self-contained questions use a lightweight JavaScript implementation that
 * provides H5P-like interactivity without requiring the full H5P infrastructure.
 *
 * @module plugins/h5p
 * @see {@link https://h5p.org/ H5P Website}
 * @see {@link https://github.com/tunapanda/h5p-standalone H5P Standalone}
 * @see {@link https://mystmd.org/guide/plugins MyST Plugin Documentation}
 *
 * @example
 * // Embed H5P content from h5p.org:
 * ```{h5p} 1234567
 * :height: 400px
 *
 * Interactive physics simulation
 * ```
 *
 * @example
 * // Create a multiple choice question:
 * ```{h5p-multichoice} Understanding Uncertainty
 * :question: What is the primary purpose of reporting measurement uncertainty?
 * :choices: ["To show experimental errors", "To quantify confidence in results", "To hide mistakes", "To make data look professional"]
 * :correct: 1
 * :feedback: ["Partially correct - but uncertainty is more than just errors", "Correct! Uncertainty quantifies our confidence in the measurement", "Incorrect - uncertainty is about honesty, not hiding", "Incorrect - uncertainty serves a scientific purpose"]
 * ```
 */

/**
 * Escapes HTML special characters to prevent XSS vulnerabilities.
 */
function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return String(unsafe);
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Escapes content for use in a data URI
 */
function escapeForDataUri(str) {
  return encodeURIComponent(str);
}

/**
 * H5P embed directive - embeds content from h5p.org
 */
const h5pEmbedDirective = {
  name: 'h5p',
  doc: 'Embed H5P content from h5p.org or other H5P servers',
  arg: {
    type: String,
    doc: 'The H5P content ID or full embed URL',
  },
  body: {
    type: 'markdown',
    doc: 'Optional caption for the embedded content',
  },
  options: {
    width: {
      type: String,
      doc: 'Width of the iframe (default: 100%)'
    },
    height: {
      type: String,
      doc: 'Height of the iframe (default: 400px)'
    },
    placeholder: {
      type: String,
      doc: 'Path to placeholder image for static exports'
    }
  },
  run: function(data) {
    const contentId = data.arg;

    if (!contentId) {
      return [{
        type: 'paragraph',
        children: [{ type: 'text', value: 'Error: H5P content ID is required.' }]
      }];
    }

    const width = data.options?.width || '100%';
    const height = data.options?.height || '400px';

    // Determine the embed URL
    let embedUrl;
    if (contentId.startsWith('http')) {
      embedUrl = contentId;
    } else {
      embedUrl = `https://h5p.org/h5p/embed/${contentId}`;
    }

    const iframe = {
      type: 'iframe',
      src: embedUrl,
      width,
      height
    };

    if (data.options?.placeholder) {
      iframe.placeholder = data.options.placeholder;
    }

    if (data.body && data.body.length > 0) {
      return [iframe, { type: 'caption', children: data.body }];
    }

    return [iframe];
  }
};

/**
 * Multiple Choice Question directive - uses iframe for proper JS execution
 */
const h5pMultichoiceDirective = {
  name: 'h5p-multichoice',
  doc: 'Create an interactive multiple choice question',
  arg: {
    type: String,
    doc: 'Title of the question'
  },
  body: {
    type: 'markdown',
    doc: 'Additional context or explanation (shown before the question)'
  },
  options: {
    question: {
      type: String,
      doc: 'The question text'
    },
    choices: {
      type: String,
      doc: 'JSON array of choices, e.g., ["Option A", "Option B", "Option C"]'
    },
    correct: {
      type: Number,
      doc: 'Index of the correct answer (0-based)'
    },
    feedback: {
      type: String,
      doc: 'JSON array of feedback for each choice'
    },
    multiSelect: {
      type: Boolean,
      doc: 'Allow multiple selections (default: false)'
    },
    correctMulti: {
      type: String,
      doc: 'JSON array of correct answer indices for multi-select'
    },
    height: {
      type: String,
      doc: 'Height of the question container (default: 400px)'
    }
  },
  run: function(data) {
    const id = `h5p-mc-${Math.random().toString(36).substring(2, 11)}`;
    const title = data.arg || 'Question';
    const question = data.options?.question || 'No question provided';
    const height = data.options?.height || '400px';

    let choices = [];
    try {
      choices = JSON.parse(data.options?.choices || '[]');
    } catch (e) {
      choices = ['Error parsing choices'];
    }

    const correct = data.options?.correct ?? 0;

    let feedback = [];
    try {
      feedback = JSON.parse(data.options?.feedback || '[]');
    } catch (e) {
      feedback = [];
    }

    const multiSelect = data.options?.multiSelect === true;
    let correctMulti = [];
    try {
      correctMulti = JSON.parse(data.options?.correctMulti || '[]');
    } catch (e) {
      correctMulti = [];
    }

    // Build the complete HTML document for the iframe
    const iframeContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: white; }
    .h5p-container { border: 1px solid #ccc; border-radius: 8px; overflow: hidden; }
    .h5p-header { background: linear-gradient(135deg, #1a73e8, #4285f4); color: white; padding: 1rem 1.25rem; }
    .h5p-header h4 { margin: 0; font-size: 1.1rem; font-weight: 600; }
    .h5p-content { padding: 1.25rem; }
    .h5p-question { font-size: 1.05rem; font-weight: 500; margin-bottom: 1rem; color: #333; }
    .h5p-choice { display: block; margin: 0.5rem 0; padding: 0.75rem 1rem; border: 2px solid #e0e0e0; border-radius: 8px; cursor: pointer; transition: all 0.2s ease; background: #fafafa; }
    .h5p-choice:hover:not(.answered) { border-color: #1a73e8; background: #f0f7ff; }
    .h5p-choice input { margin-right: 0.75rem; transform: scale(1.2); }
    .h5p-choice .feedback-icon { float: right; display: none; font-weight: bold; }
    .h5p-feedback { display: none; margin-top: 1rem; padding: 1rem; border-radius: 6px; font-size: 0.95rem; }
    .h5p-actions { margin-top: 1.25rem; display: flex; gap: 0.75rem; }
    .h5p-btn-check { padding: 0.6rem 1.5rem; background: #1a73e8; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.95rem; font-weight: 500; }
    .h5p-btn-check:hover { background: #1557b0; }
    .h5p-btn-retry { padding: 0.6rem 1.5rem; background: #f5f5f5; color: #333; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; font-size: 0.95rem; display: none; }
    .h5p-btn-retry:hover { background: #e8e8e8; }
    .h5p-score { display: none; margin-top: 1rem; font-size: 0.9rem; color: #666; }
    .correct { border-color: #34a853 !important; background: #e6f4ea !important; }
    .incorrect { border-color: #ea4335 !important; background: #fce8e6 !important; }
  </style>
</head>
<body>
  <div class="h5p-container">
    <div class="h5p-header"><h4>${escapeHtml(title)}</h4></div>
    <div class="h5p-content">
      <p class="h5p-question">${escapeHtml(question)}</p>
      <div class="h5p-choices">
        ${choices.map((choice, i) => `
          <label class="h5p-choice">
            <input type="${multiSelect ? 'checkbox' : 'radio'}" name="choice" value="${i}">
            <span class="choice-text">${escapeHtml(choice)}</span>
            <span class="feedback-icon"></span>
          </label>
        `).join('')}
      </div>
      <div class="h5p-feedback" id="feedback"></div>
      <div class="h5p-actions">
        <button class="h5p-btn-check" id="checkBtn">Check Answer</button>
        <button class="h5p-btn-retry" id="retryBtn">Try Again</button>
      </div>
      <div class="h5p-score" id="score"></div>
    </div>
  </div>
  <script>
    const choices = document.querySelectorAll('.h5p-choice');
    const checkBtn = document.getElementById('checkBtn');
    const retryBtn = document.getElementById('retryBtn');
    const feedbackEl = document.getElementById('feedback');
    const scoreEl = document.getElementById('score');
    const correct = ${multiSelect ? JSON.stringify(correctMulti) : correct};
    const feedback = ${JSON.stringify(feedback)};
    const multiSelect = ${multiSelect};

    checkBtn.addEventListener('click', () => {
      const inputs = document.querySelectorAll('input');
      let selected = [];
      inputs.forEach((input, i) => { if (input.checked) selected.push(i); });

      if (selected.length === 0) {
        feedbackEl.style.display = 'block';
        feedbackEl.style.background = '#fff3cd';
        feedbackEl.style.color = '#856404';
        feedbackEl.textContent = 'Please select an answer.';
        return;
      }

      let isCorrect = multiSelect
        ? selected.length === correct.length && selected.every(s => correct.includes(s))
        : selected[0] === correct;

      choices.forEach((choice, i) => {
        choice.classList.add('answered');
        const icon = choice.querySelector('.feedback-icon');
        const input = choice.querySelector('input');
        input.disabled = true;

        const isCorrectChoice = multiSelect ? correct.includes(i) : i === correct;
        const isSelected = selected.includes(i);

        if (isCorrectChoice) {
          choice.classList.add('correct');
          icon.innerHTML = '✓';
          icon.style.color = '#34a853';
          icon.style.display = 'inline';
        } else if (isSelected) {
          choice.classList.add('incorrect');
          icon.innerHTML = '✗';
          icon.style.color = '#ea4335';
          icon.style.display = 'inline';
        }
      });

      feedbackEl.style.display = 'block';
      if (isCorrect) {
        feedbackEl.style.background = '#e6f4ea';
        feedbackEl.style.color = '#1e7e34';
        feedbackEl.innerHTML = '<strong>Correct!</strong> ' + (feedback[multiSelect ? correct[0] : correct] || 'Well done!');
      } else {
        feedbackEl.style.background = '#fce8e6';
        feedbackEl.style.color = '#c62828';
        feedbackEl.innerHTML = '<strong>Not quite.</strong> ' + (feedback[selected[0]] || 'Try again!');
      }

      scoreEl.style.display = 'block';
      scoreEl.textContent = isCorrect ? 'Score: 1/1' : 'Score: 0/1';
      checkBtn.style.display = 'none';
      retryBtn.style.display = 'inline-block';
    });

    retryBtn.addEventListener('click', () => {
      choices.forEach(choice => {
        choice.classList.remove('answered', 'correct', 'incorrect');
        const icon = choice.querySelector('.feedback-icon');
        icon.style.display = 'none';
        const input = choice.querySelector('input');
        input.disabled = false;
        input.checked = false;
      });
      feedbackEl.style.display = 'none';
      scoreEl.style.display = 'none';
      checkBtn.style.display = 'inline-block';
      retryBtn.style.display = 'none';
    });
  </script>
</body>
</html>`;

    // Return an iframe with srcdoc
    return [{
      type: 'iframe',
      srcdoc: iframeContent,
      width: '100%',
      height: height,
      style: { border: 'none', borderRadius: '8px' }
    }];
  }
};

/**
 * True/False Question directive - uses iframe for proper JS execution
 */
const h5pTrueFalseDirective = {
  name: 'h5p-truefalse',
  doc: 'Create an interactive true/false question',
  arg: {
    type: String,
    doc: 'Title of the question'
  },
  body: {
    type: 'markdown',
    doc: 'Additional context or explanation'
  },
  options: {
    statement: {
      type: String,
      doc: 'The statement to evaluate as true or false'
    },
    correct: {
      type: Boolean,
      doc: 'Whether the statement is true (default: true)'
    },
    feedbackTrue: {
      type: String,
      doc: 'Feedback when user selects True'
    },
    feedbackFalse: {
      type: String,
      doc: 'Feedback when user selects False'
    },
    height: {
      type: String,
      doc: 'Height of the question container (default: 320px)'
    }
  },
  run: function(data) {
    const title = data.arg || 'True or False';
    const statement = data.options?.statement || 'No statement provided';
    const correct = data.options?.correct !== false;
    const feedbackTrue = data.options?.feedbackTrue || (correct ? 'Correct!' : "That's not quite right.");
    const feedbackFalse = data.options?.feedbackFalse || (!correct ? 'Correct!' : "That's not quite right.");
    const height = data.options?.height || '320px';

    const iframeContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: white; }
    .h5p-container { border: 1px solid #ccc; border-radius: 8px; overflow: hidden; }
    .h5p-header { background: linear-gradient(135deg, #7b1fa2, #9c27b0); color: white; padding: 1rem 1.25rem; }
    .h5p-header h4 { margin: 0; font-size: 1.1rem; font-weight: 600; }
    .h5p-content { padding: 1.25rem; }
    .h5p-statement { font-size: 1.1rem; font-weight: 500; margin-bottom: 1.25rem; color: #333; padding: 1rem; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #7b1fa2; }
    .h5p-tf-buttons { display: flex; gap: 1rem; justify-content: center; }
    .h5p-btn-tf { flex: 1; max-width: 150px; padding: 0.75rem 1.5rem; background: #f5f5f5; color: #333; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 600; transition: all 0.2s; }
    .h5p-btn-tf:hover:not(:disabled) { transform: scale(1.02); }
    #trueBtn { border: 2px solid #4caf50; }
    #falseBtn { border: 2px solid #f44336; }
    .h5p-feedback { display: none; margin-top: 1.25rem; padding: 1rem; border-radius: 6px; font-size: 0.95rem; text-align: center; }
    .h5p-btn-retry { padding: 0.5rem 1.25rem; background: #f5f5f5; color: #333; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; font-size: 0.9rem; display: none; margin-top: 1rem; }
    .h5p-btn-retry:hover { background: #e8e8e8; }
    .center { text-align: center; }
  </style>
</head>
<body>
  <div class="h5p-container">
    <div class="h5p-header"><h4>${escapeHtml(title)}</h4></div>
    <div class="h5p-content">
      <p class="h5p-statement">${escapeHtml(statement)}</p>
      <div class="h5p-tf-buttons">
        <button id="trueBtn" class="h5p-btn-tf"><span style="color:#4caf50">✓</span> True</button>
        <button id="falseBtn" class="h5p-btn-tf"><span style="color:#f44336">✗</span> False</button>
      </div>
      <div class="h5p-feedback" id="feedback"></div>
      <div class="center"><button class="h5p-btn-retry" id="retryBtn">Try Again</button></div>
    </div>
  </div>
  <script>
    const trueBtn = document.getElementById('trueBtn');
    const falseBtn = document.getElementById('falseBtn');
    const retryBtn = document.getElementById('retryBtn');
    const feedbackEl = document.getElementById('feedback');
    const correct = ${correct};
    const feedbackTrue = ${JSON.stringify(feedbackTrue)};
    const feedbackFalse = ${JSON.stringify(feedbackFalse)};

    function handleAnswer(answer) {
      const isCorrect = answer === correct;
      trueBtn.disabled = true;
      falseBtn.disabled = true;
      trueBtn.style.opacity = '0.7';
      falseBtn.style.opacity = '0.7';

      if (correct) {
        trueBtn.style.background = '#e6f4ea';
        trueBtn.style.borderColor = '#34a853';
      } else {
        falseBtn.style.background = '#e6f4ea';
        falseBtn.style.borderColor = '#34a853';
      }

      if (!isCorrect) {
        if (answer) trueBtn.style.background = '#fce8e6';
        else falseBtn.style.background = '#fce8e6';
      }

      feedbackEl.style.display = 'block';
      if (isCorrect) {
        feedbackEl.style.background = '#e6f4ea';
        feedbackEl.style.color = '#1e7e34';
        feedbackEl.innerHTML = '<strong>Correct!</strong> ' + (answer ? feedbackTrue : feedbackFalse);
      } else {
        feedbackEl.style.background = '#fce8e6';
        feedbackEl.style.color = '#c62828';
        feedbackEl.innerHTML = '<strong>Not quite.</strong> ' + (answer ? feedbackTrue : feedbackFalse);
      }
      retryBtn.style.display = 'inline-block';
    }

    trueBtn.addEventListener('click', () => handleAnswer(true));
    falseBtn.addEventListener('click', () => handleAnswer(false));

    retryBtn.addEventListener('click', () => {
      trueBtn.disabled = false;
      falseBtn.disabled = false;
      trueBtn.style.opacity = '1';
      falseBtn.style.opacity = '1';
      trueBtn.style.background = '#f5f5f5';
      falseBtn.style.background = '#f5f5f5';
      trueBtn.style.borderColor = '#4caf50';
      falseBtn.style.borderColor = '#f44336';
      feedbackEl.style.display = 'none';
      retryBtn.style.display = 'none';
    });
  </script>
</body>
</html>`;

    return [{
      type: 'iframe',
      srcdoc: iframeContent,
      width: '100%',
      height: height,
      style: { border: 'none', borderRadius: '8px' }
    }];
  }
};

/**
 * Fill in the Blanks directive - uses iframe for proper JS execution
 */
const h5pFillBlanksDirective = {
  name: 'h5p-blanks',
  doc: 'Create a fill-in-the-blanks question',
  arg: {
    type: String,
    doc: 'Title of the question'
  },
  body: {
    type: 'markdown',
    doc: 'Additional context or instructions'
  },
  options: {
    text: {
      type: String,
      doc: 'Text with blanks marked as *answer* or *answer1|answer2* for alternatives'
    },
    caseSensitive: {
      type: Boolean,
      doc: 'Whether answers are case-sensitive (default: false)'
    },
    height: {
      type: String,
      doc: 'Height of the question container (default: 300px)'
    }
  },
  run: function(data) {
    const title = data.arg || 'Fill in the Blanks';
    const text = data.options?.text || 'No text provided with *blanks*';
    const caseSensitive = data.options?.caseSensitive === true;
    const height = data.options?.height || '300px';

    // Parse the text to find blanks (marked with *answer*)
    const blanks = [];
    let processedText = text.replace(/\*([^*]+)\*/g, (match, answer) => {
      const blankId = blanks.length;
      const alternatives = answer.split('|').map(a => a.trim());
      blanks.push(alternatives);
      const maxLen = Math.max(...alternatives.map(a => a.length)) + 3;
      return `<input type="text" class="h5p-blank-input" data-index="${blankId}" style="width:${maxLen}ch;min-width:80px" placeholder="...">`;
    });

    const iframeContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: white; }
    .h5p-container { border: 1px solid #ccc; border-radius: 8px; overflow: hidden; }
    .h5p-header { background: linear-gradient(135deg, #e65100, #ff9800); color: white; padding: 1rem 1.25rem; }
    .h5p-header h4 { margin: 0; font-size: 1.1rem; font-weight: 600; }
    .h5p-content { padding: 1.25rem; }
    .h5p-fill-text { font-size: 1.05rem; line-height: 2.2; color: #333; }
    .h5p-blank-input { padding: 0.25rem 0.5rem; border: 2px solid #ccc; border-radius: 4px; font-size: inherit; text-align: center; transition: border-color 0.2s; }
    .h5p-blank-input:focus { border-color: #1a73e8; outline: none; }
    .h5p-feedback { display: none; margin-top: 1rem; padding: 1rem; border-radius: 6px; font-size: 0.95rem; }
    .h5p-actions { margin-top: 1.25rem; display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .h5p-btn-check { padding: 0.6rem 1.5rem; background: #e65100; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.95rem; font-weight: 500; }
    .h5p-btn-check:hover { background: #bf4400; }
    .h5p-btn-show, .h5p-btn-retry { padding: 0.6rem 1.5rem; background: #f5f5f5; color: #333; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; font-size: 0.95rem; display: none; }
    .h5p-btn-show:hover, .h5p-btn-retry:hover { background: #e8e8e8; }
    .h5p-score { display: none; margin-top: 1rem; font-size: 0.9rem; color: #666; }
  </style>
</head>
<body>
  <div class="h5p-container">
    <div class="h5p-header"><h4>${escapeHtml(title)}</h4></div>
    <div class="h5p-content">
      <p class="h5p-fill-text">${processedText}</p>
      <div class="h5p-feedback" id="feedback"></div>
      <div class="h5p-actions">
        <button class="h5p-btn-check" id="checkBtn">Check Answers</button>
        <button class="h5p-btn-show" id="showBtn">Show Solution</button>
        <button class="h5p-btn-retry" id="retryBtn">Try Again</button>
      </div>
      <div class="h5p-score" id="score"></div>
    </div>
  </div>
  <script>
    const checkBtn = document.getElementById('checkBtn');
    const showBtn = document.getElementById('showBtn');
    const retryBtn = document.getElementById('retryBtn');
    const feedbackEl = document.getElementById('feedback');
    const scoreEl = document.getElementById('score');
    const inputs = document.querySelectorAll('.h5p-blank-input');
    const blanks = ${JSON.stringify(blanks)};
    const caseSensitive = ${caseSensitive};

    function normalize(str) {
      return caseSensitive ? str.trim() : str.trim().toLowerCase();
    }

    checkBtn.addEventListener('click', () => {
      let correctCount = 0;
      inputs.forEach((input, i) => {
        const userAnswer = normalize(input.value);
        const correctAnswers = blanks[i].map(a => normalize(a));
        const isCorrect = correctAnswers.includes(userAnswer);
        input.disabled = true;
        if (isCorrect) {
          input.style.borderColor = '#34a853';
          input.style.background = '#e6f4ea';
          correctCount++;
        } else {
          input.style.borderColor = '#ea4335';
          input.style.background = '#fce8e6';
        }
      });

      const total = blanks.length;
      feedbackEl.style.display = 'block';
      if (correctCount === total) {
        feedbackEl.style.background = '#e6f4ea';
        feedbackEl.style.color = '#1e7e34';
        feedbackEl.innerHTML = '<strong>Perfect!</strong> All answers are correct.';
      } else {
        feedbackEl.style.background = '#fce8e6';
        feedbackEl.style.color = '#c62828';
        feedbackEl.innerHTML = '<strong>Not quite.</strong> You got ' + correctCount + ' out of ' + total + ' correct.';
      }
      scoreEl.style.display = 'block';
      scoreEl.textContent = 'Score: ' + correctCount + '/' + total;
      checkBtn.style.display = 'none';
      showBtn.style.display = 'inline-block';
      retryBtn.style.display = 'inline-block';
    });

    showBtn.addEventListener('click', () => {
      inputs.forEach((input, i) => {
        input.value = blanks[i][0];
        input.style.borderColor = '#1a73e8';
        input.style.background = '#e3f2fd';
      });
      showBtn.style.display = 'none';
    });

    retryBtn.addEventListener('click', () => {
      inputs.forEach(input => {
        input.disabled = false;
        input.value = '';
        input.style.borderColor = '#ccc';
        input.style.background = 'white';
      });
      feedbackEl.style.display = 'none';
      scoreEl.style.display = 'none';
      checkBtn.style.display = 'inline-block';
      showBtn.style.display = 'none';
      retryBtn.style.display = 'none';
    });
  </script>
</body>
</html>`;

    return [{
      type: 'iframe',
      srcdoc: iframeContent,
      width: '100%',
      height: height,
      style: { border: 'none', borderRadius: '8px' }
    }];
  }
};

/**
 * MyST plugin export object.
 */
const plugin = {
  name: 'H5P Interactive Questions',
  directives: [
    h5pEmbedDirective,
    h5pMultichoiceDirective,
    h5pTrueFalseDirective,
    h5pFillBlanksDirective
  ]
};

export default plugin;
