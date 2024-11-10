var ResumeBuilder = /** @class */ (function () {
    function ResumeBuilder() {
        this.resume = {
            personalInfo: {
                fullName: '',
                email: '',
                phone: '',
                birthDate: ''
            },
            education: [],
            experience: [],
            skills: []
        };
        this.isEditing = false;
        this.form = document.getElementById('resumeForm');
        this.previewElement = document.getElementById('resume-preview');
        this.initializeEventListeners();
    }
    ResumeBuilder.prototype.generateUniqueId = function () {
        return "id_".concat(Math.random().toString(36).substr(2, 9));
    };
    ResumeBuilder.prototype.makeEditable = function (element, value, onUpdate) {
        var _this = this;
        if (this.isEditing)
            return;
        this.isEditing = true;
        var input = document.createElement('input');
        input.value = value;
        input.className = 'editable-input';
        var saveEdit = function () {
            var newValue = input.value.trim();
            _this.isEditing = false;
            onUpdate(newValue);
            _this.generatePreview();
        };
        input.addEventListener('blur', saveEdit);
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                saveEdit();
            }
        });
        element.innerHTML = '';
        element.appendChild(input);
        input.focus();
    };
    ResumeBuilder.prototype.makeTextAreaEditable = function (element, value, onUpdate) {
        var _this = this;
        if (this.isEditing)
            return;
        this.isEditing = true;
        var textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.className = 'editable-textarea';
        textarea.rows = 3;
        var saveEdit = function () {
            var newValue = textarea.value.trim();
            _this.isEditing = false;
            onUpdate(newValue);
            _this.generatePreview();
        };
        textarea.addEventListener('blur', saveEdit);
        textarea.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                saveEdit();
            }
        });
        element.innerHTML = '';
        element.appendChild(textarea);
        textarea.focus();
    };
    ResumeBuilder.prototype.initializeRealTimeListeners = function () {
        var _this = this;
        // Personal Information real-time updates
        ['fullName', 'email', 'phone', 'birthDate'].forEach(function (field) {
            var input = document.getElementById(field);
            input === null || input === void 0 ? void 0 : input.addEventListener('input', function () {
                _this.updateResume();
                _this.generatePreview();
            });
        });
        // Skills real-time updates
        var skillsInput = document.getElementById('skills');
        skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.addEventListener('input', function () {
            _this.updateResume();
            _this.generatePreview();
        });
    };
    ResumeBuilder.prototype.validateForm = function () {
        var isValid = true;
        var requiredFields = ['fullName', 'email', 'birthDate'];
        requiredFields.forEach(function (field) {
            var input = document.getElementById(field);
            var errorDiv = input.nextElementSibling;
            if (!input.value.trim()) {
                isValid = false;
                errorDiv.textContent = 'This field is required';
                input.classList.add('error');
            }
            else {
                errorDiv.textContent = '';
                input.classList.remove('error');
            }
        });
        return isValid;
    };
    ResumeBuilder.prototype.updateResume = function () {
        var _this = this;
        // Update personal information
        this.resume.personalInfo = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            birthDate: document.getElementById('birthDate').value
        };
        // Update education
        var educationGroups = document.querySelectorAll('#education-fields .field-group');
        this.resume.education = Array.prototype.slice.call(educationGroups).map(function (group) { return ({
            institution: group.querySelector('input[placeholder="Institution"]').value,
            details: group.querySelector('input[placeholder="Details"]').value,
            year: group.querySelector('input[placeholder="Year"]').value,
            id: _this.generateUniqueId()
        }); });
        // Update experience
        var experienceGroups = document.querySelectorAll('#experience-fields .field-group');
        this.resume.experience = Array.prototype.slice.call(experienceGroups).map(function (group) { return ({
            organization: group.querySelector('input[placeholder="Organization"]').value,
            position: group.querySelector('input[placeholder="Position"]').value,
            startDate: group.querySelector('input[placeholder="Start Date"]').value,
            endDate: group.querySelector('input[placeholder="End Date"]').value,
            description: group.querySelector('textarea').value,
            id: _this.generateUniqueId()
        }); });
        // Update skills
        this.resume.skills = document.getElementById('skills').value
            .split(',')
            .map(function (skill) { return skill.trim(); })
            .filter(function (skill) { return skill !== ''; });
    };
    ResumeBuilder.prototype.generatePreview = function () {
        var _a = this.resume.personalInfo, fullName = _a.fullName, email = _a.email, phone = _a.phone, birthDate = _a.birthDate;
        var formattedDate = birthDate ? new Date(birthDate).toLocaleDateString() : '';
        this.previewElement.innerHTML = "\n            <div class=\"preview-header\">\n                <h2 class=\"editable\" data-field=\"fullName\">".concat(fullName, "</h2>\n                <p>\n                    <span class=\"editable\" data-field=\"email\">").concat(email, "</span> | \n                    <span class=\"editable\" data-field=\"phone\">").concat(phone, "</span>\n                </p>\n                <p>Date of Birth: ").concat(formattedDate, "</p>\n            </div>\n\n            <h2>Education</h2>\n            ").concat(this.resume.education.map(function (edu) { return "\n                <div class=\"education-item\" data-id=\"".concat(edu.id, "\">\n                    <h3 class=\"editable\" data-type=\"education\" data-field=\"institution\" data-id=\"").concat(edu.id, "\">").concat(edu.institution, "</h3>\n                    <p class=\"editable\" data-type=\"education\" data-field=\"details\" data-id=\"").concat(edu.id, "\">").concat(edu.details, "</p>\n                    <p class=\"editable\" data-type=\"education\" data-field=\"year\" data-id=\"").concat(edu.id, "\">").concat(edu.year, "</p>\n                </div>\n            "); }).join(''), "\n\n            <h2>Experience</h2>\n            ").concat(this.resume.experience.map(function (exp) { return "\n                <div class=\"experience-item\" data-id=\"".concat(exp.id, "\">\n                    <h3 class=\"editable\" data-type=\"experience\" data-field=\"organization\" data-id=\"").concat(exp.id, "\">").concat(exp.organization, "</h3>\n                    <p><strong class=\"editable\" data-type=\"experience\" data-field=\"position\" data-id=\"").concat(exp.id, "\">").concat(exp.position, "</strong></p>\n                    <p>\n                        <span class=\"editable\" data-type=\"experience\" data-field=\"startDate\" data-id=\"").concat(exp.id, "\">").concat(exp.startDate, "</span> - \n                        <span class=\"editable\" data-type=\"experience\" data-field=\"endDate\" data-id=\"").concat(exp.id, "\">").concat(exp.endDate, "</span>\n                    </p>\n                    <p class=\"description editable\" data-type=\"experience\" data-field=\"description\" data-id=\"").concat(exp.id, "\">").concat(exp.description, "</p>\n                </div>\n            "); }).join(''), "\n\n            <h2>Skills</h2>\n            <div class=\"skills-list\">\n                ").concat(this.resume.skills.map(function (skill) { return "\n                    <span class=\"skill-item\">".concat(skill, "</span>\n                "); }).join(''), "\n            </div>\n        ");
        this.addEditableListeners();
    };
    ResumeBuilder.prototype.addEditableListeners = function () {
        var _this = this;
        var editableElements = this.previewElement.querySelectorAll('.editable');
        editableElements.forEach(function (element) {
            element.addEventListener('click', function () {
                var field = element.dataset.field;
                var type = element.dataset.type;
                var id = element.dataset.id;
                if (!field)
                    return;
                if (type === 'education') {
                    var education_1 = _this.resume.education.filter(function (edu) { return edu.id === id; })[0];
                    if (education_1) {
                        _this.makeEditable(element, education_1[field], function (newValue) {
                            education_1[field] = newValue;
                        });
                    }
                }
                else if (type === 'experience') {
                    var experience_1 = _this.resume.experience.filter(function (exp) { return exp.id === id; })[0];
                    if (experience_1) {
                        if (field === 'description') {
                            _this.makeTextAreaEditable(element, experience_1[field], function (newValue) {
                                experience_1[field] = newValue;
                            });
                        }
                        else {
                            _this.makeEditable(element, experience_1[field], function (newValue) {
                                experience_1[field] = newValue;
                            });
                        }
                    }
                }
                else {
                    var currentValue = _this.resume.personalInfo[field];
                    _this.makeEditable(element, currentValue, function (newValue) {
                        _this.resume.personalInfo[field] = newValue;
                    });
                }
            });
        });
    };
    ResumeBuilder.prototype.generatePDF = function () {
        var element = this.previewElement;
        var opt = {
            margin: 1,
            filename: "".concat(this.resume.personalInfo.fullName.replace(/\s+/g, '_'), "_resume.pdf"),
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // @ts-ignore (html2pdf is loaded via CDN)
        html2pdf().set(opt).from(element).save();
    };
    ResumeBuilder.prototype.addInputListenersToGroup = function (group) {
        var _this = this;
        var inputs = group.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.addEventListener('input', function () {
                _this.updateResume();
                _this.generatePreview();
            });
        });
    };
    ResumeBuilder.prototype.initializeEventListeners = function () {
        var _this = this;
        var _a, _b, _c;
        // Initialize real-time update listeners
        this.initializeRealTimeListeners();
        // Add education field
        (_a = document.getElementById('add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var educationFields = document.getElementById('education-fields');
            var fieldGroup = document.createElement('div');
            fieldGroup.className = 'field-group';
            fieldGroup.innerHTML = "\n                <input type=\"text\" placeholder=\"Institution\" required>\n                <input type=\"text\" placeholder=\"Details\" required>\n                <input type=\"text\" placeholder=\"Year\" required>\n                <button type=\"button\" class=\"remove-button\">Remove</button>\n            ";
            educationFields === null || educationFields === void 0 ? void 0 : educationFields.appendChild(fieldGroup);
            _this.addInputListenersToGroup(fieldGroup);
        });
        // Add experience field
        (_b = document.getElementById('add-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            var experienceFields = document.getElementById('experience-fields');
            var fieldGroup = document.createElement('div');
            fieldGroup.className = 'field-group';
            fieldGroup.innerHTML = "\n                <input type=\"text\" placeholder=\"Organization\" required>\n                <input type=\"text\" placeholder=\"Position\" required>\n                <input type=\"text\" placeholder=\"Start Date\" required>\n                <input type=\"text\" placeholder=\"End Date\" required>\n                <textarea placeholder=\"Description\" required rows=\"3\"></textarea>\n                <button type=\"button\" class=\"remove-button\">Remove</button>\n            ";
            experienceFields === null || experienceFields === void 0 ? void 0 : experienceFields.appendChild(fieldGroup);
            _this.addInputListenersToGroup(fieldGroup);
        });
        // Remove field button handler
        document.addEventListener('click', function (e) {
            var _a;
            var target = e.target;
            if (target.classList.contains('remove-button')) {
                (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                _this.updateResume();
                _this.generatePreview();
            }
        });
        // Form submission
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
    };
    return ResumeBuilder;
}());
// Initialize the resume builder when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new ResumeBuilder();
});
