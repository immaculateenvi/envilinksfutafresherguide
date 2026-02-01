// Calculator page specific script
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
});

function initializeCalculator() {
    const subjectsContainer = document.getElementById('subjects-container');
    const addSubjectBtn = document.getElementById('add-subject');
    const screeningForm = document.getElementById('screening-form');
    const resetFormBtn = document.getElementById('reset-form');
    const useForCoursesBtn = document.getElementById('use-for-courses');
    
    // Initialize with 5 subjects
    for (let i = 0; i < 5; i++) {
        addSubject();
    }
    
    // Add subject button event
    addSubjectBtn.addEventListener('click', addSubject);
    
    // Form submit event
    screeningForm.addEventListener('submit', calculateScreeningScore);
    
    // Reset form event
    resetFormBtn.addEventListener('click', resetScreeningForm);
    
    // Share buttons
    document.getElementById('share-whatsapp')?.addEventListener('click', shareOnWhatsApp);
    document.getElementById('copy-result')?.addEventListener('click', copyResults);
}

function addSubject() {
    const subjectsContainer = document.getElementById('subjects-container');
    const subjectCount = subjectsContainer.children.length;
    const id = subjectCount + 1;
    
    if (subjectCount >= 8) return;
    
    const subjectGroup = document.createElement('div');
    subjectGroup.className = 'subject-input-group';
    subjectGroup.setAttribute('data-id', id);
    
    subjectGroup.innerHTML = `
        <select class="subject-select" required>
            <option value="">Select Subject</option>
            <option value="English">English</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Agricultural Science">Agricultural Science</option>
            <option value="Economics">Economics</option>
            <option value="Geography">Geography</option>
            <option value="Further Mathematics">Further Mathematics</option>
        </select>
        <select class="grade-select" required>
            <option value="">Select Grade</option>
            <option value="80">A1</option>
            <option value="72">B2</option>
            <option value="67">B3</option>
            <option value="62">C4</option>
            <option value="57">C5</option>
            <option value="52">C6</option>
        </select>
        <button type="button" class="remove-subject" ${subjectCount < 5 ? 'style="display: none;"' : ''}>
            <i class="fas fa-times"></i>
        </button>
    `;
    
    subjectsContainer.appendChild(subjectGroup);
    
    // Add event listener to remove button
    const removeBtn = subjectGroup.querySelector('.remove-subject');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            if (subjectsContainer.children.length > 5) {
                subjectGroup.remove();
                updateRemoveButtonsVisibility();
            } else {
                showNotification('Minimum of 5 subjects required', 'warning');
            }
        });
    }
    
    updateRemoveButtonsVisibility();
}

function updateRemoveButtonsVisibility() {
    const subjectGroups = document.querySelectorAll('.subject-input-group');
    subjectGroups.forEach((group, index) => {
        const removeBtn = group.querySelector('.remove-subject');
        if (removeBtn) {
            removeBtn.style.display = subjectGroups.length > 5 ? 'flex' : 'none';
        }
    });
}

