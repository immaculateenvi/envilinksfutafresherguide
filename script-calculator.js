// Calculator page specific script
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
    checkOnlineStatus();
    
    // Listen for online/offline events
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
});

function initializeCalculator() {
    // Initialize main calculator subjects
    initializeMainCalculator();
    
    // Initialize UTME calculator subjects
    initializeUTMECalculator();
    
    // Setup event listeners for main calculator
    setupMainCalculatorEvents();
    
    // Setup event listeners for UTME calculator
    setupUTMECalculatorEvents();
    
    // Setup event listeners for O'Level calculator
    setupOLevelCalculatorEvents();
    
    // Load saved data for main calculator
    loadSavedCalculatorData();
}

// ==================== MAIN CALCULATOR FUNCTIONS ====================
function initializeMainCalculator() {
    const subjectsContainer = document.getElementById('subjects-container');
    
    // Clear existing subjects
    while (subjectsContainer.children.length > 0) {
        subjectsContainer.lastChild.remove();
    }
    
    // Initialize with 5 subjects for main calculator
    for (let i = 0; i < 5; i++) {
        addSubject('subjects-container', 'main-');
    }
}

function setupMainCalculatorEvents() {
    const addSubjectBtn = document.getElementById('add-subject');
    const screeningForm = document.getElementById('screening-form');
    const resetFormBtn = document.getElementById('reset-form');
    const shareWhatsAppBtn = document.getElementById('share-whatsapp');
    const copyResultBtn = document.getElementById('copy-result');
    
    // Add subject button event
    if (addSubjectBtn) {
        addSubjectBtn.addEventListener('click', function() {
            addSubject('subjects-container', 'main-');
        });
    }
    
    // Form submit event
    if (screeningForm) {
        screeningForm.addEventListener('submit', calculateScreeningScore);
    }
    
    // Reset form event
    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', resetScreeningForm);
    }
    
    // Share buttons
    if (shareWhatsAppBtn) {
        shareWhatsAppBtn.addEventListener('click', shareOnWhatsApp);
    }
    
    if (copyResultBtn) {
        copyResultBtn.addEventListener('click', copyResults);
    }
}

// ==================== UTME CALCULATOR FUNCTIONS ====================
function initializeUTMECalculator() {
    const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
    
    if (!utmeSubjectsContainer) return;
    
    // Clear existing subjects
    while (utmeSubjectsContainer.children.length > 0) {
        utmeSubjectsContainer.lastChild.remove();
    }
    
    // Initialize with 5 subjects for UTME calculator
    for (let i = 0; i < 5; i++) {
        addSubject('utme-subjects-container', 'utme-');
    }
}

function setupUTMECalculatorEvents() {
    const addUtmeSubjectBtn = document.getElementById('add-utme-subject');
    const calculateUtmeBtn = document.getElementById('calculate-utme');
    const resetUtmeBtn = document.getElementById('reset-utme');
    
    // Add subject button event for UTME calculator
    if (addUtmeSubjectBtn) {
        addUtmeSubjectBtn.addEventListener('click', function() {
            addSubject('utme-subjects-container', 'utme-');
        });
    }
    
    // Calculate UTME button event
    if (calculateUtmeBtn) {
        calculateUtmeBtn.addEventListener('click', calculateRequiredUTME);
    }
    
    // Reset UTME calculator button event
    if (resetUtmeBtn) {
        resetUtmeBtn.addEventListener('click', resetUTMECalculator);
    }
}

// ==================== O'LEVEL CALCULATOR FUNCTIONS ====================
function setupOLevelCalculatorEvents() {
    const calculateOLevelBtn = document.getElementById('calculate-olevel');
    const resetOLevelBtn = document.getElementById('reset-olevel');
    
    // Calculate O'Level button event
    if (calculateOLevelBtn) {
        calculateOLevelBtn.addEventListener('click', calculateRequiredOLevel);
    }
    
    // Reset O'Level calculator button event
    if (resetOLevelBtn) {
        resetOLevelBtn.addEventListener('click', resetOLevelCalculator);
    }
}

