/**
 * Behandelt die Validierung beim Absenden und das Management von ARIA-Attributen für Barrierefreiheit.
 */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    /**
     * Event-Listener für das Absenden des Formulars.
     * Verhindert das Standard-Verhalten, validiert Eingaben und gibt Feedback.
     * 
     * @param {Event} event - Das Submit-Event.
     */
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Vorherige Fehlerzustände und Meldungen zurücksetzen
        resetErrors();

        // Flag für den Validierungsstatus
        let isValid = true;

        // Validierung Name 
        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Bitte geben Sie Ihren Namen ein.');
            isValid = false;
        }

        // Validierung E-Mail
        const emailInput = document.getElementById('email');
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Bitte geben Sie Ihre E-Mail-Adresse ein.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            isValid = false;
        }

        // Validierung Nachricht
        const messageInput = document.getElementById('message');
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Bitte geben Sie eine Nachricht ein.');
            isValid = false;
        }

        // Abschlussbehandlung
        if (isValid) {
            // Erfolgreiches Absenden simulieren
            formStatus.textContent = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.';
            formStatus.className = 'status-message success';
            // Fokus programmgesteuert auf die Statusmeldung setzen (WCAG 2.1 - 2.4.3 Focus Order / Generelles Fokus Management)
            // Dies stellt sicher, dass Screenreader-Nutzer die Rückmeldung sofort wahrnehmen.
            formStatus.focus();
            form.reset();
        } else {
            // Bei Fehlern: Fokus auf das erste fehlerhafte Feld setzen
            // Dies hilft Nutzern, den Fehler direkt zu korrigieren, ohne suchen zu müssen.
            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            formStatus.textContent = 'Bitte korrigieren Sie die Fehler im Formular.';
            formStatus.className = 'status-message error';
        }
    });

    /**
     * Zeigt eine Fehlermeldung für ein bestimmtes Eingabefeld an und setzt ARIA-Attribute.
     * 
     * @param {HTMLElement} inputElement - Das Eingabefeld, das validiert wurde.
     * @param {string} message - Die anzuzeigende Fehlermeldung.
     */
    function showError(inputElement, message) {
        const errorId = inputElement.id + '-error';
        const errorContainer = document.getElementById(errorId);

        // Markiert das Feld semantisch als ungültig für Screenreader
        inputElement.setAttribute('aria-invalid', 'true');

        // Verknüpft das Eingabefeld mit der Fehlermeldung (WCAG 2.1 - 3.3.1 Error Identification)
        // Screenreader lesen die Fehlermeldung vor, wenn das Feld fokussiert wird.
        inputElement.setAttribute('aria-errormessage', errorId);

        if (errorContainer) {
            errorContainer.textContent = message;
        }
    }

    /**
     * Entfernt alle Fehlermarkierungen und Meldungen aus dem Formular.
     * Wird vor jeder neuen Validierung aufgerufen.
     */
    function resetErrors() {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-errormessage');
        });

        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.textContent = '';
        });

        formStatus.textContent = '';
        formStatus.className = 'status-message';
    }

    /**
     * Prüft, ob eine E-Mail-Adresse ein gültiges Format hat.
     * 
     * @param {string} email - Die zu prüfende E-Mail-Adresse.
     * @returns {boolean} True, wenn das Format gültig ist, sonst False.
     */
    function isValidEmail(email) {
        // Einfache Regex zur Demonstration üblicher E-Mail-Formate
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
