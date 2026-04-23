import { relative } from 'node:path';

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
 * Wraps self-contained HTML in an iframe using a base64 data URI as src.
 * MyST's iframe node only renders the `src` property, so srcdoc is not an option.
 * Data URIs work in all modern browsers and provide the same JS isolation.
 */
function srcdocIframe(html, width, height) {
  const encoded = Buffer.from(html, 'utf8').toString('base64');
  return {
    type: 'iframe',
    src: `data:text/html;base64,${encoded}`,
    width,
    height
  };
}

/**
 * H5P embed directive — local .h5p packages or h5p.org fallback.
 *
 * Local usage:  {h5p} acceleration-59        (name of the .h5p file without extension)
 * Remote usage: {h5p} 1234567                (h5p.org content ID)
 *               {h5p} https://h5p.org/…      (full embed URL)
 *
 * Local packages must be placed in the project's h5p/ directory.  The build
 * script (scripts/extract-h5p.mjs) extracts them to _build/html/h5p-content/
 * and writes a player.html per package that uses h5p-standalone via CDN.
 */
const h5pEmbedDirective = {
  name: 'h5p',
  doc: 'Embed a local H5P activity or an h5p.org content ID / URL',
  arg: {
    type: String,
    doc: 'Local activity name (without .h5p), h5p.org numeric ID, or full embed URL',
  },
  options: {
    width: { type: String, doc: 'Width of the iframe (default: 100%)' },
    height: { type: String, doc: 'Height of the iframe (default: 500px)' },
  },
  run: function (data, vfile) {
    const arg = (data.arg || '').trim();

    if (!arg) {
      return [{ type: 'paragraph', children: [{ type: 'text', value: 'Error: h5p directive requires an activity name or content ID.' }] }];
    }

    const width = data.options?.width || '100%';
    const height = data.options?.height || '500px';

    // External URL — embed directly
    if (arg.startsWith('http')) {
      return [{ type: 'iframe', src: arg, width, height }];
    }

    // Numeric h5p.org ID — embed from h5p.org
    if (/^\d+$/.test(arg)) {
      return [{ type: 'iframe', src: `https://h5p.org/h5p/embed/${arg}`, width, height }];
    }

    // Local activity name — compute depth relative to project root (vfile.path may be absolute)
    const srcPath = vfile?.path || '';
    const relPath = srcPath.startsWith('/') ? relative(process.cwd(), srcPath) : srcPath;
    const depth = relPath ? Math.max(0, relPath.split('/').filter(Boolean).length - 1) : 1;
    const prefix = depth > 0 ? '../'.repeat(depth) : '';

    return [{ type: 'iframe', src: `${prefix}h5p-content/${arg}/player.html`, width, height }];
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

    return [srcdocIframe(iframeContent, '100%', height)];
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

    return [srcdocIframe(iframeContent, '100%', height)];
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

    return [srcdocIframe(iframeContent, '100%', height)];
  }
};

/**
 * Sort the Items directive — drag-and-drop ordering activity
 */
