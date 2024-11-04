function toggleSection(contentId: string): void {
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.toggle('hidden');
    }
}

export {}; // This ensures the file is treated as a module
