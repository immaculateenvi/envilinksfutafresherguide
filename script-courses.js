// Course data with emojis, subject requirements, and short codes
const coursesData = [
    // School of Agriculture and Agricultural Technology (SAAT) 🌾
    { school: "SAAT", short: "AEC", name: "Agricultural Extension And Communication Technology (AEC)", cutoff: 47.81, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Mathematics/Physics"], emoji: "🌾" },
    { school: "SAAT", short: "ARE", name: "Agricultural Resources Economics (ARE)", cutoff: 47.50, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Mathematics"], emoji: "📈" },
    { school: "SAAT", short: "APH", name: "Animal and Production Health (APH)", cutoff: 55.52, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Physics/Mathematics"], emoji: "🐄" },
    { school: "SAAT", short: "CSP", name: "Crop Soil and Pest Management (CSP)", cutoff: 48.2, requiredSubjects: ["English", "Chemistry", "Biology/Agriculture", "Physics/Mathematics"], emoji: "🌱" },
    { school: "SAAT", short: "EWM", name: "Ecotourism and Wildlife Management (EWM)", cutoff: 47.70, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🐘" },
    { school: "SAAT", short: "FAT", name: "Fisheries and Aquaculture Technology (FAT)", cutoff: 47.50, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "any other Science"], emoji: "🐟" },
    { school: "SAAT", short: "FST", name: "Food Science And Technology (FST)", cutoff: 58.12, requiredSubjects: ["English", "Chemistry", "Mathematics/Physics", "Agricultural Science"], emoji: "🍎" },
    { school: "SAAT", short: "FWT", name: "Forestry and Wood Technology (FWT)", cutoff: 47.5, requiredSubjects: ["English", "Chemistry", "Biology/Agriculture", "Physics/Mathematics"], emoji: "🌲" },
    { school: "SAAT", short: "NTD", name: "Nutrition and Dietetics (NTD)", cutoff: 55.70, requiredSubjects: ["English", "Chemistry", "Biology", "Physics"], emoji: "🥗" },
    
    // College of Health and Health Sciences 🏥
    { school: "SBMS", short: "ANY", name: "Anatomy (ANY)", cutoff: 60.40, requiredSubjects: ["English", "Mathematics", "Biology", "Chemistry/Physics"], emoji: "🦴" },
    { school: "SBMS", short: "PHS", name: "Physiology (PHS)", cutoff: 57.26, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "❤️" },
    { school: "SBMS", short: "NSC", name: "Nursing Science (NSC)", cutoff: 75, requiredSubjects: ["English", "Physics", "Biology", "Chemistry"], emoji: "👩‍⚕️" },
    { school: "SBMS", short: "PUH", name: "Public Health (PUH)", cutoff: 65, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "🏥" },
    { school: "SBCS", short: "BIM", name: "Biomedical Technology (BIM)", cutoff: 61.66, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "🔬" },
    { school: "SBCS", short: "MLS", name: "Medical Laboratory Science (MLS)", cutoff: 67.28, requiredSubjects: ["English", "Physics", "Chemistry", "Biology"], emoji: "🧪" },
    { school: "SCS", short: "MBBS", name: "Medicine and Surgery (MBBS)", cutoff: 78.25, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "⚕️" },
    
    // School of Computing (SOC) 💻
    { school: "SOC", short: "CSC", name: "Computer Science (CSC)", cutoff: 69.12, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "💻" },
    { school: "SOC", short: "CYS", name: "Cyber Security (CYS)", cutoff: 63.75, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🔒" },
    { school: "SOC", short: "IFS", name: "Information System (IFS)", cutoff: 63.11, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📊" },
    { school: "SOC", short: "IFT", name: "Information Technology (IFT)", cutoff: 64.23, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🖥️" },
    { school: "SOC", short: "SEN", name: "Software Engineering (SEN)", cutoff: 70.38, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "👨‍💻" },
    { school: "SOC", short: "DTS", name: "Data Science (DTS)", cutoff: 65.38, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📈" },
    
    // School of Infrastructure,Minerals and Manufacturing Engineering (SIMME) 🏗️
    { school: "SIMME", short: "AGE", name: "Agricultural Engineering (AGE)", cutoff: 56.21, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🚜" },
    { school: "SIMME", short: "CEE", name: "Chemical Engineering (CEE)", cutoff: 65.21, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚗️" },
    { school: "SIMME", short: "CVE", name: "Civil Engineering (CVE)", cutoff: 72.66, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🏗️" },
    { school: "SIMME", short: "IPE", name: "Industrial and Production Engineering (IPE)", cutoff: 53.53, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🏭" },
    { school: "SIMME", short: "MEE", name: "Mechanical Engineering (MEE)", cutoff: 73.75, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚙️" },
    { school: "SIMME", short: "MNE", name: "Mining Engineering (MNE)", cutoff: 55.20, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⛏️" },
    { school: "SIMME", short: "MME", name: "Metallurgical and Material Engineering (MME)", cutoff: 55.30, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🔥" },
    
    // School of Electrical Systems Engineering (SESE) ⚡
    { school: "SESE", short: "BME", name: "Biomedical Engineering", cutoff: 63.40, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🫀" },
    { school: "SESE", short: "CPE", name: "Computer Engineering", cutoff: 69.62, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "💾" },
    { school: "SESE", short: "EEE", name: "Electrical - Electronics Engineering (EEE)", cutoff: 74.37, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚡" },
    { school: "SESE", short: "ICE", name: "Information and Communication Engineering (ICE)", cutoff: 57.60, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📡" },
    { school: "SESE", short: "MCE", name: "Mechatronics Engineering (MCE)", cutoff: 71.30, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🤖" },
    
    // School of Earth and Mineral Science (SEMS) 🌍
    { school: "SEMS", short: "AGY", name: "Applied Geology (AGY)", cutoff: 57.30, requiredSubjects: ["English", "Chemistry", "Physics", "Mathematics/Geography"], emoji: "🪨" },
    { school: "SEMS", short: "AGP", name: "Applied Geophysics (AGP)", cutoff: 56.66, requiredSubjects: ["English", "Chemistry", "Physics", "Mathematics/Geography"], emoji: "🧲" },
    { school: "SEMS", short: "MST", name: "Marine Science And Technology (MST)", cutoff: 51.44, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🌊" },
    { school: "SEMS", short: "MCS", name: "Metrology And Climate Science (MCS)", cutoff: 51.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "🌡️" },
    { school: "SEMS", short: "RSG", name: "Remote Sensing And Geoinformatics (RSG)", cutoff: 51.10, requiredSubjects: ["English", "Geography", "Mathematics", "Physics/Chemistry/Biology/Economics"], emoji: "🛰️" },
    
    // School of Environmental Technology (SET) 🏛️
    { school: "SET", short: "ARC", name: "Architecture (ARC)", cutoff: 72.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏛️" },
    { school: "SET", short: "BDG", name: "Building Technology (BDG)", cutoff: 57.20, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏢" },
    { school: "SET", short: "ESM", name: "Estate Management (ESM)", cutoff: 48.30, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏠" },
    { school: "SET", short: "IDD", name: "Industrial Design (IDD)", cutoff: 53.25, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "✏️" },
    { school: "SET", short: "QSV", name: "Quantity Survey (QSV)", cutoff: 57.60, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "📐" },
    { school: "SET", short: "SVG", name: "Survey And Geo-informatics (SVG)", cutoff: 64.25, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "📍" },
    { school: "SET", short: "TDT", name: "Textile Design Technology (TDT)", cutoff: 52.87, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🧵" },
    { school: "SET", short: "URP", name: "Urban And Regional Planning (URP)", cutoff: 52.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🗺️" },
    { school: "SET", short: "ENM", name: "Environmental Management (ENM)", cutoff: 50.00, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🌳" },
    
    // School of Logistics and Innovation Technology (SLIT) 🚚
    { school: "SLIT", short: "BIT", name: "Business Information Technology (BIT)", cutoff: 50.00, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "💼" },
    { school: "SLIT", short: "BMT", name: "Business Management Technology (BMT)", cutoff: 50.00, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "📈" },
    { school: "SLIT", short: "ENT", name: "Entrepreneurship Management Technology (ENT)", cutoff: 51.66, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🚀" },
    { school: "SLIT", short: "LTT", name: "Logistics And Transport Technology (LTT)", cutoff: 55.60, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🚚" },
    { school: "SLIT", short: "PMT", name: "Project Management Technology (PMT)", cutoff: 56.40, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "📅" },
    { school: "SLIT", short: "SIMT", name: "Security & Investment Management Technology (SIMT)", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🛡️" },
    { school: "SLIT", short: "FIT", name: "Financial Technology (FIT)", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "💰" },
    { school: "SLIT", short: "PNT", name: "Procurement Management Technology (PNT)", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "📦" },
    
    // School of Life Sciences (SLS) 🧬
    { school: "SLS", short: "BCH", name: "Biochemistry (BCH)", cutoff: 64.33, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "🧪" },
    { school: "SLS", short: "BIO", name: "Biology (BIO)", cutoff: 52.62, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🔬" },
    { school: "SLS", short: "BTH", name: "Biotechnology (BTH)", cutoff: 58.43, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🧬" },
    { school: "SLS", short: "MCB", name: "Microbiology (MCB)", cutoff: 64.30, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🦠" },
    
    // School of Physical Sciences (SPS) 🔭
    { school: "SPS", short: "CHM", name: "Chemistry (CHM)", cutoff: 55.30, requiredSubjects: ["English", "Chemistry", "two of Physics/Biology/Mathematics"], emoji: "⚗️" },
    { school: "SPS", short: "EDT", name: "Education Technology (EDT)", cutoff: 48.72, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "👨‍🏫" },
    { school: "SPS", short: "LIS", name: "Library and Information Science (LIS)", cutoff: 48.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "📚" },
    { school: "SPS", short: "MTS", name: "Mathematics (MTS)", cutoff: 59.64, requiredSubjects: ["English", "Mathematics", "any two of Physics/Chemistry/Economics/Biology"], emoji: "🧮" },
    { school: "SPS", short: "PHY", name: "Physics Electronics (PHY)", cutoff: 50.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "🔌" },
    { school: "SPS", short: "PHYE", name: "Physics Energy (PHY)", cutoff: 50.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "⚡" },
    { school: "SPS", short: "STA", name: "Statistics (STA)", cutoff: 50.00, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry/Economics"], emoji: "📊" }
];

// School full names mapping
const schoolFullNames = {
    "SAAT": "School of Agriculture and Agricultural Technology (SAAT)",
    "SBMS": "School of Basic Medical Science (SBMS)",
    "SBCS": "School of Basic Clinical Science (SBCS)",
    "SCS": "School of Clinical Science (SCS)",
    "SOC": "School of Computing (SOC)",
    "SIMME": "School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)",
    "SESE": "School of Electrical Systems Engineering (SESE)",
    "SEMS": "School of Earth and Mineral Science (SEMS)",
    "SET": "School of Environmental Technology (SET)",
    "SLIT": "School of Logistics and Innovation Technology (SLIT)",
    "SLS": "School of Life Sciences (SLS)",
    "SPS": "School of Physical Sciences (SPS)"
};

document.addEventListener('DOMContentLoaded', function() {
    initializeCoursesPage();
    checkOnlineStatus();
    
    // Listen for online/offline events
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    
    // Initialize service worker for offline functionality
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
});

function initializeCoursesPage() {
    const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
    const addUtmeSubjectBtn = document.getElementById('add-utme-subject');
    const checkEligibilityBtn = document.getElementById('check-eligibility');
    const clearFormBtn = document.getElementById('clear-form');
    
    // Initialize with 4 UTME subjects
    for (let i = 0; i < 4; i++) {
        addUtmeSubject();
    }
    
    // Add UTME subject button event
    addUtmeSubjectBtn.addEventListener('click', addUtmeSubject);
    
    // Check eligibility button event
    checkEligibilityBtn.addEventListener('click', checkEligibility);
    
    // Clear form button event
    clearFormBtn.addEventListener('click', clearForm);
    
    // Display all courses on page load
    displayAllCourses();
    
    // Load saved data
    loadSavedData();
}

function addUtmeSubject() {
    const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
    const subjectCount = utmeSubjectsContainer.children.length;
    const id = 'utme' + (subjectCount + 1);
    
    if (subjectCount >= 4) return;
    
    const subjectGroup = document.createElement('div');
    subjectGroup.className = 'subject-input-group';
    subjectGroup.setAttribute('data-id', id);
    
    subjectGroup.innerHTML = `
        <select class="utme-subject-select">
            <option value="">Select Subject</option>
            <option value="English">English</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Agricultural Science">Agricultural Science</option>
            <option value="Geography">Geography</option>
            <option value="Economics">Economics</option>
            <option value="Fine Art">Fine Art</option>
        </select>
        <button type="button" class="remove-subject" ${subjectCount < 4 ? 'style="display: none;"' : ''}>
            <i class="fas fa-times"></i>
        </button>
    `;
    
    utmeSubjectsContainer.appendChild(subjectGroup);
    
    // Add event listener to remove button
    const removeBtn = subjectGroup.querySelector('.remove-subject');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            if (utmeSubjectsContainer.children.length > 1) {
                subjectGroup.remove();
                updateUtmeRemoveButtonsVisibility();
            } else {
                showNotification('At least 1 UTME subject required', 'warning');
            }
        });
    }
    
    updateUtmeRemoveButtonsVisibility();
    saveData();
}

function updateUtmeRemoveButtonsVisibility() {
    const subjectGroups = document.querySelectorAll('.utme-subjects .subject-input-group');
    subjectGroups.forEach((group, index) => {
        const removeBtn = group.querySelector('.remove-subject');
        if (removeBtn) {
            removeBtn.style.display = subjectGroups.length > 1 ? 'flex' : 'none';
        }
    });
}

function checkEligibility() {
    const aggregateScore = parseFloat(document.getElementById('aggregate-score').value);
    
    if (isNaN(aggregateScore) || aggregateScore < 0 || aggregateScore > 100) {
        showNotification('Please enter a valid aggregate score between 0 and 100', 'warning');
        return;
    }
    
    // Get selected UTME subjects
    const utmeSubjectGroups = document.querySelectorAll('.utme-subjects .subject-input-group');
    const utmeSubjects = [];
    
    utmeSubjectGroups.forEach(group => {
        const subjectSelect = group.querySelector('.utme-subject-select');
        if (subjectSelect.value && !utmeSubjects.includes(subjectSelect.value)) {
            utmeSubjects.push(subjectSelect.value);
        }
    });
    
    // Validate we have exactly 4 unique subjects
    if (utmeSubjects.length !== 4) {
        showNotification('Please select exactly 4 unique UTME subjects', 'warning');
        return;
    }
    
    // Calculate eligibility for ALL courses
    const allCoursesWithEligibility = calculateAllCoursesEligibility(aggregateScore, utmeSubjects);
    
    // Display eligible courses section
    displayEligibleCourses(allCoursesWithEligibility, aggregateScore, utmeSubjects);
    
    // Display all courses with eligibility percentages
    displayAllCoursesWithEligibility(allCoursesWithEligibility, aggregateScore, utmeSubjects);
    
    // Show notification
    const eligibleCount = allCoursesWithEligibility.filter(course => course.isEligible).length;
    if (eligibleCount > 0) {
        showNotification(`Found ${eligibleCount} eligible courses out of ${allCoursesWithEligibility.length}`, 'success');
    } else {
        showNotification('No eligible courses found. Try adjusting your score or subjects.', 'info');
    }
    
    // Scroll to results
    document.getElementById('eligible-courses').scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Save current search
    saveData();
}

function calculateAllCoursesEligibility(score, userSubjects) {
    return coursesData.map(course => {
        // Check subject requirements
        const subjectEligible = matchesSubjects(userSubjects, course);
        
        // Calculate score difference
        const scoreDifference = (score - course.cutoff).toFixed(2);
        const isEligible = parseFloat(scoreDifference) >= 0 && subjectEligible;
        
        // Calculate eligibility percentage (how much above cutoff)
        const eligibilityPercentage = Math.max(0, (score - course.cutoff) / course.cutoff * 100).toFixed(2);
        
        // Determine eligibility level
        let eligibilityLevel = 'ineligible';
        if (isEligible) {
            if (parseFloat(scoreDifference) >= 5) {
                eligibilityLevel = 'high';
            } else if (parseFloat(scoreDifference) >= 2) {
                eligibilityLevel = 'moderate';
            } else {
                eligibilityLevel = 'low';
            }
        }
        
        return {
            ...course,
            scoreDifference: parseFloat(scoreDifference),
            isEligible,
            subjectEligible,
            eligibilityPercentage: parseFloat(eligibilityPercentage),
            eligibilityLevel
        };
    });
}

function matchesSubjects(userSubjects, course) {
    const requiredSubjects = course.requiredSubjects;
    
    if (!requiredSubjects || requiredSubjects.length === 0) {
        return true;
    }
    
    const normalizedUserSubjects = [...new Set(userSubjects.map(s => s.trim()))];
    
    let matchCount = 0;
    
    for (const requiredPattern of requiredSubjects) {
        let patternMatched = false;
        
        if (requiredPattern.includes('/')) {
            const options = requiredPattern.split('/').map(opt => opt.trim());
            
            for (const option of options) {
                if (normalizedUserSubjects.includes(option)) {
                    patternMatched = true;
                    matchCount++;
                    break;
                }
            }
        }
        else if (normalizedUserSubjects.includes(requiredPattern.trim())) {
            patternMatched = true;
            matchCount++;
        }
        
        if (!patternMatched && !course.flexible && !course.minMatches) {
            return false;
        }
    }
    
    if (course.flexible) {
        return matchCount >= 3;
    }
    
    if (course.minMatches) {
        return matchCount >= course.minMatches;
    }
    
    return matchCount === requiredSubjects.length;
}

function displayEligibleCourses(courses, score, userSubjects) {
    const eligibleCoursesSection = document.getElementById('eligible-courses');
    const eligibleCoursesContainer = document.getElementById('eligible-courses-list');
    
    // Filter only eligible courses
    const eligibleCourses = courses.filter(course => course.isEligible);
    
    // Clear existing courses
    eligibleCoursesContainer.innerHTML = '';
    
    if (eligibleCourses.length === 0) {
        eligibleCoursesSection.style.display = 'block';
        eligibleCoursesContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h4>No eligible courses found</h4>
                <p>Try adjusting your score or subject combination</p>
            </div>
        `;
        return;
    }
    
    eligibleCoursesSection.style.display = 'block';
    
    // Group courses by school
    const coursesBySchool = {};
    eligibleCourses.forEach(course => {
        const schoolFullName = schoolFullNames[course.school] || course.school;
        if (!coursesBySchool[schoolFullName]) {
            coursesBySchool[schoolFullName] = [];
        }
        coursesBySchool[schoolFullName].push(course);
    });
    
    // Display courses by school
    for (const school in coursesBySchool) {
        const schoolCourses = coursesBySchool[school];
        
        // Create school header
        const schoolHeader = document.createElement('div');
        schoolHeader.className = 'school-section';
        schoolHeader.innerHTML = `<h3>${school} <small>(${schoolCourses.length} courses)</small></h3>`;
        eligibleCoursesContainer.appendChild(schoolHeader);
        
        // Create courses container
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'course-list';
        
        schoolCourses.forEach(course => {
            const eligibilityBadge = getEligibilityBadge(course);
            
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card eligible';
            courseCard.setAttribute('data-emoji', course.emoji);
            courseCard.setAttribute('data-course-short', course.short);
            courseCard.setAttribute('data-course-name', course.name);
            
            // Format required subjects for display
            let subjectsDisplay = '';
            if (course.requiredSubjects && course.requiredSubjects.length > 0) {
                subjectsDisplay = course.requiredSubjects.map(subj => {
                    if (subj.includes('/')) {
                        return subj.replace(/\//g, ' OR ');
                    }
                    return subj;
                }).join(', ');
            }
            
            courseCard.innerHTML = `
                <h4>
                    <span class="course-code" onclick="showCourseDetails('${course.short}')">${course.short}</span>
                    ${course.name} ${eligibilityBadge}
                </h4>
                <div class="course-meta">
                    <div>
                        <div class="cutoff">Cut-off: ${course.cutoff}</div>
                        <div class="score-difference positive">
                            +${course.scoreDifference.toFixed(2)} points above
                        </div>
                    </div>
                </div>
                ${subjectsDisplay ? 
                    `<div class="required-subjects">
                        <small>Required: ${subjectsDisplay}</small>
                    </div>` : ''
                }
                <div class="course-status">
                    <span class="status-dot status-eligible"></span>
                    <span>Eligible</span>
                    <span class="percentage-display">+${course.eligibilityPercentage}%</span>
                </div>
            `;
            
            coursesContainer.appendChild(courseCard);
        });
        
        schoolHeader.appendChild(coursesContainer);
    }
}

function displayAllCoursesWithEligibility(courses, score, userSubjects) {
    const allCoursesContainer = document.getElementById('all-courses');
    
    // Clear container
    allCoursesContainer.innerHTML = '';
    
    // Group courses by school
    const coursesBySchool = {};
    courses.forEach(course => {
        const schoolFullName = schoolFullNames[course.school] || course.school;
        if (!coursesBySchool[schoolFullName]) {
            coursesBySchool[schoolFullName] = [];
        }
        coursesBySchool[schoolFullName].push(course);
    });
    
    // Create filter buttons
    const filterSection = document.createElement('div');
    filterSection.className = 'eligibility-filter';
    
    const filters = [
        { id: 'all', label: 'All Courses', count: courses.length },
        { id: 'eligible', label: 'Eligible', count: courses.filter(c => c.isEligible).length },
        { id: 'ineligible', label: 'Not Eligible', count: courses.filter(c => !c.isEligible).length }
    ];
    
    filters.forEach(filter => {
        const filterBtn = document.createElement('button');
        filterBtn.className = `filter-btn ${filter.id === 'all' ? 'active' : ''}`;
        filterBtn.setAttribute('data-filter', filter.id);
        filterBtn.innerHTML = `
            <i class="fas fa-filter"></i>
            ${filter.label}
            <span class="filter-count">${filter.count}</span>
        `;
        
        filterBtn.addEventListener('click', function() {
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter courses
            filterCourses(filter.id);
        });
        
        filterSection.appendChild(filterBtn);
    });
    
    allCoursesContainer.appendChild(filterSection);
    
    // Display courses by school
    for (const school in coursesBySchool) {
        const schoolSection = document.createElement('div');
        schoolSection.className = 'school-section';
        schoolSection.setAttribute('data-school', school);
        schoolSection.innerHTML = `<h3>${school}</h3>`;
        
        const schoolCourses = coursesBySchool[school];
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'course-list';
        coursesContainer.setAttribute('data-school', school);
        
        schoolCourses.forEach(course => {
            const eligibilityBadge = getEligibilityBadge(course);
            const isEligible = course.isEligible;
            
            // Format required subjects for display
            let subjectsDisplay = '';
            if (course.requiredSubjects && course.requiredSubjects.length > 0) {
                subjectsDisplay = course.requiredSubjects.map(subj => {
                    if (subj.includes('/')) {
                        return subj.replace(/\//g, ' OR ');
                    }
                    return subj;
                }).join(', ');
            }
            
            const courseCard = document.createElement('div');
            courseCard.className = `course-card ${isEligible ? 'eligible' : 'ineligible'}`;
            courseCard.setAttribute('data-emoji', course.emoji);
            courseCard.setAttribute('data-course-short', course.short);
            courseCard.setAttribute('data-course-name', course.name);
            courseCard.setAttribute('data-eligible', isEligible);
            courseCard.setAttribute('data-eligibility-level', course.eligibilityLevel);
            
            courseCard.innerHTML = `
                <h4>
                    <span class="course-code" onclick="showCourseDetails('${course.short}')">${course.short}</span>
                    ${course.name} ${eligibilityBadge}
                </h4>
                <div class="course-meta">
                    <div>
                        <div class="cutoff">Cut-off: ${course.cutoff}</div>
                        <div class="score-difference ${course.scoreDifference >= 0 ? 'positive' : 'negative'}">
                            ${course.scoreDifference >= 0 ? '+' : ''}${course.scoreDifference.toFixed(2)} points
                        </div>
                    </div>
                </div>
                ${subjectsDisplay ? 
                    `<div class="required-subjects">
                        <small>Required: ${subjectsDisplay}</small>
                    </div>` : ''
                }
                <div class="course-status">
                    <span class="status-dot status-${isEligible ? 'eligible' : 'ineligible'}"></span>
                    <span>${isEligible ? 'Eligible' : 'Not Eligible'}</span>
                    <span class="percentage-display">${course.scoreDifference >= 0 ? '+' : ''}${course.eligibilityPercentage}%</span>
                </div>
            `;
            
            coursesContainer.appendChild(courseCard);
        });
        
        schoolSection.appendChild(coursesContainer);
        allCoursesContainer.appendChild(schoolSection);
    }
    
    // Store courses data for filtering
    window.allCoursesData = courses;
}

function filterCourses(filterType) {
    const courseCards = document.querySelectorAll('#all-courses .course-card');
    
    courseCards.forEach(card => {
        const isEligible = card.getAttribute('data-eligible') === 'true';
        
        switch(filterType) {
            case 'all':
                card.style.display = 'block';
                break;
            case 'eligible':
                card.style.display = isEligible ? 'block' : 'none';
                break;
            case 'ineligible':
                card.style.display = !isEligible ? 'block' : 'none';
                break;
        }
    });
    
    // Update school sections visibility
    const schoolSections = document.querySelectorAll('#all-courses .school-section');
    schoolSections.forEach(section => {
        const visibleCourses = section.querySelectorAll('.course-card[style*="block"], .course-card:not([style*="none"])');
        if (visibleCourses.length === 0) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

function getEligibilityBadge(course) {
    if (!course.isEligible) {
        return `<span class="eligibility-badge eligibility-red">${Math.abs(course.scoreDifference).toFixed(2)} below</span>`;
    }
    
    switch(course.eligibilityLevel) {
        case 'low':
            return `<span class="eligibility-badge eligibility-yellow">${course.scoreDifference.toFixed(2)} above</span>`;
        case 'moderate':
            return `<span class="eligibility-badge eligibility-yellow">${course.scoreDifference.toFixed(2)} above ✓</span>`;
        case 'high':
            return `<span class="eligibility-badge eligibility-green">${course.scoreDifference.toFixed(2)} above ✓✓</span>`;
        default:
            return '';
    }
}

function showCourseDetails(courseCode) {
    const course = coursesData.find(c => c.short === courseCode);
    if (!course) return;
    
    // Create or update modal
    let modal = document.getElementById('course-detail-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'course-detail-modal';
        modal.className = 'course-detail-modal';
        modal.innerHTML = `
            <div class="course-detail-content">
                <div class="course-detail-header">
                    <h3>Course Details</h3>
                    <button class="course-detail-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="course-detail-body" id="course-detail-body"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add close event
        modal.querySelector('.course-detail-close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Format required subjects for display
    let subjectsDisplay = '';
    if (course.requiredSubjects && course.requiredSubjects.length > 0) {
        subjectsDisplay = course.requiredSubjects.map(subj => {
            if (subj.includes('/')) {
                const options = subj.split('/');
                return options.map(opt => `<span class="subject-option">${opt.trim()}</span>`).join(' OR ');
            }
            return `<span class="subject-option">${subj}</span>`;
        }).join(', ');
    }
    
    const schoolFullName = schoolFullNames[course.school] || course.school;
    
    // Populate modal content
    const detailBody = document.getElementById('course-detail-body');
    detailBody.innerHTML = `
        <div class="course-details-item">
            <strong>Course Code:</strong> <span class="course-code">${course.short}</span>
        </div>
        <div class="course-details-item">
            <strong>Full Name:</strong> ${course.name}
        </div>
        <div class="course-details-item">
            <strong>School:</strong> ${schoolFullName}
        </div>
        <div class="course-details-item">
            <strong>Cut-off Score:</strong> ${course.cutoff}
        </div>
        <div class="course-details-item">
            <strong>Required Subjects:</strong> <div class="subjects-list">${subjectsDisplay}</div>
        </div>
        <div class="course-details-item">
            <strong>Icon:</strong> ${course.emoji}
        </div>
    `;
    
    // Show modal
    modal.style.display = 'flex';
}

function clearForm() {
    document.getElementById('aggregate-score').value = '';
    
    const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
    while (utmeSubjectsContainer.children.length > 0) {
        utmeSubjectsContainer.lastChild.remove();
    }
    
    for (let i = 0; i < 4; i++) {
        addUtmeSubject();
    }
    
    document.getElementById('eligible-courses').style.display = 'none';
    
    showNotification('Form cleared successfully', 'info');
    saveData();
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
            .subject-match-info {
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px dashed #ddd;
                font-size: 0.85rem;
                color: #666;
            }
            .score-difference {
                font-size: 0.9rem;
                margin-top: 5px;
            }
            .score-difference.positive {
                color: #28a745;
                font-weight: bold;
            }
            .score-difference.negative {
                color: #dc3545;
            }
            .subject-option {
                display: inline-block;
                background: #e9ecef;
                padding: 2px 6px;
                border-radius: 4px;
                margin: 2px;
                font-size: 0.9rem;
            }
            .subjects-list {
                margin-top: 5px;
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

function saveData() {
    const data = {
        score: document.getElementById('aggregate-score').value,
        subjects: Array.from(document.querySelectorAll('.utme-subject-select')).map(select => select.value),
        timestamp: new Date().getTime()
    };
    
    localStorage.setItem('futaCourseData', JSON.stringify(data));
}

function loadSavedData() {
    const savedData = localStorage.getItem('futaCourseData');
    if (savedData) {
        const data = JSON.parse(savedData);
        
        if (data.score) {
            document.getElementById('aggregate-score').value = data.score;
        }
        
        if (data.subjects && data.subjects.length > 0) {
            const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
            // Clear existing subjects
            while (utmeSubjectsContainer.children.length > 0) {
                utmeSubjectsContainer.lastChild.remove();
            }
            
            // Add saved subjects
            data.subjects.forEach((subject, index) => {
                if (subject) {
                    addUtmeSubject();
                    const select = document.querySelectorAll('.utme-subject-select')[index];
                    if (select) select.value = subject;
                }
            });
            
            // Ensure we have 4 subjects
            while (utmeSubjectsContainer.children.length < 4) {
                addUtmeSubject();
            }
        }
    }
}

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

function displayAllCourses() {
    // This function is no longer needed as we use displayAllCoursesWithEligibility
}