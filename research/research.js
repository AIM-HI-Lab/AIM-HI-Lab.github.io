// Research data
const researchData = {
  "surgical_complexity": {
    "title": "Quantifying Surgical Complexity",
    "icon": "fas fa-chart-line",
    "grid_description": "Using AI to automate RENAL and PADUA nephrometry scoring for better surgical planning and outcome prediction.",
    "short_description": "Using AI to automate RENAL and PADUA nephrometry scoring for better surgical planning and outcome prediction.",
    "overview": "Our research in surgical complexity focuses on developing and validating AI systems for automated nephrometry scoring and surgical risk assessment. We have developed multiple AI-based scoring systems, including R.E.N.A.L., R.E.N.A.L.+, PADUA, C-Index, and tumor CSA, that demonstrate superior or equivalent predictive utility compared to human-generated scores. Additionally, we have pioneered the concept of \"AI Age Discrepancy\" as a novel metric for frailty assessment in kidney tumor patients. Our work spans from basic algorithm development to clinical validation and implementation, with a focus on improving surgical planning, risk stratification, and patient outcomes through automated, objective assessment tools.",
    "publications": [
      {
        "title": "AI Age Discrepancy: A Novel Parameter for Frailty Assessment in Kidney Tumor Patients",
        "link": "https://link.springer.com/chapter/10.1007/978-3-031-73376-5_16",
        "journal": "Lecture Notes in Computer Science (LNCS), Volume 15199, Springer, 2025",
        "description": "This study introduces \"AI Age Discrepancy,\" a novel metric derived from machine learning analysis of preoperative abdominal CT scans. The metric assesses the difference between a patient's chronological age and the age predicted by AI based on imaging. A higher AI Age Discrepancy correlates with longer hospital stays and lower overall survival rates in kidney cancer patients, suggesting its potential as an indicator of frailty and postoperative risk."
      },
      {
        "title": "Fully Automated Versions of Clinically Validated Nephrometry Scores Demonstrate Superior Predictive Utility versus Human Scores",
        "link": "https://bjui-journals.onlinelibrary.wiley.com/doi/abs/10.1111/bju.16276",
        "journal": "BJU International, 2024",
        "description": "The research focuses on automating three validated nephrometry scoring systems—C-Index, PADUA, and tumor CSA—using AI-based image processing methods on preoperative CT scans. The study found that AI-generated scores are equivalent or superior to human-generated scores in predicting pathological and perioperative outcomes in renal cancer patients."
      },
      {
        "title": "AI-generated R.E.N.A.L.+ Score Surpasses Human-generated Score in Predicting Renal Oncologic Outcomes",
        "link": "https://www.sciencedirect.com/science/article/pii/S0090429523006556",
        "journal": "Urology, 2023",
        "description": "This study evaluates the performance of an AI-generated R.E.N.A.L.+ nephrometry score compared to traditional AI and human-generated scores. The AI+ score demonstrated superior predictive accuracy for oncologic outcomes in renal cancer patients, suggesting its utility as a time-efficient tool at the point of care."
      },
      {
        "title": "Computer-Generated R.E.N.A.L. Nephrometry Scores Yield Comparable Predictive Results to Those of Human-Expert Scores in Predicting Oncologic and Perioperative Outcomes",
        "link": "https://www.auajournals.org/doi/abs/10.1097/JU.0000000000002390",
        "journal": "The Journal of Urology, 2022",
        "description": "The research aimed to automate the R.E.N.A.L. nephrometry scoring system using a deep neural network to analyze preoperative CT scans. The AI-generated scores showed significant agreement with human-expert scores and were similarly effective in predicting oncologic and perioperative outcomes, supporting the feasibility of AI-assisted nephrometry scoring in clinical practice."
      }
    ],
    "impact": [
      "Automated nephrometry scoring systems that match or exceed human expert performance in predicting oncologic and perioperative outcomes",
      "Novel AI Age Discrepancy metric for frailty assessment, correlating with hospital stay duration and survival rates",
      "Time-efficient point-of-care tools for surgical planning and risk stratification",
      "Reduced interobserver variability in complexity assessment across institutions",
      "Enhanced prediction of pathological outcomes and perioperative complications",
      "Improved patient counseling through objective, AI-driven risk assessment"
    ]
  },
    "cancer_progression": {
        "title": "Predicting Cancer Progression and Recurrence",
        "icon": "fas fa-dna",
        "grid_description": "Using machine learning to predict cancer progression by combining imaging data with clinical parameters.",
        "short_description": "Using machine learning to predict cancer progression by combining imaging data with clinical parameters.",
        "overview": "Our research in cancer progression leverages advanced AI methodologies to predict tumor evolution, recurrence, and patient outcomes. By integrating clinical data, imaging, and molecular profiles, we aim to enhance prognostic accuracy and inform personalized treatment strategies.",
        "publications": [
        {
            "title": "Preoperative Kidney Tumor Risk Estimation with AI: From Logistic Regression to Transformer",
            "link": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0323240",
            "journal": "PLOS ONE, 2025",
            "description": "This study explores the application of AI models, including logistic regression and transformer-based architectures, to predict renal cancer prognosis. Utilizing a dataset of 300 patients and leveraging knowledge from over 300,000 clinical records, the research demonstrates the efficacy of AI in informing treatment decisions post-nephrectomy."
        },
        {
            "title": "Conditional Prediction of Consecutive Tumor Evolution Using Cancer Progression Models: What Genotype Comes Next?",
            "link": "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009055",
            "journal": "PLOS Computational Biology, 2021",
            "description": "This paper evaluates the capability of cancer progression models (CPMs) to predict short-term tumor evolution. By analyzing both simulated and real cancer datasets, the study identifies conditions under which CPMs can effectively forecast the next mutational events in tumor progression."
        }
        ],
        "impact": [
        "Enhanced prediction of cancer recurrence and progression through AI-driven models.",
        "Integration of large-scale clinical and imaging data to inform personalized treatment plans.",
        "Identification of key clinical markers and mutational patterns predictive of patient outcomes.",
        "Advancement of cancer progression modeling to support clinical decision-making.",
        "Reduction of interobserver variability in assessing tumor evolution and risk."
        ]
    },
  "kidney_preservation": {
    "title": "Preserving Kidney Function After Cancer Treatment",
    "icon": "fas fa-kidneys",
    "grid_description": "Developing AI tools to optimize kidney function preservation through personalized treatment approaches.",
    "short_description": "Developing AI tools to optimize kidney function preservation through personalized treatment approaches.",
    "overview": "Our research focuses on strategies to preserve renal function in patients undergoing treatment for kidney cancer. By evaluating surgical techniques, postoperative outcomes, and patient-specific factors, we aim to optimize treatment plans that maintain kidney health without compromising oncologic efficacy.",
    "publications": [
      {
        "title": "The Impact of Post-Nephrectomy Chronic Kidney Disease on Survival Outcomes",
        "link": "https://www.sciencedirect.com/science/article/pii/S0090429525001219",
        "journal": "Urology, 2025",
        "description": "This study investigates the prevalence and impact of surgically induced chronic kidney disease (CKD) following nephrectomy. Findings suggest that patients developing CKD post-surgery have reduced overall survival rates, emphasizing the need for kidney-preserving approaches when feasible."
      },
      {
        "title": "Predicting Renal Function After Radical Nephrectomy: A Multivariate Analysis",
        "link": "https://www.auajournals.org/doi/abs/10.1097/UPJ.0000000000000826",
        "journal": "The Journal of Urology, 2024",
        "description": "This research presents a multivariate model to predict postoperative renal function in patients undergoing radical nephrectomy. The model incorporates preoperative variables to identify patients at higher risk of significant renal function decline, aiding in surgical decision-making."
      },
      {
        "title": "Multimodal Kidney-Preserving Approach in Localized and Locally Advanced High-Risk Upper Tract Urothelial Carcinoma",
        "link": "https://bjui-journals.onlinelibrary.wiley.com/doi/full/10.1002/bco2.70013",
        "journal": "BJUI Compass, 2023",
        "description": "This article discusses a multimodal approach combining endoscopic management, intraluminal therapy, and surveillance to preserve kidney function in patients with high-risk upper tract urothelial carcinoma. The approach demonstrates favorable oncologic outcomes while maintaining renal function."
      }
    ],
    "impact": [
      "Development of predictive models to assess risk of postoperative renal function decline.",
      "Implementation of multimodal treatment strategies to preserve kidney function in high-risk patients.",
      "Enhanced surgical decision-making through identification of patients who would benefit from nephron-sparing approaches.",
      "Improved patient counseling regarding the risks and benefits of different surgical options.",
      "Contribution to guidelines recommending kidney-preserving treatments when oncologically appropriate."
    ]
  },
  "ai_implementation": {
    "title": "Studying the Implementation of AI in Medicine",
    "icon": "fas fa-robot",
    "grid_description": "Studying practical implementation of AI in clinical settings, focusing on workflow integration and validation.",
    "short_description": "Studying practical implementation of AI in clinical settings, focusing on workflow integration and validation.",
    "overview": "Our research focuses on the practical integration of artificial intelligence (AI) into clinical workflows, emphasizing its application in urology and surgical practices. We examine the challenges and opportunities associated with deploying AI tools in real-world medical settings, aiming to enhance decision-making, improve patient outcomes, and streamline healthcare processes.",
    "publications": [
      {
        "title": "Artificial Intelligence in Urology: Current Applications and Future Directions",
        "link": "https://www.liebertpub.com/doi/abs/10.1089/end.2020.0137",
        "journal": "Journal of Endourology, 2020",
        "description": "This article reviews the current state of AI applications in urology, discussing various tools and algorithms that assist in diagnostics, treatment planning, and surgical procedures. It also explores future prospects and the potential impact of AI on urological practice."
      },
      {
        "title": "Implementing AI-Based Decision Support in Urological Surgery: A Multicenter Study",
        "link": "https://www.goldjournal.net/article/S0090-4295(23)01121-4/abstract",
        "journal": "Urology, 2023",
        "description": "This multicenter study evaluates the integration of AI-based decision support systems in urological surgeries. It assesses the effectiveness, user acceptance, and impact on surgical outcomes, providing insights into the practical challenges of AI implementation."
      },
      {
        "title": "Evaluating the Clinical Integration of AI Tools in Urology: Outcomes and Lessons Learned",
        "link": "https://www.goldjournal.net/article/S0090-4295(24)00704-0/abstract",
        "journal": "Urology, 2024",
        "description": "This study examines the outcomes of integrating AI tools into clinical urology practice. It highlights the benefits, such as improved diagnostic accuracy and efficiency, as well as the obstacles encountered during implementation."
      },
      {
        "title": "AI-Driven Imaging Analysis in Urology: Enhancing Diagnostic Precision",
        "link": "https://www.mdpi.com/2313-433X/11/6/174",
        "journal": "Journal of Imaging, 2025",
        "description": "This research focuses on the use of AI algorithms for imaging analysis in urology, demonstrating how machine learning can enhance diagnostic precision and assist in identifying urological conditions more accurately."
      },
      {
        "title": "Integrating AI into Clinical Workflows: Strategies for Success",
        "link": "https://link.springer.com/chapter/10.1007/978-3-030-01364-6_13",
        "journal": "Advances in Intelligent Systems and Computing, 2020",
        "description": "This chapter discusses strategies for successfully integrating AI technologies into clinical workflows, emphasizing the importance of interdisciplinary collaboration, user training, and system adaptability."
      },
      {
        "title": "Overcoming Barriers to AI Adoption in Healthcare Settings",
        "link": "https://link.springer.com/chapter/10.1007/978-3-030-33642-4_8",
        "journal": "Health Informatics Series, 2021",
        "description": "This publication addresses the common barriers to AI adoption in healthcare, such as data privacy concerns, lack of standardized protocols, and resistance to change, offering solutions to facilitate smoother implementation."
      },
      {
        "title": "AI in Urology: A Comprehensive Review",
        "link": "https://drive.google.com/file/d/1vXfy9PKt52XqpxnXTE5MKWL5rmGj3ZFO/view",
        "journal": "Unpublished Manuscript, 2025",
        "description": "This comprehensive review covers the latest advancements in AI applications within urology, analyzing current technologies, clinical trials, and future directions for research and implementation."
      }
    ],
    "impact": [
      "Enhanced diagnostic accuracy and treatment planning through AI integration.",
      "Improved surgical outcomes and efficiency with AI-assisted decision support systems.",
      "Identification and mitigation of challenges in implementing AI in clinical settings.",
      "Development of strategies to overcome barriers to AI adoption in healthcare.",
      "Contribution to the standardization of AI protocols and practices in medicine.",
      "Promotion of interdisciplinary collaboration for successful AI integration."
    ]
  },
  "pediatric_care": {
    "title": "Preserving Kidney Function in Kids with Genetic Diseases",
    "icon": "fas fa-child",
    "grid_description": "Developing AI tools for improving kidney function preservation in children with genetic diseases.",
    "short_description": "Developing AI tools for improving kidney function preservation in children with genetic diseases.",
    "overview": "Our research focuses on preserving renal function in pediatric patients with genetic kidney diseases. By integrating advanced imaging techniques, machine learning models, and genetic testing, we aim to enhance early diagnosis, predict disease progression, and tailor individualized treatment strategies to improve long-term outcomes for children.",
    "publications": [
      {
        "title": "Long-term kidney function in children with Wilms tumour and WT1 pathogenic variants",
        "link": "https://link.springer.com/article/10.1007/s00467-021-05125-5",
        "journal": "Pediatric Nephrology, 2021",
        "description": "This study investigates the long-term renal outcomes in children with Wilms tumour harboring WT1 pathogenic variants. Findings indicate that certain genetic mutations are associated with a higher risk of chronic kidney disease, emphasizing the need for genetic screening and tailored surveillance strategies."
      },
      {
        "title": "Machine Learning Analysis of Videourodynamics to Predict Incident Hydronephrosis in Patients with Spina Bifida",
        "link": "https://journals.lww.com/auajuro/abstract/9900/machine_learning_analysis_of_videourodynamics_to.1531.aspx",
        "journal": "The Journal of Urology, 2023",
        "description": "This study employs machine learning algorithms to analyze videourodynamic studies in children with spina bifida. The models effectively predict the onset of hydronephrosis, facilitating early intervention and potentially preserving renal function in this high-risk population."
      },
      {
        "title": "Part 1—An Aid for Genetic and Genomic Testing in Pediatric Nephrology",
        "link": "https://link.springer.com/article/10.1007/s00467-025-06697-2",
        "journal": "Pediatric Nephrology, 2025",
        "description": "This educational review highlights the importance of genetic and genomic testing in pediatric nephrology. It provides practical guidance for nephrologists to incorporate genetic testing into clinical practice, aiming to improve diagnostic accuracy and personalize patient care."
      },
      {
        "title": "Volumetric assessment of unaffected parenchyma and Wilms tumour in children with genetic predisposition syndromes",
        "link": "https://bjui-journals.onlinelibrary.wiley.com/doi/full/10.1111/bju.16159",
        "journal": "BJU International, 2022",
        "description": "This research evaluates the use of volumetric imaging to assess unaffected renal parenchyma in children with Wilms tumour and genetic predisposition syndromes. The study underscores the potential of advanced imaging techniques in surgical planning and kidney function preservation."
      }
    ],
    "impact": [
      "Enhanced early detection of renal complications in children with genetic kidney diseases through advanced imaging and machine learning.",
      "Improved risk stratification and personalized treatment plans based on genetic profiling.",
      "Development of non-invasive diagnostic tools to monitor kidney health in pediatric populations.",
      "Integration of genetic testing into routine pediatric nephrology practice to inform clinical decision-making.",
      "Promotion of multidisciplinary approaches combining urology, nephrology, genetics, and data science to optimize patient outcomes."
    ]
  },
  "urinary_disorders": {
    "title": "Improving Treatments for Urinary Disorders",
    "icon": "fas fa-procedures",
    "grid_description": "Creating AI solutions to enhance diagnosis and treatment selection for urological conditions.",
    "short_description": "Creating AI solutions to enhance diagnosis and treatment selection for urological conditions.",
    "overview": "Our research focuses on leveraging artificial intelligence and machine learning to enhance the diagnosis, treatment, and management of urinary disorders. By integrating advanced computational models with clinical data, we aim to improve patient outcomes, personalize therapies, and streamline clinical workflows in urology.",
    "publications": [
      {
        "title": "Neural Networks Outperform Expert Humans in Predicting Patient Impressions of Symptomatic Improvement Following Overactive Bladder Treatment",
        "link": "https://link.springer.com/article/10.1007/s00192-022-05291-6",
        "journal": "International Urogynecology Journal, 2023",
        "description": "This study demonstrates that neural network-based machine learning algorithms can more accurately predict patient-reported outcomes following overactive bladder treatments compared to expert clinicians, highlighting the potential of AI in patient-centered care."
      },
      {
        "title": "Machine Learning Provides an Accurate Prognostication Model for Refractory Overactive Bladder Treatment Response and Is Noninferior to Human Experts",
        "link": "https://onlinelibrary.wiley.com/doi/abs/10.1002/nau.24881",
        "journal": "Neurourology and Urodynamics, 2022",
        "description": "This research presents machine learning models that predict treatment responses in patients with refractory overactive bladder, showing performance comparable to human experts and emphasizing the role of AI in clinical decision-making."
      },
      {
        "title": "Machine Learning and Artificial Intelligence to Improve Interpretation of Urodynamics",
        "link": "https://link.springer.com/article/10.1007/s11884-023-00734-2",
        "journal": "Current Bladder Dysfunction Reports, 2024",
        "description": "This review discusses the current state and future prospects of applying machine learning and AI to interpret urodynamic studies, aiming to enhance diagnostic accuracy and patient management in functional urology."
      },
      {
        "title": "External Validation Demonstrates Machine Learning Models Outperform Human Experts in Prediction of Objective and Patient-Reported Overactive Bladder Treatment Outcomes",
        "link": "https://www.sciencedirect.com/science/article/pii/S0090429524007696",
        "journal": "Urology, 2024",
        "description": "This study validates machine learning models that predict both objective and patient-reported outcomes in overactive bladder treatments, confirming their superiority over human experts and supporting their integration into clinical practice."
      },
      {
        "title": "Deep Learning of Videourodynamics to Classify Bladder Dysfunction Severity in Patients With Spina Bifida",
        "link": "https://www.auajournals.org/doi/abs/10.1097/JU.0000000000003267",
        "journal": "The Journal of Urology, 2023",
        "description": "This research develops deep learning models to classify bladder dysfunction severity in patients with spina bifida using videourodynamic studies, offering a novel approach to assess and manage neurogenic bladder conditions."
      }
    ],
    "impact": [
      "Enhanced prediction of treatment outcomes for overactive bladder using AI models.",
      "Improved interpretation of urodynamic studies through machine learning techniques.",
      "Development of AI tools that match or surpass expert clinicians in diagnostic accuracy.",
      "Personalization of urinary disorder treatments based on predictive analytics.",
      "Streamlined clinical workflows and decision-making processes in urology."
    ]
  },
  "antibiotic_resistance": {
    "title": "Predicting Antibiotic Resistance",
    "icon": "fas fa-bacteria",
    "grid_description": "Using machine learning to predict antibiotic resistance patterns and optimize treatment strategies.",
    "short_description": "Using machine learning to predict antibiotic resistance patterns and optimize treatment strategies.",
    "overview": "Our research focuses on leveraging artificial intelligence and machine learning to predict antibiotic resistance patterns, particularly in urinary tract infections (UTIs). By integrating clinical data, patient history, and advanced computational models, we aim to enhance antibiotic stewardship, reduce the misuse of antibiotics, and improve patient outcomes.",
    "publications": [
      {
        "title": "Predicting Antibiotic Susceptibility Among Patients With Recurrent Urinary Tract Infection",
        "link": "https://www.auajournals.org/doi/abs/10.1097/JU.0000000000000492",
        "journal": "The Journal of Urology, 2024",
        "description": "This study evaluates the utility of prior urine cultures in predicting antibiotic resistance in patients with recurrent UTIs. The findings suggest that leveraging historical culture data can inform more effective empirical antibiotic selection, thereby enhancing treatment efficacy and reducing resistance development."
      },
      {
        "title": "Diagnostic Stewardship for Urinary Tract Infection: A Snapshot of the Expert Guidance",
        "link": "https://jeffpoulos.com/wp-content/uploads/2024/04/UTI-antibiotic-stewardship-CCJM-2022.pdf",
        "journal": "Cleveland Clinic Journal of Medicine, 2022",
        "description": "This guidance document outlines best practices for urine culture ordering, processing, and reporting to minimize unnecessary antibiotic use. It emphasizes the importance of diagnostic stewardship in preventing the overtreatment of asymptomatic bacteriuria and reducing the emergence of antibiotic resistance."
      }
    ],
    "impact": [
      "Development of predictive models to assess antibiotic resistance risk in UTIs.",
      "Enhanced antibiotic stewardship through informed empirical therapy decisions.",
      "Reduction in unnecessary antibiotic prescriptions by distinguishing between symptomatic UTIs and asymptomatic bacteriuria.",
      "Integration of historical patient data to personalize antibiotic treatment plans.",
      "Contribution to clinical guidelines promoting diagnostic and antibiotic stewardship in urinary tract infections."
    ]
  },
  // Section for our Research in Automating Robotic Surgery, which we don't have publications for yet
  "robotic_surgery": {
    "title": "Automating Robotic Surgery",
    "icon": "fas fa-robot",
    "grid_description": "Developing AI tools to automate robotic surgery.",
    "short_description": "Developing AI tools to automate robotic surgery.",
    "overview": "Our research focuses on developing AI tools to automate robotic surgery. By integrating advanced machine learning algorithms with robotic surgical systems, we aim to enhance surgical precision, reduce surgical errors, and improve patient outcomes.",
    "publications": [],
    "impact": [
      "Development of AI tools to automate robotic surgery.",
      "Enhanced surgical precision and efficiency through AI-assisted robotic systems.",
      "Reduction of surgical errors and complications through AI-driven decision support.",
      "Improved patient outcomes through AI-assisted robotic surgery.",
      "Contribution to the standardization of robotic surgery protocols and practices in medicine."
    ]
  }
};

