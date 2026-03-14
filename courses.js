// ========== COURSES.JS - SIMPLIFIED WITHOUT FILTER BUTTONS ==========

// Course data with emojis, subject requirements, short codes, and descriptions
const coursesData = [
    // School of Agriculture and Agricultural Technology (SAAT) 🌾
    { 
        school: "SAAT", 
        short: "AEC", 
        name: "Agricultural Extension And Communication Technology", 
        cutoff: 47.81, 
        requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Mathematics/Physics"], 
        emoji: "🌾",
        description: "This course focuses on teaching farmers modern agricultural techniques, communication strategies for agricultural information dissemination, and technology transfer methods. Students learn how to bridge the gap between agricultural research and rural farmers, improving food security and rural development.",
        careerPaths: "Extension Officer, Agricultural Consultant, Rural Development Specialist, Communication Officer in agricultural agencies"
    },
    { 
        school: "SAAT", 
        short: "ARE", 
        name: "Agricultural Resources Economics", 
        cutoff: 47.50, 
        requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Mathematics"], 
        emoji: "📈",
        description: "ARE combines economics principles with agricultural production. Students study resource allocation, farm management, agricultural marketing, and policy analysis. The course prepares students to analyze agricultural markets, advise on farm business decisions, and develop agricultural policies.",
        careerPaths: "Agricultural Economist, Farm Manager, Policy Analyst, Market Research Analyst, Agribusiness Consultant"
    },
    { 
        school: "SAAT", 
        short: "APH", 
        name: "Animal and Production Health", 
        cutoff: 55.52, 
        requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "Physics/Mathematics"], 
        emoji: "🐄",
        description: "This course covers animal nutrition, breeding, health management, and disease control. Students learn about livestock production systems, animal welfare, and modern techniques for improving animal productivity while ensuring food safety and public health.",
        careerPaths: "Livestock Production Manager, Animal Health Officer, Veterinary Assistant, Research Scientist, Feed Mill Manager"
    },
    { 
        school: "SAAT", 
        short: "CSP", 
        name: "Crop Soil and Pest Management", 
        cutoff: 48.2, 
        requiredSubjects: ["English", "Chemistry", "Biology/Agriculture", "Physics/Mathematics"], 
        emoji: "🌱",
        description: "CSP integrates crop science, soil science, and pest management. Students study plant physiology, soil fertility, crop production techniques, and integrated pest management strategies to optimize agricultural productivity while minimizing environmental impact.",
        careerPaths: "Crop Consultant, Soil Scientist, Pest Management Specialist, Agricultural Officer, Research Scientist"
    },
    { 
        school: "SAAT", 
        short: "EWM", 
        name: "Ecotourism and Wildlife Management", 
        cutoff: 47.70, 
        requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], 
        emoji: "🐘",
        description: "EWM focuses on conservation, wildlife ecology, and sustainable tourism development. Students learn about biodiversity conservation, wildlife management techniques, park management, and how to develop ecotourism ventures that benefit local communities and protect natural resources.",
        careerPaths: "Park Manager, Wildlife Officer, Ecotourism Coordinator, Conservation Scientist, Environmental Consultant"
    },
    { 
        school: "SAAT", 
        short: "FAT", 
        name: "Fisheries and Aquaculture Technology", 
        cutoff: 47.50, 
        requiredSubjects: ["English", "Chemistry", "Biology/Agricultural Science", "any other Science"], 
        emoji: "🐟",
        description: "This course covers fish farming, fisheries management, and aquatic resource conservation. Students learn about fish breeding, nutrition, disease control, pond construction, and sustainable harvesting of aquatic resources to meet growing demand for fish protein.",
        careerPaths: "Aquaculture Manager, Fisheries Officer, Fish Farm Owner, Research Scientist, Hatchery Manager"
    },
    { 
        school: "SAAT", 
        short: "FWT", 
        name: "Forestry and Wood Technology", 
        cutoff: 47.5, 
        requiredSubjects: ["English", "Chemistry", "Biology/Agriculture", "Physics/Mathematics"], 
        emoji: "🌲",
        description: "FWT combines forest management with wood science and technology. Students study forest ecology, timber harvesting, wood processing, furniture production, and sustainable forest management practices for conservation and commercial use.",
        careerPaths: "Forest Officer, Wood Technologist, Timber Industry Manager, Conservationist, Furniture Production Manager"
    },
    { 
        school: "SAAT", 
        short: "NTD", 
        name: "Nutrition and Dietetics", 
        cutoff: 55.70, 
        requiredSubjects: ["English", "Chemistry", "Biology", "Physics"], 
        emoji: "🥗",
        description: "This course focuses on the science of nutrition, diet planning, and therapeutic diets. Students learn about human nutrition, food science, community nutrition, and clinical dietetics to promote health and manage diseases through proper nutrition.",
        careerPaths: "Clinical Dietitian, Nutritionist, Food Service Director, Public Health Nutritionist, Wellness Consultant"
    },
    { 
        school: "SAAT", 
        short: "FST", 
        name: "Food Science and Technology", 
        cutoff: 50.70, 
        requiredSubjects: ["English", "Chemistry", "Biology", "Physics"], 
        emoji: "🥗",
        description: "FST applies science and engineering principles to food processing, preservation, and safety. Students learn about food chemistry, microbiology, processing technologies, quality control, and product development to ensure safe, nutritious, and appealing food products.",
        careerPaths: "Food Technologist, Quality Control Manager, Product Developer, Food Safety Officer, Research Scientist"
    },
    
    // College of Health and Health Sciences 🏥
    { 
        school: "SBMS", 
        short: "ANY", 
        name: "Human Anatomy", 
        cutoff: 60.40, 
        requiredSubjects: ["English", "Mathematics", "Biology", "Chemistry/Physics"], 
        emoji: "🦴",
        description: "Human Anatomy is the study of the structure of the human body. Students explore gross anatomy, microscopic anatomy, neuroanatomy, and embryology. The course provides foundational knowledge for careers in medicine, surgery, and health sciences.",
        careerPaths: "Anatomy Lecturer, Medical Illustrator, Research Scientist, Forensic Anthropologist, Pharmaceutical Sales"
    },
    { 
        school: "SBMS", 
        short: "PHS", 
        name: "Physiology", 
        cutoff: 57.26, 
        requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], 
        emoji: "❤️",
        description: "Physiology examines how the human body functions at cellular, tissue, and organ system levels. Students study cardiovascular, respiratory, renal, endocrine, and nervous system functions, understanding how the body maintains homeostasis and responds to challenges.",
        careerPaths: "Physiologist, Research Scientist, Clinical Research Associate, Pharmaceutical Researcher, Academic Lecturer"
    },
    { 
        school: "SBMS", 
        short: "NSC", 
        name: "Nursing Science", 
        cutoff: 75, 
        requiredSubjects: ["English", "Physics", "Biology", "Chemistry"], 
        emoji: "👩‍⚕️",
        description: "Nursing Science prepares students for professional nursing practice. The curriculum covers anatomy, physiology, pharmacology, patient care, community health, and clinical skills. Students gain hands-on experience in hospitals and community settings.",
        careerPaths: "Registered Nurse, Nurse Educator, Nurse Administrator, Clinical Nurse Specialist, Public Health Nurse"
    },
    { 
        school: "SBMS", 
        short: "PUH", 
        name: "Public Health", 
        cutoff: 65, 
        requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], 
        emoji: "🏥",
        description: "Public Health focuses on improving population health through prevention, education, and policy. Students study epidemiology, biostatistics, environmental health, health promotion, and health policy to address community health challenges.",
        careerPaths: "Public Health Officer, Epidemiologist, Health Educator, Policy Analyst, Community Health Coordinator"
    },
    { 
        school: "SBCS", 
        short: "MLS", 
        name: "Medical Laboratory Science", 
        cutoff: 67.28, 
        requiredSubjects: ["English", "Physics", "Chemistry", "Biology"], 
        emoji: "🧪",
        description: "Medical Laboratory Science trains students to perform diagnostic tests on patient samples. The course covers clinical chemistry, hematology, microbiology, immunology, and blood banking. Students learn to generate accurate lab results crucial for disease diagnosis.",
        careerPaths: "Medical Laboratory Scientist, Lab Manager, Research Assistant, Quality Control Officer, Forensic Analyst"
    },
    { 
        school: "SCS", 
        short: "MBBS", 
        name: "Medicine and Surgery", 
        cutoff: 78.25, 
        requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], 
        emoji: "⚕️",
        description: "MBBS is a professional degree that trains students to become medical doctors. The comprehensive program covers all aspects of medicine, including anatomy, physiology, pharmacology, pathology, clinical medicine, and surgery. Students complete extensive clinical rotations.",
        careerPaths: "Medical Doctor, Surgeon, Specialist Physician, Medical Researcher, Public Health Physician, Hospital Administrator"
    },
    
    // School of Computing (SOC) 💻
    { 
        school: "SOC", 
        short: "CSC", 
        name: "Computer Science", 
        cutoff: 69.12, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "💻",
        description: "Computer Science covers the theory and practice of computing. Students learn programming, algorithms, data structures, software development, artificial intelligence, and computer systems. The course prepares students for careers in technology and software development.",
        careerPaths: "Software Developer, Systems Analyst, AI Engineer, Database Administrator, IT Consultant, Web Developer"
    },
    { 
        school: "SOC", 
        short: "CYS", 
        name: "Cyber Security", 
        cutoff: 63.75, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "🔒",
        description: "Cyber Security focuses on protecting computer systems, networks, and data from cyber threats. Students learn about network security, cryptography, ethical hacking, digital forensics, and security policies to safeguard digital assets.",
        careerPaths: "Security Analyst, Penetration Tester, Security Consultant, Chief Information Security Officer, Forensic Analyst"
    },
    { 
        school: "SOC", 
        short: "IFS", 
        name: "Information System", 
        cutoff: 63.11, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "📊",
        description: "Information Systems combines business and computing to manage organizational data. Students study database management, system analysis, business processes, and IT project management to design systems that support business operations and decision-making.",
        careerPaths: "Business Analyst, Systems Analyst, IT Project Manager, Database Administrator, ERP Consultant"
    },
    { 
        school: "SOC", 
        short: "IFT", 
        name: "Information Technology", 
        cutoff: 64.23, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "🖥️",
        description: "Information Technology focuses on applying technology to solve practical problems. Students learn networking, web development, database administration, system administration, and IT support to manage technology infrastructure in organizations.",
        careerPaths: "IT Support Specialist, Network Administrator, Web Developer, Systems Administrator, IT Manager"
    },
    { 
        school: "SOC", 
        short: "SEN", 
        name: "Software Engineering", 
        cutoff: 70.38, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "👨‍💻",
        description: "Software Engineering applies engineering principles to software development. Students learn software design, development methodologies, testing, project management, and quality assurance to build reliable, scalable software systems.",
        careerPaths: "Software Engineer, Application Developer, Quality Assurance Engineer, DevOps Engineer, Technical Lead"
    },
    { 
        school: "SOC", 
        short: "DTS", 
        name: "Data Science", 
        cutoff: 65.38, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "📈",
        description: "Data Science combines statistics, programming, and domain expertise to extract insights from data. Students learn machine learning, data visualization, big data technologies, and statistical analysis to solve complex problems using data.",
        careerPaths: "Data Scientist, Data Analyst, Machine Learning Engineer, Business Intelligence Analyst, Research Scientist"
    },
    
    // School of Infrastructure,Minerals and Manufacturing Engineering (SIMME) 🏗️
    { 
        school: "SIMME", 
        short: "AGE", 
        name: "Agricultural Engineering", 
        cutoff: 56.21, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "🚜",
        description: "Agricultural Engineering applies engineering principles to agriculture. Students learn about farm machinery, irrigation systems, post-harvest technology, and agricultural structures to improve agricultural productivity and sustainability.",
        careerPaths: "Agricultural Engineer, Farm Machinery Designer, Irrigation Specialist, Post-harvest Technologist, Project Manager"
    },
    { 
        school: "SIMME", 
        short: "CEE", 
        name: "Chemical Engineering", 
        cutoff: 65.21, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "⚗️",
        description: "Chemical Engineering combines chemistry and engineering to design processes for converting raw materials into valuable products. Students learn about thermodynamics, reaction engineering, separation processes, and process control for industries like petroleum, pharmaceuticals, and food.",
        careerPaths: "Process Engineer, Production Manager, Plant Designer, Quality Control Engineer, Environmental Engineer"
    },
    { 
        school: "SIMME", 
        short: "CVE", 
        name: "Civil Engineering", 
        cutoff: 72.66, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "🏗️",
        description: "Civil Engineering deals with designing, constructing, and maintaining infrastructure. Students study structural analysis, geotechnical engineering, transportation systems, water resources, and construction management for buildings, bridges, roads, and dams.",
        careerPaths: "Structural Engineer, Construction Manager, Transportation Planner, Geotechnical Engineer, Project Consultant"
    },
    { 
        school: "SIMME", 
        short: "IPE", 
        name: "Industrial and Production Engineering", 
        cutoff: 53.53, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "🏭",
        description: "Industrial Engineering optimizes complex systems and processes. Students learn operations research, quality control, supply chain management, ergonomics, and manufacturing systems to improve efficiency and productivity in organizations.",
        careerPaths: "Industrial Engineer, Quality Manager, Operations Manager, Supply Chain Analyst, Process Improvement Specialist"
    },
    { 
        school: "SIMME", 
        short: "MEE", 
        name: "Mechanical Engineering", 
        cutoff: 73.75, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "⚙️",
        description: "Mechanical Engineering covers the design, analysis, and manufacturing of mechanical systems. Students study thermodynamics, fluid mechanics, materials science, machine design, and manufacturing processes for engines, machines, and mechanical devices.",
        careerPaths: "Mechanical Engineer, Design Engineer, Manufacturing Engineer, HVAC Specialist, Automotive Engineer"
    },
    { 
        school: "SIMME", 
        short: "MNE", 
        name: "Mining Engineering", 
        cutoff: 55.20, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "⛏️",
        description: "Mining Engineering focuses on extracting valuable minerals from the earth. Students learn mine design, mineral processing, rock mechanics, ventilation, and safety practices for sustainable and responsible mining operations.",
        careerPaths: "Mining Engineer, Mine Manager, Mineral Processing Engineer, Safety Officer, Exploration Geologist"
    },
    { 
        school: "SIMME", 
        short: "MME", 
        name: "Metallurgical and Material Engineering", 
        cutoff: 55.30, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "🔥",
        description: "Metallurgical Engineering deals with extracting metals from ores and developing new materials. Students study physical metallurgy, extractive metallurgy, materials science, and failure analysis for metals, ceramics, polymers, and composites.",
        careerPaths: "Metallurgical Engineer, Materials Scientist, Quality Control Engineer, Research Scientist, Foundry Manager"
    },
    
    // School of Electrical Systems Engineering (SESE) ⚡
    { 
        school: "SESE", 
        short: "BME", 
        name: "Biomedical Engineering", 
        cutoff: 63.40, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "🫀",
        description: "Biomedical Engineering applies engineering principles to medicine and biology. Students learn about medical imaging, biomaterials, biomechanics, and medical device design to develop technologies that improve healthcare and patient outcomes.",
        careerPaths: "Biomedical Engineer, Medical Device Designer, Clinical Engineer, Research Scientist, Regulatory Affairs Specialist"
    },
    { 
        school: "SESE", 
        short: "CPE", 
        name: "Computer Engineering", 
        cutoff: 69.62, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "💾",
        description: "Computer Engineering combines electrical engineering and computer science. Students study digital systems, microprocessor design, embedded systems, computer architecture, and hardware-software integration for computing devices.",
        careerPaths: "Computer Engineer, Hardware Designer, Embedded Systems Engineer, FPGA Developer, Systems Architect"
    },
    { 
        school: "SESE", 
        short: "EEE", 
        name: "Electrical - Electronics Engineering", 
        cutoff: 74.37, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "⚡",
        description: "Electrical Engineering covers the study and application of electricity, electronics, and electromagnetism. Students learn circuit analysis, power systems, control systems, telecommunications, and electronic device design.",
        careerPaths: "Electrical Engineer, Power Systems Engineer, Electronics Designer, Control Systems Engineer, Telecommunications Engineer"
    },
    { 
        school: "SESE", 
        short: "ICE", 
        name: "Information and Communication Engineering", 
        cutoff: 57.60, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "📡",
        description: "ICE focuses on communication systems and information technology. Students study signal processing, wireless communications, network protocols, and telecommunication systems for transmitting and processing information.",
        careerPaths: "Communications Engineer, Network Engineer, Signal Processing Specialist, RF Engineer, Telecommunications Consultant"
    },
    { 
        school: "SESE", 
        short: "MCE", 
        name: "Mechatronics Engineering", 
        cutoff: 71.30, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"], 
        emoji: "🤖",
        description: "Mechatronics integrates mechanical, electronic, and computer engineering. Students learn robotics, automation, control systems, sensors, and actuators to design intelligent systems and smart machines.",
        careerPaths: "Mechatronics Engineer, Robotics Engineer, Automation Specialist, Control Systems Engineer, Embedded Systems Designer"
    },
    
    // School of Earth and Mineral Science (SEMS) 🌍
    { 
        school: "SEMS", 
        short: "AGY", 
        name: "Applied Geology", 
        cutoff: 57.30, 
        requiredSubjects: ["English", "Chemistry", "Physics", "Mathematics/Geography"], 
        emoji: "🪨",
        description: "Applied Geology studies the Earth's composition, structure, and processes. Students learn mineralogy, petrology, structural geology, and exploration techniques for finding mineral and hydrocarbon resources.",
        careerPaths: "Geologist, Exploration Geologist, Hydrogeologist, Environmental Consultant, Mining Geologist"
    },
    { 
        school: "SEMS", 
        short: "AGP", 
        name: "Applied Geophysics", 
        cutoff: 56.66, 
        requiredSubjects: ["English", "Chemistry", "Physics", "Mathematics/Geography"], 
        emoji: "🧲",
        description: "Applied Geophysics uses physical methods to study the Earth's subsurface. Students learn seismic, magnetic, gravity, and electrical survey techniques for resource exploration and environmental studies.",
        careerPaths: "Geophysicist, Exploration Geophysicist, Seismic Interpreter, Environmental Geophysicist, Petroleum Geophysicist"
    },
    { 
        school: "SEMS", 
        short: "MST", 
        name: "Marine Science And Technology", 
        cutoff: 51.44, 
        requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], 
        emoji: "🌊",
        description: "Marine Science studies oceans and marine ecosystems. Students learn oceanography, marine biology, coastal processes, and marine resource management to understand and protect marine environments.",
        careerPaths: "Marine Biologist, Oceanographer, Coastal Zone Manager, Marine Conservationist, Fisheries Scientist"
    },
    { 
        school: "SEMS", 
        short: "MCS", 
        name: "Metrology And Climate Science", 
        cutoff: 51.70, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], 
        emoji: "🌡️",
        description: "Metrology and Climate Science focuses on weather and climate. Students study atmospheric physics, climate dynamics, weather forecasting, and climate change to understand and predict weather patterns.",
        careerPaths: "Meteorologist, Climatologist, Weather Forecaster, Climate Analyst, Environmental Scientist"
    },
    { 
        school: "SEMS", 
        short: "RSG", 
        name: "Remote Sensing And Geoinformatics", 
        cutoff: 51.10, 
        requiredSubjects: ["English", "Geography", "Mathematics", "Physics/Chemistry/Biology/Economics"], 
        emoji: "🛰️",
        description: "RSG uses satellite and aerial imagery to study the Earth. Students learn GIS, image processing, spatial analysis, and mapping techniques for environmental monitoring and resource management.",
        careerPaths: "GIS Analyst, Remote Sensing Specialist, Cartographer, Spatial Data Scientist, Environmental Consultant"
    },
    
    // School of Environmental Technology (SET) 🏛️
    { 
        school: "SET", 
        short: "ARC", 
        name: "Architecture", 
        cutoff: 72.90, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "🏛️",
        description: "Architecture combines art and science to design buildings and spaces. Students study design theory, building construction, structural systems, environmental control, and urban planning to create functional, sustainable structures.",
        careerPaths: "Architect, Urban Designer, Interior Designer, Construction Project Manager, Sustainable Design Consultant"
    },
    { 
        school: "SET", 
        short: "BDG", 
        name: "Building", 
        cutoff: 57.20, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "🏢",
        description: "Building Technology focuses on construction processes and building systems. Students learn construction methods, building materials, project management, and building services for residential and commercial structures.",
        careerPaths: "Construction Manager, Building Contractor, Site Supervisor, Building Inspector, Project Coordinator"
    },
    { 
        school: "SET", 
        short: "ESM", 
        name: "Estate Management", 
        cutoff: 48.30, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "🏠",
        description: "Estate Management deals with property development, valuation, and management. Students study property law, valuation techniques, facility management, and real estate investment for managing landed properties.",
        careerPaths: "Estate Surveyor, Property Manager, Real Estate Developer, Facility Manager, Valuation Officer"
    },
    { 
        school: "SET", 
        short: "IDD", 
        name: "Industrial Design", 
        cutoff: 53.25, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "✏️",
        description: "Industrial Design focuses on creating functional, appealing products. Students learn design principles, materials, manufacturing processes, and ergonomics to develop consumer and industrial products.",
        careerPaths: "Industrial Designer, Product Designer, Furniture Designer, Packaging Designer, Design Consultant"
    },
    { 
        school: "SET", 
        short: "QSV", 
        name: "Quantity Survey", 
        cutoff: 57.60, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "📐",
        description: "Quantity Surveying manages construction costs and contracts. Students learn cost estimation, contract administration, project management, and construction economics for building projects.",
        careerPaths: "Quantity Surveyor, Cost Consultant, Contract Administrator, Project Manager, Claims Specialist"
    },
    { 
        school: "SET", 
        short: "SVG", 
        name: "Survey And Geo-informatics", 
        cutoff: 64.25, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "📍",
        description: "Surveying measures and maps the Earth's surface. Students learn land surveying, GPS technology, photogrammetry, and GIS for property boundaries, construction layout, and mapping applications.",
        careerPaths: "Land Surveyor, Geomatics Engineer, GIS Specialist, Cartographer, Hydrographic Surveyor"
    },
    { 
        school: "SET", 
        short: "TDT", 
        name: "Textile Design Technology", 
        cutoff: 52.87, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "🧵",
        description: "Textile Design covers fabric design, production, and finishing. Students learn textile materials, weaving, printing, dyeing, and fashion design for creating textiles used in clothing and home furnishings.",
        careerPaths: "Textile Designer, Fabric Technologist, Fashion Designer, Production Manager, Quality Controller"
    },
    { 
        school: "SET", 
        short: "URP", 
        name: "Urban And Regional Planning", 
        cutoff: 52.90, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "🗺️",
        description: "Urban Planning guides community development and land use. Students study planning theory, urban design, transportation planning, environmental planning, and policy for creating sustainable communities.",
        careerPaths: "Urban Planner, Regional Planner, Transportation Planner, Policy Analyst, Community Development Officer"
    },
    { 
        school: "SET", 
        short: "ENM", 
        name: "Environmental Management", 
        cutoff: 50.00, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Geography"], 
        emoji: "🌳",
        description: "Environmental Management addresses environmental challenges and sustainability. Students study environmental science, impact assessment, pollution control, and natural resource management.",
        careerPaths: "Environmental Manager, Sustainability Consultant, EIA Officer, Conservation Officer, Environmental Auditor"
    },
    
    // School of Logistics and Innovation Technology (SLIT) 🚚
    { 
        school: "SLIT", 
        short: "BIT", 
        name: "Business Information Technology", 
        cutoff: 50.00, 
        requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], 
        emoji: "💼",
        description: "BIT combines business management with information technology. Students learn business processes, database systems, e-commerce, and IT project management to support organizational goals.",
        careerPaths: "Business Analyst, IT Consultant, Systems Analyst, E-commerce Manager, Project Manager"
    },
    { 
        school: "SLIT", 
        short: "ENT", 
        name: "Entrepreneurship Management Technology", 
        cutoff: 51.66, 
        requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], 
        emoji: "🚀",
        description: "Entrepreneurship develops skills for starting and managing businesses. Students learn business planning, innovation, venture creation, marketing, and financial management for entrepreneurial success.",
        careerPaths: "Entrepreneur, Business Owner, Business Development Manager, Innovation Consultant, Startup Advisor"
    },
    { 
        school: "SLIT", 
        short: "LTT", 
        name: "Logistics And Transport Technology", 
        cutoff: 55.60, 
        requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], 
        emoji: "🚚",
        description: "Logistics manages the flow of goods and services. Students study supply chain management, transportation systems, warehousing, inventory control, and distribution networks.",
        careerPaths: "Logistics Manager, Supply Chain Analyst, Transportation Coordinator, Warehouse Manager, Procurement Officer"
    },
    { 
        school: "SLIT", 
        short: "PMT", 
        name: "Project Management Technology", 
        cutoff: 56.40, 
        requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], 
        emoji: "📅",
        description: "Project Management focuses on planning and executing projects effectively. Students learn project planning, risk management, resource allocation, and project control techniques.",
        careerPaths: "Project Manager, Program Coordinator, Project Planner, Risk Manager, Operations Manager"
    },
    { 
        school: "SLIT", 
        short: "SIMT", 
        name: "Security & Investment Management Technology", 
        cutoff: 49.50, 
        requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], 
        emoji: "🛡️",
        description: "SIMT combines security management with investment principles. Students learn security operations, risk assessment, portfolio management, and investment analysis.",
        careerPaths: "Security Manager, Investment Analyst, Risk Manager, Portfolio Manager, Security Consultant"
    },
    { 
        school: "SLIT", 
        short: "FIT", 
        name: "Financial Technology", 
        cutoff: 49.50, 
        requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], 
        emoji: "💰",
        description: "FinTech applies technology to financial services. Students learn blockchain, digital payments, financial analytics, and financial systems for modern banking and finance.",
        careerPaths: "FinTech Analyst, Blockchain Developer, Digital Payments Specialist, Financial Systems Analyst, Product Manager"
    },
    { 
        school: "SLIT", 
        short: "PNT", 
        name: "Procurement Management Technology", 
        cutoff: 49.50, 
        requiredSubjects: ["English", "Mathematics", "Economics/Chemistry", "Physics"], 
        emoji: "📦",
        description: "Procurement manages the purchasing of goods and services. Students learn sourcing strategies, supplier management, contract negotiation, and procurement processes.",
        careerPaths: "Procurement Officer, Purchasing Manager, Supply Chain Specialist, Contract Manager, Sourcing Specialist"
    },
    
    // School of Life Sciences (SLS) 🧬
    { 
        school: "SLS", 
        short: "BCH", 
        name: "Biochemistry", 
        cutoff: 64.33, 
        requiredSubjects: ["English", "Biology", "Physics", "Chemistry"], 
        emoji: "🧪",
        description: "Biochemistry studies chemical processes in living organisms. Students learn enzymology, metabolism, molecular biology, and protein chemistry for understanding life at the molecular level.",
        careerPaths: "Biochemist, Research Scientist, Clinical Biochemist, Pharmaceutical Researcher, Lab Manager"
    },
    { 
        school: "SLS", 
        short: "BIO", 
        name: "Biology", 
        cutoff: 52.62, 
        requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], 
        emoji: "🔬",
        description: "Biology studies living organisms and their interactions. Students learn cell biology, genetics, ecology, evolution, and biodiversity across all life forms.",
        careerPaths: "Biologist, Environmental Consultant, Conservation Officer, Research Assistant, Science Educator"
    },
    { 
        school: "SLS", 
        short: "BTH", 
        name: "Biotechnology", 
        cutoff: 58.43, 
        requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], 
        emoji: "🧬",
        description: "Biotechnology uses living systems to develop products. Students learn genetic engineering, fermentation, bioinformatics, and bioprocessing for applications in medicine, agriculture, and industry.",
        careerPaths: "Biotechnologist, Genetic Engineer, Research Scientist, Bioprocess Engineer, Lab Technician"
    },
    { 
        school: "SLS", 
        short: "MCB", 
        name: "Microbiology", 
        cutoff: 64.30, 
        requiredSubjects: ["English", "Biology", "Chemistry", "Physics/Mathematics"], 
        emoji: "🦠",
        description: "Microbiology studies microscopic organisms. Students learn bacteriology, virology, mycology, immunology, and microbial genetics for health, industrial, and environmental applications.",
        careerPaths: "Microbiologist, Clinical Microbiologist, Quality Control Analyst, Food Safety Officer, Research Scientist"
    },
    { 
        school: "SLS", 
        short: "PLB", 
        name: "Plant Biology", 
        cutoff: 50.30, 
        requiredSubjects: ["English", "Biology", "Chemistry", "Physics"], 
        emoji: "🌿",
        description: "Plant Biology focuses on plant structure, function, and diversity. Students learn plant anatomy, physiology, taxonomy, and ecology for agriculture, conservation, and research.",
        careerPaths: "Botanist, Plant Scientist, Horticulturist, Conservation Biologist, Agricultural Consultant"
    },
    { 
        school: "SLS", 
        short: "ANB", 
        name: "Animal and Environmental Biology", 
        cutoff: 58.43, 
        requiredSubjects: ["English", "Biology", "Chemistry", "Physics"], 
        emoji: "🦁",
        description: "Animal Biology studies animals and their environments. Students learn zoology, animal behavior, ecology, and conservation biology for understanding and protecting animal life.",
        careerPaths: "Zoologist, Wildlife Biologist, Conservation Officer, Ecologist, Animal Behaviorist"
    },
    
    // School of Physical Sciences (SPS) 🔭
    { 
        school: "SPS", 
        short: "CHM", 
        name: "Chemistry", 
        cutoff: 55.30, 
        requiredSubjects: ["English", "Chemistry", "two of Physics/Biology/Mathematics"], 
        emoji: "⚗️",
        description: "Chemistry studies matter, its properties, and reactions. Students learn organic, inorganic, physical, and analytical chemistry for applications in industry, medicine, and research.",
        careerPaths: "Chemist, Analytical Chemist, Quality Control Analyst, Research Scientist, Chemical Process Engineer"
    },
    { 
        school: "SPS", 
        short: "EDT", 
        name: "Education Technology", 
        cutoff: 48.72, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], 
        emoji: "👨‍🏫",
        description: "Education Technology integrates technology into teaching and learning. Students learn instructional design, educational media, e-learning, and technology-enhanced pedagogy.",
        careerPaths: "Educational Technologist, Instructional Designer, E-learning Developer, Education Consultant, Training Specialist"
    },
    { 
        school: "SPS", 
        short: "LIS", 
        name: "Library and Information Science", 
        cutoff: 48.90, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], 
        emoji: "📚",
        description: "LIS manages information resources and services. Students learn cataloging, classification, information retrieval, digital libraries, and information management.",
        careerPaths: "Librarian, Information Officer, Archivist, Knowledge Manager, Digital Curator"
    },
    { 
        school: "SPS", 
        short: "MTS", 
        name: "Mathematics", 
        cutoff: 59.64, 
        requiredSubjects: ["English", "Mathematics", "any two of Physics/Chemistry/Economics/Biology"], 
        emoji: "🧮",
        description: "Mathematics studies patterns, structures, and relationships. Students learn algebra, analysis, geometry, and applied mathematics for solving theoretical and practical problems.",
        careerPaths: "Mathematician, Statistician, Data Analyst, Actuary, Mathematics Educator, Financial Analyst"
    },
    { 
        school: "SPS", 
        short: "PHY", 
        name: "Physics Electronics", 
        cutoff: 50.70, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], 
        emoji: "🔌",
        description: "Physics Electronics applies physics principles to electronic devices. Students learn semiconductor physics, circuit design, and electronic systems for technology applications.",
        careerPaths: "Electronics Engineer, Physicist, Circuit Designer, Semiconductor Specialist, Research Scientist"
    },
    { 
        school: "SPS", 
        short: "PHE", 
        name: "Physics Energy", 
        cutoff: 50.70, 
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry/Biology"], 
        emoji: "⚡",
        description: "Physics Energy focuses on energy production and conversion. Students learn thermodynamics, renewable energy, nuclear physics, and energy systems for sustainable power generation.",
        careerPaths: "Energy Physicist, Renewable Energy Specialist, Power Systems Engineer, Energy Consultant, Research Scientist"
    },
    { 
        school: "SPS", 
        short: "STA", 
        name: "Statistics", 
        cutoff: 50.00, 
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry/Economics"], 
        emoji: "📊",
        description: "Statistics deals with collecting, analyzing, and interpreting data. Students learn probability, statistical inference, regression analysis, and experimental design for data-driven decision making.",
        careerPaths: "Statistician, Data Scientist, Biostatistician, Market Research Analyst, Risk Analyst"
    }
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

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeCoursesPage();
});

