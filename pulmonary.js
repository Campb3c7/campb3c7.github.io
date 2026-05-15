STUDYAPP.register({
  id: "pulmonary",
  name: "Pulmonary Pathophysiology",
  description: "Respiratory system, ventilation, infections, obstructive & restrictive diseases, neoplasms",
  sections: [
    {
      id:"overview", name:"Respiratory System Overview",
      cards:[
        { id:"pulm-circ", title:"Pulmonary Circulation & Respiratory-Circulatory Coordination",
          content:[
            {type:"p",text:"The lungs serve two core functions: providing oxygen for aerobic respiration and removing carbon dioxide (the by-product of cellular respiration) to maintain acid-base balance. The pulmonary capillary network oxygenates blood and delivers CO\u2082 for removal \u2014 notably, the lungs receive the entire cardiac output."},
            {type:"p",text:"Blood flow follows this path:"},
            {type:"ul",items:[
              ["Venous (deoxygenated) blood"," returns via the inferior and superior vena cava to the right atrium"],
              ["The right ventricle"," pumps blood through the pulmonary arteries to the lungs for gas exchange"],
              ["Pulmonary veins"," return oxygenated blood to the left atrium"],
              "The left ventricle pumps oxygenated blood to the body via the aorta",
              "At the tissue level: O\u2082 moves capillary \u2192 tissue; CO\u2082 moves tissue \u2192 capillary"
            ]}
          ]
        },
        { id:"upper-airway", title:"Upper Airway",
          content:[
            {type:"p",text:"The upper airway conducts air from the outside environment into the lower respiratory tract. It consists of:"},
            {type:"ul",items:[
              ["Nose and mouth"," \u2014 entry points"],
              ["Pharynx"," \u2014 nasopharynx, oropharynx, laryngopharynx"],
              ["Glottis / epiglottis"," \u2014 the epiglottis prevents aspiration during swallowing"],
              ["Larynx"," \u2014 houses the vocal cords; transition to the lower airway"]
            ]}
          ]
        },
        { id:"lower-airway", title:"Lower Airway",
          content:[
            {type:"p",text:"Below the larynx lies the lower airway:"},
            {type:"ul",items:[
              ["Trachea"," \u2014 arises from the larynx, splits at the carina into right and left mainstem bronchi"],
              "Bronchi \u2192 bronchioles \u2192 terminal bronchioles",
              ["Acini"," (respiratory units) \u2014 the functional gas-exchange units"],
              ["Alveoli"," \u2014 sites of gas diffusion with pulmonary capillaries"]
            ]},
            {type:"p",text:"Smooth muscle of the bronchi is regulated by beta-2 receptors; mucus production is regulated by the parasympathetic nervous system."}
          ]
        },
        { id:"lung-lobes", title:"Lung Lobes",
          content:[
            {type:"p",text:"The two lungs are asymmetric due to the heart:"},
            {type:"ul",items:[
              ["Right lung \u2014 3 lobes:"," Right Upper Lobe (RUL), Right Middle Lobe (RML), Right Lower Lobe (RLL). The RML has straight bronchi, making it prone to aspiration."],
              ["Left lung \u2014 2 lobes:"," Left Upper Lobe (LUL), Left Lower Lobe (LLL)"]
            ]},
            {type:"p",text:"Both upper lobes are described as well-aerated at baseline."}
          ]
        },
        { id:"acinus", title:"Respiratory Unit (Acinus)",
          content:[
            {type:"p",text:"The acinus is the functional unit of the lung, composed of:"},
            {type:"ul",items:[
              "Respiratory bronchioles",
              "Alveolar ducts, alveolar sacs, and alveoli",
              ["Alveolar septa"," \u2014 contain pulmonary capillaries and supporting connective tissue"]
            ]},
            {type:"p",text:"The alveoli are lined by two cell types:"},
            {type:"ul",items:[
              ["Flat epithelial (squamous) cells"," \u2014 structural support"],
              ["Columnar glandular (adenomatous) cells"," \u2014 secretory; produce surfactant"]
            ]}
          ]
        },
        { id:"surfactant", title:"Surfactant",
          content:[
            {type:"p",text:"Surfactant is a lipid secreted by the columnar glandular (adenomatous) cells lining the alveoli. Its two key functions are:"},
            {type:"ul",items:[
              ["Improves inflation"," of the alveoli and, by extension, the entire lung"],
              ["Reduces the tendency of alveoli to collapse"," (atelectasis) by lowering surface tension"]
            ]},
            {type:"note",text:"Clinical connection: Absence of surfactant is the mechanism behind neonatal RDS (adhesive atelectasis) in premature infants whose type II pneumocytes have not matured yet."}
          ]
        }
      ]
    },
    {
      id:"ventilation", name:"Ventilation & Gas Exchange",
      cards:[
        { id:"mech-vent", title:"Mechanism of Ventilation",
          content:[
            {type:"p",text:"Breathing is a mechanical process driven by pressure changes:"},
            {type:"ul",items:[
              ["Inspiration:"," intercostal muscles move ribs horizontally + diaphragm flattens \u2192 negative intrathoracic pressure \u2192 air flows in"],
              ["Expiration:"," ribs move vertically + diaphragm rises \u2192 positive intrathoracic pressure \u2192 air flows out"]
            ]},
            {type:"p",text:"Normal respiration also depends on intact brain function, proper nerve innervation of the intercostal muscles and diaphragm, and mobility of the rib cage."}
          ]
        },
        { id:"lung-volumes", title:"Lung Volumes & Capacities",
          content:[
            {type:"p",text:"Key lung volumes to know:"},
            {type:"grid",items:[
              ["VT \u2014 Tidal Volume","~350\u2013400 mL per resting breath"],
              ["FRC \u2014 Functional Residual Capacity","Gas in lungs at end of resting tidal breath"],
              ["IRV \u2014 Inspiratory Reserve Volume","Extra gas with maximal inhalation"],
              ["ERV \u2014 Expiratory Reserve Volume","Gas exhaled with maximum exhalation"],
              ["RV \u2014 Residual Volume","Gas remaining after maximal exhalation"],
              ["VC \u2014 Vital Capacity","Total gas exhaled after maximal inhalation"],
              ["TLC \u2014 Total Lung Capacity","TLC = VC + RV"]
            ]}
          ]
        },
        { id:"partial-pressure", title:"Partial Pressure of Gases",
          content:[
            {type:"p",text:"Each gas in a mixture exerts its own partial pressure. At sea level, total ambient pressure = 760 mm Hg:"},
            {type:"grid",items:[
              ["pN\u2082","573 mm Hg"],
              ["pO\u2082","105 mm Hg"],
              ["pH\u2082O","47 mm Hg"],
              ["pCO\u2082","35 mm Hg"]
            ]},
            {type:"p",text:"In the alveoli: pCO\u2082 = 35 mm Hg, pO\u2082 = 105 mm Hg. Venous return arriving at pulmonary arteries has pCO\u2082 = 47 mm Hg and pO\u2082 = 40 mm Hg \u2014 the gradient drives gas exchange."}
          ]
        },
        { id:"gas-diffusion", title:"Gas Diffusion",
          content:[
            {type:"p",text:"Diffusion is gradient-driven (high \u2192 low concentration). The close proximity of alveoli and pulmonary capillaries facilitates oxygen loading and CO\u2082 unloading."},
            {type:"p",text:"Effective diffusion depends on three things:"},
            {type:"ul",items:[
              ["Alveolar integrity:"," emphysema and pulmonary fibrosis impair this"],
              ["Effective capillary/blood supply:"," pulmonary emboli block it; pulmonary hypertension narrows vessels"],
              ["Effective ventilation:"," trauma, drug overdose, or Guillain-Barr\u00e9 can impair ventilation of the perfused lung"]
            ]}
          ]
        },
        { id:"oxyhemoglobin", title:"Oxyhemoglobin Dissociation Curve",
          content:[
            {type:"p",text:"Due to cooperativity \u2014 each oxygen bound increases affinity for the next \u2014 the curve is sigmoid (S-shaped), not linear. X-axis: pO\u2082 (mm Hg); Y-axis: % hemoglobin saturation."},
            {type:"p",text:"Right shift (decreased affinity for O\u2082):"},
            {type:"ul",items:[
              "More O\u2082 unloaded in tissues",
              "Higher pO\u2082 needed to saturate hemoglobin",
              "Causes: increased temp, increased CO\u2082, decreased pH (acidosis), increased 2,3-DPG"
            ]},
            {type:"p",text:"Left shift (increased affinity for O\u2082):"},
            {type:"ul",items:[
              "Less O\u2082 unloaded in tissues",
              "Lower pO\u2082 needed to saturate hemoglobin",
              "Causes: decreased temp, decreased CO\u2082, increased pH (alkalosis), fetal hemoglobin"
            ]},
            {type:"note",text:"Remember: these shifts affect affinity, not the total capacity to bind oxygen."}
          ]
        }
      ]
    },
    {
      id:"pft", name:"Pulmonary Function Testing",
      cards:[
        { id:"abg-vbg", title:"Arterial Blood Gas (ABG) vs. Venous Blood Gas (VBG)",
          content:[
            {type:"p",text:"Both provide information on:"},
            {type:"ul",items:[
              ["Acid-base status:"," pH and HCO\u2083\u207b"],
              ["Ventilation status:"," pCO\u2082"],
              ["Oxygenation status:"," pO\u2082 (meaningful on ABG; inaccurate on VBG since it measures deoxygenated blood)"]
            ]},
            {type:"p",text:"An ABG requires arterial sampling (technically difficult); a VBG is an acceptable alternative for acid-base and ventilation data, but pulse oximetry should supplement for oxygenation."}
          ]
        },
        { id:"pulse-ox", title:"Pulse Oximetry",
          content:[
            {type:"p",text:"Non-invasive monitoring of peripheral oxygen saturation (SpO\u2082) via fingertip or earlobe. Transmits infrared light to distinguish oxygenated from deoxygenated hemoglobin."},
            {type:"ul",items:[
              ["Normal SpO\u2082:"," 95\u2013100% in a healthy patient"],
              ["Less accurate than ABG"," when SpO\u2082 falls below 90%"]
            ]}
          ]
        },
        { id:"capnography", title:"Capnography",
          content:[
            {type:"p",text:"Continuous capnography: Measures end-tidal CO\u2082 (EtCO\u2082). Used during general anesthesia and sedation. Provides real-time information about ventilation, perfusion, and metabolism."},
            {type:"p",text:"Colorimetric (spot) capnography: Placed on the end of an endotracheal tube to confirm correct tube placement. A color change indicates CO\u2082 is present, confirming tracheal (not esophageal) placement."}
          ]
        },
        { id:"spirometer", title:"Spirometer & Incentive Spirometer",
          content:[
            {type:"p",text:"Spirometer: Measures both the volume and rate of air inspired and expired. More precise than peak flow \u2014 used for detailed pulmonary function testing to distinguish obstructive vs. restrictive patterns."},
            {type:"p",text:"Incentive spirometer: Measures inspired volume only. A piston rises as the patient inhales, providing visual feedback. Used post-operatively and after chest injury to encourage slow, deep breaths and prevent atelectasis."}
          ]
        },
        { id:"peak-flow", title:"Peak Flow Meter",
          content:[
            {type:"p",text:"A calibrated instrument measuring the maximum expiratory flow rate. Less precise than spirometry but quick and portable \u2014 primarily used to monitor asthma severity and control over time."}
          ]
        }
      ]
    },
    {
      id:"pleural", name:"Pleural Diseases",
      cards:[
        { id:"pleurisy", title:"Pleurisy / Pleuritis",
          content:[
            {type:"p",text:"The pleura has two layers: the parietal pleura (lines inner chest wall) and the visceral pleura (covers the lungs). Negative intrapleural pressure keeps the lungs inflated."},
            {type:"p",text:"Inflammation of these layers causes friction, resulting in:"},
            {type:"ul",items:[
              ["Pleuritic chest pain"," \u2014 sharp, worse with breathing"],
              ["Occasional friction rub"," audible on auscultation"]
            ]},
            {type:"p",text:"Most commonly caused by viral or bacterial infection."}
          ]
        },
        { id:"pleural-effusion", title:"Pleural Effusion",
          content:[
            {type:"p",text:"A collection of fluid in the pleural space. Three main mechanisms:"},
            {type:"ul",items:[
              ["Inflammation"," from lung infections or cancers"],
              ["Decreased oncotic pressure"," \u2192 fluid seeps from vessels"],
              ["Increased hydrostatic pressure"," \u2192 fluid forced into pleural space"]
            ]},
            {type:"p",text:"Symptoms: asymptomatic if small; pleuritic chest pain, dyspnea, orthopnea if larger."},
            {type:"p",text:"Treatment: address underlying cause; drain with needle thoracentesis (ultrasound-guided); may require chest tube or indwelling pleural catheter."}
          ]
        },
        { id:"transudates-exudates", title:"Transudates vs. Exudates (Light's Criteria)",
          content:[
            {type:"p",text:"Thoracentesis fluid is analyzed for protein, LDH, glucose, gram stain, culture, and cytology. Light's criteria classifies fluid as:"},
            {type:"p",text:"Transudate \u2014 systemic cause, low protein, non-inflammatory:"},
            {type:"ul",items:["Congestive heart failure, chronic liver disease, nephrotic syndrome, myxedema"]},
            {type:"p",text:"Exudate \u2014 local cause, proteinaceous, inflammatory:"},
            {type:"ul",items:["Malignancy, connective tissue disease (RA, SLE), pneumonia/empyema, tuberculosis"]}
          ]
        },
        { id:"pneumothorax", title:"Pneumothorax",
          content:[
            {type:"p",text:"Free air enters the pleural space, disrupting the negative intrapleural pressure that holds the lung open. The affected lung collapses from elastic recoil."},
            {type:"p",text:"Types:"},
            {type:"ul",items:[
              ["Primary:"," no pre-existing lung disease; typically ruptured blebs in young, tall, thin males (20\u201340 y/o); smoking is a risk factor"],
              ["Secondary:"," pre-existing disease (asthma, COPD most common)"],
              ["Traumatic:"," rib fracture, stab wound, blast injury; iatrogenic (central line, mechanical ventilation)"]
            ]},
            {type:"p",text:"Signs: tachypnea, hyperresonance, absent breath sounds, tracheal deviation away from affected side, JVD."},
            {type:"p",text:"Treatment: small (\u22643 cm): observation \u00b1 O\u2082; large or tension: needle aspiration + chest tube."}
          ]
        },
        { id:"tension-ptx", title:"Tension Pneumothorax",
          content:[
            {type:"p",text:"The pleural tear acts as a one-way valve \u2014 air enters but cannot escape. Pressure builds until it compresses the great vessels, decreasing venous return. This causes hypotension, tachycardia, and severe dyspnea, and shifts the mediastinum away from the affected side (tracheal deviation)."},
            {type:"p",text:"Most common cause: mechanical ventilation (positive pressure delivery). This is a life-threatening emergency requiring immediate needle decompression."}
          ]
        }
      ]
    },
    {
      id:"atelectasis", name:"Atelectasis",
      cards:[
        { id:"atelectasis-overview", title:"Atelectasis \u2014 Overview & Types",
          content:[
            {type:"p",text:"Atelectasis is the loss of lung volume secondary to alveolar collapse. It can involve a subsegment or an entire lung. There are five types:"},
            {type:"ul",items:[
              ["Obstructive (most common):"," blockage between alveoli and trachea \u2014 mucus plug, asthma, aspiration, tumor"],
              ["Compressive:"," something physically compresses the lung \u2014 pneumothorax, hemothorax, pleural effusion"],
              ["Contraction:"," scarring distorts alveoli, impairs elastic recoil \u2014 sarcoidosis"],
              ["Adhesive:"," lack of surfactant increases surface tension \u2192 alveoli stick together \u2014 neonatal RDS"],
              ["Hypoventilation:"," incomplete expansion \u2014 splinting from pain, anesthesia, diaphragmatic weakness"]
            ]},
            {type:"p",text:"X-ray finding: elevated diaphragm on the affected side. Treatment: incentive spirometer; Cornet device to clear mucus."}
          ]
        }
      ]
    },
    {
      id:"infections", name:"Pulmonary Infections",
      cards:[
        { id:"epiglottitis", title:"Acute Epiglottitis",
          content:[
            {type:"p",text:"Cellulitis of the epiglottis and surrounding structures with edema accumulating between the squamous epithelial layer and epiglottic cartilage. If untreated \u2192 acute airway obstruction."},
            {type:"p",text:"Pathogens: H. influenzae type B (children; now rare due to Hib vaccine); S. pneumoniae (adults); immunocompromised may have Pseudomonas, Candida, etc."},
            {type:"tags",items:["Distress","Drooling","Dysphagia"]},
            {type:"p",text:"Also: tripod (sniffing) position, stridor, muffled voice, fever."},
            {type:"p",text:"Diagnosis: clinical emergency \u2014 airway first, diagnostics second. Lateral neck X-ray shows the thumb sign (enlarged epiglottis). Approach patient calmly to avoid worsening anxiety and edema."},
            {type:"p",text:"Treatment: secure airway, antibiotics, plus or minus glucocorticoids and racemic epinephrine."}
          ]
        },
        { id:"croup", title:"Croup",
          content:[
            {type:"p",text:"Viral inflammation of the larynx and subglottic airway. Most commonly caused by parainfluenza virus type 1. Spasmodic croup (non-infectious, recurring) occurs almost exclusively at night."},
            {type:"p",text:"Symptoms: starts with congestion and nasal discharge \u2192 progresses over 12\u201348 hours to fever, hoarseness, barking cough, and inspiratory stridor."},
            {type:"p",text:"Management: clinical diagnosis; self-limited; symptomatic treatment. If severe: airway first."}
          ]
        },
        { id:"influenza", title:"Influenza",
          content:[
            {type:"p",text:"Acute respiratory illness caused by influenza A and B viruses. Worse in winter months; responsible for the devastating 1918 pandemic."},
            {type:"p",text:"Symptoms: abrupt onset of fever, headaches, myalgias, malaise, nonproductive cough, sore throat, nasal discharge."},
            {type:"p",text:"Management: typically clinical diagnosis. Uncomplicated \u2192 symptomatic treatment \u00b1 antivirals. Complicated \u2192 treat secondary bacterial infections."}
          ]
        },
        { id:"pertussis", title:"Pertussis (Whooping Cough)",
          content:[
            {type:"p",text:"Highly contagious respiratory illness caused by gram-negative coccobacillus Bordetella pertussis. Now more common in adults since vaccine coverage."},
            {type:"p",text:"Three phases:"},
            {type:"ul",items:[
              ["Catarrhal (1\u20132 weeks):"," malaise, rhinorrhea, mild cough, tearing, conjunctival injection"],
              ["Paroxysmal (2\u20133 months):"," paroxysmal cough with characteristic whoop, post-tussive vomiting or syncope"],
              ["Convalescent (1\u20132 weeks):"," gradual symptom reduction"]
            ]},
            {type:"p",text:"Treatment: antibiotics within first 3 weeks; after that, symptoms are from tissue damage \u2014 focus on supportive care."}
          ]
        },
        { id:"pneumonia", title:"Pneumonia",
          content:[
            {type:"p",text:"Tissue consolidation caused by: inflammatory WBC response, bacterial toxins causing leaky capillaries, and accumulation of fluid/cells in alveoli and pleural space."},
            {type:"p",text:"Classified by pathogen (bacteria, mycoplasma, virus, fungi), anatomy (lobar, bronchopneumonia, interstitial), and predisposing factors (viral URI, post-op, HIV/AIDS, aspiration)."},
            {type:"p",text:"Symptoms: cough, fever, dyspnea, pleuritic chest pain, fatigue. Signs: hypoxia, altered mental status."},
            {type:"p",text:"Treatment: supportive + empiric antibiotics guided by sputum/blood culture."}
          ]
        },
        { id:"legionnaires", title:"Legionnaires' Disease",
          content:[
            {type:"p",text:"Caused by Legionella pneumophila, a gram-negative rod that contaminates water systems (air conditioners, swamp coolers, shower heads, humidifiers). Infection occurs by inhaling aerosolized water droplets."},
            {type:"p",text:"Distinguishing features beyond pneumonia: diarrhea, hyponatremia, and altered mental status."}
          ]
        },
        { id:"pcp", title:"Pneumocystis Pneumonia (PCP)",
          content:[
            {type:"p",text:"Caused by Pneumocystis jirovecii. This is one of the conditions that defines AIDS."},
            {type:"p",text:"Initial symptoms and chest X-ray may be subtle. Consider PCP whenever a patient with HIV/AIDS presents with shortness of breath and hypoxia."},
            {type:"p",text:"Diagnosis: confirmed by bronchoscopy (scope passed into bronchi to collect sputum and tissue)."}
          ]
        },
        { id:"tb", title:"Tuberculosis (TB)",
          content:[
            {type:"p",text:"Caused by Mycobacterium tuberculosis \u2014 an acid-fast organism with a waxy capsule that resists phagocytic destruction by macrophages. Transmitted via inhaled airborne droplets."},
            {type:"p",text:"Forms:"},
            {type:"ul",items:[
              ["Latent TB:"," healthy immune system walls off the organism in a granuloma; asymptomatic, non-contagious; ~10%/year risk of reactivation"],
              ["Reactivation TB:"," breakdown in cellular immunity lets TB escape granuloma; causes apical cavitation on X-ray"],
              ["Primary TB:"," immunocompromised patient cannot confine TB to granulomas; contagious"],
              ["Disseminated (miliary) TB:"," spread to liver, kidneys, bone (Pott's disease), spleen, meninges; miliary pattern on X-ray"]
            ]}
          ]
        },
        { id:"tb-dx", title:"TB \u2014 Diagnostics (Mantoux/PPD)",
          content:[
            {type:"p",text:"The Mantoux (PPD) skin test tests for exposure: 0.1 mL tuberculin injected intradermally on the volar forearm; read at 48\u201372 hours. Induration (not redness) is the positive marker:"},
            {type:"ul",items:[
              ["5 mm or more:"," HIV+, immunocompromised, recent close TB contact, immunosuppressive meds"],
              ["10 mm or more:"," age under 4, high-risk occupation/exposure, IVDA, DM, end-stage renal disease"],
              ["15 mm or more:"," positive in anyone, even without risk factors"]
            ]},
            {type:"p",text:"If PPD or CXR is positive \u2192 sputum gram stain and culture. Active TB: sputum gram stain, sputum culture, plus or minus PCR."}
          ]
        },
        { id:"bronchitis", title:"Bronchitis (Acute & Chronic)",
          content:[
            {type:"p",text:"Acute bronchitis: tracheobronchitis from upper respiratory infection. Initially viral; if symptoms persist more than 2 weeks, consider secondary bacterial infection."},
            {type:"p",text:"Chronic bronchitis: smoking or other irritants cause permanent changes in respiratory cells and pulmonary vasculature. Clinically defined as productive cough for at least 3 months per year for 2 consecutive years \u2014 one of the two COPD subtypes."}
          ]
        },
        { id:"bronchiectasis", title:"Bronchiectasis",
          content:[
            {type:"p",text:"A pathologic process where recurrent infection and inflammation destroy the bronchial wall, resulting in permanently dilated bronchial segments. These dilated segments retain mucus, perpetuating repeated lung infections."},
            {type:"p",text:"Classic presentation: daily purulent cough with mucus production, lasting months to years."}
          ]
        },
        { id:"bronchiolitis", title:"Bronchiolitis & RSV",
          content:[
            {type:"p",text:"Bronchiolitis: lower respiratory tract infection in infants and children under 2 years old. Viruses infect terminal bronchiolar epithelial cells \u2192 inflammation in small bronchi and bronchioles. Most commonly caused by RSV. Presents with fever, cough, respiratory distress. Most recover with supportive care; monitor for apnea and respiratory failure."},
            {type:"p",text:"RSV: RNA virus (Pneumoviridae family). Subtype A causes more severe disease. Extends to alveolar pneumocytes \u2192 bronchiolitis, bronchospasm, pneumonia, and acute respiratory failure in children. Adults generally tolerate it as a URI, but immunocompromised patients are at risk for respiratory failure."}
          ]
        }
      ]
    },
    {
      id:"restrictive", name:"Restrictive Lung Diseases",
      cards:[
        { id:"ipf", title:"Idiopathic Pulmonary Fibrosis (IPF)",
          content:[
            {type:"p",text:"A chronic, progressive fibrotic disorder of the lower respiratory tract. The disease process involves: abnormal mesenchymal cell proliferation, varying degrees of fibrosis, patchy chronic inflammation, and an unremitting fibrotic response with no evidence of epithelial repair. Injury leads to intra-alveolar exudate and alveolar collapse."},
            {type:"p",text:"Demographics: typically adults over 40 years old, often presenting after age 60."},
            {type:"p",text:"Associated factors: smoking, chronic viral infections, environmental pollutants, chronic aspiration, genetics."},
            {type:"p",text:"Symptoms: dyspnea on exertion and nonproductive cough over months. Signs: bibasilar crackles; digital clubbing in advanced disease."},
            {type:"p",text:"Diagnosis: HRCT showing peripheral/basilar predominant opacities with honeycombing; lung biopsy."}
          ]
        },
        { id:"pneumoconiosis", title:"Pneumoconiosis",
          content:[
            {type:"p",text:"A type of pulmonary fibrosis caused by inhaled environmental dusts and toxins that damage lung connective tissue, progressively impairing gas diffusion and exchange."},
            {type:"ul",items:[
              ["Silicosis:"," exposure to crystalline silica \u2014 mining and coal workers"],
              ["Asbestosis:"," exposure to asbestos fibers \u2014 also strongly linked to mesothelioma"]
            ]}
          ]
        },
        { id:"sarcoidosis", title:"Sarcoidosis",
          content:[
            {type:"p",text:"A multisystem granulomatous disorder of unknown etiology. The lungs are the most commonly affected organ, where it causes bilateral hilar adenopathy."},
            {type:"p",text:"Symptoms: dry cough, chest pain, shortness of breath."},
            {type:"p",text:"Management: glucocorticoids; methotrexate for refractory cases. Also causes contraction atelectasis via scarring of lung parenchyma."}
          ]
        }
      ]
    },
    {
      id:"obstructive", name:"Obstructive Lung Diseases",
      cards:[
        { id:"copd-emphysema", title:"COPD \u2014 Emphysema (Pink Puffers)",
          content:[
            {type:"p",text:"Emphysema is one of the two COPD subtypes. Pathophysiology:"},
            {type:"ul",items:[
              "Destruction and dilatation of alveolar walls",
              "Coalescence of terminal bronchioles",
              "Loss of elastic recoil \u2192 air trapping",
              ["Minimal hypoxia but significant CO\u2082 retention"," from decreased air exchange surface area"],
              ["Patients use accessory muscles"," to breathe; lose weight from increased work of breathing"]
            ]},
            {type:"note",text:"Pink puffers: tendency to hyperventilate (puffing) to compensate, maintaining relatively normal oxygenation (remaining pink)."}
          ]
        },
        { id:"copd-chronic-bronchitis", title:"COPD \u2014 Chronic Bronchitis (Blue Bloaters)",
          content:[
            {type:"p",text:"Chronic bronchitis is the second COPD subtype. Pathophysiology:"},
            {type:"ul",items:[
              ["Inflamed bronchi with large volumes of mucus"," \u2192 V/Q mismatch"],
              ["Significant hypoxia"," and retained CO\u2082"],
              "Right heart overworks \u2192 cor pulmonale \u2192 peripheral edema",
              ["Mucus predisposes"," to repeated respiratory infections"]
            ]},
            {type:"note",text:"Blue bloaters: cyanotic (blue) from hypoxia, and edematous (bloated) from right heart failure."}
          ]
        },
        { id:"asthma", title:"Asthma",
          content:[
            {type:"p",text:"A condition of reversible bronchospasm with hyperresponsive airways. Pathophysiology involves:"},
            {type:"ul",items:[
              ["Bronchospasm"," (reversible smooth muscle contraction)"],
              ["Increased mucus"," \u2192 bronchial obstruction"],
              "Bronchial and bronchiolar edema",
              ["Mediators: IgE, histamine, leukotrienes"," and other mast cell/humoral mediators"]
            ]},
            {type:"p",text:"Triggers: allergens, cold air, exercise, aspirin, respiratory infections."},
            {type:"p",text:"Treatment targets: bronchospasm (SABAs, LABAs, anticholinergics) + mucus/edema (corticosteroids \u2014 inhaled or oral)."}
          ]
        },
        { id:"cystic-fibrosis", title:"Cystic Fibrosis",
          content:[
            {type:"p",text:"A multisystem genetic disease. The primary cause of morbidity and mortality is progressive lung disease."},
            {type:"p",text:"Core defect: abnormal transport of chloride and sodium across secretory epithelia \u2192 thickened, viscous secretions in bronchi \u2192 chronic airway obstruction and respiratory infections."},
            {type:"p",text:"Patients are particularly prone to Pseudomonas aeruginosa colonization. Progressive pulmonary colonization leads to neutrophil-driven inflammation and further damage."},
            {type:"p",text:"Diagnosis: genetic testing / prenatal ultrasound; infants may present with meconium ileus; persistent productive cough and obstructive pattern on PFTs."},
            {type:"p",text:"Management: airway clearance, chest physiotherapy, aerobic exercise, bronchodilators, anti-inflammatory therapy, antibiotics for acute infections."}
          ]
        }
      ]
    },
    {
      id:"pharmacology", name:"COPD & Asthma Pharmacology",
      cards:[
        { id:"albuterol", title:"Albuterol (Proventil) \u2014 SABA",
          content:[
            {type:"p",text:"Class: Short-Acting Beta Agonist (SABA)"},
            {type:"p",text:"Indication: Rescue inhaler for acute bronchospasm in asthma and COPD."},
            {type:"p",text:"Mechanism: Relaxes bronchial smooth muscle by short-acting on beta-2 receptors \u2192 bronchodilation."},
            {type:"p",text:"Side effects: tachycardia, hypertension, excitement/anxiety, tremors."}
          ]
        },
        { id:"salmeterol", title:"Salmeterol (Serevent) \u2014 LABA",
          content:[
            {type:"p",text:"Class: Long-Acting Beta Agonist (LABA)"},
            {type:"p",text:"Indications: COPD maintenance (monotherapy OK); asthma as adjunctive therapy only \u2014 never monotherapy without ICS."},
            {type:"p",text:"Mechanism: Relaxes bronchial smooth muscle via long-acting selective beta-2 receptor stimulation."},
            {type:"p",text:"Side effects: headaches, hypertension."},
            {type:"p",text:"Contraindications: monotherapy for asthma; status asthmaticus; acute COPD exacerbation."}
          ]
        },
        { id:"fluticasone", title:"Fluticasone (Flovent) \u2014 ICS",
          content:[
            {type:"p",text:"Class: Inhaled Corticosteroid (ICS)"},
            {type:"p",text:"Indications: Asthma maintenance (monotherapy OK); COPD as adjunctive therapy only."},
            {type:"p",text:"Mechanism: Potent local vasoconstrictor and anti-inflammatory effect \u2014 works by direct local action in the airway."},
            {type:"p",text:"Side effects: oral candidiasis, sinus infections, voice changes, fatigue, arthralgia."},
            {type:"p",text:"Contraindications: status asthmaticus; acute COPD exacerbation."}
          ]
        },
        { id:"ipratropium", title:"Ipratropium (Atrovent) \u2014 Anticholinergic",
          content:[
            {type:"p",text:"Class: Anticholinergic (nebulizer or inhaler)"},
            {type:"p",text:"Indication: Rescue therapy for acute bronchospasm in asthma and COPD."},
            {type:"p",text:"Mechanism: Blocks acetylcholine at parasympathetic sites in bronchial smooth muscle \u2192 bronchodilation."},
            {type:"p",text:"Side effects: bronchitis, headaches."}
          ]
        },
        { id:"methylpred", title:"Methylprednisolone (Solumedrol) \u2014 IV/IM Corticosteroid",
          content:[
            {type:"p",text:"Class: Systemic corticosteroid \u2014 IV or IM"},
            {type:"p",text:"Indication: Moderate to severe exacerbations of asthma and COPD."},
            {type:"p",text:"Mechanism: Decreases inflammation by suppressing migration of polymorphonuclear leukocytes and reversing increased capillary permeability."}
          ]
        },
        { id:"prednisone", title:"Prednisone \u2014 Oral Corticosteroid",
          content:[
            {type:"p",text:"Class: Systemic corticosteroid \u2014 oral"},
            {type:"p",text:"Indications: Asthma and COPD exacerbations. Mild exacerbation: 3-to-5-day burst. Moderate-to-severe: tapering dose. Can also be used for chronic maintenance."},
            {type:"p",text:"Mechanism: Same as methylprednisolone \u2014 suppresses PMN migration and reverses capillary permeability."}
          ]
        }
      ]
    },
    {
      id:"circulation", name:"Pulmonary Circulation Diseases",
      cards:[
        { id:"pulm-htn", title:"Pulmonary Hypertension",
          content:[
            {type:"p",text:"The pulmonary circuit is normally low-pressure. Any condition causing deoxygenation or elevated pulmonary artery pressures leads to hypertrophy of the pulmonary arteries and compensatory right ventricular hypertrophy."},
            {type:"p",text:"Common causes: left-sided heart failure (most common), COPD, recurrent PE, collagen vascular disorders (scleroderma), HIV."},
            {type:"p",text:"Symptoms: exertional dyspnea, fatigue, exertional chest pain, exertional syncope, weight gain, anorexia."},
            {type:"p",text:"Signs: increased JVP, peripheral edema, ascites, cardiac murmur."}
          ]
        },
        { id:"cor-pulmonale", title:"Cor Pulmonale",
          content:[
            {type:"p",text:"A complication of pulmonary hypertension: the chronically elevated pulmonary artery pressure leads to altered structure (hypertrophy, dilatation) and/or impaired function of the right ventricle."},
            {type:"p",text:"This is the mechanism of peripheral edema in blue bloaters with chronic bronchitis \u2014 the right heart eventually fails from working against a high-resistance pulmonary circuit."}
          ]
        },
        { id:"pe", title:"Pulmonary Embolism (PE)",
          content:[
            {type:"p",text:"A form of venous thromboembolism (VTE). A thrombus (or less commonly tumor, air, or fat) originating elsewhere \u2014 typically a lower extremity DVT \u2014 travels to obstruct a pulmonary artery."},
            {type:"p",text:"Consequences: lung infarction, impaired gas exchange (altered V/Q ratio), cardiovascular compromise (decreased stroke volume and cardiac output)."},
            {type:"p",text:"Symptoms: pleuritic chest pain, dyspnea, hemoptysis, cough, unilateral leg edema (DVT), syncope. May be asymptomatic."},
            {type:"p",text:"Signs: tachycardia, tachypnea, arrhythmia, shock."}
          ]
        },
        { id:"pe-dx-rx", title:"PE \u2014 Diagnostics & Treatment",
          content:[
            {type:"p",text:"Wells criteria stratifies pre-test probability (low/medium/high):"},
            {type:"ul",items:[
              ["Low-risk:"," rule out PE"],
              ["Medium-risk:"," D-dimer; if low \u2192 rule out; if high \u2192 CTA or V/Q scan"],
              ["High-risk:"," CTA or V/Q scan directly"]
            ]},
            {type:"p",text:"Treatment:"},
            {type:"ul",items:[
              ["Unstable:"," resuscitation"],
              ["Stable, no contraindications:"," thrombolysis and/or anticoagulation"],
              ["Contraindication to anticoagulation:"," IVC filter"]
            ]}
          ]
        }
      ]
    },
    {
      id:"other", name:"Other Pulmonary Conditions",
      cards:[
        { id:"sleep-apnea", title:"Sleep Apnea",
          content:[
            {type:"p",text:"Recurrent obstruction of the pharyngeal airway during sleep causing hypoxia and sleep fragmentation. During normal sleep: decreased upper airway muscle activity, decreased pharyngeal caliber, decreased ventilation, decreased thoracic dynamics, and increased pCO\u2082."},
            {type:"p",text:"The spectrum: sustained normal breathing \u2192 intermediate obstruction (snoring) \u2192 complete airway collapse (apnea)."},
            {type:"p",text:"Risk factors: older age, obesity, male sex, smoking, family history, chronic congestion."},
            {type:"p",text:"Symptoms: daytime sleepiness, headaches; bed partner reports snoring or gasping."}
          ]
        },
        { id:"foreign-body", title:"Foreign Body Aspiration",
          content:[
            {type:"p",text:"More common in children than adults. Most often caused by nuts, seeds, and organic material. Organic material tends to cause worse inflammation; inorganic material tends to cause direct airway injury."},
            {type:"p",text:"Presentation depends on location:"},
            {type:"ul",items:[
              ["Small/lower airway obstruction:"," chronic cough"],
              ["Large/upper airway (oropharynx, trachea):"," acute airway emergency"]
            ]},
            {type:"p",text:"Treatment: airway first; then laryngoscopy and/or bronchoscopy for both diagnosis and removal. 30% of foreign bodies can be missed on imaging alone."}
          ]
        },
        { id:"ards", title:"ARDS \u2014 Acute Respiratory Distress Syndrome",
          content:[
            {type:"p",text:"Two major etiologies: systemic shock (reduced pulmonary blood flow, leaky capillaries) or direct insult (gastric aspiration, toxic inhalation, SARS/COVID)."},
            {type:"p",text:"Pathophysiology:"},
            {type:"ul",items:[
              ["Cytokine storm"," \u2192 endothelial leak \u2192 pulmonary capillaries become permeable \u2192 alveoli become boggy, surfactant is washed away"],
              ["Alveoli collapse on exhalation"," from worsening compliance"],
              ["Fibrinogen-rich fluid leaks in"," \u2192 clots form in the hyaline membrane \u2192 impaired gas exchange"]
            ]},
            {type:"p",text:"Signs: tachypnea, tachycardia, diffuse crackles, confusion, cyanosis, diaphoresis."},
            {type:"p",text:"Treatment: mechanical ventilation + hemodynamic monitoring. Often fatal from respiratory failure."}
          ]
        }
      ]
    },
    {
      id:"neoplasms", name:"Pulmonary Neoplasms",
      cards:[
        { id:"pulm-nodule", title:"Pulmonary Nodule",
          content:[
            {type:"p",text:"A small (30 mm or less), well-defined lesion completely surrounded by pulmonary parenchyma. Most are discovered incidentally on imaging ordered for another reason. All require follow-up to monitor size and shape over time."}
          ]
        },
        { id:"carcinoid", title:"Pulmonary Carcinoid Tumor",
          content:[
            {type:"p",text:"Uncommon pulmonary tumors arising from neuroendocrine cells. The GI tract is the most common site; lungs are second. Symptoms may include cough, wheezing, hemoptysis, chest pain, or recurrent pneumonia. Treatment: surgical resection, sometimes with surrounding lymph nodes."}
          ]
        },
        { id:"lung-ca", title:"Lung Carcinomas",
          content:[
            {type:"p",text:"The four major types:"},
            {type:"ul",items:[
              ["Adenocarcinoma:"," smaller airways (alveoli); affects glandular cells; most common in non-smokers"],
              ["Squamous cell carcinoma:"," central lung / main bronchi; affects squamous cells; strongly associated with smoking"],
              ["Large cell carcinoma:"," undifferentiated malignant neoplasms; strongly associated with smoking"],
              ["Small cell carcinoma:"," very aggressive, highly malignant; strongly associated with smoking; responds to chemo but recurs"]
            ]}
          ]
        },
        { id:"mesothelioma-mediastinal", title:"Mesothelioma & Mediastinal Tumors",
          content:[
            {type:"p",text:"Mesothelioma: a malignancy of the pleural (or peritoneal) mesothelial cells. Strongly and specifically associated with asbestos exposure."},
            {type:"p",text:"Other mediastinal tumors: lymphoma, thymoma, neurofibroma, thyroid tumors \u2014 each arising from different mediastinal structures and requiring distinct workup."}
          ]
        }
      ]
    }
  ]
});
