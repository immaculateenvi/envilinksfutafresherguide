//Course data with emojis and subject requirements
const coursesData = [
    // School of Agriculture and Agricultural Technology (SAAT) 🌾
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Agricultural Extension And Communication Technology (AEC)", cutoff: 47.81, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Mathematics/Physics"], emoji: "🌾" },
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Agricultural Resources Economics (ARE)", cutoff: 47.50, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Mathematics"], emoji: "📈" },
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Animal and Production Health (APH)", cutoff: 55.52, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Physics/Mathematics"], emoji: "🐄" },
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Crop Soil and Pest Management (CSP)", cutoff: 48.2, requiredSubjects: ["English", "Chemistry", "Biology/Agriculture", "Physics/Mathematics"], emoji: "🌱" },
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Ecotourism and Wildlife Management (EWM)", cutoff: 47.70, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🐘" },
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Fisheries and Aquaculture Technology (FAT)", cutoff: 47.50, requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "any other Science"], emoji: "🐟" },
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Food Science And Technology (FST)", cutoff: 58.12, requiredSubjects: ["English", "Chemistry", "Mathematics/Physics", "Agricultural Science"], emoji: "🍎" },
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Forestry and Wood Technology (FWT)", cutoff: 47.5, requiredSubjects: ["English", "Chemistry", "Biology/Agriculture", "Physics/Mathematics"], emoji: "🌲" },
    { school: "School of Agriculture and Agricultural Technology (SAAT)", name: "Nutrition and Dietetics (NTD)", cutoff: 55.70, requiredSubjects: ["English", "Chemistry", "Biology", "Physics"], emoji: "🥗" },
    
    // College of Health and Health Sciences 🏥
    { school: "School of Basic Medical Science (SBMS)", name: "Anatomy (ANY)", cutoff: 60.40, requiredSubjects: ["English", "Mathematics", "Biology", "Chemistry/Physics"], emoji: "🦴" },
    { school: "School of Basic Medical Science (SBMS)", name: "Physiology (PHS)", cutoff: 57.26, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "❤️" },
    { school: "School of Basic Medical Science (SBMS)", name: "Nursing Science (NSC)", cutoff: 75, requiredSubjects: ["English", "Physics", "Biology", "Chemistry"], emoji: "👩‍⚕️" },
    { school: "School of Basic Medical Science (SBMS)", name: "Public Health (PUH)", cutoff: 65, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "🏥" },
    { school: "School of Basic Clinical Science (SBCS)", name: "Biomedical Technology (BIM)", cutoff: 61.66, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "🔬" },
    { school: "School of Basic Clinical Science (SBCS)", name: "Medical Laboratory Science (MLS)", cutoff: 67.28, requiredSubjects: ["English", "Physics", "Chemistry", "Biology"], emoji: "🧪" },
    { school: "School of Clinical Science (SCS)", name: "Medicine and Surgery (MBBS)", cutoff: 78.25, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "⚕️" },
    
    // School of Computing (SOC) 💻
    { school: "School of Computing (SOC)", name: "Computer Science (CSC)", cutoff: 69.12, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "💻" },
    { school: "School of Computing (SOC)", name: "Cyber Security (CYS)", cutoff: 63.75, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🔒" },
    { school: "School of Computing (SOC)", name: "Information System (IFS)", cutoff: 63.11, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📊" },
    { school: "School of Computing (SOC)", name: "Information Technology (IFT)", cutoff: 64.23, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🖥️" },
    { school: "School of Computing (SOC)", name: "Software Engineering (SEN)", cutoff: 70.38, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "👨‍💻" },
    { school: "School of Computing (SOC)", name: "Data Science (DTS)", cutoff: 65.38, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📈" },
    
    // School of Infrastructure,Minerals and Manufacturing Engineering (SIMME) 🏗️
    { school: "School of Infrastructure,Minerals and Manufacturing Engineering (SIMME)", name: "Agricultural Engineering (AGE)", cutoff: 56.21, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🚜" },
    { school: "School of Infrastructure,Minerals and Manufacturing Engineering (SIMME)", name: "Chemical Engineering (CEE)", cutoff: 65.21, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚗️" },
    { school: "School of Infrastructure,Minerals and Manufacturing Engineering (SIMME)", name: "Civil Engineering (CVE)", cutoff: 72.66, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🏗️" },
    { school: "School of Infrastructure,Minerals and Manufacturing Engineering (SIMME)", name: "Industrial and Production Engineering (IPE)", cutoff: 53.53, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🏭" },
    { school: "School of Infrastructure,Minerals and Manufacturing Engineering (SIMME)", name: "Mechanical Engineering (MEE)", cutoff: 73.75, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚙️" },
    { school: "School of Infrastructure,Minerals and Manufacturing Engineering (SIMME)", name: "Mechatronics Engineering (MCE)", cutoff: 71.30, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🤖" },
    { school: "School of Infrastructure,Minerals and Manufacturing Engineering (SIMME)", name: "Mining Engineering (MNE)", cutoff: 55.20, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⛏️" },
    { school: "School of Infrastructure,Minerals and Manufacturing Engineering (SIMME)", name: "Metallurgical and Material Engineering (MME)", cutoff: 55.30, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🔥" },
    
    // School of Electrical System Engineering (SESE) ⚡
    { school: "School of Electrical System Engineering (SESE)", name: "Biomedical Engineering", cutoff: 63.40, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "🫀" },
    { school: "School of Electrical System Engineering (SESE)", name: "Computer Engineering", cutoff: 69.62, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "💾" },
    { school: "School of Electrical System Engineering (SESE)", name: "Electrical - Electronics Engineering (EEE)", cutoff: 74.37, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "⚡" },
    { school: "School of Electrical System Engineering (SESE)", name: "Information and Communication Engineering (ICE)", cutoff: 57.60, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], emoji: "📡" },
    
    // School of Earth and Mineral Science (SEMS) 🌍
    { school: "School of Earth and Mineral Science (SEMS)", name: "Applied Geology (AGY)", cutoff: 57.30, requiredSubjects: ["English", "Chemistry", "Physics", "Mathematics/Geography"], emoji: "🪨" },
    { school: "School of Earth and Mineral Science (SEMS)", name: "Applied Geophysics (AGP)", cutoff: 56.66, requiredSubjects: ["English", "Chemistry", "Physics", "Mathematics/Geography"], emoji: "🧲" },
    { school: "School of Earth and Mineral Science (SEMS)", name: "Marine Science And Technology (MST)", cutoff: 51.44, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🌊" },
    { school: "School of Earth and Mineral Science (SEMS)", name: "Metrology And Climate Science (MCS)", cutoff: 51.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "🌡️" },
    { school: "School of Earth and Mineral Science (SEMS)", name: "Remote Sensing And Geoinformatics (RSG)", cutoff: 51.10, requiredSubjects: ["English", "Geography", "Mathematics", "Physics/Chemistry/Biology/Economics"], emoji: "🛰️" },
    
    // School of Environmental Technology (SET) 🏛️
    { school: "School of Environmental Technology (SET)", name: "Architecture (ARC)", cutoff: 72.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏛️" },
    { school: "School of Environmental Technology (SET)", name: "Building Technology (BDG)", cutoff: 57.20, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏢" },
    { school: "School of Environmental Technology (SET)", name: "Estate Management (ESM)", cutoff: 48.30, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🏠" },
    { school: "School of Environmental Technology (SET)", name: "Industrial Design (IDD)", cutoff: 53.25, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "✏️" },
    { school: "School of Environmental Technology (SET)", name: "Quantity Survey (QSV)", cutoff: 57.60, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "📐" },
    { school: "School of Environmental Technology (SET)", name: "Survey And Geo-informatics (SVG)", cutoff: 64.25, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "📍" },
    { school: "School of Environmental Technology (SET)", name: "Textile Design Technology (TDT)", cutoff: 52.87, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🧵" },
    { school: "School of Environmental Technology (SET)", name: "Urban And Regional Planning (URP)", cutoff: 52.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🗺️" },
    { school: "School of Environmental Technology (SET)", name: "Environmental Management (ENM)", cutoff: 50.00, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], emoji: "🌳" },
    
    // School of Logistics and Innovation Technology (SLIT) 🚚
    { school: "School of Logistics and Innovation Technology (SLIT)", name: "Business Information Technology (BIT)", cutoff: 50.00, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "💼" },
    { school: "School of Logistics and Innovation Technology (SLIT)", name: "Business Management Technology (BMT)", cutoff: 50.00, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "📈" },
    { school: "School of Logistics and Innovation Technology (SLIT)", name: "Entrepreneurship Management Technology (ENT)", cutoff: 51.66, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🚀" },
    { school: "School of Logistics and Innovation Technology (SLIT)", name: "Logistics And Transport Technology (LTT)", cutoff: 55.60, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🚚" },
    { school: "School of Logistics and Innovation Technology (SLIT)", name: "Project Management Technology (PMT)", cutoff: 56.40, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "📅" },
    { school: "School of Logistics and Innovation Technology (SLIT)", name: "Security & Investment Management Technology (SIMT)", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "🛡️" },
    { school: "School of Logistics and Innovation Technology (SLIT)", name: "Financial Technology (FIT)", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "💰" },
    { school: "School of Logistics and Innovation Technology (SLIT)", name: "Procurement Management Technology (PMT)", cutoff: 49.50, requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], emoji: "📦" },
    
    // School of Life Sciences (SLS) 🧬
    { school: "School of Life Sciences (SLS)", name: "Biochemistry (BCH)", cutoff: 64.33, requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], emoji: "🧪" },
    { school: "School of Life Sciences (SLS)", name: "Biology (BIO)", cutoff: 52.62, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🔬" },
    { school: "School of Life Sciences (SLS)", name: "Biotechnology (BTH)", cutoff: 58.43, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🧬" },
    { school: "School of Life Sciences (SLS)", name: "Microbiology (MCB)", cutoff: 64.30, requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], emoji: "🦠" },
    
    // School of Physical Sciences (SPS) 🔭
    { school: "School of Physical Sciences (SPS)", name: "Chemistry (CHM)", cutoff: 55.30, requiredSubjects: ["English", "Chemistry", "two of Physics/Biology/Mathematics"], emoji: "⚗️" },
    { school: "School of Physical Sciences (SPS)", name: "Education Technology (EDT)", cutoff: 48.72, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "👨‍🏫" },
    { school: "School of Physical Sciences (SPS)", name: "Library and Information Science (LIS)", cutoff: 48.90, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "📚" },
    { school: "School of Physical Sciences (SPS)", name: "Mathematics (MTS)", cutoff: 59.64, requiredSubjects: ["English", "Mathematics", "any two of Physics/Chemistry/Economics/Biology"], emoji: "🧮" },
    { school: "School of Physical Sciences (SPS)", name: "Physics Electronics (PHY)", cutoff: 50.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "🔌" },
    { school: "School of Physical Sciences (SPS)", name: "Physics Energy (PHY)", cutoff: 50.70, requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], emoji: "⚡" },
    { school: "School of Physical Sciences (SPS)", name: "Statistics (STA)", cutoff: 50.00, requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry/Economics"], emoji: "📊" }
];
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
    
    // Add UTME subject button event
    addUtmeSubjectBtn.addEventListener('click', addUtmeSubject);
    
    // Check eligibility button event
    checkEligibilityBtn.addEventListener('click', checkEligibility);
    
    // Clear form button event
    clearFormBtn.addEventListener('click', clearForm);
    
    // Display all courses on page load
    displayAllCourses();
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
    
    // Find eligible courses
    const eligibleCourses = coursesData.filter(course => {
        // Check if score meets cutoff
        if (aggregateScore < course.cutoff) return false;
        
        // Check if user has required subjects
        return matchesSubjects(utmeSubjects, course);
    });
    
    // Display eligible courses
    displayEligibleCourses(eligibleCourses, aggregateScore, utmeSubjects);
    
    // Update eligible count
    document.getElementById('eligible-count').textContent = eligibleCourses.length;
    
    // Update "Eligible Only" tab
    updateEligibleOnlyTab(eligibleCourses, aggregateScore, utmeSubjects);
    
    // Show notification
    if (eligibleCourses.length > 0) {
        showNotification(`Found ${eligibleCourses.length} eligible courses`, 'success');
    } else {
        showNotification('No courses found for your criteria. Try adjusting your score or subjects.', 'info');
    }
    
    // Scroll to results
    document.getElementById('eligible-courses').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function matchesSubjects(userSubjects, course) {
    const requiredSubjects = course.requiredSubjects;
    
    if (!requiredSubjects || requiredSubjects.length === 0) {
        return true;
    }
    
    const normalizedUserSubjects = [...new Set(userSubjects.map(s => s.trim()))];
    
    let matchCount = 0;
    let flexibleMatches = 0;
    
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
        else if (course.flexible) {
            const scienceSubjects = ["Mathematics", "Physics", "Chemistry", "Biology", "Geography"];
            if (scienceSubjects.includes(requiredPattern) && normalizedUserSubjects.includes(requiredPattern)) {
                flexibleMatches++;
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
        return flexibleMatches >= 3;
    }
    
    if (course.minMatches) {
        return matchCount >= course.minMatches;
    }
    
    return matchCount === requiredSubjects.length;
}

function displayEligibleCourses(courses, score, userSubjects) {
    const courseListContainer = document.getElementById('course-list');
    const noCoursesElement = document.getElementById('no-courses');
    const eligibleCoursesSection = document.getElementById('eligible-courses');
    
    // Clear existing courses
    courseListContainer.innerHTML = '';
    
    if (courses.length === 0) {
        noCoursesElement.style.display = 'block';
        courseListContainer.innerHTML = '';
        eligibleCoursesSection.style.display = 'block';
        return;
    }
    
    noCoursesElement.style.display = 'none';
    eligibleCoursesSection.style.display = 'block';
    
    // Group courses by school
    const coursesBySchool = {};
    courses.forEach(course => {
        if (!coursesBySchool[course.school]) {
            coursesBySchool[course.school] = [];
        }
        coursesBySchool[course.school].push(course);
    });
    
    // Display courses by school
    for (const school in coursesBySchool) {
        const schoolCourses = coursesBySchool[school];
        
        // Create school header
        const schoolHeader = document.createElement('div');
        schoolHeader.className = 'school-section';
        schoolHeader.innerHTML = `<h3>${school}</h3>`;
        courseListContainer.appendChild(schoolHeader);
        
        // Create courses container
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'course-list';
        
        schoolCourses.forEach(course => {
            const scoreDifference = (score - course.cutoff).toFixed(2);
            const scoreAbove = parseFloat(scoreDifference) > 0;
            
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card eligible';
            courseCard.setAttribute('data-emoji', course.emoji);
            
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
                <h4>${course.emoji} ${course.name}</h4>
                <div class="course-meta">
                    <div>
                        <div class="cutoff">Cut-off: ${course.cutoff}</div>
                        <div class="score-difference ${scoreAbove ? 'positive' : 'negative'}">
                            ${scoreAbove ? '+' : ''}${scoreDifference} points ${scoreAbove ? 'above' : 'below'}
                        </div>
                    </div>
                    ${subjectsDisplay ? 
                        `<div class="required-subjects">
                            <small>Required: ${subjectsDisplay}</small>
                        </div>` : ''
                    }
                </div>
                <div class="subject-match-info">
                    <small>Your subjects: ${userSubjects.join(', ')}</small>
                </div>
            `;
            
            coursesContainer.appendChild(courseCard);
        });
        
        schoolHeader.appendChild(coursesContainer);
    }
}

function displayAllCourses() {
    const allCoursesContainer = document.getElementById('all-courses');
    
    // Group courses by school
    const coursesBySchool = {};
    coursesData.forEach(course => {
        if (!coursesBySchool[course.school]) {
            coursesBySchool[course.school] = [];
        }
        coursesBySchool[course.school].push(course);
    });
    
    // Clear container
    allCoursesContainer.innerHTML = '';
    
    // Display courses by school
    for (const school in coursesBySchool) {
        const schoolSection = document.createElement('div');
        schoolSection.className = 'school-section';
        schoolSection.innerHTML = `<h3>${school}</h3>`;
        
        const schoolCourses = coursesBySchool[school];
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'course-list';
        
        schoolCourses.forEach(course => {
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
            courseCard.className = 'course-card';
            courseCard.setAttribute('data-emoji', course.emoji);
            courseCard.innerHTML = `
                <h4>${course.emoji} ${course.name}</h4>
                <div class="course-meta">
                    <div class="cutoff">Cut-off: ${course.cutoff}</div>
                    ${subjectsDisplay ? 
                        `<div class="required-subjects">
                            <small>Required: ${subjectsDisplay}</small>
                        </div>` : ''
                    }
                </div>
            `;
            coursesContainer.appendChild(courseCard);
        });
        
        schoolSection.appendChild(coursesContainer);
        allCoursesContainer.appendChild(schoolSection);
    }
}

function updateEligibleOnlyTab(eligibleCourses, score, userSubjects) {
    const eligibleOnlyContainer = document.getElementById('eligible-only');
    
    // Clear container
    eligibleOnlyContainer.innerHTML = '';
    
    if (eligibleCourses.length === 0) {
        eligibleOnlyContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h4>No eligible courses found</h4>
                <p>Try adjusting your score or subject combination</p>
            </div>
        `;
        return;
    }
    
    // Group courses by school
    const coursesBySchool = {};
    eligibleCourses.forEach(course => {
        if (!coursesBySchool[course.school]) {
            coursesBySchool[course.school] = [];
        }
        coursesBySchool[course.school].push(course);
    });
    
    // Display courses by school
    for (const school in coursesBySchool) {
        const schoolSection = document.createElement('div');
        schoolSection.className = 'school-section';
        schoolSection.innerHTML = `<h3>${school}</h3>`;
        
        const schoolCourses = coursesBySchool[school];
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'course-list';
        
        schoolCourses.forEach(course => {
            const scoreDifference = (score - course.cutoff).toFixed(2);
            const scoreAbove = parseFloat(scoreDifference) > 0;
            
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
            courseCard.className = 'course-card eligible';
            courseCard.setAttribute('data-emoji', course.emoji);
            courseCard.innerHTML = `
                <h4>${course.emoji} ${course.name}</h4>
                <div class="course-meta">
                    <div class="cutoff">Cut-off: ${course.cutoff}</div>
                    <div class="score-difference ${scoreAbove ? 'positive' : 'negative'}">
                        ${scoreAbove ? '+' : ''}${scoreDifference} ${scoreAbove ? 'above' : 'below'}
                    </div>
                    ${subjectsDisplay ? 
                        `<div class="required-subjects">
                            <small>Required: ${subjectsDisplay}</small>
                        </div>` : ''
                    }
                </div>
            `;
            coursesContainer.appendChild(courseCard);
        });
        
        schoolSection.appendChild(coursesContainer);
        eligibleOnlyContainer.appendChild(schoolSection);
    }
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