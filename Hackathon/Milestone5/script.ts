// Interfaces for Type Safety
interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

interface EducationEntry {
    institution: string;
    degree: string;
    graduationYear: string;
}

interface WorkExperienceEntry {
    company: string;
    position: string;
    duration: string;
    responsibilities: string;
}

interface SkillEntry {
    skill: string;
    proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

// Declare types for external libraries
declare var html2canvas: any;
declare var jsPDF: any;

// Enhanced ResumeBuilder class with real-time typing and improved styling
class ResumeBuilder {
    private form: HTMLFormElement;
    private previewSection: HTMLDivElement;
    private shareButton: HTMLButtonElement;
    private currentResumeURL: string = '';
    private typingTimeouts: number[] = [];
    private wordAnimationTimeout: number | undefined;

    constructor() {
        this.form = document.getElementById('resumeForm') as HTMLFormElement;
        this.previewSection = document.getElementById('resumePreview') as HTMLDivElement;
        
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
    private setupEventListeners(): void {
        document.getElementById('addEducation')?.addEventListener('click', this.createDynamicEntry('education'));
        document.getElementById('addExperience')?.addEventListener('click', this.createDynamicEntry('experience'));
        document.getElementById('addSkill')?.addEventListener('click', this.createDynamicEntry('skill'));
        document.getElementById('downloadResume')?.addEventListener('click', () => this.downloadResumePDF());
        this.form.addEventListener('submit', this.generateResume.bind(this));
    }

    private initializeStyles(): void {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            /* Enhanced Resume Styles */
            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                padding: 2rem;
                background: white;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
                position: relative;
            }

            .resume-container::after {
                content: attr(data-page);
                position: absolute;
                bottom: 20px;
                right: 20px;
                font-size: 12px;
                color: #666;
            }

            .resume-header {
                border-bottom: 3px solid #3498db;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                position: relative;
            }

            .resume-header h1 {
                color: #2c3e50;
                font-size: 2.5rem;
                margin-bottom: 1rem;
                font-weight: 700;
                position: relative;
                display: inline-block;
            }

            .resume-header h1::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 3px;
                background: #3498db;
                transform: scaleX(0);
                transform-origin: left;
                animation: slideIn 0.5s forwards;
            }

            .contact-info {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                color: #666;
            }

            .contact-info p {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .resume-section {
                margin-bottom: 2rem;
                position: relative;
            }

            .resume-section h2 {
                color: #3498db;
                font-size: 1.5rem;
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 2px solid #ecf0f1;
                position: relative;
            }

            .resume-section h2::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 50px;
                height: 2px;
                background: #3498db;
            }

            .resume-entry {
                padding: 1rem;
                margin-bottom: 1rem;
                border-left: 3px solid #3498db;
                background: #f8f9fa;
                transition: all 0.3s ease;
            }

            .resume-entry:hover {
                transform: translateX(5px);
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }

            .resume-entry h3 {
                color: #2c3e50;
                margin-bottom: 0.5rem;
            }

            .skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }

            .skill-chip {
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.9rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: all 0.3s ease;
            }