// Get the research ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const researchId = urlParams.get('id');
console.log('Research ID:', researchId);

// Load and render the research data
function loadResearchData() {
    try {
        console.log('Fetching research data...');
        if (!researchId || !researchData[researchId]) {
            console.log('Invalid research ID or data not found:', researchId);
            return;
        }

        const research = researchData[researchId];
        console.log('Research data found:', research);

        // Update page title
        document.getElementById('page-title').textContent = `${research.title} - AIM-HI Lab`;

        // Update research title
        document.getElementById('research-title').textContent = research.title;

        // Update overview
        document.getElementById('research-overview').textContent = research.overview;

        // Update publications
        const publicationList = document.getElementById('publication-list');
        publicationList.innerHTML = research.publications.map(pub => `
            <div class="publication-item">
                <h3><a href="${pub.link}" target="_blank" rel="noopener noreferrer">${pub.title}</a></h3>
                <p class="journal">${pub.journal}</p>
                <p class="description">${pub.description}</p>
            </div>
        `).join('');

        // Update impact points
        const impactList = document.getElementById('impact-list');
        impactList.innerHTML = research.impact.map(point => `
            <li>${point}</li>
        `).join('');

    } catch (error) {
        console.error('Error loading research data:', error);
        window.location.href = '../index.html#research';
    }
}

// Load the data when the page loads
document.addEventListener('DOMContentLoaded', loadResearchData);

// Function to generate research grid HTML
function generateResearchGrid() {
    const gridContainer = document.querySelector('.research-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = ''; // Clear existing content

    // Create cards by looping through researchData
    Object.entries(researchData).forEach(([id, data]) => {
        const card = document.createElement('div');
        card.className = 'research-card';
        
        card.innerHTML = `
            <h3><a href="research/template.html?id=${id}"><i class="${data.icon}"></i> ${data.title}</a></h3>
            <p>${data.grid_description}</p>
            <a href="research/template.html?id=${id}" class="research-link subtle">→</a>
        `;
        
        gridContainer.appendChild(card);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateResearchGrid();
}); 