function initializeCoursesPage() {
    initializeUTMESubjects();
    setupCoursesPageEvents();
    renderAllCourses();
    
    // Load saved aggregate from calculator
    const savedAggregate = localStorage.getItem('futaAggregate');
    if (savedAggregate) {
        document.getElementById('aggregate-score').value = savedAggregate;
    }
}

// ==================== UTME SUBJECTS ====================
function initializeUTMESubjects() {
    const container = document.getElementById('utme-subjects-container');
    if (!container) return;
    
    container.innerHTML = '';
    // Start with 4 subjects
    for (let i = 0; i < 4; i++) {
        addUTMESubject();
    }
}

function addUTMESubject() {
    const container = document.getElementById('utme-subjects-container');
    if (!container) return;
    
    const subjectCount = container.children.length;
    
    if (subjectCount >= 6) {
        showNotification('Maximum of 6 UTME subjects allowed', 'warning');
        return;
    }
    
    const subjectGroup = document.createElement('div');
    subjectGroup.className = 'subject-input-group';
    
    subjectGroup.innerHTML = `
        <select class="utme-subject-select" required>
            <option value="">Select UTME Subject</option>
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
        <button type="button" class="remove-subject" ${subjectCount < 4 ? 'style="display: none;"' : ''}>
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(subjectGroup);
    
    const removeBtn = subjectGroup.querySelector('.remove-subject');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            if (container.children.length > 4) {
                subjectGroup.remove();
                updateUTMERemoveButtons();
                // Re-render courses when subjects change
                renderAllCourses();
            } else {
                showNotification('Minimum of 4 UTME subjects required', 'warning');
            }
        });
    }
    
    // Add change event to re-render when subject is selected
    const subjectSelect = subjectGroup.querySelector('.utme-subject-select');
    subjectSelect.addEventListener('change', function() {
        renderAllCourses();
    });
    
    updateUTMERemoveButtons();
}

function updateUTMERemoveButtons() {
    const container = document.getElementById('utme-subjects-container');
    if (!container) return;
    
    const subjectGroups = container.querySelectorAll('.subject-input-group');
    subjectGroups.forEach((group, index) => {
        const removeBtn = group.querySelector('.remove-subject');
        if (removeBtn) {
            removeBtn.style.display = subjectGroups.length > 4 ? 'flex' : 'none';
        }
    });
}

function getUTMESubjects() {
    const subjectGroups = document.querySelectorAll('#utme-subjects-container .utme-subject-select');
    const subjects = [];
    
    subjectGroups.forEach(select => {
        if (select.value && !subjects.includes(select.value)) {
            subjects.push(select.value);
        }
    });
    
    return subjects;
}

// ==================== COURSE RENDERING ====================
function renderAllCourses() {
    const container = document.getElementById('all-courses');
    if (!container) return;
    
    const score = parseFloat(document.getElementById('aggregate-score')?.value) || 0;
    const subjects = getUTMESubjects();
    
    // Check if user has selected at least 4 subjects
    const hasFourSubjects = subjects.length >= 4;
    
    // Group courses by school
    const coursesBySchool = {};
    coursesData.forEach(course => {
        if (!coursesBySchool[course.school]) {
            coursesBySchool[course.school] = [];
        }
        coursesBySchool[course.school].push(course);
    });
    
    let html = '';
    
    // If no subjects selected, show message
    if (!hasFourSubjects) {
        html = `
            <div class="no-results">
                <i class="fas fa-info-circle"></i>
                <h4>Select your UTME subjects first</h4>
                <p>Please select at least 4 UTME subjects to see course eligibility.</p>
            </div>
        `;
    } else {
        // Render courses by school
        for (const [schoolCode, courses] of Object.entries(coursesBySchool)) {
            const schoolName = schoolFullNames[schoolCode] || schoolCode;
            
            html += `
                <div class="school-section" data-school="${schoolCode}">
                    <h3>${schoolName} <small>(${schoolCode})</small></h3>
                    <div class="course-list">
            `;
            
            courses.forEach(course => {
                const eligibility = checkEligibility(course, score, subjects);
                const difference = (score - course.cutoff).toFixed(2);
                
                let eligibilityClass = '';
                let eligibilityText = '';
                let differenceClass = '';
                
                if (!eligibility.eligible) {
                    eligibilityClass = 'ineligible';
                    eligibilityText = 'Not Eligible';
                    differenceClass = 'negative';
                } else {
                    if (difference >= 5) {
                        eligibilityClass = 'eligible high';
                        eligibilityText = 'High Chance';
                        differenceClass = 'positive';
                    } else if (difference >= 2) {
                        eligibilityClass = 'eligible moderate';
                        eligibilityText = 'Moderate';
                        differenceClass = 'positive';
                    } else {
                        eligibilityClass = 'eligible low';
                        eligibilityText = 'Low Chance';
                        differenceClass = 'positive';
                    }
                }
                
                html += `
                    <div class="course-card ${eligibilityClass}" 
                         data-emoji="${course.emoji}"
                         data-school="${course.school}"
                         onclick="showCourseDetails('${course.short}')">
                        <h4>
                            <span class="course-code">${course.short}</span>
                            ${course.name}
                        </h4>
                        <div class="course-meta">
                            <div class="cutoff">Cutoff: ${course.cutoff}</div>
                            <div class="score-difference ${differenceClass}">
                                ${score ? (difference >= 0 ? '+' : '') + difference + ' points' : 'Enter score'}
                            </div>
                            <div class="required-subjects">
                                <small>Requires: ${formatSubjects(course.requiredSubjects)}</small>
                            </div>
                            <div class="course-status">
                                <span class="status-dot status-${eligibility.eligible ? 'eligible' : 'ineligible'}"></span>
                                <span>${eligibilityText}</span>
                                ${!eligibility.meetsSubjects ? '<span class="eligibility-badge eligibility-red">Wrong Subjects</span>' : ''}
                            </div>
                        </div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        }
    }
    
    container.innerHTML = html;
}