// ==================== COMMON FUNCTIONS ====================
function addSubject(containerId, prefix) {
    const subjectsContainer = document.getElementById(containerId);
    const subjectCount = subjectsContainer.children.length;
    const id = subjectCount + 1;
    
    if (subjectCount >= 8) {
        showNotification('Maximum of 8 subjects allowed', 'warning');
        return;
    }
    
    const subjectGroup = document.createElement('div');
    subjectGroup.className = 'subject-input-group';
    subjectGroup.setAttribute('data-id', `${prefix}${id}`);
    
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
                updateRemoveButtonsVisibility(containerId);
            } else {
                showNotification('Minimum of 5 subjects required', 'warning');
            }
        });
    }
    
    updateRemoveButtonsVisibility(containerId);
    
    // Save data if it's the main calculator
    if (containerId === 'subjects-container') {
        saveCalculatorData();
    }
}

function updateRemoveButtonsVisibility(containerId) {
    const subjectsContainer = document.getElementById(containerId);
    if (!subjectsContainer) return;
    
    const subjectGroups = subjectsContainer.querySelectorAll('.subject-input-group');
    subjectGroups.forEach((group, index) => {
        const removeBtn = group.querySelector('.remove-subject');
        if (removeBtn) {
            removeBtn.style.display = subjectGroups.length > 5 ? 'flex' : 'none';
        }
    });
}

// Helper function to get grades from a container
function getGradesFromContainer(containerId) {
    const subjectGroups = document.querySelectorAll(`#${containerId} .subject-input-group`);
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
    
    return { subjects, grades };
}

// Helper function to calculate O'Level points from grades
function calculateOLevelPoints(grades) {
    if (!grades || grades.length === 0) return 0;
    
    const oLevelTotal = grades.reduce((sum, grade) => sum + grade, 0);
    const oLevelAverage = oLevelTotal / grades.length;
    return (oLevelAverage / 100) * 25;
}

