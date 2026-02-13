// ========== COURSES.JS - COMPLETE COURSES FUNCTIONALITY ==========

// Course data with emojis, subject requirements, and short codes
const coursesData = [
    // School of Agriculture and Agricultural Technology (SAAT) 🌾
    { school: "SAAT", short: "AEC", name: "Agricultural Extension And Communication Technology", cutoff: 47.81, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Mathematics/Physics"], emoji: "🌾" },
    { school: "SAAT", short: "ARE", name: "Agricultural Resources Economics", cutoff: 47.50, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Mathematics"], emoji: "📈" },
    { school: "SAAT", short: "APH", name: "Animal and Production Health", cutoff: 55.52, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Physics/Mathematics"], emoji: "🐄" },
    { school: "SAAT", short: "CSP", name: "Crop Soil and Pest Management", cutoff: 48.2, requiredSubjects: ["English", "Chemistry", "Biology/Agriculture", "Physics/Mathematics"], emoji: "🌱" },
    { school: "SAAT", short: "EWM", name: "Ecotourism and Wildlife Management", cutoff: 47.70, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🐘" },
    { school: "SAAT", short: "FAT", name: "Fisheries and Aquaculture Technology", cutoff: 47.50, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "any other Science"], emoji: "🐟" },
    { school: "SAAT", short: "FWT", name: "Forestry and Wood Technology", cutoff: 47.5, requiredSubjects: ["English", "Chemistry", "Biology/Agriculture", "Physics/Mathematics"], emoji: "🌲" },
    { school: "SAAT", short: "NTD", name: "Nutrition and Dietetics", cutoff: 55.70, requiredSubjects: ["English", "Chemistry", "Biology", "Physics"], emoji: "🥗" },
    
    // College of Health and Health Sciences 🏥
    { school: "SBMS", short: "ANY", name: "Human Anatomy", cutoff: 60.40, requiredSubjects: ["English", "Mathematics", "Biology", "Chemistry/Physics"], emoji: "🦴" },
    { school: "SBMS", short: "PHS", name: "Physiology", cutoff: 57.26, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "❤️" },
    { school: "SBMS", short: "NSC", name: "Nursing Science", cutoff: 75, requiredSubjects: ["English", "Physics", "Biology", "Chemistry"], emoji: "👩‍⚕️" },
    { school: "SBMS", short: "PUH", name: "Public Health", cutoff: 65, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "🏥" },
    { school: "SBCS", short: "MLS", name: "Medical Laboratory Science", cutoff: 67.28, requiredSubjects: ["English", "Physics", "Chemistry", "Biology"], emoji: "🧪" },
    { school: "SCS", short: "MBBS", name: "Medicine and Surgery", cutoff: 78.25, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "⚕️" },
    
    // School of Computing (SOC) 💻
    { school: "SOC", short: "CSC", name: "Computer Science", cutoff: 69.12, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "💻" },
    { school: "SOC", short: "CYS", name: "Cyber Security", cutoff: 63.75, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🔒" },
    { school: "SOC", short: "IFS", name: "Information System", cutoff: 63.11, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📊" },
    { school: "SOC", short: "IFT", name: "Information Technology", cutoff: 64.23, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🖥️" },
    { school: "SOC", short: "SEN", name: "Software Engineering", cutoff: 70.38, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "👨‍💻" },
    { school: "SOC", short: "DTS", name: "Data Science", cutoff: 65.38, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📈" },
    
    // School of Infrastructure,Minerals and Manufacturing Engineering (SIMME) 🏗️
    { school: "SIMME", short: "AGE", name: "Agricultural Engineering", cutoff: 56.21, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🚜" },
    { school: "SIMME", short: "CEE", name: "Chemical Engineering", cutoff: 65.21, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚗️" },
    { school: "SIMME", short: "CVE", name: "Civil Engineering", cutoff: 72.66, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🏗️" },
    { school: "SIMME", short: "IPE", name: "Industrial and Production Engineering", cutoff: 53.53, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🏭" },
    { school: "SIMME", short: "MEE", name: "Mechanical Engineering", cutoff: 73.75, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚙️" },
    { school: "SIMME", short: "MNE", name: "Mining Engineering", cutoff: 55.20, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⛏️" },
    { school: "SIMME", short: "MME", name: "Metallurgical and Material Engineering", cutoff: 55.30, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🔥" },
    
    // School of Electrical Systems Engineering (SESE) ⚡
    { school: "SESE", short: "BME", name: "Biomedical Engineering", cutoff: 63.40, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🫀" },
    { school: "SESE", short: "CPE", name: "Computer Engineering", cutoff: 69.62, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "💾" },
    { school: "SESE", short: "EEE", name: "Electrical - Electronics Engineering", cutoff: 74.37, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚡" },
    { school: "SESE", short: "ICE", name: "Information and Communication Engineering", cutoff: 57.60, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📡" },
    { school: "SESE", short: "MCE", name: "Mechatronics Engineering", cutoff: 71.30, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🤖" },
    
    // School of Earth and Mineral Science (SEMS) 🌍
    { school: "SEMS", short: "AGY", name: "Applied Geology", cutoff: 57.30, requiredSubjects: ["English", "Chemistry", "Physics", "Mathematics/Geography"], emoji: "🪨" },
    { school: "SEMS", short: "AGP", name: "Applied Geophysics", cutoff: 56.66, requiredSubjects: ["English", "Chemistry", "Physics", "Mathematics/Geography"], emoji: "🧲" },
    { school: "SEMS", short: "MST", name: "Marine Science And Technology", cutoff: 51.44, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🌊" },
    { school: "SEMS", short: "MCS", name: "Metrology And Climate Science", cutoff: 51.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "🌡️" },
    { school: "SEMS", short: "RSG", name: "Remote Sensing And Geoinformatics", cutoff: 51.10, requiredSubjects: ["English", "Geography", "Mathematics", "Physics/Chemistry/Biology/Economics"], emoji: "🛰️" },
    
    // School of Environmental Technology (SET) 🏛️
    { school: "SET", short: "ARC", name: "Architecture", cutoff: 72.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏛️" },
    { school: "SET", short: "BDG", name: "Building", cutoff: 57.20, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏢" },
    { school: "SET", short: "ESM", name: "Estate Management", cutoff: 48.30, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏠" },
    { school: "SET", short: "IDD", name: "Industrial Design", cutoff: 53.25, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "✏️" },
    { school: "SET", short: "QSV", name: "Quantity Survey", cutoff: 57.60, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "📐" },
    { school: "SET", short: "SVG", name: "Survey And Geo-informatics", cutoff: 64.25, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "📍" },
    { school: "SET", short: "TDT", name: "Textile Design Technology", cutoff: 52.87, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🧵" },
    { school: "SET", short: "URP", name: "Urban And Regional Planning", cutoff: 52.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🗺️" },
    { school: "SET", short: "ENM", name: "Environmental Management", cutoff: 50.00, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🌳" },
    
    // School of Logistics and Innovation Technology (SLIT) 🚚
    { school: "SLIT", short: "BIT", name: "Business Information Technology", cutoff: 50.00, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "💼" },
    { school: "SLIT", short: "ENT", name: "Entrepreneurship Management Technology", cutoff: 51.66, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🚀" },
    { school: "SLIT", short: "LTT", name: "Logistics And Transport Technology", cutoff: 55.60, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🚚" },
    { school: "SLIT", short: "PMT", name: "Project Management Technology", cutoff: 56.40, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "📅" },
    { school: "SLIT", short: "SIMT", name: "Security & Investment Management Technology", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🛡️" },
    { school: "SLIT", short: "FIT", name: "Financial Technology", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "💰" },
    { school: "SLIT", short: "PNT", name: "Procurement Management Technology", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "📦" },
    
    // School of Life Sciences (SLS) 🧬
    { school: "SLS", short: "BCH", name: "Biochemistry", cutoff: 64.33, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "🧪" },
    { school: "SLS", short: "BIO", name: "Biology", cutoff: 52.62, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🔬" },
    { school: "SLS", short: "BTH", name: "Biotechnology", cutoff: 58.43, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🧬" },
    { school: "SLS", short: "MCB", name: "Microbiology", cutoff: 64.30, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🦠" },
    { school: "SLS", short: "PLB", name: "Plant Biology", cutoff: 50.30, requiredSubjects: ["English", "Biology", "Chemistry", "Physics"], emoji: "🦠" },
    { school: "SLS", short: "ANB", name: "Animal and Environmental Biology", cutoff: 58.43, requiredSubjects: ["English", "Biology", "Chemistry", "Physics"], emoji: "🧬" },
    
    // School of Physical Sciences (SPS) 🔭
    { school: "SPS", short: "CHM", name: "Chemistry", cutoff: 55.30, requiredSubjects: ["English", "Chemistry", "two of Physics/Biology/Mathematics"], emoji: "⚗️" },
    { school: "SPS", short: "EDT", name: "Education Technology", cutoff: 48.72, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "👨‍🏫" },
    { school: "SPS", short: "LIS", name: "Library and Information Science", cutoff: 48.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "📚" },
    { school: "SPS", short: "MTS", name: "Mathematics", cutoff: 59.64, requiredSubjects: ["English", "Mathematics", "any two of Physics/Chemistry/Economics/Biology"], emoji: "🧮" },
    { school: "SPS", short: "PHY", name: "Physics Electronics", cutoff: 50.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "🔌" },
    { school: "SPS", short: "PHE", name: "Physics Energy", cutoff: 50.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "⚡" },
    { school: "SPS", short: "STA", name: "Statistics", cutoff: 50.00, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry/Economics"], emoji: "📊" }
];

// School full names mapping
const schoolFullNames = {
    "SAAT": "School of Agriculture and Agricultural Technology",
    "SBMS": "School of Basic Medical Science",
    "SBCS": "School of Basic Clinical Science",
    "SCS": "School of Clinical Science",
    "SOC": "School of Computing",
    "SIMME": "School of Infrastructure, Minerals and Manufacturing Engineering",
    "SESE": "School of Electrical Systems Engineering",
    "SEMS": "School of Earth and Mineral Science",
    "SET": "School of Environmental Technology",
    "SLIT": "School of Logistics and Innovation Technology",
    "SLS": "School of Life Sciences",
    "SPS": "School of Physical Sciences"
};

document.addEventListener('DOMContentLoaded', function() {
    initializeCoursesPage();
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
    
    if (addUtmeSubjectBtn) {
        addUtmeSubjectBtn.addEventListener('click', addUtmeSubject);
    }
    
    if (checkEligibilityBtn) {
        checkEligibilityBtn.addEventListener('click', checkEligibility);
    }
    
    if (clearFormBtn) {
        clearFormBtn.addEventListener('click', clearForm);
    }
    
    displayAllCourses();
    loadSavedData();
}

function addUtmeSubject() {
    const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
    if (!utmeSubjectsContainer) return;
    
    const subjectCount = utmeSubjectsContainer.children.length;
    
    if (subjectCount >= 4) return;
    
    const subjectGroup = document.createElement('div');
    subjectGroup.className = 'subject-input-group';
    
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
    
    const utmeSubjectGroups = document.querySelectorAll('.utme-subjects .subject-input-group');
    const utmeSubjects = [];
    
    utmeSubjectGroups.forEach(group => {
        const subjectSelect = group.querySelector('.utme-subject-select');
        if (subjectSelect.value && !utmeSubjects.includes(subjectSelect.value)) {
            utmeSubjects.push(subjectSelect.value);
        }
    });
    
    if (utmeSubjects.length !== 4) {
        showNotification('Please select exactly 4 unique UTME subjects', 'warning');
        return;
    }
    
    const allCoursesWithEligibility = calculateAllCoursesEligibility(aggregateScore, utmeSubjects);
    
    displayEligibleCourses(allCoursesWithEligibility);
    displayAllCoursesWithEligibility(allCoursesWithEligibility);
    
    const eligibleCount = allCoursesWithEligibility.filter(course => course.isEligible).length;
    if (eligibleCount > 0) {
        showNotification(`Found ${eligibleCount} eligible courses out of ${allCoursesWithEligibility.length}`, 'success');
    } else {
        showNotification('No eligible courses found. Try adjusting your score or subjects.', 'info');
    }
    
    document.getElementById('eligible-courses').scrollIntoView({ behavior: 'smooth', block: 'start' });
    saveData();
}

function calculateAllCoursesEligibility(score, userSubjects) {
    return coursesData.map(course => {
        const subjectEligible = matchesSubjects(userSubjects, course);
        const scoreDifference = (score - course.cutoff).toFixed(2);
        const isEligible = parseFloat(scoreDifference) >= 0 && subjectEligible;
        const eligibilityPercentage = Math.max(0, (score - course.cutoff) / course.cutoff * 100).toFixed(2);
        
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
        if (requiredPattern.includes('/')) {
            const options = requiredPattern.split('/').map(opt => opt.trim());
            for (const option of options) {
                if (normalizedUserSubjects.includes(option)) {
                    matchCount++;
                    break;
                }
            }
        } else if (normalizedUserSubjects.includes(requiredPattern.trim())) {
            matchCount++;
        }
    }
    
    return matchCount === requiredSubjects.length;
}

function displayEligibleCourses(courses) {
    const eligibleCoursesSection = document.getElementById('eligible-courses');
    const eligibleCoursesContainer = document.getElementById('eligible-courses-list');
    
    if (!eligibleCoursesSection || !eligibleCoursesContainer) return;
    
    const eligibleCourses = courses.filter(course => course.isEligible);
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
    
    const coursesBySchool = {};
    eligibleCourses.forEach(course => {
        const schoolFullName = schoolFullNames[course.school] || course.school;
        if (!coursesBySchool[schoolFullName]) {
            coursesBySchool[schoolFullName] = [];
        }
        coursesBySchool[schoolFullName].push(course);
    });
    
    for (const school in coursesBySchool) {
        const schoolCourses = coursesBySchool[school];
        
        const schoolHeader = document.createElement('div');
        schoolHeader.className = 'school-section';
        schoolHeader.innerHTML = `<h3>${school} <small>(${schoolCourses.length} courses)</small></h3>`;
        eligibleCoursesContainer.appendChild(schoolHeader);
        
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'course-list';
        
        schoolCourses.forEach(course => {
            const eligibilityBadge = getEligibilityBadge(course);
            
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
            courseCard.className = 'course-card eligible';
            courseCard.setAttribute('data-emoji', course.emoji);
            courseCard.setAttribute('data-course-short', course.short);
            
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

function displayAllCoursesWithEligibility(courses) {
    const allCoursesContainer = document.getElementById('all-courses');
    if (!allCoursesContainer) return;
    
    allCoursesContainer.innerHTML = '';
    
    const coursesBySchool = {};
    courses.forEach(course => {
        const schoolFullName = schoolFullNames[course.school] || course.school;
        if (!coursesBySchool[schoolFullName]) {
            coursesBySchool[schoolFullName] = [];
        }
        coursesBySchool[schoolFullName].push(course);
    });
    
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
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterCourses(filter.id);
        });
        
        filterSection.appendChild(filterBtn);
    });
    
    allCoursesContainer.appendChild(filterSection);
    
    for (const school in coursesBySchool) {
        const schoolSection = document.createElement('div');
        schoolSection.className = 'school-section';
        schoolSection.setAttribute('data-school', school);
        schoolSection.innerHTML = `<h3>${school}</h3>`;
        
        const schoolCourses = coursesBySchool[school];
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'course-list';
        
        schoolCourses.forEach(course => {
            const eligibilityBadge = getEligibilityBadge(course);
            const isEligible = course.isEligible;
            
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
    
    const schoolSections = document.querySelectorAll('#all-courses .school-section');
    schoolSections.forEach(section => {
        const visibleCourses = section.querySelectorAll('.course-card[style*="block"], .course-card:not([style*="none"])');
        section.style.display = visibleCourses.length === 0 ? 'none' : 'block';
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
    
    const modal = document.getElementById('course-detail-modal');
    if (!modal) return;
    
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
    
    modal.style.display = 'flex';
}

function clearForm() {
    document.getElementById('aggregate-score').value = '';
    
    const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
    utmeSubjectsContainer.innerHTML = '';
    
    for (let i = 0; i < 4; i++) {
        addUtmeSubject();
    }
    
    document.getElementById('eligible-courses').style.display = 'none';
    
    showNotification('Form cleared successfully', 'info');
    saveData();
}

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
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
    if (!savedData) return;
    
    try {
        const data = JSON.parse(savedData);
        
        if (data.score) {
            document.getElementById('aggregate-score').value = data.score;
        }
        
        if (data.subjects && data.subjects.length > 0) {
            const utmeSubjectsContainer = document.getElementById('utme-subjects-container');
            utmeSubjectsContainer.innerHTML = '';
            
            data.subjects.forEach((subject, index) => {
                if (subject) {
                    addUtmeSubject();
                    const select = document.querySelectorAll('.utme-subject-select')[index];
                    if (select) select.value = subject;
                }
            });
            
            while (utmeSubjectsContainer.children.length < 4) {
                addUtmeSubject();
            }
        }
    } catch (e) {
        console.error('Error loading saved data:', e);
    }
}

function displayAllCourses() {
    const allCourses = calculateAllCoursesEligibility(0, []);
    displayAllCoursesWithEligibility(allCourses);
}