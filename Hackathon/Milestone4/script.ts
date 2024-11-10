interface Education {
    institution: string;
    details: string;
    year: string;
    id: string;
}

interface Experience {
    organization: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    id: string;
}

interface Resume {
    personalInfo: {
        fullName: string;
        email: string;
        phone: string;
        birthDate: string;
    };
    education: Education[];
    experience: Experience[];
    skills: string[];
}

class ResumeBuilder {
    private resume: Resume = {
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

    private form: HTMLFormElement;
    private previewElement: HTMLElement;
    private isEditing: boolean = false;

    constructor() {
        this.form = document.getElementById('resumeForm') as HTMLFormElement;
        this.previewElement = document.getElementById('resume-preview') as HTMLElement;
        this.initializeEventListeners();
    }

    private generateUniqueId(): string {
        return `id_${Math.random().toString(36).substr(2, 9)}`;
    }

    private makeEditable(element: HTMLElement, value: string, onUpdate: (value: string) => void): void {
        if (this.isEditing) return;

        this.isEditing = true;
        const input = document.createElement('input');
        input.value = value;
        input.className = 'editable-input';
        
        const saveEdit = () => {
            const newValue = input.value.trim();
            this.isEditing = false;
            onUpdate(newValue);
            this.generatePreview();
        };

        input.addEventListener('blur', saveEdit);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEdit();
            }
        });

        element.innerHTML = '';
        element.appendChild(input);
        input.focus();
    }

    private makeTextAreaEditable(element: HTMLElement, value: string, onUpdate: (value: string) => void): void {
        if (this.isEditing) return;

        this.isEditing = true;
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.className = 'editable-textarea';
        textarea.rows = 3;
        
        const saveEdit = () => {
            const newValue = textarea.value.trim();
            this.isEditing = false;
            onUpdate(newValue);
            this.generatePreview();
        };

        textarea.addEventListener('blur', saveEdit);
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                saveEdit();
            }
        });

        element.innerHTML = '';
        element.appendChild(textarea);
        textarea.focus();
    }

    private initializeRealTimeListeners(): void {
        // Personal Information real-time updates
        ['fullName', 'email', 'phone', 'birthDate'].forEach(field => {
            const input = document.getElementById(field) as HTMLInputElement;
            input?.addEventListener('input', () => {
                this.updateResume();
                this.generatePreview();
            });
        });

        // Skills real-time updates
        const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
        skillsInput?.addEventListener('input', () => {
            this.updateResume();
            this.generatePreview();
        });
    }

    private validateForm(): boolean {
        let isValid = true;
        const requiredFields = ['fullName', 'email', 'birthDate'];
        
        requiredFields.forEach(field => {
            const input = document.getElementById(field) as HTMLInputElement;
            const errorDiv = input.nextElementSibling as HTMLElement;
            
            if (!input.value.trim()) {
                isValid = false;
                errorDiv.textContent = 'This field is required';
                input.classList.add('error');
            } else {
                errorDiv.textContent = '';
                input.classList.remove('error');
            }
        });

        return isValid;
    }

    private updateResume(): void {
        // Update personal information
        this.resume.personalInfo = {
            fullName: (document.getElementById('fullName') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            birthDate: (document.getElementById('birthDate') as HTMLInputElement).value
        };

        // Update education
        const educationGroups = document.querySelectorAll('#education-fields .field-group');
        this.resume.education = Array.prototype.slice.call(educationGroups).map(group => ({
            institution: (group.querySelector('input[placeholder="Institution"]') as HTMLInputElement).value,
            details: (group.querySelector('input[placeholder="Details"]') as HTMLInputElement).value,
            year: (group.querySelector('input[placeholder="Year"]') as HTMLInputElement).value,
            id: this.generateUniqueId()
        }));

        // Update experience
        const experienceGroups = document.querySelectorAll('#experience-fields .field-group');
        this.resume.experience = Array.prototype.slice.call(experienceGroups).map(group => ({
            organization: (group.querySelector('input[placeholder="Organization"]') as HTMLInputElement).value,
            position: (group.querySelector('input[placeholder="Position"]') as HTMLInputElement).value,
            startDate: (group.querySelector('input[placeholder="Start Date"]') as HTMLInputElement).value,
            endDate: (group.querySelector('input[placeholder="End Date"]') as HTMLInputElement).value,
            description: (group.querySelector('textarea') as HTMLTextAreaElement).value,
            id: this.generateUniqueId()
        }));

        // Update skills
        this.resume.skills = (document.getElementById('skills') as HTMLTextAreaElement).value
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill !== '');
    }

    private generatePreview(): void {
        const { fullName, email, phone, birthDate } = this.resume.personalInfo;
        const formattedDate = birthDate ? new Date(birthDate).toLocaleDateString() : '';

        this.previewElement.innerHTML = `
            <div class="preview-header">
                <h2 class="editable" data-field="fullName">${fullName}</h2>
                <p>
                    <span class="editable" data-field="email">${email}</span> | 
                    <span class="editable" data-field="phone">${phone}</span>
                </p>
                <p>Date of Birth: ${formattedDate}</p>
            </div>

            <h2>Education</h2>
            ${this.resume.education.map(edu => `
                <div class="education-item" data-id="${edu.id}">
                    <h3 class="editable" data-type="education" data-field="institution" data-id="${edu.id}">${edu.institution}</h3>
                    <p class="editable" data-type="education" data-field="details" data-id="${edu.id}">${edu.details}</p>
                    <p class="editable" data-type="education" data-field="year" data-id="${edu.id}">${edu.year}</p>
                </div>
            `).join('')}

            <h2>Experience</h2>
            ${this.resume.experience.map(exp => `
                <div class="experience-item" data-id="${exp.id}">
                    <h3 class="editable" data-type="experience" data-field="organization" data-id="${exp.id}">${exp.organization}</h3>
                    <p><strong class="editable" data-type="experience" data-field="position" data-id="${exp.id}">${exp.position}</strong></p>
                    <p>
                        <span class="editable" data-type="experience" data-field="startDate" data-id="${exp.id}">${exp.startDate}</span> - 
                        <span class="editable" data-type="experience" data-field="endDate" data-id="${exp.id}">${exp.endDate}</span>
                    </p>
                    <p class="description editable" data-type="experience" data-field="description" data-id="${exp.id}">${exp.description}</p>
                </div>
            `).join('')}

            <h2>Skills</h2>
            <div class="skills-list">
                ${this.resume.skills.map(skill => `
                    <span class="skill-item">${skill}</span>
                `).join('')}
            </div>
        `;

        this.addEditableListeners();
    }

    private addEditableListeners(): void {
        const editableElements = this.previewElement.querySelectorAll('.editable');
        editableElements.forEach(element => {
            element.addEventListener('click', () => {
                const field = (element as HTMLElement).dataset.field;
                const type = (element as HTMLElement).dataset.type;
                const id = (element as HTMLElement).dataset.id;
    
                if (!field) return;
    
                if (type === 'education') {
                    const education = this.resume.education.filter(edu => edu.id === id)[0];
                    if (education) {
                        this.makeEditable(element as HTMLElement, education[field as keyof Education], (newValue: string) => {
                            education[field as keyof Education] = newValue;
                        });
                    }
                } else if (type === 'experience') {
                    const experience = this.resume.experience.filter(exp => exp.id === id)[0];
                    if (experience) {
                        if (field === 'description') {
                            this.makeTextAreaEditable(element as HTMLElement, experience[field], (newValue: string) => {
                                experience[field] = newValue;
                            });
                        } else {
                            this.makeEditable(element as HTMLElement, experience[field as keyof Experience], (newValue: string) => {
                                experience[field as keyof Experience] = newValue;
                            });
                        }
                    }
                } else {
                    const currentValue = this.resume.personalInfo[field as keyof typeof this.resume.personalInfo];
                    this.makeEditable(element as HTMLElement, currentValue, (newValue: string) => {
                        this.resume.personalInfo[field as keyof typeof this.resume.personalInfo] = newValue;
                    });
                }
            });
        });
    }

    private generatePDF(): void {
        const element = this.previewElement;
        const opt = {
            margin: 1,
            filename: `${this.resume.personalInfo.fullName.replace(/\s+/g, '_')}_resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // @ts-ignore (html2pdf is loaded via CDN)
        html2pdf().set(opt).from(element).save();
    }

    private addInputListenersToGroup(group: HTMLElement): void {
        const inputs = group.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.updateResume();
                this.generatePreview();
            });
        });
    }

    private initializeEventListeners(): void {
        // Initialize real-time update listeners
        this.initializeRealTimeListeners();

        // Add education field
        document.getElementById('add-education')?.addEventListener('click', () => {
            const educationFields = document.getElementById('education-fields');
            const fieldGroup = document.createElement('div');
            fieldGroup.className = 'field-group';
            fieldGroup.innerHTML = `
                <input type="text" placeholder="Institution" required>
                <input type="text" placeholder="Details" required>
                <input type="text" placeholder="Year" required>
                <button type="button" class="remove-button">Remove</button>
            `;
            educationFields?.appendChild(fieldGroup);
            this.addInputListenersToGroup(fieldGroup);
        });

        // Add experience field
        document.getElementById('add-experience')?.addEventListener('click', () => {
            const experienceFields = document.getElementById('experience-fields');
            const fieldGroup = document.createElement('div');
            fieldGroup.className = 'field-group';
            fieldGroup.innerHTML = `
                <input type="text" placeholder="Organization" required>
                <input type="text" placeholder="Position" required>
                <input type="text" placeholder="Start Date" required>
                <input type="text" placeholder="End Date" required>
                <textarea placeholder="Description" required rows="3"></textarea>
                <button type="button" class="remove-button">Remove</button>
            `;
            experienceFields?.appendChild(fieldGroup);
            this.addInputListenersToGroup(fieldGroup);
        });

        // Remove field button handler
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('remove-button')) {
                target.parentElement?.remove();
                this.updateResume();
                this.generatePreview();
            }
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.updateResume();
                this.generatePreview();
            }
        });

        // Download PDF
        document.getElementById('downloadPdf')?.addEventListener('click', () => {
            this.generatePDF();
        });
    }
}

// Initialize the resume builder when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResumeBuilder();
});