function calculateScreeningScore(e) {
    e.preventDefault();
    
    const subjectGroups = document.querySelectorAll('.subject-input-group');
    const subjects = [];
    const grades = [];
    
    subjectGroups.forEach(group => {
        const subjectSelect = group.querySelector('.subject-select');
        const gradeSelect = group.querySelector('.grade-select');
        
        if (subjectSelect.value && gradeSelect.value) {
            if (!subjects.includes(subjectSelect.value)) {
                subjects.push(subjectSelect.value);
                grades.push(parseInt(gradeSelect.value));
            }
        }
    });
    
    if (subjects.length < 5) {
        showNotification('Please select at least 5 unique subjects', 'warning');
        return;
    }
    
    const jambScore = parseInt(document.getElementById('jamb-score').value);
    if (isNaN(jambScore) || jambScore < 0 || jambScore > 400) {
        showNotification('Please enter a valid JAMB score between 0 and 400', 'warning');
        return;
    }
    
    // Calculate O'level points
    const oLevelTotal = grades.reduce((sum, grade) => sum + grade, 0);
    const oLevelAverage = oLevelTotal / grades.length;
    const oLevelPoints = (oLevelAverage / 100) * 25;
    
    // Calculate JAMB points
    const jambPoints = (jambScore / 400) * 75;
    
    // Calculate total aggregate
    const totalAggregate = oLevelPoints + jambPoints;
    
    // Display results
    document.getElementById('olevel-score').textContent = oLevelPoints.toFixed(2);
    document.getElementById('jamb-score-display').textContent = jambPoints.toFixed(2);
    document.getElementById('total-score').textContent = totalAggregate.toFixed(2);
    
    document.getElementById('o-level-result').textContent = oLevelPoints.toFixed(2) + '/25';
    document.getElementById('jamb-result').textContent = jambPoints.toFixed(2) + '/70';
    document.getElementById('total-result').textContent = totalAggregate.toFixed(2) + '/75';
    
    document.getElementById('result').style.display = 'block';
    
    // Store the result for use in the courses page
    localStorage.setItem('futaAggregate', totalAggregate.toFixed(2));
    
    // Update the "Use for Course Eligibility" link
    const useForCoursesLink = document.getElementById('use-for-courses');
    useForCoursesLink.href = `courses.html?score=${totalAggregate.toFixed(2)}`;
    
    showNotification('Score calculated successfully!', 'success');
    
    // Scroll to result
    document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetScreeningForm() {
    document.getElementById('screening-form').reset();
    
    const subjectsContainer = document.getElementById('subjects-container');
    while (subjectsContainer.children.length > 0) {
        subjectsContainer.lastChild.remove();
    }
    
    for (let i = 0; i < 5; i++) {
        addSubject();
    }
    
    document.getElementById('result').style.display = 'none';
    
    document.getElementById('olevel-score').textContent = '0.00';
    document.getElementById('jamb-score-display').textContent = '0.00';
    document.getElementById('total-score').textContent = '0.00';
    
    showNotification('Form reset successfully', 'info');
}

function shareOnWhatsApp() {
    const totalScore = document.getElementById('total-score').textContent;
    const oLevelScore = document.getElementById('olevel-score').textContent;
    const jambScore = document.getElementById('jamb-score-display').textContent;
    
    const message = `My FUTA Screening Score Results:%0A%0A📊 *O'Level Score:* ${oLevelScore}%0A📝 *JAMB Score:* ${jambScore}%0A🏆 *Total Aggregate:* ${totalScore}%0A%0ACalculated using FUTA Screening Calculator`;
    
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

function copyResults() {
    const totalScore = document.getElementById('total-score').textContent;
    const oLevelScore = document.getElementById('olevel-score').textContent;
    const jambScore = document.getElementById('jamb-score-display').textContent;
    
    const text = `My FUTA Screening Score Results:\n\n📊 O'Level Score: ${oLevelScore}\n📝 JAMB Score: ${jambScore}\n🏆 Total Aggregate: ${totalScore}\n\nCalculated using FUTA Screening Calculator`;
    
    navigator.clipboard.writeText(text)
        .then(() => showNotification('Results copied to clipboard!', 'success'))
        .catch(() => showNotification('Failed to copy results', 'error'));
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Add CSS if not present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                animation: slideIn 0.3s ease;
                max-width: 350px;
            }
            .notification-info { background: #17a2b8; }
            .notification-success { background: #28a745; }
            .notification-warning { background: #ffc107; color: #333; }
            .notification-error { background: #dc3545; }
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                margin-left: auto;
                padding: 0;
                font-size: 0.9rem;
            }
            .fade-out {
                animation: fadeOut 0.3s ease forwards;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'warning': return 'exclamation-triangle';
        case 'error': return 'times-circle';
        default: return 'info-circle';
    }
}