function renderEligibleCourses() {
    const container = document.getElementById('eligible-courses-list');
    const eligibleSection = document.getElementById('eligible-courses');
    if (!container || !eligibleSection) return;
    
    const score = parseFloat(document.getElementById('aggregate-score')?.value) || 0;
    const subjects = getUTMESubjects();
    
    if (score === 0 || subjects.length < 4) {
        eligibleSection.style.display = 'none';
        return;
    }
    
    const eligibleCourses = coursesData.filter(course => {
        const eligibility = checkEligibility(course, score, subjects);
        return eligibility.eligible && eligibility.meetsSubjects;
    });
    
    if (eligibleCourses.length === 0) {
        eligibleSection.style.display = 'none';
        return;
    }
    
    let html = '';
    
    // Group by school
    const coursesBySchool = {};
    eligibleCourses.forEach(course => {
        if (!coursesBySchool[course.school]) {
            coursesBySchool[course.school] = [];
        }
        coursesBySchool[course.school].push(course);
    });
    
    for (const [schoolCode, courses] of Object.entries(coursesBySchool)) {
        const schoolName = schoolFullNames[schoolCode] || schoolCode;
        
        html += `
            <div class="school-section">
                <h4>${schoolName}</h4>
                <div class="course-list">
        `;
        
        courses.forEach(course => {
            const difference = (score - course.cutoff).toFixed(2);
            
            html += `
                <div class="course-card eligible" 
                     data-emoji="${course.emoji}"
                     onclick="showCourseDetails('${course.short}')">
                    <h4>
                        <span class="course-code">${course.short}</span>
                        ${course.name}
                    </h4>
                    <div class="course-meta">
                        <div class="cutoff">Cutoff: ${course.cutoff}</div>
                        <div class="score-difference positive">+${difference} points</div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
    eligibleSection.style.display = 'block';
}

// ==================== ELIGIBILITY CHECKING ====================
function checkEligibility(course, score, subjects) {
    if (!score || score === 0) {
        return { eligible: false, meetsSubjects: true, reason: 'No score' };
    }
    
    // Check score eligibility
    const scoreEligible = score >= course.cutoff;
    
    // Check subject requirements
    let meetsSubjects = true;
    let missingSubjects = [];
    
    if (subjects.length > 0 && course.requiredSubjects) {
        for (const requirement of course.requiredSubjects) {
            if (requirement.toLowerCase().includes('any')) continue;
            
            if (requirement.includes('/')) {
                // OR condition
                const options = requirement.split('/').map(s => s.trim());
                const hasOption = options.some(opt => 
                    subjects.some(s => s.toLowerCase() === opt.toLowerCase())
                );
                if (!hasOption) {
                    meetsSubjects = false;
                    missingSubjects.push(requirement);
                }
            } else if (requirement.toLowerCase().includes('two of')) {
                // Handle "two of" requirements - at least 2 of these subjects
                const parts = requirement.match(/two of (.*)/i);
                if (parts && parts[1]) {
                    const options = parts[1].split('/').map(s => s.trim());
                    const matchedCount = options.filter(opt => 
                        subjects.some(s => s.toLowerCase() === opt.toLowerCase())
                    ).length;
                    if (matchedCount < 2) {
                        meetsSubjects = false;
                        missingSubjects.push(requirement);
                    }
                }
            } else if (!requirement.toLowerCase().includes('any')) {
                // Simple requirement
                const hasSubject = subjects.some(s => 
                    s.toLowerCase() === requirement.toLowerCase()
                );
                if (!hasSubject) {
                    meetsSubjects = false;
                    missingSubjects.push(requirement);
                }
            }
        }
    }
    
    return {
        eligible: scoreEligible && meetsSubjects,
        meetsSubjects: meetsSubjects,
        scoreEligible: scoreEligible,
        missingSubjects: missingSubjects
    };
}

function formatSubjects(subjects) {
    if (!subjects || subjects.length === 0) return 'No requirements';
    
    return subjects.map(s => {
        if (s.includes('/')) {
            return s.split('/').join(' or ');
        }
        return s;
    }).join(', ');
}

// ==================== EVENT HANDLERS ====================
function setupCoursesPageEvents() {
    const addSubjectBtn = document.getElementById('add-utme-subject');
    const checkEligibilityBtn = document.getElementById('check-eligibility');
    const clearFormBtn = document.getElementById('clear-form');
    const aggregateInput = document.getElementById('aggregate-score');
    
    if (addSubjectBtn) {
        addSubjectBtn.addEventListener('click', function() {
            addUTMESubject();
        });
    }
    
    if (checkEligibilityBtn) {
        checkEligibilityBtn.addEventListener('click', function() {
            const subjects = getUTMESubjects();
            if (subjects.length < 4) {
                showNotification('Please select at least 4 UTME subjects', 'warning');
                return;
            }
            renderAllCourses();
            renderEligibleCourses();
            showNotification('Eligibility checked successfully!', 'success');
        });
    }
    
    if (clearFormBtn) {
        clearFormBtn.addEventListener('click', clearForm);
    }
    
    if (aggregateInput) {
        aggregateInput.addEventListener('input', function() {
            localStorage.setItem('futaAggregate', this.value);
            renderAllCourses();
        });
    }
}

function clearForm() {
    document.getElementById('aggregate-score').value = '';
    localStorage.removeItem('futaAggregate');
    
    // Reset UTME subjects
    const container = document.getElementById('utme-subjects-container');
    container.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        addUTMESubject();
    }
    
    // Hide eligible courses section
    document.getElementById('eligible-courses').style.display = 'none';
    
    // Re-render all courses
    renderAllCourses();
    
    showNotification('Form cleared', 'info');
}

// ==================== UTILITY FUNCTIONS ====================
function showNotification(message, type = 'info') {
    // Use showToast if available
    if (typeof showToast === 'function') {
        showToast(message, type);
        return;
    }
    
    // Fallback notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to generate department website URL
function getDepartmentWebsite(shortCode) {
    return `https://${shortCode.toLowerCase()}.futa.edu.ng`;
}

// Main function to show course details
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
    const departmentWebsite = getDepartmentWebsite(course.short);
    
    const detailBody = document.getElementById('course-detail-body');
    detailBody.innerHTML = `
        <div class="course-details-item">
            <strong>Course Code:</strong> 
            <span class="course-code-large">${course.short}</span>
        </div>
        <div class="course-details-item">
            <strong>Full Name:</strong> 
            <span class="course-name-large">${course.name}</span>
        </div>
        <div class="course-details-item">
            <strong>School:</strong> 
            <span>${schoolFullName}</span>
        </div>
        <div class="course-details-item">
            <strong>Cut-off Score:</strong> 
            <span class="cutoff-large">${course.cutoff}</span>
        </div>
        <div class="course-details-item">
            <strong>Required Subjects:</strong> 
            <div class="subjects-list">${subjectsDisplay}</div>
        </div>
        <div class="course-details-item description-item">
            <strong>📚 Course Description:</strong>
            <p class="course-description">${course.description || 'No description available for this course.'}</p>
        </div>
        <div class="course-details-item career-item">
            <strong>💼 Career Opportunities:</strong>
            <p class="career-paths">${course.careerPaths || 'Various career opportunities in related fields.'}</p>
        </div>
        <div class="course-details-item">
            <strong>🌐 Department Website:</strong>
            <a href="${departmentWebsite}" target="_blank" class="department-link">
                <i class="fas fa-external-link-alt"></i> ${departmentWebsite}
            </a>
        </div>
        <div class="course-details-item">
            <strong>🎓 Program Icon:</strong> 
            <span class="program-emoji">${course.emoji}</span>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { coursesData, schoolFullNames, showCourseDetails };
}