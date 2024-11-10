interface Education {
    institution: string;
    details: string;
    year: string;
}

interface Experience {
    organization: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
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

    constructor() {
        this.form = document.getElementById('resumeForm') as HTMLFormElement;
        this.previewElement = document.getElementById('resume-preview') as HTMLElement;
        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        // Add Education Field
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
        });

        // Add Experience Field
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
        });

        // Remove Field Groups
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('remove-button')) {
                target.parentElement?.remove();
                this.updateResume();
                this.generatePreview();
            }
        });

        // Form Submit
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

        // Real-time Preview Updates
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.updateResume();
                this.generatePreview();
            });
        });
    }

    private updateResume(): void {
        // Update Personal Info
        this.resume.personalInfo = {
            fullName: (document.getElementById('fullName') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            birthDate: (document.getElementById('birthDate') as HTMLInputElement).value
        };

        // Update Education
        this.resume.education = [];
        const educationFields = document.querySelectorAll('#education-fields .field-group');
        educationFields.forEach(field => {
            const inputs = field.querySelectorAll('input');
            this.resume.education.push({
                institution: inputs[0].value,
                details: inputs[1].value,
                year: inputs[2].value
            });
        });

        // Update Experience
        this.resume.experience = [];
        const experienceFields = document.querySelectorAll('#experience-fields .field-group');
        experienceFields.forEach(field => {
            const inputs = field.querySelectorAll('input');
            const description = field.querySelector('textarea')?.value || '';
            this.resume.experience.push({
                organization: inputs[0].value,
                position: inputs[1].value,
                startDate: inputs[2].value,
                endDate: inputs[3].value,
                description: description
            });
        });

        // Update Skills
        const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement).value;
        this.resume.skills = skillsInput.split(',').map(skill => skill.trim()).filter(skill => skill);
    }

    private generatePreview(): void {
        this.previewElement.innerHTML = `
            <div class="preview-header">
                <h2>${this.resume.personalInfo.fullName}</h2>
                <p>${this.resume.personalInfo.email} | ${this.resume.personalInfo.phone}</p>
                <p>Date of Birth: ${this.resume.personalInfo.birthDate}</p>
            </div>

            <h2>Education</h2>
            ${this.resume.education.map(edu => ` 
                <div class="education-item">
                    <h3>${edu.institution}</h3>
                    <p>${edu.details}</p>
                    <p>Year: ${edu.year}</p>
                </div>
            `).join('')}

            <h2>Work Experience</h2>
            ${this.resume.experience.map(exp => `
                <div class="experience-item">
                    <h3>${exp.organization}</h3>
                    <p><strong>${exp.position}</strong></p>
                    <p>${exp.startDate} - ${exp.endDate}</p>
                    <p>${exp.description}</p>
                </div>
            `).join('')}

            ${this.resume.skills.length > 0 ? `
                <h2>Skills</h2>
                <div class="skills-list">
                    ${this.resume.skills.map(skill => `
                        <span class="skill-item">${skill}</span>
                    `).join('')}
                </div>
            ` : ''}
        `;
    }

    private validateForm(): boolean {
        let isValid = true;
        const requiredFields = this.form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            const input = field as HTMLInputElement;
            const errorDiv = input.nextElementSibling as HTMLElement;
            
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--accent-color)';
                if (errorDiv?.className === 'error') {
                    errorDiv.textContent = 'This field is required';
                }
            } else {
                input.style.borderColor = '';
                if (errorDiv?.className === 'error') {
                    errorDiv.textContent = '';
                }
            }
        });

        return isValid;
    }

    private generatePDF(): void {
        const element = this.previewElement;
        const options = {
            margin: 1,
            filename: `${this.resume.personalInfo.fullName.replace(/\s+/g, '_')}_resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        (window as any).html2pdf().set(options).from(element).save();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ResumeBuilder();
});