const h5pSortDirective = {
  name: 'h5p-sort',
  doc: 'Create a drag-and-drop sorting activity',
  arg: { type: String, doc: 'Title of the activity' },
  body: { type: 'markdown', doc: 'Optional instructions shown above the list' },
  options: {
    items: { type: String, doc: 'JSON array of items (shuffled for display)' },
    correct: { type: String, doc: 'JSON array of items in correct order' },
    height: { type: String, doc: 'Height of the container (default: 440px)' }
  },
  run: function(data) {
    const title = data.arg || 'Sort the Items';
    let items = [];
    let correct = [];
    try { items = JSON.parse(data.options?.items || '[]'); } catch(e) {}
    try { correct = JSON.parse(data.options?.correct || '[]'); } catch(e) {}
    if (correct.length === 0) correct = [...items];
    const height = data.options?.height || '440px';

    const iframeContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: white; }
    .h5p-container { border: 1px solid #ccc; border-radius: 8px; overflow: hidden; }
    .h5p-header { background: linear-gradient(135deg, #00796b, #26a69a); color: white; padding: 1rem 1.25rem; }
    .h5p-header h4 { margin: 0; font-size: 1.1rem; font-weight: 600; }
    .h5p-content { padding: 1.25rem; }
    .h5p-instructions { font-size: 0.9rem; color: #555; margin-bottom: 0.75rem; }
    .sortable-list { list-style: none; padding: 0; }
    .sort-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; margin: 0.35rem 0; background: #f8f9fa; border: 2px solid #e0e0e0; border-radius: 8px; cursor: grab; user-select: none; transition: border-color 0.15s, background 0.15s; }
    .sort-item.dragging { opacity: 0.35; cursor: grabbing; }
    .sort-item.drag-over { border-color: #00796b; background: #e0f2f1; }
    .sort-item.correct  { border-color: #34a853; background: #e6f4ea; }
    .sort-item.incorrect { border-color: #ea4335; background: #fce8e6; }
    .drag-handle { color: #bbb; font-size: 1.1rem; flex-shrink: 0; }
    .item-text { flex: 1; font-size: 0.95rem; color: #333; }
    .h5p-feedback { display: none; margin-top: 0.75rem; padding: 0.85rem 1rem; border-radius: 6px; font-size: 0.9rem; }
    .h5p-actions { margin-top: 0.85rem; display: flex; gap: 0.65rem; flex-wrap: wrap; }
    .btn-primary { padding: 0.55rem 1.4rem; background: #00796b; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem; font-weight: 500; }
    .btn-primary:hover { background: #005b4f; }
    .btn-secondary { padding: 0.55rem 1.4rem; background: #f5f5f5; color: #333; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; font-size: 0.9rem; display: none; }
    .btn-secondary:hover { background: #e8e8e8; }
  </style>
</head>
<body>
  <div class="h5p-container">
    <div class="h5p-header"><h4>${escapeHtml(title)}</h4></div>
    <div class="h5p-content">
      <p class="h5p-instructions">Drag the items into the correct order.</p>
      <ul class="sortable-list" id="sortList"></ul>
      <div class="h5p-feedback" id="feedback"></div>
      <div class="h5p-actions">
        <button class="btn-primary"    id="checkBtn">Check Order</button>
        <button class="btn-secondary"  id="showBtn">Show Solution</button>
        <button class="btn-secondary"  id="retryBtn">Try Again</button>
      </div>
    </div>
  </div>
  <script>
    const ITEMS   = ${JSON.stringify(items)};
    const CORRECT = ${JSON.stringify(correct)};

    const list      = document.getElementById('sortList');
    const checkBtn  = document.getElementById('checkBtn');
    const showBtn   = document.getElementById('showBtn');
    const retryBtn  = document.getElementById('retryBtn');
    const feedbackEl = document.getElementById('feedback');
    let dragSrc = null;

    function escText(t) { return t.replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    function buildList(arr) {
      list.innerHTML = '';
      arr.forEach(text => {
        const li = document.createElement('li');
        li.className = 'sort-item';
        li.draggable = true;
        li.innerHTML = '<span class="drag-handle">&#8999;</span><span class="item-text">' + escText(text) + '</span>';
        li.addEventListener('dragstart', () => { dragSrc = li; requestAnimationFrame(() => li.classList.add('dragging')); });
        li.addEventListener('dragend',   () => { dragSrc = null; li.classList.remove('dragging'); list.querySelectorAll('.sort-item').forEach(i => i.classList.remove('drag-over')); });
        li.addEventListener('dragover',  e => { e.preventDefault(); if (dragSrc !== li) li.classList.add('drag-over'); });
        li.addEventListener('dragleave', () => li.classList.remove('drag-over'));
        li.addEventListener('drop', e => {
          e.preventDefault();
          li.classList.remove('drag-over');
          if (dragSrc && dragSrc !== li) {
            const nodes = [...list.querySelectorAll('.sort-item')];
            nodes.indexOf(dragSrc) < nodes.indexOf(li)
              ? list.insertBefore(dragSrc, li.nextSibling)
              : list.insertBefore(dragSrc, li);
          }
        });
        list.appendChild(li);
      });
    }

    buildList([...ITEMS].sort(() => Math.random() - 0.5));

    checkBtn.addEventListener('click', () => {
      const order = [...list.querySelectorAll('.item-text')].map(s => s.textContent);
      const allOk = order.length === CORRECT.length && order.every((t, i) => t === CORRECT[i]);
      list.querySelectorAll('.sort-item').forEach((li, i) => {
        const t = li.querySelector('.item-text').textContent;
        li.classList.toggle('correct',   t === CORRECT[i]);
        li.classList.toggle('incorrect', t !== CORRECT[i]);
        li.draggable = false;
      });
      feedbackEl.style.display = 'block';
      if (allOk) {
        feedbackEl.style.cssText += 'background:#e6f4ea;color:#1e7e34;';
        feedbackEl.innerHTML = '<strong>Correct!</strong> The items are in the right order.';
      } else {
        feedbackEl.style.cssText += 'background:#fce8e6;color:#c62828;';
        feedbackEl.innerHTML = '<strong>Not quite.</strong> Green items are placed correctly; red ones need to move.';
      }
      checkBtn.style.display   = 'none';
      showBtn.style.display    = 'inline-block';
      retryBtn.style.display   = 'inline-block';
    });

    showBtn.addEventListener('click', () => {
      buildList(CORRECT);
      list.querySelectorAll('.sort-item').forEach(li => { li.classList.add('correct'); li.draggable = false; });
      showBtn.style.display = 'none';
    });

    retryBtn.addEventListener('click', () => {
      buildList([...ITEMS].sort(() => Math.random() - 0.5));
      feedbackEl.style.display = 'none';
      checkBtn.style.display   = 'inline-block';
      showBtn.style.display    = 'none';
      retryBtn.style.display   = 'none';
    });
  </script>
</body>
</html>`;

    return [srcdocIframe(iframeContent, '100%', height)];
  }
};

/**
 * Quiz Question Set directive — shows multiple questions in sequence with a final score.
 * The body must be a JSON array of question objects. Each object has a `type` field:
 *   multichoice: { type, title, question, choices[], correct, feedback[] }
 *   truefalse:   { type, title, statement, correct, feedbackTrue, feedbackFalse }
 *   blanks:      { type, title, text }   — blanks marked with *answer* or *a|b*
 */
const h5pQuizDirective = {
  name: 'h5p-quiz',
  doc: 'Multi-question quiz set (multichoice, truefalse, blanks)',
  arg: { type: String, doc: 'Title of the quiz' },
  body: { type: 'string', doc: 'JSON array of question objects' },
  options: {
    height: { type: String, doc: 'Height of the container (default: 500px)' }
  },
  run: function(data) {
    const title = data.arg || 'Quiz';
    const height = data.options?.height || '500px';

    // body may arrive as a string or as parsed markdown nodes
    let bodyText = '';
    if (typeof data.body === 'string') {
      bodyText = data.body;
    } else if (Array.isArray(data.body)) {
      function nodeText(n) { return n.type === 'text' ? (n.value || '') : (n.children || []).map(nodeText).join(''); }
      bodyText = data.body.map(nodeText).join('\n');
    }

    let questions = [];
    try { questions = JSON.parse(bodyText); } catch(e) {}

    if (!questions.length) {
      return [{ type: 'paragraph', children: [{ type: 'text', value: 'Error: h5p-quiz body must be a JSON array of question objects.' }] }];
    }

    const iframeContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: white; }
    .quiz-wrap  { border: 1px solid #ccc; border-radius: 8px; overflow: hidden; height: 100vh; display: flex; flex-direction: column; }
    .quiz-header { background: linear-gradient(135deg, #5c35a0, #7c4dce); color: white; padding: 0.85rem 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; }
    .quiz-header h4 { margin: 0; font-size: 1.05rem; font-weight: 600; }
    .progress-text { font-size: 0.85rem; opacity: 0.85; }
    .progress-bar-outer { background: rgba(255,255,255,.3); height: 4px; flex-shrink: 0; }
    .progress-bar-inner { background: white; height: 4px; transition: width 0.3s; }
    .quiz-body  { flex: 1; overflow-y: auto; padding: 1.1rem 1.25rem; }
    .q-title    { font-size: 0.8rem; font-weight: 600; color: #7c4dce; text-transform: uppercase; letter-spacing: .04em; margin-bottom: 0.4rem; }
    .q-text     { font-size: 1rem; font-weight: 500; color: #222; margin-bottom: 1rem; line-height: 1.45; }
    /* multichoice */
    .choice     { display: flex; align-items: center; gap: 0.65rem; padding: 0.6rem 0.9rem; margin: 0.3rem 0; border: 2px solid #e0e0e0; border-radius: 8px; cursor: pointer; background: #fafafa; transition: all 0.15s; font-size: 0.95rem; }
    .choice:hover:not(.locked) { border-color: #7c4dce; background: #f3eeff; }
    .choice input { transform: scale(1.15); flex-shrink: 0; }
    .choice.correct   { border-color: #34a853; background: #e6f4ea; }
    .choice.incorrect { border-color: #ea4335; background: #fce8e6; }
    /* truefalse */
    .tf-row     { display: flex; gap: 1rem; justify-content: center; margin-top: 0.5rem; }
    .tf-btn     { flex: 1; max-width: 140px; padding: 0.65rem; border-radius: 8px; cursor: pointer; font-size: 0.95rem; font-weight: 600; transition: transform 0.15s; }
    .tf-btn:hover:not(:disabled) { transform: scale(1.03); }
    #trueBtn  { border: 2px solid #4caf50; background: #f9fbe7; color: #2e7d32; }
    #falseBtn { border: 2px solid #f44336; background: #fff3e0; color: #c62828; }
    /* blanks */
    .blank-input { padding: 0.2rem 0.45rem; border: 2px solid #bbb; border-radius: 4px; font-size: inherit; text-align: center; transition: border-color 0.2s; }
    .blank-input:focus { border-color: #7c4dce; outline: none; }
    .blank-input.correct   { border-color: #34a853; background: #e6f4ea; }
    .blank-input.incorrect { border-color: #ea4335; background: #fce8e6; }
    /* feedback */
    .feedback   { display: none; margin-top: 0.85rem; padding: 0.8rem 1rem; border-radius: 6px; font-size: 0.9rem; }
    /* footer */
    .quiz-footer { flex-shrink: 0; padding: 0.75rem 1.25rem; border-top: 1px solid #eee; display: flex; gap: 0.65rem; }
    .btn-primary   { padding: 0.55rem 1.35rem; background: #7c4dce; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem; font-weight: 500; }
    .btn-primary:hover { background: #5c35a0; }
    .btn-secondary { padding: 0.55rem 1.35rem; background: #f5f5f5; color: #333; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; font-size: 0.9rem; }
    /* results */
    .results    { display: none; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center; flex: 1; }
    .score-ring { width: 90px; height: 90px; border-radius: 50%; border: 6px solid #7c4dce; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; color: #7c4dce; margin-bottom: 1rem; }
    .results h3 { font-size: 1.15rem; color: #222; margin-bottom: 0.4rem; }
    .results p  { font-size: 0.9rem; color: #666; margin-bottom: 1.25rem; }
  </style>
</head>
<body>
  <div class="quiz-wrap" id="quizWrap">
    <div class="quiz-header">
      <h4>${escapeHtml(title)}</h4>
      <span class="progress-text" id="progressText"></span>
    </div>
    <div class="progress-bar-outer"><div class="progress-bar-inner" id="progressBar" style="width:0%"></div></div>
    <div class="quiz-body" id="quizBody"></div>
    <div class="quiz-footer" id="quizFooter">
      <button class="btn-primary" id="checkBtn">Check Answer</button>
      <button class="btn-primary" id="nextBtn" style="display:none">Next Question</button>
    </div>
    <div class="results" id="results">
      <div class="score-ring" id="scoreRing"></div>
      <h3 id="resultTitle"></h3>
      <p id="resultMsg"></p>
      <button class="btn-secondary" id="retryBtn">Try Again</button>
    </div>
  </div>
  <script>
    const QUESTIONS = ${JSON.stringify(questions)};
    let idx = 0, score = 0;

    const quizBody    = document.getElementById('quizBody');
    const quizFooter  = document.getElementById('quizFooter');
    const checkBtn    = document.getElementById('checkBtn');
    const nextBtn     = document.getElementById('nextBtn');
    const retryBtn    = document.getElementById('retryBtn');
    const progressText = document.getElementById('progressText');
    const progressBar  = document.getElementById('progressBar');
    const resultsDiv   = document.getElementById('results');

    function esc(t) { return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    function updateProgress() {
      progressText.textContent = 'Question ' + (idx + 1) + ' of ' + QUESTIONS.length;
      progressBar.style.width  = ((idx / QUESTIONS.length) * 100) + '%';
    }

    function renderQuestion() {
      const q = QUESTIONS[idx];
      updateProgress();
      checkBtn.style.display = 'inline-block';
      nextBtn.style.display  = 'none';

      if (q.type === 'multichoice') {
        const choices = (q.choices || []).map((c, i) =>
          '<label class="choice"><input type="radio" name="mc" value="' + i + '">' + esc(c) + '</label>'
        ).join('');
        quizBody.innerHTML =
          '<div class="q-title">' + esc(q.title || 'Multiple Choice') + '</div>' +
          '<div class="q-text">' + esc(q.question || '') + '</div>' +
          '<div id="choices">' + choices + '</div>' +
          '<div class="feedback" id="feedback"></div>';

      } else if (q.type === 'truefalse') {
        quizBody.innerHTML =
          '<div class="q-title">' + esc(q.title || 'True or False') + '</div>' +
          '<p class="q-text" style="padding:0.85rem;background:#f8f9fa;border-radius:6px;border-left:4px solid #7c4dce">' + esc(q.statement || '') + '</p>' +
          '<div class="tf-row">' +
            '<button id="trueBtn" class="tf-btn" onclick="handleTF(true)">&#10003; True</button>' +
            '<button id="falseBtn" class="tf-btn" onclick="handleTF(false)">&#10007; False</button>' +
          '</div>' +
          '<div class="feedback" id="feedback"></div>';
        checkBtn.style.display = 'none';

      } else if (q.type === 'blanks') {
        const html = (q.text || '').replace(/\\*([^*]+)\\*/g, (_, ans) => {
          const alts = ans.split('|').map(a => a.trim());
          const w = Math.max(...alts.map(a => a.length)) + 3;
          return '<input type="text" class="blank-input" data-answers="' + esc(JSON.stringify(alts)) + '" style="width:' + w + 'ch;min-width:70px" placeholder="...">';
        });
        quizBody.innerHTML =
          '<div class="q-title">' + esc(q.title || 'Fill in the Blanks') + '</div>' +
          '<div class="q-text" style="line-height:2.3">' + html + '</div>' +
          '<div class="feedback" id="feedback"></div>';
      }
    }

    window.handleTF = function(answer) {
      const q = QUESTIONS[idx];
      const correct = q.correct === true || q.correct === 'true';
      const isOk = answer === correct;
      if (isOk) score++;
      const tb = document.getElementById('trueBtn');
      const fb = document.getElementById('falseBtn');
      tb.disabled = true; fb.disabled = true;
      (correct ? tb : fb).style.cssText += 'background:#e6f4ea;border-color:#34a853;';
      if (!isOk) (answer ? tb : fb).style.cssText += 'background:#fce8e6;border-color:#ea4335;';
      showFeedback(isOk, answer ? (q.feedbackTrue || '') : (q.feedbackFalse || ''));
      checkBtn.style.display = 'none';
      nextBtn.style.display  = 'inline-block';
    };

    checkBtn.addEventListener('click', () => {
      const q = QUESTIONS[idx];
      const feedbackEl = document.getElementById('feedback');

      if (q.type === 'multichoice') {
        const selected = document.querySelector('input[name="mc"]:checked');
        if (!selected) { feedbackEl.style.cssText='display:block;background:#fff3cd;color:#856404;'; feedbackEl.textContent='Please select an answer.'; return; }
        const sel = parseInt(selected.value);
        const isOk = sel === q.correct;
        if (isOk) score++;
        document.querySelectorAll('.choice').forEach((el, i) => {
          el.classList.add('locked');
          el.querySelector('input').disabled = true;
          if (i === q.correct) el.classList.add('correct');
          else if (i === sel)  el.classList.add('incorrect');
        });
        showFeedback(isOk, (q.feedback || [])[sel] || '');

      } else if (q.type === 'blanks') {
        const inputs = document.querySelectorAll('.blank-input');
        let correct = 0;
        inputs.forEach(inp => {
          const alts = JSON.parse(inp.dataset.answers || '[]');
          const isOk = alts.map(a => a.toLowerCase().trim()).includes(inp.value.toLowerCase().trim());
          inp.disabled = true;
          inp.classList.toggle('correct',   isOk);
          inp.classList.toggle('incorrect', !isOk);
          if (isOk) correct++;
        });
        const allOk = correct === inputs.length;
        if (allOk) score++;
        showFeedback(allOk, allOk ? 'All blanks filled correctly.' : correct + ' of ' + inputs.length + ' correct.');
      }

      nextBtn.style.display  = 'inline-block';
      checkBtn.style.display = 'none';
    });

    function showFeedback(isOk, msg) {
      const el = document.getElementById('feedback');
      el.style.display = 'block';
      if (isOk) { el.style.cssText = 'display:block;background:#e6f4ea;color:#1e7e34;padding:.8rem 1rem;border-radius:6px;margin-top:.85rem;font-size:.9rem;'; el.innerHTML = '<strong>Correct!</strong> ' + esc(msg); }
      else       { el.style.cssText = 'display:block;background:#fce8e6;color:#c62828;padding:.8rem 1rem;border-radius:6px;margin-top:.85rem;font-size:.9rem;'; el.innerHTML = '<strong>Not quite.</strong> ' + esc(msg); }
    }

    nextBtn.addEventListener('click', () => {
      idx++;
      if (idx >= QUESTIONS.length) showResults();
      else renderQuestion();
    });

    function showResults() {
      quizBody.style.display   = 'none';
      quizFooter.style.display = 'none';
      resultsDiv.style.display = 'flex';
      progressBar.style.width  = '100%';
      progressText.textContent = 'Complete';
      const pct = Math.round((score / QUESTIONS.length) * 100);
      document.getElementById('scoreRing').textContent  = score + '/' + QUESTIONS.length;
      document.getElementById('resultTitle').textContent = pct === 100 ? 'Perfect score!' : pct >= 60 ? 'Good work!' : 'Keep practising!';
      document.getElementById('resultMsg').textContent   = 'You answered ' + score + ' of ' + QUESTIONS.length + ' questions correctly (' + pct + '%).';
    }

    retryBtn.addEventListener('click', () => {
      idx = 0; score = 0;
      quizBody.style.display   = '';
      quizFooter.style.display = '';
      resultsDiv.style.display = 'none';
      renderQuestion();
    });

    renderQuestion();
  </script>
</body>
</html>`;

    return [srcdocIframe(iframeContent, '100%', height)];
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
    h5pFillBlanksDirective,
    h5pSortDirective,
    h5pQuizDirective
  ]
};

export default plugin;
