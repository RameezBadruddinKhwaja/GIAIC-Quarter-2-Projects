var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Enhanced ResumeBuilder class with real-time typing and improved styling
var ResumeBuilder = /** @class */ (function () {
    function ResumeBuilder() {
        this.currentResumeURL = '';
        this.typingTimeouts = [];
        this.form = document.getElementById('resumeForm');
        this.previewSection = document.getElementById('resumePreview');
        // Create the share button styled like other buttons
        this.shareButton = document.createElement('button');
        this.shareButton.type = 'button';
        this.shareButton.innerHTML = '<i class="fas fa-copy"></i> Copy Share Link';
        // Use the same styling class as your other secondary buttons
        this.shareButton.classList.add('secondary-btn');
        this.initializeStyles();
        this.setupEventListeners();
        this.setupValidation();
        this.setupInteractiveStyles();
        this.setupShareFeature();
    }
    // Attach event listeners for form buttons and actions
    ResumeBuilder.prototype.setupEventListeners = function () {
        var _this = this;
        var _a, _b, _c, _d;
        (_a = document.getElementById('addEducation')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.createDynamicEntry('education'));
        (_b = document.getElementById('addExperience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.createDynamicEntry('experience'));
        (_c = document.getElementById('addSkill')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', this.createDynamicEntry('skill'));
        (_d = document.getElementById('downloadResume')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return _this.downloadResumePDF(); });
        this.form.addEventListener('submit', this.generateResume.bind(this));
    };
    ResumeBuilder.prototype.initializeStyles = function () {
        var styleElement = document.createElement('style');
        styleElement.textContent = "\n            /* Enhanced Resume Styles */\n            .resume-container {\n                max-width: 800px;\n                margin: 0 auto;\n                padding: 2rem;\n                background: white;\n                box-shadow: 0 0 20px rgba(0,0,0,0.1);\n                position: relative;\n            }\n\n            .resume-container::after {\n                content: attr(data-page);\n                position: absolute;\n                bottom: 20px;\n                right: 20px;\n                font-size: 12px;\n                color: #666;\n            }\n\n            .resume-header {\n                border-bottom: 3px solid #3498db;\n                margin-bottom: 2rem;\n                padding-bottom: 1rem;\n                position: relative;\n            }\n\n            .resume-header h1 {\n                color: #2c3e50;\n                font-size: 2.5rem;\n                margin-bottom: 1rem;\n                font-weight: 700;\n                position: relative;\n                display: inline-block;\n            }\n\n            .resume-header h1::after {\n                content: '';\n                position: absolute;\n                bottom: -5px;\n                left: 0;\n                width: 100%;\n                height: 3px;\n                background: #3498db;\n                transform: scaleX(0);\n                transform-origin: left;\n                animation: slideIn 0.5s forwards;\n            }\n\n            .contact-info {\n                display: grid;\n                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n                gap: 1rem;\n                color: #666;\n            }\n\n            .contact-info p {\n                display: flex;\n                align-items: center;\n                gap: 0.5rem;\n            }\n\n            .resume-section {\n                margin-bottom: 2rem;\n                position: relative;\n            }\n\n            .resume-section h2 {\n                color: #3498db;\n                font-size: 1.5rem;\n                margin-bottom: 1rem;\n                padding-bottom: 0.5rem;\n                border-bottom: 2px solid #ecf0f1;\n                position: relative;\n            }\n\n            .resume-section h2::before {\n                content: '';\n                position: absolute;\n                left: 0;\n                bottom: -2px;\n                width: 50px;\n                height: 2px;\n                background: #3498db;\n            }\n\n            .resume-entry {\n                padding: 1rem;\n                margin-bottom: 1rem;\n                border-left: 3px solid #3498db;\n                background: #f8f9fa;\n                transition: all 0.3s ease;\n            }\n\n            .resume-entry:hover {\n                transform: translateX(5px);\n                box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n            }\n\n            .resume-entry h3 {\n                color: #2c3e50;\n                margin-bottom: 0.5rem;\n            }\n\n            .skills-grid {\n                display: grid;\n                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n                gap: 1rem;\n                margin-top: 1rem;\n            }\n\n            .skill-chip {\n                padding: 0.5rem 1rem;\n                border-radius: 20px;\n                font-size: 0.9rem;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                transition: all 0.3s ease;\n            }\n\n            .skill-chip.beginner { background: #ebf5fb; color: #2980b9; }\n            .skill-chip.intermediate { background: #e8f6f3; color: #27ae60; }\n            .skill-chip.advanced { background: #ebf5eb; color: #2ecc71; }\n            .skill-chip.expert { background: #f4ecf7; color: #8e44ad; }\n\n            .skill-chip:hover {\n                transform: translateY(-2px);\n                box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n            }\n\n            .proficiency {\n                font-size: 0.8rem;\n                opacity: 0.8;\n            }\n\n            @keyframes slideIn {\n                to {\n                    transform: scaleX(1);\n                }\n            }\n\n            .typing-animation {\n                border-right: 2px solid #3498db;\n                animation: blink 0.7s infinite;\n                white-space: pre-wrap;\n            }\n\n            @keyframes blink {\n                50% { border-color: transparent; }\n            }\n\n            /* Print styles */\n            @media print {\n                .resume-container {\n                    box-shadow: none;\n                    padding: 0;\n                }\n\n                .resume-entry:hover {\n                    transform: none;\n                    box-shadow: none;\n                }\n            }\n        ";
        document.head.appendChild(styleElement);
    };
    ResumeBuilder.prototype.animateTyping = function (text, element, delay) {
        var _this = this;
        if (delay === void 0) { delay = 50; }
        var index = 0;
        element.classList.add('typing-animation');
        var type = function () {
            var timeout = setTimeout(function () {
                if (index < text.length) {
                    element.textContent = text.slice(0, index + 1);
                    index++;
                    _this.typingTimeouts.push(window.setTimeout(type, delay));
                }
                else {
                    element.classList.remove('typing-animation');
                }
            }, delay);
            _this.typingTimeouts.push(timeout);
        };
        type();
    };
    ResumeBuilder.prototype.clearTypingTimeouts = function () {
        this.typingTimeouts.forEach(function (timeout) { return clearTimeout(timeout); });
        this.typingTimeouts = [];
    };
    ResumeBuilder.prototype.createResumeHTML = function (personalInfo, educationEntries, experienceEntries, skillEntries) {
        return "\n            <div class=\"resume-container\" data-page=\"Page 1 of 1\">\n                <header class=\"resume-header\">\n                    <h1 class=\"animate-name\">".concat(personalInfo.fullName, "</h1>\n                    <div class=\"contact-info\">\n                        <p><i class=\"fas fa-envelope\"></i> ").concat(personalInfo.email, "</p>\n                        <p><i class=\"fas fa-phone\"></i> ").concat(personalInfo.phone, "</p>\n                        <p><i class=\"fas fa-map-marker-alt\"></i> ").concat(personalInfo.address, "</p>\n                    </div>\n                </header>\n\n                <section class=\"resume-section\">\n                    <h2><i class=\"fas fa-graduation-cap\"></i> Educational Background</h2>\n                    ").concat(educationEntries.map(function (edu) { return "\n                        <div class=\"resume-entry\">\n                            <h3>".concat(edu.institution, "</h3>\n                            <p class=\"degree\">").concat(edu.degree, "</p>\n                            <p class=\"year\">").concat(edu.graduationYear, "</p>\n                        </div>\n                    "); }).join(''), "\n                </section>\n\n                <section class=\"resume-section\">\n                    <h2><i class=\"fas fa-briefcase\"></i> Professional Experience</h2>\n                    ").concat(experienceEntries.map(function (exp) { return "\n                        <div class=\"resume-entry\">\n                            <h3>".concat(exp.company, " - ").concat(exp.position, "</h3>\n                            <p class=\"duration\">").concat(exp.duration, "</p>\n                            <ul class=\"responsibilities\">\n                                ").concat(exp.responsibilities.split('\n').map(function (resp) { return "\n                                    <li>".concat(resp, "</li>\n                                "); }).join(''), "\n                            </ul>\n                        </div>\n                    "); }).join(''), "\n                </section>\n\n                <section class=\"resume-section\">\n                    <h2><i class=\"fas fa-tools\"></i> Professional Skills</h2>\n                    <div class=\"skills-grid\">\n                        ").concat(skillEntries.map(function (skill) { return "\n                            <div class=\"skill-chip ".concat(skill.proficiency.toLowerCase(), "\">\n                                <span>").concat(skill.skill, "</span>\n                                <span class=\"proficiency\">").concat(skill.proficiency, "</span>\n                            </div>\n                        "); }).join(''), "\n                    </div>\n                </section>\n            </div>\n        ");
    };
    ResumeBuilder.prototype.generateResume = function (e) {
        e.preventDefault();
        this.clearTypingTimeouts();
        var personalInfo = this.collectPersonalInfo();
        var educationEntries = this.collectEntries('education');
        var experienceEntries = this.collectEntries('experience');
        var skillEntries = this.collectEntries('skill');
        var resumeContent = this.createResumeHTML(personalInfo, educationEntries, experienceEntries, skillEntries);
        this.previewSection.innerHTML = resumeContent;
        // Animate the name with typing effect
        var nameElement = this.previewSection.querySelector('.animate-name');
        if (nameElement) {
            this.animateTyping(personalInfo.fullName, nameElement);
        }
        // Calculate and update page numbers
        this.updatePageNumbers();
        // Generate share URL and save the resume
        var username = this.sanitizeUsername(personalInfo.fullName);
        this.currentResumeURL = URLGenerator.generateResumeURL(username);
        ResumeStorageManager.saveResume({
            personalInfo: personalInfo,
            education: educationEntries,
            experience: experienceEntries,
            skills: skillEntries
        }, this.currentResumeURL);
    };
    ResumeBuilder.prototype.updatePageNumbers = function () {
        var container = this.previewSection.querySelector('.resume-container');
        if (container) {
            var height = container.scrollHeight;
            var pages = Math.ceil(height / 1056); // A4 height in pixels at 96 DPI
            container.setAttribute('data-page', "Page 1 of ".concat(pages));
        }
    };
    ResumeBuilder.prototype.createDynamicEntry = function (type) {
        var _this = this;
        return function () {
            var containerMap = {
                education: 'educationEntries',
                experience: 'experienceEntries',
                skill: 'skillEntries'
            };
            var container = document.getElementById(containerMap[type]);
            if (!container)
                return;
            var newEntry = document.createElement('div');
            newEntry.className = 'entry-card animated-entry';
            newEntry.innerHTML = _this.generateEntryHTML(type);
            container.appendChild(newEntry);
            // Animate entry
            newEntry.style.opacity = '0';
            setTimeout(function () {
                newEntry.style.opacity = '1';
                newEntry.style.transform = 'translateY(0)';
            }, 50);
            var removeBtn = newEntry.querySelector('.remove-entry-btn');
            removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.addEventListener('click', function () {
                newEntry.style.opacity = '0';
                newEntry.style.transform = 'translateX(-100%)';
                setTimeout(function () { return newEntry.remove(); }, 300);
            });
        };
    };
    ResumeBuilder.prototype.generateEntryHTML = function (type) {
        var templates = {
            education: "\n                <input type=\"text\" placeholder=\"Institution Name\" data-validate=\"name\" required>\n                <input type=\"text\" placeholder=\"Degree Earned\" data-validate=\"name\" required>\n                <input type=\"text\" placeholder=\"Graduation Year\" data-validate=\"year\" required>\n                <button type=\"button\" class=\"remove-entry-btn\">\n                    <i class=\"fas fa-trash\"></i>\n                </button>\n            ",
            experience: "\n                <input type=\"text\" placeholder=\"Company Name\" data-validate=\"name\" required>\n                <input type=\"text\" placeholder=\"Job Title\" data-validate=\"name\" required>\n                <input type=\"text\" placeholder=\"Duration\" required>\n                <textarea placeholder=\"Key Responsibilities\" required></textarea>\n                <button type=\"button\" class=\"remove-entry-btn\">\n                    <i class=\"fas fa-trash\"></i>\n                </button>\n            ",
            skill: "\n                <input type=\"text\" placeholder=\"Skill Name\" data-validate=\"name\" required>\n                <select required>\n                    <option value=\"\">Proficiency Level</option>\n                    <option>Beginner</option>\n                    <option>Intermediate</option>\n                    <option>Advanced</option>\n                    <option>Expert</option>\n                </select>\n                <button type=\"button\" class=\"remove-entry-btn\">\n                    <i class=\"fas fa-trash\"></i>\n                </button>\n            "
        };
        return templates[type];
    };
    ResumeBuilder.prototype.collectPersonalInfo = function () {
        return {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        };
    };
    ResumeBuilder.prototype.collectEntries = function (type) {
        var containers = {
            education: 'educationEntries',
            experience: 'experienceEntries',
            skill: 'skillEntries'
        };
        var entries = [];
        var container = document.getElementById(containers[type]);
        container === null || container === void 0 ? void 0 : container.querySelectorAll('.entry-card').forEach(function (card) {
            var inputs = card.querySelectorAll('input, select, textarea');
            var entry = {};
            inputs.forEach(function (input, index) {
                var inputElement = input;
                switch (type) {
                    case 'education':
                        if (index === 0)
                            entry.institution = inputElement.value;
                        if (index === 1)
                            entry.degree = inputElement.value;
                        if (index === 2)
                            entry.graduationYear = inputElement.value;
                        break;
                    case 'experience':
                        if (index === 0)
                            entry.company = inputElement.value;
                        if (index === 1)
                            entry.position = inputElement.value;
                        if (index === 2)
                            entry.duration = inputElement.value;
                        if (index === 3)
                            entry.responsibilities = inputElement.value;
                        break;
                    case 'skill':
                        if (index === 0)
                            entry.skill = inputElement.value;
                        if (index === 1)
                            entry.proficiency = inputElement.value;
                        break;
                }
            });
            entries.push(entry);
        });
        return entries;
    };
    ResumeBuilder.prototype.animateWordByWord = function (text, container) {
        var _this = this;
        if (this.wordAnimationTimeout) {
            clearTimeout(this.wordAnimationTimeout);
        }
        container.innerHTML = '';
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;
        var words = tempDiv.innerText.split(/\s+/);
        var index = 0;
        var addWord = function () {
            if (index < words.length) {
                var span_1 = document.createElement('span');
                span_1.textContent = words[index] + ' ';
                span_1.style.opacity = '0';
                span_1.style.transition = 'opacity 0.3s ease';
                container.appendChild(span_1);
                setTimeout(function () {
                    span_1.style.opacity = '1';
                }, 50);
                index++;
                _this.wordAnimationTimeout = window.setTimeout(addWord, 100);
            }
            else {
                container.innerHTML = text;
            }
        };
        addWord();
    };
    ResumeBuilder.prototype.downloadResumePDF = function () {
        var _this = this;
        if (!this.currentResumeURL) {
            alert('Generate a resume first!');
            return;
        }
        var resumeContent = this.previewSection.querySelector('.resume-container');
        if (!resumeContent) {
            alert('Resume content not found!');
            return;
        }
        // Show loading state
        var downloadButton = document.getElementById('downloadResume');
        var originalText = downloadButton.innerHTML;
        downloadButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        downloadButton.disabled = true;
        // Wait for fonts to load
        document.fonts.ready
            .then(function () {
            // Generate canvas
            return html2canvas(resumeContent, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true,
                backgroundColor: '#ffffff'
            });
        })
            .then(function (canvas) {
            var imgData = canvas.toDataURL('image/png');
            // A4 dimensions in mm
            var pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            var pdfWidth = pdf.internal.pageSize.getWidth();
            var pdfHeight = pdf.internal.pageSize.getHeight();
            var imgWidth = canvas.width;
            var imgHeight = canvas.height;
            var ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            var imgX = (pdfWidth - imgWidth * ratio) / 2;
            var imgY = 0;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            // Add metadata
            var personalInfo = _this.collectPersonalInfo();
            pdf.setProperties({
                title: "".concat(personalInfo.fullName, " - Resume"),
                subject: 'Professional Resume',
                author: personalInfo.fullName,
                keywords: 'resume, cv, professional',
                creator: 'Resume Forge'
            });
            // Save PDF
            pdf.save("".concat(personalInfo.fullName.replace(/\s+/g, '_'), "_Resume.pdf"));
            // Restore button state
            downloadButton.innerHTML = originalText;
            downloadButton.disabled = false;
        })
            .catch(function (error) {
            console.error('PDF Generation Error:', error);
            alert('Failed to generate PDF. Please try again.');
            // Restore button state on error
            downloadButton.innerHTML = '<i class="fas fa-download"></i> Download PDF';
            downloadButton.disabled = false;
        });
    };
    // Updated copyShareLink() now uses the modern Clipboard API
    ResumeBuilder.prototype.copyShareLink = function () {
        if (!this.currentResumeURL) {
            alert('Generate a resume first!');
            return;
        }
        navigator.clipboard.writeText(this.currentResumeURL)
            .then(function () {
            alert('Resume URL copied to clipboard!');
        })
            .catch(function () {
            alert('Failed to copy URL');
        });
    };
    ResumeBuilder.prototype.setupValidation = function () {
        var validationRules = {
            'name': {
                regex: /^[A-Za-z\s]+$/,
                message: 'Only alphabets are allowed'
            },
            'phone': {
                regex: /^[0-9+\s-]+$/,
                message: 'Only numbers and +/- are allowed'
            },
            'year': {
                regex: /^[0-9]{4}$/,
                message: 'Must be a 4-digit year'
            },
            'email': {
                regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format'
            }
        };
        document.querySelectorAll('[data-validate]').forEach(function (input) {
            var validateType = input.getAttribute('data-validate');
            input.addEventListener('input', function (e) {
                var target = e.target;
                if (validateType && validationRules[validateType]) {
                    var rule = validationRules[validateType];
                    if (!rule.regex.test(target.value)) {
                        target.classList.add('input-error');
                        target.setCustomValidity(rule.message);
                        target.reportValidity();
                    }
                    else {
                        target.classList.remove('input-error');
                        target.setCustomValidity('');
                    }
                }
            });
        });
    };
    ResumeBuilder.prototype.setupInteractiveStyles = function () {
        var inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(function (input) {
            input.addEventListener('focus', function () {
                input.classList.add('input-focus');
            });
            input.addEventListener('blur', function () {
                input.classList.remove('input-focus');
            });
        });
    };
    // Now, the share feature simply appends the share button to the form actions.
    ResumeBuilder.prototype.setupShareFeature = function () {
        var formActions = document.querySelector('.form-actions');
        formActions === null || formActions === void 0 ? void 0 : formActions.appendChild(this.shareButton);
        this.shareButton.addEventListener('click', this.copyShareLink.bind(this));
    };
    ResumeBuilder.prototype.sanitizeUsername = function (fullName) {
        return fullName
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .substring(0, 20);
    };
    return ResumeBuilder;
}());
// Unique URL Generation Utilities
var URLGenerator = /** @class */ (function () {
    function URLGenerator() {
    }
    URLGenerator.generateUniqueId = function (length) {
        if (length === void 0) { length = 10; }
        var result = '';
        var charsLength = this.CHARS.length;
        for (var i = 0; i < length; i++) {
            result += this.CHARS.charAt(Math.floor(Math.random() * charsLength));
        }
        return result;
    };
    URLGenerator.generateResumeURL = function (username) {
        var uniqueIdentifier = this.generateUniqueId();
        return "https://resumeforge.com/".concat(username, "/").concat(uniqueIdentifier);
    };
    URLGenerator.CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return URLGenerator;
}());
// Local Storage Management for Resume Persistence
var ResumeStorageManager = /** @class */ (function () {
    function ResumeStorageManager() {
    }
    ResumeStorageManager.saveResume = function (resumeData, url) {
        var resumeDatabase = this.getResumeDatabase();
        resumeDatabase[url] = __assign(__assign({}, resumeData), { createdAt: new Date().toISOString() });
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(resumeDatabase));
    };
    ResumeStorageManager.getResumeByURL = function (url) {
        var resumeDatabase = this.getResumeDatabase();
        return resumeDatabase[url] || null;
    };
    ResumeStorageManager.getResumeDatabase = function () {
        var stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    };
    ResumeStorageManager.STORAGE_KEY = 'resume_database';
    return ResumeStorageManager;
}());
// Helper function to retrieve resume by URL
function retrieveResumeByURL(url) {
    var resumeData = ResumeStorageManager.getResumeByURL(url);
    if (resumeData) {
        var previewSection = document.getElementById('resumePreview');
        if (previewSection) {
            var resumeHTML = generateResumeHTMLFromData(resumeData);
            previewSection.innerHTML = resumeHTML;
        }
    }
    else {
        alert('Resume not found');
    }
}
// Helper function to generate HTML from resume data
function generateResumeHTMLFromData(resumeData) {
    var personalInfo = resumeData.personalInfo, education = resumeData.education, experience = resumeData.experience, skills = resumeData.skills;
    return "\n        <div class=\"resume-container\">\n            <header class=\"resume-header\">\n                <h1>".concat(personalInfo.fullName, "</h1>\n                <div class=\"contact-info\">\n                    <p>").concat(personalInfo.email, " | ").concat(personalInfo.phone, "</p>\n                    <p>").concat(personalInfo.address, "</p>\n                </div>\n            </header>\n            \n            <section class=\"resume-section\">\n                <h2>Education</h2>\n                ").concat(education.map(function (edu) { return "\n                    <div class=\"resume-entry\">\n                        <h3>".concat(edu.institution, "</h3>\n                        <p>").concat(edu.degree, " - ").concat(edu.graduationYear, "</p>\n                    </div>\n                "); }).join(''), "\n            </section>\n\n            <section class=\"resume-section\">\n                <h2>Experience</h2>\n                ").concat(experience.map(function (exp) { return "\n                    <div class=\"resume-entry\">\n                        <h3>".concat(exp.company, " - ").concat(exp.position, "</h3>\n                        <p>").concat(exp.duration, "</p>\n                        <ul>\n                            ").concat(exp.responsibilities.split('\n').map(function (resp) { return "<li>".concat(resp, "</li>"); }).join(''), "\n                        </ul>\n                    </div>\n                "); }).join(''), "\n            </section>\n\n            <section class=\"resume-section\">\n                <h2>Skills</h2>\n                <div class=\"skills-grid\">\n                    ").concat(skills.map(function (skill) { return "\n                        <div class=\"skill-chip ".concat(skill.proficiency.toLowerCase(), "\">\n                            ").concat(skill.skill, "\n                            <span class=\"proficiency\">").concat(skill.proficiency, "</span>\n                        </div>\n                    "); }).join(''), "\n                </div>\n            </section>\n        </div>\n    ");
}
// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname;
    var pathParts = currentPath.split('/');
    if (pathParts.length === 3 && pathParts[1] === 'resume') {
        retrieveResumeByURL(window.location.href);
    }
    else {
        new ResumeBuilder();
    }
});
