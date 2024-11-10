var ResumeBuilder = /** @class */ (function () {
    function ResumeBuilder() {
        this.resume = {
            personalInfo: {
                fullName: '',
                email: '',
                phone: ''
            },
            education: [],
            experience: [],
            skills: []
        };
        this.form = document.getElementById('resumeForm');
        this.previewElement = document.getElementById('resume-preview');
        this.initializeEventListeners();
    }
    ResumeBuilder.prototype.initializeEventListeners = function () {
        var _this = this;
        var _a, _b, _c;
        // Add Education Field
        (_a = document.getElementById('add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var educationFields = document.getElementById('education-fields');
            var fieldGroup = document.createElement('div');
            fieldGroup.className = 'field-group';
            fieldGroup.innerHTML = "\n                <input type=\"text\" placeholder=\"School\" required>\n                <input type=\"text\" placeholder=\"Degree\" required>\n                <input type=\"text\" placeholder=\"Graduation Year\" required>\n                <button type=\"button\" class=\"remove-button\">Remove</button>\n            ";
            educationFields === null || educationFields === void 0 ? void 0 : educationFields.appendChild(fieldGroup);
        });
        // Add Experience Field
        (_b = document.getElementById('add-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            var experienceFields = document.getElementById('experience-fields');
            var fieldGroup = document.createElement('div');
            fieldGroup.className = 'field-group';
            fieldGroup.innerHTML = "\n                <input type=\"text\" placeholder=\"Company\" required>\n                <input type=\"text\" placeholder=\"Position\" required>\n                <input type=\"text\" placeholder=\"Start Date\" required>\n                <input type=\"text\" placeholder=\"End Date\" required>\n                <textarea placeholder=\"Description\" required rows=\"3\"></textarea>\n                <button type=\"button\" class=\"remove-button\">Remove</button>\n            ";
            experienceFields === null || experienceFields === void 0 ? void 0 : experienceFields.appendChild(fieldGroup);
        });
        // Remove Field Groups
        document.addEventListener('click', function (e) {
            var _a;
            var target = e.target;
            if (target.classList.contains('remove-button')) {
                (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                _this.updateResume();
                _this.generatePreview();
            }
        });
        // Form Submit
        this.form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (_this.validateForm()) {
                _this.updateResume();
                _this.generatePreview();
            }
        });
        // Download PDF
        (_c = document.getElementById('downloadPdf')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
            _this.generatePDF();
        });
        // Real-time Preview Updates
        var inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.addEventListener('input', function () {
                _this.updateResume();
                _this.generatePreview();
            });
        });
    };
    ResumeBuilder.prototype.validateForm = function () {
        var isValid = true;
        var requiredFields = this.form.querySelectorAll('[required]');
        requiredFields.forEach(function (field) {
            var input = field;
            var errorDiv = input.nextElementSibling;
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--accent-color)';
                if ((errorDiv === null || errorDiv === void 0 ? void 0 : errorDiv.className) === 'error') {
                    errorDiv.textContent = 'This field is required';
                }
            }
            else {
                input.style.borderColor = '';
                if ((errorDiv === null || errorDiv === void 0 ? void 0 : errorDiv.className) === 'error') {
                    errorDiv.textContent = '';
                }
            }
        });
        return isValid;
    };
    ResumeBuilder.prototype.updateResume = function () {
        var _this = this;
        // Update Personal Info
        this.resume.personalInfo = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };
        // Update Education
        this.resume.education = [];
        var educationFields = document.querySelectorAll('#education-fields .field-group');
        educationFields.forEach(function (field) {
            var inputs = field.querySelectorAll('input');
            _this.resume.education.push({
                school: inputs[0].value,
                degree: inputs[1].value,
                graduationYear: inputs[2].value
            });
        });
        // Update Experience
        this.resume.experience = [];
        var experienceFields = document.querySelectorAll('#experience-fields .field-group');
        experienceFields.forEach(function (field) {
            var _a;
            var inputs = field.querySelectorAll('input');
            var description = ((_a = field.querySelector('textarea')) === null || _a === void 0 ? void 0 : _a.value) || '';
            _this.resume.experience.push({
                company: inputs[0].value,
                position: inputs[1].value,
                startDate: inputs[2].value,
                endDate: inputs[3].value,
                description: description
            });
        });
        // Update Skills
        var skillsInput = document.getElementById('skills').value;
        this.resume.skills = skillsInput.split(',').map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill; });
    };
    ResumeBuilder.prototype.generatePreview = function () {
        this.previewElement.innerHTML = "\n            <div class=\"preview-header\">\n                <h2>".concat(this.resume.personalInfo.fullName, "</h2>\n                <p>").concat(this.resume.personalInfo.email, " | ").concat(this.resume.personalInfo.phone, "</p>\n            </div>\n\n            <h2>Education</h2>\n            ").concat(this.resume.education.map(function (edu) { return "\n                <div class=\"education-item\">\n                    <h3>".concat(edu.school, "</h3>\n                    <p>").concat(edu.degree, "</p>\n                    <p>Graduated: ").concat(edu.graduationYear, "</p>\n                </div>\n            "); }).join(''), "\n\n            <h2>Work Experience</h2>\n            ").concat(this.resume.experience.map(function (exp) { return "\n                <div class=\"experience-item\">\n                    <h3>".concat(exp.company, "</h3>\n                    <p><strong>").concat(exp.position, "</strong></p>\n                    <p>").concat(exp.startDate, " - ").concat(exp.endDate, "</p>\n                    <p>").concat(exp.description, "</p>\n                </div>\n            "); }).join(''), "\n\n            ").concat(this.resume.skills.length > 0 ? "\n                <h2>Skills</h2>\n                <div class=\"skills-list\">\n                    ".concat(this.resume.skills.map(function (skill) { return "\n                        <span class=\"skill-item\">".concat(skill, "</span>\n                    "); }).join(''), "\n                </div>\n            ") : '', "\n        ");
    };
    ResumeBuilder.prototype.generatePDF = function () {
        var element = this.previewElement;
        var options = {
            margin: 1,
            filename: "".concat(this.resume.personalInfo.fullName.replace(/\s+/g, '_'), "_resume.pdf"),
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Using the html2pdf library loaded in HTML
        window.html2pdf().set(options).from(element).save();
    };
    return ResumeBuilder;
}());
// Initialize the Resume Builder when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new ResumeBuilder();
});