            .skill-chip.beginner { background: #ebf5fb; color: #2980b9; }
            .skill-chip.intermediate { background: #e8f6f3; color: #27ae60; }
            .skill-chip.advanced { background: #ebf5eb; color: #2ecc71; }
            .skill-chip.expert { background: #f4ecf7; color: #8e44ad; }

            .skill-chip:hover {
                transform: translateY(-2px);
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }

            .proficiency {
                font-size: 0.8rem;
                opacity: 0.8;
            }

            @keyframes slideIn {
                to {
                    transform: scaleX(1);
                }
            }

            .typing-animation {
                border-right: 2px solid #3498db;
                animation: blink 0.7s infinite;
                white-space: pre-wrap;
            }

            @keyframes blink {
                50% { border-color: transparent; }
            }

            /* Print styles */
            @media print {
                .resume-container {
                    box-shadow: none;
                    padding: 0;
                }

                .resume-entry:hover {
                    transform: none;
                    box-shadow: none;
                }
            }
        `;
        document.head.appendChild(styleElement);
    }

    private animateTyping(text: string, element: HTMLElement, delay: number = 50): void {
        let index = 0;
        element.classList.add('typing-animation');
        
        const type = () => {
            const timeout = setTimeout(() => {
                if (index < text.length) {
                    element.textContent = text.slice(0, index + 1);
                    index++;
                    this.typingTimeouts.push(window.setTimeout(type, delay));
                } else {
                    element.classList.remove('typing-animation');
                }
            }, delay);
            this.typingTimeouts.push(timeout);
        };

        type();
    }

    private clearTypingTimeouts(): void {
        this.typingTimeouts.forEach(timeout => clearTimeout(timeout));
        this.typingTimeouts = [];
    }

    private createResumeHTML(
        personalInfo: PersonalInfo,
        educationEntries: EducationEntry[],
        experienceEntries: WorkExperienceEntry[],
        skillEntries: SkillEntry[]
    ): string {
        return `
            <div class="resume-container" data-page="Page 1 of 1">
                <header class="resume-header">
                    <h1 class="animate-name">${personalInfo.fullName}</h1>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> ${personalInfo.email}</p>
                        <p><i class="fas fa-phone"></i> ${personalInfo.phone}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${personalInfo.address}</p>
                    </div>
                </header>

                <section class="resume-section">
                    <h2><i class="fas fa-graduation-cap"></i> Educational Background</h2>
                    ${educationEntries.map(edu => `
                        <div class="resume-entry">
                            <h3>${edu.institution}</h3>
                            <p class="degree">${edu.degree}</p>
                            <p class="year">${edu.graduationYear}</p>
                        </div>
                    `).join('')}
                </section>

                <section class="resume-section">
                    <h2><i class="fas fa-briefcase"></i> Professional Experience</h2>
                    ${experienceEntries.map(exp => `
                        <div class="resume-entry">
                            <h3>${exp.company} - ${exp.position}</h3>
                            <p class="duration">${exp.duration}</p>
                            <ul class="responsibilities">
                                ${exp.responsibilities.split('\n').map(resp => `
                                    <li>${resp}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </section>

                <section class="resume-section">
                    <h2><i class="fas fa-tools"></i> Professional Skills</h2>
                    <div class="skills-grid">
                        ${skillEntries.map(skill => `
                            <div class="skill-chip ${skill.proficiency.toLowerCase()}">
                                <span>${skill.skill}</span>
                                <span class="proficiency">${skill.proficiency}</span>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>
        `;
    }

    private generateResume(e: Event): void {
        e.preventDefault();
        this.clearTypingTimeouts();

        const personalInfo = this.collectPersonalInfo();
        const educationEntries = this.collectEntries('education');
        const experienceEntries = this.collectEntries('experience');
        const skillEntries = this.collectEntries('skill');

        const resumeContent = this.createResumeHTML(
            personalInfo,
            educationEntries,
            experienceEntries,
            skillEntries
        );

        this.previewSection.innerHTML = resumeContent;

        // Animate the name with typing effect
        const nameElement = this.previewSection.querySelector('.animate-name') as HTMLElement;
        if (nameElement) {
            this.animateTyping(personalInfo.fullName, nameElement);
        }

        // Calculate and update page numbers
        this.updatePageNumbers();
        
        // Generate share URL and save the resume
        const username = this.sanitizeUsername(personalInfo.fullName);
        this.currentResumeURL = URLGenerator.generateResumeURL(username);
        ResumeStorageManager.saveResume({
            personalInfo,
            education: educationEntries,
            experience: experienceEntries,
            skills: skillEntries
        }, this.currentResumeURL);
    }

    private updatePageNumbers(): void {
        const container = this.previewSection.querySelector('.resume-container');
        if (container) {
            const height = container.scrollHeight;
            const pages = Math.ceil(height / 1056); // A4 height in pixels at 96 DPI
            container.setAttribute('data-page', `Page 1 of ${pages}`);
        }
    }

    private createDynamicEntry(type: 'education' | 'experience' | 'skill'): () => void {
        return () => {
            const containerMap = {
                education: 'educationEntries',
                experience: 'experienceEntries',
                skill: 'skillEntries'
            };

            const container = document.getElementById(containerMap[type]);
            if (!container) return;

            const newEntry = document.createElement('div');
            newEntry.className = 'entry-card animated-entry';
            
            newEntry.innerHTML = this.generateEntryHTML(type);
            container.appendChild(newEntry);

            // Animate entry
            newEntry.style.opacity = '0';
            setTimeout(() => {
                newEntry.style.opacity = '1';
                newEntry.style.transform = 'translateY(0)';
            }, 50);

            const removeBtn = newEntry.querySelector('.remove-entry-btn');
            removeBtn?.addEventListener('click', () => {
                newEntry.style.opacity = '0';
                newEntry.style.transform = 'translateX(-100%)';
                setTimeout(() => newEntry.remove(), 300);
            });
        };
    }

    private generateEntryHTML(type: 'education' | 'experience' | 'skill'): string {
        const templates = {
            education: `
                <input type="text" placeholder="Institution Name" data-validate="name" required>
                <input type="text" placeholder="Degree Earned" data-validate="name" required>
                <input type="text" placeholder="Graduation Year" data-validate="year" required>
                <button type="button" class="remove-entry-btn">
                    <i class="fas fa-trash"></i>
                </button>
            `,
            experience: `
                <input type="text" placeholder="Company Name" data-validate="name" required>
                <input type="text" placeholder="Job Title" data-validate="name" required>
                <input type="text" placeholder="Duration" required>
                <textarea placeholder="Key Responsibilities" required></textarea>
                <button type="button" class="remove-entry-btn">
                    <i class="fas fa-trash"></i>
                </button>
            `,
            skill: `
                <input type="text" placeholder="Skill Name" data-validate="name" required>
                <select required>
                    <option value="">Proficiency Level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                </select>
                <button type="button" class="remove-entry-btn">
                    <i class="fas fa-trash"></i>
                </button>
            `
        };

        return templates[type];
    }

    private collectPersonalInfo(): PersonalInfo {
        return {
            fullName: (document.getElementById('fullName') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            address: (document.getElementById('address') as HTMLInputElement).value
        };
    }

    private collectEntries(type: 'education' | 'experience' | 'skill'): any[] {
        const containers = {
            education: 'educationEntries',
            experience: 'experienceEntries',
            skill: 'skillEntries'
        };

        const entries: any[] = [];
        const container = document.getElementById(containers[type]);
        
        container?.querySelectorAll('.entry-card').forEach(card => {
            const inputs = card.querySelectorAll('input, select, textarea');
            const entry: any = {};

            inputs.forEach((input, index) => {
                const inputElement = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                
                switch(type) {
                    case 'education':
                        if (index === 0) entry.institution = inputElement.value;
                        if (index === 1) entry.degree = inputElement.value;
                        if (index === 2) entry.graduationYear = inputElement.value;
                        break;
                    case 'experience':
                        if (index === 0) entry.company = inputElement.value;
                        if (index === 1) entry.position = inputElement.value;
                        if (index === 2) entry.duration = inputElement.value;
                        if (index === 3) entry.responsibilities = inputElement.value;
                        break;
                    case 'skill':
                        if (index === 0) entry.skill = inputElement.value;
                        if (index === 1) entry.proficiency = inputElement.value;
                        break;
                }
            });

            entries.push(entry);
        });

        return entries;
    }

    private animateWordByWord(text: string, container: HTMLElement): void {
        if (this.wordAnimationTimeout) {
            clearTimeout(this.wordAnimationTimeout);
        }

        container.innerHTML = '';
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;
        const words = tempDiv.innerText.split(/\s+/);
        let index = 0;

        const addWord = () => {
            if (index < words.length) {
                const span = document.createElement('span');
                span.textContent = words[index] + ' ';
                span.style.opacity = '0';
                span.style.transition = 'opacity 0.3s ease';
                
                container.appendChild(span);
                
                setTimeout(() => {
                    span.style.opacity = '1';
                }, 50);

                index++;
                this.wordAnimationTimeout = window.setTimeout(addWord, 100);
            } else {
                container.innerHTML = text;
            }
        };

        addWord();
    }

    private downloadResumePDF(): void {
        if (!this.currentResumeURL) {
            alert('Generate a resume first!');
            return;
        }

        const resumeContent = this.previewSection.querySelector('.resume-container') as HTMLElement;
        if (!resumeContent) {
            alert('Resume content not found!');
            return;
        }

        // Show loading state
        const downloadButton = document.getElementById('downloadResume') as HTMLButtonElement;
        const originalText = downloadButton.innerHTML;
        downloadButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        downloadButton.disabled = true;

        // Wait for fonts to load
        document.fonts.ready
            .then(() => {
                // Generate canvas
                return html2canvas(resumeContent, {
                    scale: 2,
                    useCORS: true,
                    logging: false,
                    allowTaint: true,
                    backgroundColor: '#ffffff'
                });
            })
            .then((canvas: HTMLCanvasElement) => {
                const imgData = canvas.toDataURL('image/png');
                
                // A4 dimensions in mm
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4'
                });

                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 0;

                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

                // Add metadata
                const personalInfo = this.collectPersonalInfo();
                pdf.setProperties({
                    title: `${personalInfo.fullName} - Resume`,
                    subject: 'Professional Resume',
                    author: personalInfo.fullName,
                    keywords: 'resume, cv, professional',
                    creator: 'Resume Forge'
                });

                // Save PDF
                pdf.save(`${personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`);

                // Restore button state
                downloadButton.innerHTML = originalText;
                downloadButton.disabled = false;
            })
            .catch((error: Error) => {
                console.error('PDF Generation Error:', error);
                alert('Failed to generate PDF. Please try again.');
                
                // Restore button state on error
                downloadButton.innerHTML = '<i class="fas fa-download"></i> Download PDF';
                downloadButton.disabled = false;
            });
    }

    // Updated copyShareLink() now uses the modern Clipboard API
    private copyShareLink(): void {
        if (!this.currentResumeURL) {
            alert('Generate a resume first!');
            return;
        }
        navigator.clipboard.writeText(this.currentResumeURL)
            .then(() => {
                alert('Resume URL copied to clipboard!');
            })
            .catch(() => {
                alert('Failed to copy URL');
            });
    }

    private setupValidation(): void {
        const validationRules: { [key: string]: { regex: RegExp, message: string } } = {
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

        document.querySelectorAll('[data-validate]').forEach((input: Element) => {
            const validateType = input.getAttribute('data-validate');
            
            input.addEventListener('input', (e: Event) => {
                const target = e.target as HTMLInputElement;
                if (validateType && validationRules[validateType]) {
                    const rule = validationRules[validateType];
                    
                    if (!rule.regex.test(target.value)) {
                        target.classList.add('input-error');
                        target.setCustomValidity(rule.message);
                        target.reportValidity();
                    } else {
                        target.classList.remove('input-error');
                        target.setCustomValidity('');
                    }
                }
            });
        });
    }

    private setupInteractiveStyles(): void {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach((input: Element) => {
            input.addEventListener('focus', () => {
                input.classList.add('input-focus');
            });
            input.addEventListener('blur', () => {
                input.classList.remove('input-focus');
            });
        });
    }

    // Now, the share feature simply appends the share button to the form actions.
    private setupShareFeature(): void {
        const formActions = document.querySelector('.form-actions');
        formActions?.appendChild(this.shareButton);
        this.shareButton.addEventListener('click', this.copyShareLink.bind(this));
    }

    private sanitizeUsername(fullName: string): string {
        return fullName
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .substring(0, 20);
    }
}

// Unique URL Generation Utilities
class URLGenerator {
    private static readonly CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    static generateUniqueId(length: number = 10): string {
        let result = '';
        const charsLength = this.CHARS.length;
        for (let i = 0; i < length; i++) {
            result += this.CHARS.charAt(Math.floor(Math.random() * charsLength));
        }
        return result;
    }

    static generateResumeURL(username: string): string {
        const uniqueIdentifier = this.generateUniqueId();
        return `https://resumeforge.com/${username}/${uniqueIdentifier}`;
    }
}

// Local Storage Management for Resume Persistence
class ResumeStorageManager {
    private static STORAGE_KEY = 'resume_database';

    static saveResume(resumeData: any, url: string): void {
        const resumeDatabase = this.getResumeDatabase();
        resumeDatabase[url] = {
            ...resumeData,
            createdAt: new Date().toISOString()
        };
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(resumeDatabase));
    }

    static getResumeByURL(url: string): any | null {
        const resumeDatabase = this.getResumeDatabase();
        return resumeDatabase[url] || null;
    }

    private static getResumeDatabase(): { [key: string]: any } {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    }
}

// Helper function to retrieve resume by URL
function retrieveResumeByURL(url: string): void {
    const resumeData = ResumeStorageManager.getResumeByURL(url);
    
    if (resumeData) {
        const previewSection = document.getElementById('resumePreview');
        if (previewSection) {
            const resumeHTML = generateResumeHTMLFromData(resumeData);
            previewSection.innerHTML = resumeHTML;
        }
    } else {
        alert('Resume not found');
    }
}

// Helper function to generate HTML from resume data
function generateResumeHTMLFromData(resumeData: any): string {
    const { personalInfo, education, experience, skills } = resumeData;

    return `
        <div class="resume-container">
            <header class="resume-header">
                <h1>${personalInfo.fullName}</h1>
                <div class="contact-info">
                    <p>${personalInfo.email} | ${personalInfo.phone}</p>
                    <p>${personalInfo.address}</p>
                </div>
            </header>
            
            <section class="resume-section">
                <h2>Education</h2>
                ${education.map((edu: EducationEntry) => `
                    <div class="resume-entry">
                        <h3>${edu.institution}</h3>
                        <p>${edu.degree} - ${edu.graduationYear}</p>
                    </div>
                `).join('')}
            </section>

            <section class="resume-section">
                <h2>Experience</h2>
                ${experience.map((exp: WorkExperienceEntry) => `
                    <div class="resume-entry">
                        <h3>${exp.company} - ${exp.position}</h3>
                        <p>${exp.duration}</p>
                        <ul>
                            ${exp.responsibilities.split('\n').map((resp: string) => `<li>${resp}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </section>

            <section class="resume-section">
                <h2>Skills</h2>
                <div class="skills-grid">
                    ${skills.map((skill: SkillEntry) => `
                        <div class="skill-chip ${skill.proficiency.toLowerCase()}">
                            ${skill.skill}
                            <span class="proficiency">${skill.proficiency}</span>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    
    if (pathParts.length === 3 && pathParts[1] === 'resume') {
        retrieveResumeByURL(window.location.href);
    } else {
        new ResumeBuilder();
    }
});