// ==================== MAIN CALCULATOR LOGIC ====================
function calculateScreeningScore(e) {
    e.preventDefault();
    
    const { subjects, grades } = getGradesFromContainer('subjects-container');
    
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
    const oLevelPoints = calculateOLevelPoints(grades);
    
    // Calculate JAMB points
    const jambPoints = (jambScore / 400) * 75;
    
    // Calculate total aggregate
    const totalAggregate = oLevelPoints + jambPoints;
    
    // Display results
    document.getElementById('olevel-score').textContent = oLevelPoints.toFixed(2);
    document.getElementById('jamb-score-display').textContent = jambPoints.toFixed(2);
    document.getElementById('total-score').textContent = totalAggregate.toFixed(2);
    
    document.getElementById('o-level-result').textContent = oLevelPoints.toFixed(2) + '/25';
    document.getElementById('jamb-result').textContent = jambPoints.toFixed(2) + '/75';
    document.getElementById('total-result').textContent = totalAggregate.toFixed(2) + '/100';
    
    document.getElementById('result').style.display = 'block';
    
    // Store the result for use in the courses page
    localStorage.setItem('futaAggregate', totalAggregate.toFixed(2));
    
    // Update the "Use for Course Eligibility" link
    const useForCoursesLink = document.getElementById('use-for-courses');
    useForCoursesLink.href = `courses.html?score=${totalAggregate.toFixed(2)}`;
    
    showNotification('Score calculated successfully!', 'success');
    
    // Save calculator data
    saveCalculatorData();
    
    // Scroll to result
    document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==================== UTME CALCULATOR LOGIC ====================
function calculateRequiredUTME() {
    const desiredAggregate = parseFloat(document.getElementById('desired-aggregate').value);
    
    if (isNaN(desiredAggregate) || desiredAggregate < 0 || desiredAggregate > 100) {
        showNotification('Please enter a valid desired aggregate between 0 and 100', 'warning');
        return;
    }
    
    // Get O'level grades from the UTME calculator form
    const { subjects, grades } = getGradesFromContainer('utme-subjects-container');
    
    if (subjects.length < 5) {
        showNotification('Please select at least 5 unique subjects', 'warning');
        return;
    }
    
    // Calculate O'level points from grades
    const oLevelPoints = calculateOLevelPoints(grades);
    
    // Calculate required JAMB points
    const requiredJambPoints = desiredAggregate - oLevelPoints;
    
    if (requiredJambPoints < 0) {
        showNotification('Desired aggregate is lower than your O\'level points. You need a lower aggregate or better O\'level grades.', 'warning');
        return;
    }
    
    if (requiredJambPoints > 75) {
        showNotification('Required JAMB points exceed maximum possible. You need a lower aggregate or better O\'level grades.', 'warning');
        return;
    }
    
    // Calculate required JAMB score (out of 400)
    const requiredJambScore = (requiredJambPoints / 75) * 400;
    
    // Display results
    document.getElementById('required-jamb-points').textContent = requiredJambPoints.toFixed(2);
    document.getElementById('required-jamb-score').textContent = Math.round(requiredJambScore);
    document.getElementById('current-olevel-points').textContent = oLevelPoints.toFixed(2);
    document.getElementById('desired-aggregate-display').textContent = desiredAggregate.toFixed(2);
    
    // Display grade summary
    const gradeSummary = document.getElementById('grade-summary');
    gradeSummary.innerHTML = `
        <p><strong>Your O'Level Grades:</strong></p>
        <div class="selected-grades">
            ${subjects.map((subject, index) => `
                <div class="grade-item-small">
                    <span>${subject}: </span>
                    <strong>${getGradeFromPoints(grades[index])}</strong>
                    <span class="grade-points">(${grades[index]} pts)</span>
                </div>
            `).join('')}
        </div>
    `;
    
    document.getElementById('utme-result').style.display = 'block';
    
    // Provide recommendation
    const recommendation = document.getElementById('utme-recommendation');
    if (requiredJambScore <= 400 && requiredJambScore >= 180) {
        recommendation.innerHTML = `<i class="fas fa-check-circle"></i> You need a JAMB score of ${Math.round(requiredJambScore)} to achieve your desired aggregate of ${desiredAggregate.toFixed(2)}.`;
        recommendation.className = 'recommendation success';
    } else if (requiredJambScore > 400) {
        recommendation.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Impossible! You would need a JAMB score higher than 400. Consider improving your O'level grades or lowering your target aggregate.`;
        recommendation.className = 'recommendation warning';
    } else {
        recommendation.innerHTML = `<i class="fas fa-thumbs-up"></i> Good news! You can achieve your desired aggregate with a JAMB score of ${Math.round(requiredJambScore)}.`;
        recommendation.className = 'recommendation info';
    }
    
    showNotification('Required UTME score calculated!', 'success');
    document.getElementById('utme-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==================== O'LEVEL CALCULATOR LOGIC ====================
function calculateRequiredOLevel() {
    const desiredAggregateOLevel = parseFloat(document.getElementById('desired-aggregate-olevel').value);
    const jambScoreInput = parseFloat(document.getElementById('jamb-score-input').value);
    
    if (isNaN(desiredAggregateOLevel) || desiredAggregateOLevel < 0 || desiredAggregateOLevel > 100) {
        showNotification('Please enter a valid desired aggregate between 0 and 100', 'warning');
        return;
    }
    
    if (isNaN(jambScoreInput) || jambScoreInput < 0 || jambScoreInput > 400) {
        showNotification('Please enter a valid JAMB score between 0 and 400', 'warning');
        return;
    }
    
    // Calculate JAMB points
    const jambPointsInput = (jambScoreInput / 400) * 75;
    
    // Calculate required O'level points
    const requiredOLevelPoints = desiredAggregateOLevel - jambPointsInput;
    
    if (requiredOLevelPoints < 0) {
        showNotification('Desired aggregate is lower than your JAMB points. You need a lower aggregate or lower JAMB score.', 'warning');
        return;
    }
    
    if (requiredOLevelPoints > 25) {
        showNotification('Required O\'level points exceed maximum possible. You need a lower aggregate or higher JAMB score.', 'warning');
        return;
    }
    
    // Calculate required average O'level grade points (out of 100)
    const requiredAverageGradePoints = (requiredOLevelPoints / 25) * 100;
    
    // Find the best grade combination
    const gradeCombination = findBestGradeCombination(requiredAverageGradePoints);
    
    // Calculate total points from the combination
    const totalPoints = gradeCombination.reduce((sum, grade) => sum + grade.points, 0);
    const actualAverage = totalPoints / 5;
    const actualOLevelPoints = (actualAverage / 100) * 25;
    
    // Display results
    document.getElementById('current-jamb-points').textContent = jambPointsInput.toFixed(2);
    document.getElementById('required-olevel-points').textContent = requiredOLevelPoints.toFixed(2);
    document.getElementById('required-average-grade').textContent = requiredAverageGradePoints.toFixed(2);
    document.getElementById('desired-aggregate-olevel-display').textContent = desiredAggregateOLevel.toFixed(2);
    
    // Display grade combination
    const gradeList = document.getElementById('recommended-grades');
    gradeList.innerHTML = '';
    
    gradeCombination.forEach(grade => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${grade.grade}</strong> (${grade.points} points)`;
        gradeList.appendChild(li);
    });
    
    // Provide explanation
    const explanation = document.getElementById('grade-explanation');
    explanation.textContent = `To achieve approximately ${actualOLevelPoints.toFixed(2)} O'level points (${actualAverage.toFixed(2)} average), you need grades equivalent to or better than the combination above.`;
    
    document.getElementById('olevel-result-details').style.display = 'block';
    
    showNotification('Required O\'level grades calculated!', 'success');
    document.getElementById('olevel-result-details').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==================== HELPER FUNCTIONS ====================
function getGradeFromPoints(points) {
    const gradeMap = {
        80: 'A1',
        72: 'B2',
        67: 'B3',
        62: 'C4',
        57: 'C5',
        52: 'C6'
    };
    return gradeMap[points] || 'Unknown';
}

function findBestGradeCombination(requiredAverage) {
    const gradePoints = [
        { grade: 'A1', points: 80 },
        { grade: 'B2', points: 72 },
        { grade: 'B3', points: 67 },
        { grade: 'C4', points: 62 },
        { grade: 'C5', points: 57 },
        { grade: 'C6', points: 52 }
    ];
    
    // Sort grades by points (descending)
    gradePoints.sort((a, b) => b.points - a.points);
    
    const result = [];
    let remainingPoints = requiredAverage * 5; // Total for 5 subjects
    
    for (let i = 0; i < 5; i++) {
        // Find the best grade that fits
        let bestGrade = gradePoints.find(grade => grade.points <= remainingPoints / (5 - i));
        
        if (bestGrade) {
            result.push(bestGrade);
            remainingPoints -= bestGrade.points;
        } else {
            // If no grade fits, use the lowest grade
            result.push(gradePoints[gradePoints.length - 1]);
            remainingPoints -= gradePoints[gradePoints.length - 1].points;
        }
    }
    
    return result;
}

// ==================== RESET FUNCTIONS ====================
function resetScreeningForm() {
    // Reset form inputs
    document.getElementById('screening-form').reset();
    
    // Reset subjects container
    const subjectsContainer = document.getElementById('subjects-container');
    while (subjectsContainer.children.length > 0) {
        subjectsContainer.lastChild.remove();
    }
    
    // Reinitialize with 5 subjects
    for (let i = 0; i < 5; i++) {
        addSubject('subjects-container', 'main-');
    }
    
    // Hide result
    document.getElementById('result').style.display = 'none';
    
    // Reset display scores
    document.getElementById('olevel-score').textContent = '0.00';
    document.getElementById('jamb-score-display').textContent = '0.00';
    document.getElementById('total-score').textContent = '0.00';
    
    showNotification('Form reset successfully', 'info');
    saveCalculatorData();
}

function resetUTMECalculator() {
    // Reset form inputs
    document.getElementById('desired-aggregate').value = '';
    document.getElementById('utme-calculator-form').reset();
    
    // Reset subjects container
    const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
    while (utmeSubjectsContainer.children.length > 0) {
        utmeSubjectsContainer.lastChild.remove();
    }
    
    // Reinitialize with 5 subjects
    for (let i = 0; i < 5; i++) {
        addSubject('utme-subjects-container', 'utme-');
    }
    
    // Hide result
    document.getElementById('utme-result').style.display = 'none';
    
    showNotification('UTME calculator reset', 'info');
}

function resetOLevelCalculator() {
    // Reset form inputs
    document.getElementById('desired-aggregate-olevel').value = '';
    document.getElementById('jamb-score-input').value = '';
    document.getElementById('olevel-calculator-form').reset();
    
    // Hide result
    document.getElementById('olevel-result-details').style.display = 'none';
    
    showNotification('O\'Level calculator reset', 'info');
}

// ==================== SHARE FUNCTIONS ====================
function shareOnWhatsApp() {
    const totalScore = document.getElementById('total-score').textContent;
    const oLevelScore = document.getElementById('olevel-score').textContent;
    const jambScore = document.getElementById('jamb-score-display').textContent;
    
    const message = `My FUTA Screening Score Results:%0A%0A📊 *O'Level Score:* ${oLevelScore}%0A📝 *JAMB Score:* ${jambScore}%0A🏆 *Total Aggregate:* ${totalScore}%0A%0ACalculated using Envilinks FUTA Fresher Guide Screening Calculator https://envilinksfutafresherguide.vercel.app/calculator.html`;
    
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

function copyResults() {
    const totalScore = document.getElementById('total-score').textContent;
    const oLevelScore = document.getElementById('olevel-score').textContent;
    const jambScore = document.getElementById('jamb-score-display').textContent;
    
    const text = `My FUTA Screening Score Results:\n\n📊 O'Level Score: ${oLevelScore}\n📝 JAMB Score: ${jambScore}\n🏆 Total Aggregate: ${totalScore}\n\nCalculated using Envilinks FUTA Fresher Guide Screening Calculator https://envilinksfutafresherguide.vercel.app/calculator.html`;
    
    navigator.clipboard.writeText(text)
        .then(() => showNotification('Results copied to clipboard!', 'success'))
        .catch(() => showNotification('Failed to copy results', 'error'));
}

// ==================== NOTIFICATION FUNCTIONS ====================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
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
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'warning': return 'exclamation-triangle';
        case 'error': return 'times-circle';
        default: return 'info-circle';
    }
}

// ==================== DATA SAVING FUNCTIONS ====================
function saveCalculatorData() {
    const data = {
        jambScore: document.getElementById('jamb-score').value,
        subjects: [],
        grades: [],
        timestamp: new Date().getTime()
    };
    
    const subjectGroups = document.querySelectorAll('#subjects-container .subject-input-group');
    subjectGroups.forEach(group => {
        const subjectSelect = group.querySelector('.subject-select');
        const gradeSelect = group.querySelector('.grade-select');
        
        if (subjectSelect && gradeSelect) {
            data.subjects.push(subjectSelect.value);
            data.grades.push(gradeSelect.value);
        }
    });
    
    localStorage.setItem('futaCalculatorData', JSON.stringify(data));
}

function loadSavedCalculatorData() {
    const savedData = localStorage.getItem('futaCalculatorData');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            
            if (data.jambScore) {
                document.getElementById('jamb-score').value = data.jambScore;
            }
            
            if (data.subjects && data.subjects.length > 0) {
                const subjectsContainer = document.getElementById('subjects-container');
                // Clear existing subjects
                while (subjectsContainer.children.length > 0) {
                    subjectsContainer.lastChild.remove();
                }
                
                // Add saved subjects
                data.subjects.forEach((subject, index) => {
                    if (subject && data.grades && data.grades[index]) {
                        // Add a subject field
                        addSubject('subjects-container', 'main-');
                        
                        // Set the values
                        const subjectSelect = subjectsContainer.querySelectorAll('.subject-select')[index];
                        const gradeSelect = subjectsContainer.querySelectorAll('.grade-select')[index];
                        
                        if (subjectSelect) subjectSelect.value = subject;
                        if (gradeSelect) gradeSelect.value = data.grades[index];
                    }
                });
            }
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

// ==================== OFFLINE FUNCTIONALITY ====================
function checkOnlineStatus() {
    const offlineStatus = document.getElementById('offline-status');
    if (!offlineStatus) {
        const offlineHTML = `
            <div id="offline-status" class="offline-status">
                <i class="fas fa-wifi-slash"></i>
                <span>You are offline. Using saved data.</span>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', offlineHTML);
    }
    
    handleOnlineStatus();
}

function handleOnlineStatus() {
    const offlineStatus = document.getElementById('offline-status');
    if (offlineStatus) {
        if (navigator.onLine) {
            offlineStatus.style.display = 'none';
        } else {
            offlineStatus.style.display = 'flex';
        }
    }
}