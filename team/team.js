// Team data
const teamData = {
    "christopher_weight": {
        "name": "Christopher Weight, MD",
        "role": "Principal Investigator",
        "image": "https://my.clevelandclinic.org/provider/image?id=8554&width=235",
        "short_bio": "Director of the Center for Urologic Oncology at Cleveland Clinic. Leading research in machine learning and AI applications for kidney tumor diagnosis and treatment.",
        "full_bio": "Director of the Center for Urologic Oncology at Cleveland Clinic. Leading research in machine learning and AI applications for kidney tumor diagnosis, treatment selection, and surgical planning. Founder of climb4kc.org, dedicated to kidney cancer prevention and survivorship. His work focuses on optimizing and personalizing the diagnosis, treatment selection, surgical planning, and prognosis of kidney tumors using advanced AI technologies.",
        "links": [
            {
                "icon": "fas fa-user",
                "url": "https://my.clevelandclinic.org/staff/8554-christopher-weight",
                "title": "Profile"
            },
            {
                "icon": "fas fa-mountain",
                "url": "https://climb4kc.org",
                "title": "Climb4KC"
            }
        ]
    },
    "nicholas_heller": {
        "name": "Nicholas Heller, PhD",
        "role": "Research Associate",
        "image": "https://github.com/neheller.png",
        "short_bio": "Research associate at Cleveland Clinic department of Urology, specializing in medical image analysis and machine learning.",
        "full_bio": "Research associate at Cleveland Clinic department of urology, specializing in medical image analysis and machine learning. Contributing to the Kidney Tumor Segmentation Challenge (KiTS) and developing innovative AI solutions for medical imaging. His research focuses on improving the accuracy and efficiency of medical image analysis through advanced machine learning techniques.",
        "links": [
            {
                "icon": "fab fa-github",
                "url": "https://github.com/neheller",
                "title": "GitHub"
            },
            {
                "icon": "fas fa-globe",
                "url": "https://www-users.cs.umn.edu/~helle246/",
                "title": "Website"
            }
        ]
    },
    "rikhil_seshadri": {
        "name": "Rikhil Seshadri",
        "role": "Computer Engineering Student",
        "image": "https://github.com/rikhils.png",
        "short_bio": "Computer Engineering student at Georgia Tech, specializing in software development and AI applications. Active contributor to various hackathon projects and open-source initiatives.",
        "full_bio": "Computer Engineering student at Georgia Tech with a focus on software development and AI applications. Active participant in hackathons including HackMIT 2023, MinneHacks 23, and HackGT9. Contributing to the AIM-HI Lab's research in medical imaging and AI applications for healthcare. Experienced in full-stack development and machine learning projects.",
        "links": [
            {
                "icon": "fab fa-github",
                "url": "https://github.com/rikhils",
                "title": "GitHub"
            },
            {
                "icon": "fas fa-code",
                "url": "https://devpost.com/rikhils",
                "title": "Devpost"
            }
        ]
    }
};

// Function to create team cards
function createTeamCard(member) {
    const card = document.createElement('div');
    card.className = 'team-card-wrapper';
    
    card.innerHTML = `
        <div class="team-card">
            <div class="team-card-front">
                <div class="team-card-image">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <div class="team-card-front-content">
                    <h3>${member.name}</h3>
                    <p class="team-role">${member.role}</p>
                    <p class="team-bio-short">${member.short_bio}</p>
                </div>
            </div>
            <div class="team-card-back">
                <h3>${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-bio-full">${member.full_bio}</p>
                <div class="team-links">
                    ${member.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" title="${link.title}">
                            <i class="${link.icon}"></i>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Function to load team members
function loadTeamMembers() {
    const teamGrid = document.querySelector('.team-grid');
    if (!teamGrid) return;

    // Clear existing content
    teamGrid.innerHTML = '';

    // Add team members
    Object.values(teamData).forEach(member => {
        const card = createTeamCard(member);
        teamGrid.appendChild(card);
    });
}

// Load team members when the page loads
document.addEventListener('DOMContentLoaded', loadTeamMembers); 