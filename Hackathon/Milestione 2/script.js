"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toggleSection(contentId) {
    var content = document.getElementById(contentId);
    if (content) {
        content.classList.toggle('hidden');
    }
}
