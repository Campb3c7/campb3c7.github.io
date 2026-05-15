STUDYAPP.register({
  id: "medicine-reference",
  name: "Medicine Reference Guide",
  description: "Hematologic, pulmonary, GI, and cardiovascular pharmacology — mechanisms, indications, and side effects",
  sections: [
    {
      id: "hematologic-pharm",
      name: "Hematologic Pharmacology",
      cards: [
        {
          id: "oral-iron",
          title: "Ferrous Sulfate / Ferrous Gluconate \u2014 Oral Iron",
          content: [
            {type:"p",text:"Indicated for iron deficiency anemia (microcytic anemia). Common causes: inadequate iron intake (vegetarians/vegans, breastfed infants, malnutrition), chronic low-grade blood loss (heavy menses, GI bleeding in men/elderly), and periods of rapid growth in infants."},
            {type:"p",text:"Symptoms: microcytosis progressing to microcytic anemia, fatigue, pallor, dyspnea on exertion, and pica (craving starch, clay, dirt, or ice)."},
            {type:"p",text:"Workup:"},
            {type:"ul",items:[
              ["CBC:"," low hemoglobin/hematocrit, low MCV (<85), elevated RDW"],
              ["Iron studies:"," low serum iron, low ferritin, high TIBC"],
              ["Peripheral smear:"," hypochromic, microcytic RBCs"]
            ]},
            {type:"p",text:"How it works: Replaces depleted iron stores needed for hemoglobin synthesis in the bone marrow. Ferrous sulfate is preferred; ferrous gluconate is equivalent."},
            {type:"note",text:"Take with vitamin C (pill or juice) to improve absorption. Avoid enteric-coated formulations due to poor absorption. Side effects: constipation and gastric mucosal irritation."}
          ]
        },
        {
          id: "iv-iron",
          title: "IV Iron Sucrose (Venofer)",
          content: [
            {type:"p",text:"Same indication as oral iron \u2014 iron deficiency anemia \u2014 but used when oral iron is poorly tolerated."},
            {type:"p",text:"How it works: Delivers iron directly into the bloodstream intravenously, bypassing GI absorption entirely. Corrects anemia more quickly than oral iron."},
            {type:"ul",items:[
              ["Low anaphylaxis risk"," compared to older IV iron formulations, essentially replacing them"],
              ["More expensive"," than oral iron"],
              ["Requires monitoring"," during administration as it can cause hypotension"]
            ]}
          ]
        },
        {
          id: "aspirin-antiplatelet",
          title: "Aspirin 81 mg \u2014 Antiplatelet",
          content: [
            {type:"p",text:"Indicated for prevention of arterial clot formation in patients with established atherosclerotic disease: CAD, stroke/TIA, or PAD. Arterial clots are rich in activated platelets held together by cross-linked fibrin."},
            {type:"p",text:"How it works: Irreversibly inhibits cyclooxygenase (COX), which is necessary for thromboxane A2 synthesis. Thromboxane A2 is the chemical platelets release to activate other nearby platelets. By blocking this, aspirin prevents the platelet activation cascade needed to form arterial clots."},
            {type:"note",text:"Not recommended unless a clear indication exists (CAD, stroke, PAD) due to the risk of GI bleeding. Sometimes combined with a thienopyridine as Dual Antiplatelet Therapy (DAPT)."}
          ]
        },
        {
          id: "clopidogrel",
          title: "Clopidogrel (Plavix) \u2014 Thienopyridine / P2Y12 Inhibitor",
          content: [
            {type:"p",text:"Indicated for prevention of arterial clot formation in CAD, post-stent placement, stroke/TIA, and PAD. Used alone or combined with aspirin as Dual Antiplatelet Therapy (DAPT)."},
            {type:"p",text:"How it works: Inhibits activation of the platelet's GPIIb/IIIa receptor, preventing one platelet from binding to another. DAPT (aspirin + clopidogrel) leverages two different mechanisms of action for additive platelet inhibition \u2014 used when maximal platelet inhibition is needed to prevent an arterial clotting event."}
          ]
        },
        {
          id: "dabigatran",
          title: "Dabigatran (Pradaxa) \u2014 Direct Thrombin Inhibitor (DOAC)",
          content: [
            {type:"p",text:"Indicated for venous thromboembolism (DVT, PE) treatment and prevention, and atrial fibrillation stroke prevention. VTE causes include Virchow's Triad: blood flow stasis, vascular endothelial injury, and hypercoagulability (cancer, immobility, pregnancy, obesity, surgery, inherited thrombophilias)."},
            {type:"p",text:"How it works: Directly inhibits thrombin, which prevents the conversion of fibrinogen to fibrin. Fibrin is the meshwork that stabilizes a blood clot. By blocking thrombin, dabigatran prevents new clot formation."},
            {type:"ul",items:[
              "Taken orally, immediately effective",
              "Minimal effect on platelets",
              "Classified as a DOAC/NOAC (Direct/Novel Oral Anticoagulant)"
            ]}
          ]
        },
        {
          id: "apixaban",
          title: "Apixaban (Eliquis) \u2014 Factor Xa Inhibitor (DOAC)",
          content: [
            {type:"p",text:"Same indications as dabigatran: VTE treatment/prevention and AFib stroke prevention."},
            {type:"p",text:"How it works: Directly inactivates Factor Xa, which sits at the convergence of the intrinsic and extrinsic coagulation pathways. Factor Xa normally cleaves prothrombin into thrombin \u2014 by blocking Factor Xa, apixaban halts the coagulation cascade before thrombin is ever formed."},
            {type:"ul",items:[
              "Taken orally, immediately effective",
              "Minimal effect on platelets",
              "Classified as a DOAC/NOAC"
            ]}
          ]
        },
        {
          id: "ufh",
          title: "Unfractionated Heparin (UFH)",
          content: [
            {type:"p",text:"Indicated for acute VTE (DVT/PE) treatment and thrombosis prophylaxis in hospitalized patients."},
            {type:"p",text:"How it works: Accelerates Anti-Thrombin III's (ATIII) ability to inactivate thrombin and other clotting factors, thereby preventing the conversion of fibrinogen to fibrin."},
            {type:"ul",items:[
              ["Therapeutic:"," IV drip; dose monitored with aPTT or anti-Xa levels; requires close titration"],
              ["Prophylactic:"," subcutaneous injection; fixed dosing"],
              ["Minimal effect"," on platelets"]
            ]},
            {type:"note",text:"The aPTT (partial thromboplastin time) is used to monitor therapeutic dosing. Requires close monitoring because dosing must be continuously titrated."}
          ]
        },
        {
          id: "enoxaparin",
          title: "Enoxaparin (Lovenox) \u2014 Low Molecular Weight Heparin (LMWH)",
          content: [
            {type:"p",text:"Indicated for VTE treatment, VTE prophylaxis, and bridge therapy. Same general indications as UFH."},
            {type:"p",text:"How it works: A refined form of heparin containing only the smaller molecular weight fractions. Works by accelerating ATIII's ability to inhibit Factor Xa specifically, shutting down the coagulation cascade."},
            {type:"ul",items:[
              ["Does NOT require monitoring"," like UFH \u2014 weight-based dosing is predictable"],
              ["Therapeutic:"," weight-based subcutaneous dosing"],
              ["Prophylactic:"," standard subcutaneous dose"]
            ]},
            {type:"note",text:"Cannot be used therapeutically in CKD stage IV or V (GFR <30) due to unpredictable pharmacokinetics and accumulation risk from impaired renal clearance."}
          ]
        },
        {
          id: "warfarin",
          title: "Warfarin (Coumadin) \u2014 Vitamin K Antagonist (VKA)",
          content: [
            {type:"p",text:"Indicated for chronic VTE prevention, atrial fibrillation stroke prophylaxis, and mechanical heart valves. Takes approximately 48 hours to become effective."},
            {type:"p",text:"How it works: A Vitamin K Antagonist that decreases the liver's ability to synthesize Vitamin K-dependent clotting factors (Factors II, VII, IX, X, Protein C and S). By blocking the recycling of Vitamin K, these clotting factors are gradually depleted over 48 hours, making the patient progressively less able to form a blood clot."},
            {type:"note",text:"Narrow therapeutic index with numerous drug-drug interactions (inducers and inhibitors of its metabolism). Dosing is monitored using the PT/INR (prothrombin time)."}
          ]
        },
        {
          id: "b12-injection",
          title: "Parenteral B12 (Cyanocobalamin IM) \u2014 Pernicious Anemia",
          content: [
            {type:"p",text:"Indicated for pernicious anemia / B12 deficiency with macrocytic anemia. Causes include pernicious anemia (autoimmune destruction of parietal cells \u2192 no intrinsic factor \u2192 no B12 absorption), IBD or terminal ileum resection, and strict vegetarian/vegan diet (dietary deficiency only)."},
            {type:"p",text:"Symptoms: macrocytic anemia (fatigue, pallor, dyspnea); neurological (paresthesias, muscle weakness, numbness, gait ataxia); glossitis (smooth tongue)."},
            {type:"p",text:"Workup: CBC with elevated MCV (>100), low serum B12, elevated methylmalonic acid and homocysteine, anti-intrinsic factor and anti-parietal cell antibodies."},
            {type:"p",text:"How it works: Bypasses the defective GI absorption pathway by delivering B12 directly into the muscle. B12 is essential for DNA synthesis and RBC maturation \u2014 without it, RBCs accumulate excess cytoplasm relative to nuclear development, producing large macrocytic cells. Also corrects neurological manifestations by supporting myelin sheath synthesis."},
            {type:"note",text:"Pernicious anemia cannot be treated orally since absorption is blocked. Monthly IM injections are required lifelong. Oral B12 supplementation works only for dietary deficiency."}
          ]
        }
      ]
    },
    {
      id: "pulmonary-pharm",
      name: "Pulmonary Pharmacology",
      cards: [
        {
          id: "albuterol-ref",
          title: "Albuterol (Proventil) \u2014 SABA",
          content: [
            {type:"p",text:"Rescue inhaler for acute bronchospasm in asthma and COPD."},
            {type:"p",text:"Asthma: hyperresponsive airways triggered by allergens, cold air, exercise, aspirin, or respiratory infections. IgE, histamine, leukotrienes, and mast cell mediators cause bronchoconstriction, mucus, and edema."},
            {type:"p",text:"COPD: emphysema (cigarette smoking destroys alveolar walls, loss of elastic recoil, air trapping) or chronic bronchitis (bronchial inflammation with large mucus volumes, V/Q mismatch)."},
            {type:"p",text:"How it works: Relaxes bronchial smooth muscle by acting on beta-2 adrenergic receptors \u2014 short-acting bronchodilation."},
            {type:"note",text:"Side effects: tachycardia, hypertension, excitement/anxiety, tremors (from beta-2 stimulation extending beyond the airways)."}
          ]
        },
        {
          id: "salmeterol-ref",
          title: "Salmeterol (Serevent) \u2014 LABA",
          content: [
            {type:"p",text:"Maintenance/controller therapy for COPD (monotherapy OK) and asthma (adjunctive only, never monotherapy). NOT for acute rescue."},
            {type:"p",text:"How it works: Relaxes bronchial smooth muscle by acting selectively on beta-2 receptors \u2014 long-acting duration provides sustained bronchodilation for maintenance."},
            {type:"note",text:"Contraindicated as monotherapy for asthma (must be combined with an ICS). Must NOT be used for acute exacerbations or status asthmaticus. Side effects: headaches, hypertension."}
          ]
        },
        {
          id: "fluticasone-ref",
          title: "Fluticasone (Flovent) \u2014 Inhaled Corticosteroid (ICS)",
          content: [
            {type:"p",text:"Maintenance/controller therapy for asthma (monotherapy OK) and COPD (adjunctive only). NOT for acute rescue."},
            {type:"p",text:"How it works: Potent vasoconstrictor and anti-inflammatory agent delivered directly to the airways. Reduces bronchial and bronchiolar edema and decreases mucus production by suppressing the underlying inflammatory response. Effectiveness is due to direct local effect rather than systemic absorption."},
            {type:"note",text:"Contraindicated in status asthmaticus or acute COPD exacerbation. Side effects: oral candidiasis, sinus infections, voice changes, fatigue, arthralgia. Patients should rinse mouth after each use."}
          ]
        },
        {
          id: "ipratropium-ref",
          title: "Ipratropium (Atrovent) \u2014 Anticholinergic",
          content: [
            {type:"p",text:"Rescue nebulizer or inhaler for acute bronchospasm in asthma and COPD. Often used together with albuterol in an acute setting."},
            {type:"p",text:"How it works: Blocks the action of acetylcholine at parasympathetic (muscarinic) sites in bronchial smooth muscle, causing bronchodilation. The parasympathetic nervous system normally promotes bronchoconstriction and mucus secretion \u2014 blocking it produces the opposite effect."},
            {type:"note",text:"Side effects: bronchitis, headaches."}
          ]
        },
        {
          id: "methylpred-ref",
          title: "Methylprednisolone (Solumedrol) \u2014 IV/IM Corticosteroid",
          content: [
            {type:"p",text:"IV or IM formulation for hospitalized patients with moderate-to-severe exacerbations of asthma or COPD."},
            {type:"p",text:"How it works: Decreases inflammation systemically by suppressing the migration of polymorphonuclear leukocytes (neutrophils) and reversing increased capillary permeability. This reduces the bronchial edema and inflammatory response driving the exacerbation."},
            {type:"note",text:"Often given IV at high dose for a few days, then transitioned to oral prednisone for tapering."}
          ]
        },
        {
          id: "prednisone-ref",
          title: "Prednisone \u2014 Oral Corticosteroid",
          content: [
            {type:"p",text:"Used for mild-to-severe asthma and COPD exacerbations, and in some cases chronic maintenance."},
            {type:"ul",items:[
              ["Mild exacerbation:"," 3-to-5-day burst"],
              ["Moderate-to-severe:"," tapering dosing schedule"]
            ]},
            {type:"p",text:"How it works: Same mechanism as methylprednisolone \u2014 suppresses polymorphonuclear leukocyte migration and reverses increased capillary permeability \u2014 but administered orally. Used as step-down therapy from IV Solumedrol, or as outpatient treatment. Also used for chronic maintenance in some patients with severe, difficult-to-control disease."}
          ]
        }
      ]
    },
    {
      id: "cardiovascular-pharm",
      name: "Cardiovascular Pharmacology",
      cards: [
        {
          id: "atropine",
          title: "Atropine (Atropen) \u2014 Anticholinergic / Muscarinic Antagonist",
          content: [
            {type:"p",text:"Indicated for symptomatic bradycardia (HR <60 bpm with hemodynamic compromise). Causes: increased parasympathetic (vagal) tone, medications (beta-blockers, CCBs, digoxin), sick sinus syndrome, AV block, acute inferior MI."},
            {type:"p",text:"Symptoms: dizziness, lightheadedness, syncope, fatigue, hypotension, chest pain, dyspnea."},
            {type:"p",text:"How it works: Binds to muscarinic cholinergic receptors in the CNS, cardiac tissue, and smooth muscle, blocking acetylcholine from binding and reducing parasympathetic tone. This leads to a rise in relative sympathetic tone \u2014 increasing heart rate and cardiac output."},
            {type:"note",text:"IV or IM for acute symptomatic bradycardia. Transcutaneous pacing if refractory to atropine."}
          ]
        },
        {
          id: "adenosine",
          title: "Adenosine (Adenocard) \u2014 Antiarrhythmic",
          content: [
            {type:"p",text:"First-line pharmacologic treatment for supraventricular tachycardia (SVT) \u2014 specifically reentry tachycardia. Reentry circuit: two pathways (fast and slow) in the AV node where a premature beat initiates a circular retrograde circuit."},
            {type:"p",text:"Symptoms: abrupt onset palpitations, heart rates 160\u2013220+ bpm, dizziness, shortness of breath, chest pain, low BP from decreased cardiac output."},
            {type:"p",text:"How it works: Acts on receptors of the AV node to slow conduction and interrupt the reentry circuit, restoring sinus rhythm. Activates specific potassium channels (driving K\u207a outside cells to hyperpolarize the resting membrane potential) and inhibits calcium influx, prolonging the AV nodal refractory period. This effectively resets the circuit."},
            {type:"note",text:"Very short-acting drug (half-life ~10 seconds). Vagal maneuvers (Valsalva) are attempted before adenosine."}
          ]
        },
        {
          id: "amiodarone",
          title: "Amiodarone (Pacerone) \u2014 Antiarrhythmic",
          content: [
            {type:"p",text:"Indicated for ventricular tachycardia (V-tach) and atrial fibrillation. V-tach causes: ectopic ventricular focus generating sustained rapid contractions, often from hypoxia, hypokalemia, cardiac ischemia, cardiomyopathy, or structural heart disease."},
            {type:"p",text:"Symptoms: palpitations, dizziness, hypotension, syncope. In pulseless V-tach: cardiac arrest."},
            {type:"p",text:"How it works: Primarily acts as a potassium channel blocker \u2014 slows the outward movement of potassium current from cardiac cells, prolonging the action potential duration and thus increasing the time needed before the cell can reset and fire again. This extended refractory period suppresses abnormal reentry and ectopic firing."},
            {type:"note",text:"Also has some sodium, calcium, and beta-blocking properties. IV for acute V-tach; oral for chronic suppression."}
          ]
        },
        {
          id: "diltiazem",
          title: "Diltiazem (Cardizem) \u2014 Non-Dihydropyridine Calcium Channel Blocker",
          content: [
            {type:"p",text:"Indicated for atrial fibrillation with rapid ventricular response (AFib with RVR) for rate control. AFib occurs when loss of synchrony between atrial cells causes quivering atria and irregular ventricular contractions. RVR prevents efficient stroke volume, decreasing cardiac output."},
            {type:"p",text:"Causes of AFib: hypertension, heart disease, hyperthyroidism, alcohol use, pulmonary disease."},
            {type:"p",text:"How it works: Slows the influx of calcium into cardiac cells during depolarization, specifically targeting the SA and AV nodes. Lowers heart rate (negative chronotropic) and slows AV nodal conduction, reducing impulses that reach the ventricles. Also has a negative inotropic effect (weakens contractility) and promotes coronary smooth muscle relaxation."},
            {type:"note",text:"ECG: irregularly irregular rhythm, absent P waves, narrow QRS. IV for acute rate control; oral for maintenance."}
          ]
        },
        {
          id: "nitroglycerin",
          title: "Nitroglycerin (Nitrostat) \u2014 Antianginal Agent",
          content: [
            {type:"p",text:"Indicated for angina pectoris (stable and unstable) and acute coronary syndrome (ACS). Coronary atherosclerosis reduces blood flow below metabolic demand. In ACS, ruptured plaque + thrombus causes acute near-complete occlusion."},
            {type:"p",text:"Symptoms: chest pain/pressure (often radiating to jaw or left arm), precipitated by exertion (stable) or at rest (unstable), diaphoresis, nausea, shortness of breath."},
            {type:"p",text:"How it works: Acts as a quick-acting vasodilator of the coronary vessels, directly increasing oxygen delivery to the ischemic myocardium. Additionally reduces myocardial oxygen demand by:"},
            {type:"ul",items:[
              ["Dilating systemic veins"," \u2192 reduces venous return and cardiac preload"],
              ["Dilating systemic arterioles"," \u2192 reduces arterial resistance and cardiac afterload"]
            ]},
            {type:"note",text:"This dual effect (more O\u2082 in, less O\u2082 demand) relieves ischemic chest pain. Sublingual NTG for acute anginal episodes; used in ACS alongside aspirin, anticoagulants, and possible PCI."}
          ]
        },
        {
          id: "aspirin-acs",
          title: "Aspirin (Chewable) \u2014 ACS Dose",
          content: [
            {type:"p",text:"Administered immediately upon suspicion of acute coronary syndrome (unstable angina, NSTEMI, or STEMI). Given as chewable aspirin for rapid absorption."},
            {type:"p",text:"How it works: Inhibits platelet aggregation by irreversibly inactivating the cyclooxygenase-1 (COX-1) enzyme that produces thromboxane A2 \u2014 a powerful promoter of platelet aggregation. By preventing further platelet activation, aspirin limits extension of the coronary thrombus."},
            {type:"note",text:"Administration as soon as ACS is suspected has been proven to decrease mortality. This is a higher, faster-acting dose than the daily 81 mg preventive dose \u2014 the chewable formulation matters."}
          ]
        },
        {
          id: "furosemide",
          title: "Furosemide (Lasix) \u2014 Loop Diuretic",
          content: [
            {type:"p",text:"Mainstay diuretic for acute decompensated heart failure (IV) and chronic management (oral). Heart failure causes: dilated cardiomyopathy, hypertension, valvular disease, ischemic heart disease."},
            {type:"p",text:"Symptoms: dyspnea on exertion and at rest, orthopnea, paroxysmal nocturnal dyspnea (PND), peripheral edema, weight gain, ascites, fatigue, pulmonary crackles, elevated JVP."},
            {type:"p",text:"How it works: Blocks reabsorption of sodium, chloride, and water in the Loop of Henle, causing a profound increase in urine output. This eliminates excess extracellular fluid, reducing the volume overload that leads to pulmonary and peripheral edema. Decreased fluid volume also decreases cardiac preload and wall tension, reducing the work of the heart."},
            {type:"note",text:"Workup includes BNP/NT-proBNP (elevated in HF), chest X-ray, echocardiogram, and BMP. Watch for hypokalemia \u2014 furosemide causes potassium wasting."}
          ]
        },
        {
          id: "lisinopril",
          title: "Lisinopril (Zestril) \u2014 ACE Inhibitor",
          content: [
            {type:"p",text:"First-line for hypertension (especially in patients with CKD, diabetes, or heart failure) and for post-MI cardiac remodeling prevention. Essential (primary) hypertension accounts for ~95% of cases and is multifactorial."},
            {type:"p",text:"How it works: Inhibits ACE (angiotensin-converting enzyme), preventing conversion of Angiotensin I \u2192 Angiotensin II (a potent vasoconstrictor). Results in:"},
            {type:"ul",items:[
              ["Reduced peripheral vasoconstriction"," \u2192 decreased afterload (improves cardiac pumping)"],
              ["Reduced aldosterone production"," \u2192 decreased Na\u207a and fluid reabsorption \u2192 diuresis"],
              ["Prevents cardiac remodeling"," (LVH/fibrosis) that contributes to diastolic dysfunction"]
            ]},
            {type:"note",text:"Monitor BMP \u2014 ACE inhibitors can raise K\u207a (risk of hyperkalemia) and creatinine. Dry cough is a common side effect from bradykinin accumulation; switch to an ARB if not tolerated."}
          ]
        },
        {
          id: "carvedilol",
          title: "Carvedilol (Coreg) \u2014 Mixed Alpha-1 and Beta Blocker",
          content: [
            {type:"p",text:"Added to stabilized heart failure patients already on an ACE inhibitor. Not started during active volume overload."},
            {type:"p",text:"How it works:"},
            {type:"ul",items:[
              ["Blocks \u03b21 and \u03b22 adrenergic receptors"," on cardiac muscle \u2192 prevents sympathetic-driven increases in heart rate, decreasing myocardial metabolic demand"],
              ["Blocks alpha-1 adrenergic receptors"," \u2192 relaxes peripheral vascular smooth muscle \u2192 reduces peripheral vascular resistance and blood pressure (reduces afterload)"]
            ]},
            {type:"p",text:"This combined blockade reduces cardiac workload and counteracts the harmful chronic sympathetic activation present in heart failure."}
          ]
        },
        {
          id: "hctz",
          title: "Hydrochlorothiazide (Microzide) \u2014 Thiazide Diuretic",
          content: [
            {type:"p",text:"First-line antihypertensive; often combined with other antihypertensive classes."},
            {type:"p",text:"How it works: Acts on the distal convoluted tubule of the nephron to prevent sodium reabsorption, promoting loss of water along with sodium. Decreasing total fluid volume lowers blood pressure. Most effective for uncomplicated essential hypertension."},
            {type:"note",text:"Side effects: hypokalemia, hyperglycemia, and hyperuricemia."}
          ]
        },
        {
          id: "amlodipine",
          title: "Amlodipine (Norvasc) \u2014 Dihydropyridine Calcium Channel Blocker",
          content: [
            {type:"p",text:"First-line antihypertensive; also used for stable angina."},
            {type:"p",text:"How it works: Directly acts on vascular smooth muscle to produce peripheral arterial vasodilation, reducing peripheral vascular resistance and blood pressure. Blocks calcium channels through which calcium normally enters smooth muscle cells to initiate contraction \u2014 reduced intracellular calcium leads to decreased contractility, increased relaxation, and vasodilation."},
            {type:"note",text:"Unlike diltiazem (non-dihydropyridine), amlodipine is more selective for vascular smooth muscle and has much less effect on the heart's conduction system. Does NOT slow heart rate."}
          ]
        },
        {
          id: "losartan",
          title: "Losartan (Cozaar) \u2014 Angiotensin II Receptor Blocker (ARB)",
          content: [
            {type:"p",text:"First-line antihypertensive for hypertension, heart failure, and CKD with proteinuria. Used when ACE inhibitors are not tolerated \u2014 most commonly due to ACE inhibitor-induced dry cough."},
            {type:"p",text:"How it works: Blocks binding of Angiotensin II to the AT1 receptor found in vascular smooth muscle and the adrenal glands. This:"},
            {type:"ul",items:[
              ["Blocks vasoconstriction"," \u2192 reduces blood pressure"],
              ["Decreases aldosterone production"," \u2192 less sodium and water reabsorption \u2192 diuresis"]
            ]},
            {type:"note",text:"Produces similar clinical effects to ACE inhibitors but WITHOUT the bradykinin accumulation responsible for the dry cough. Same monitoring considerations for K\u207a and creatinine."}
          ]
        },
        {
          id: "norepinephrine",
          title: "Norepinephrine (Levophed) \u2014 Vasopressor",
          content: [
            {type:"p",text:"First-line vasopressor for distributive (septic) shock \u2014 hypotension not responding to IV fluid resuscitation. Septic shock is caused by vasodilation from systemic infection (gram-negative bacteremia most common). Massive peripheral vasodilation exceeds blood volume capacity."},
            {type:"p",text:"Symptoms: hypotension (MAP <65), tachycardia, altered mental status, decreased urine output, warm/flushed skin (early septic shock), cold/clammy (late)."},
            {type:"p",text:"How it works: Predominantly stimulates alpha-1 and alpha-2 adrenergic receptors, causing potent peripheral arterial vasoconstriction to increase blood pressure (raises mean arterial pressure). Has less potent beta-1 receptor activity, which also slightly increases heart contractility and heart rate."},
            {type:"note",text:"Goal is to restore adequate perfusion pressure to vital organs. Requires arterial line for continuous BP monitoring in the ICU. Workup includes lactate, blood cultures, CBC, BMP, and coagulation studies."}
          ]
        }
      ]
    },
    {
      id: "gi-pharm",
      name: "Gastrointestinal Pharmacology",
      cards: [
        {
          id: "calcium-carbonate",
          title: "Calcium Carbonate (Tums) \u2014 Antacid",
          content: [
            {type:"p",text:"Indicated for GERD, acid reflux, and occasional heartburn. Causes: incompetent LES allowing gastric acid reflux, obesity, large meals, lying down after eating, certain foods (caffeine, alcohol, fatty foods), hiatal hernia."},
            {type:"p",text:"Symptoms: heartburn, acid regurgitation, chest pain (non-cardiac). Atypical: dysphagia, chronic cough, hoarseness."},
            {type:"p",text:"How it works: Contains calcium carbonate ions that chemically neutralize (soak up) the hydrochloric acid within the stomach, raising gastric pH and providing rapid symptomatic relief. This is a purely local, temporary effect with no systemic acid suppression."},
            {type:"note",text:"PRN only for occasional symptoms. If symptoms are near-daily, escalate to an H2 blocker or PPI. EGD is indicated if alarm symptoms (dysphagia, weight loss, bleeding) are present."}
          ]
        },
        {
          id: "famotidine-ref",
          title: "Famotidine (Pepcid) \u2014 H2 Blocker",
          content: [
            {type:"p",text:"Indicated for GERD, reflux esophagitis, gastritis/duodenitis, and peptic ulcer disease (PUD). PUD causes: H. pylori infection (most common), NSAIDs/COX-2 inhibitors (disrupt mucosal protection), excess acid production (Zollinger-Ellison), smoking, stress."},
            {type:"p",text:"PUD symptoms: epigastric pain (worse with food in gastric ulcers, relieved by food in duodenal ulcers), nausea. Complications: GI bleeding (hematemesis, melena), perforation."},
            {type:"p",text:"How it works: Blocks H2 (histamine-2) receptors on parietal cells of the gastric mucosa. Histamine normally binds to H2 receptors and amplifies acid production. By blocking this receptor, less gastric acid is produced when the drug is taken consistently."},
            {type:"note",text:"Intermediate strength between antacids and PPIs. Also given for severe allergic reactions to block histamine receptors. Gold standard workup: EGD. Test for H. pylori with urea breath test, stool antigen, or serology."}
          ]
        },
        {
          id: "lansoprazole",
          title: "Lansoprazole (Prevacid) \u2014 Proton Pump Inhibitor (PPI)",
          content: [
            {type:"p",text:"Strongest available acid suppression. Indicated for GERD, reflux esophagitis, gastritis, peptic ulcer disease, and as part of H. pylori eradication triple therapy. If H. pylori is detected, antibiotics must be added. All NSAIDs/COX-2 inhibitors should be discontinued."},
            {type:"p",text:"How it works: Blocks the H\u207a/K\u207a ATPase pump (the proton pump) located on the parietal cell membrane \u2014 the very mechanism that secretes hydrochloric acid into the stomach. By irreversibly blocking this pump, PPIs prevent acid production at the source."},
            {type:"note",text:"Some formulations are OTC. Long-term use risks: increased fracture risk and hypomagnesemia."}
          ]
        },
        {
          id: "mesalamine-ref",
          title: "Mesalamine (Asacol) \u2014 5-ASA Aminosalicylate",
          content: [
            {type:"p",text:"First-line for mild-to-moderate IBD, especially ulcerative colitis; also used in mild Crohn's disease."},
            {type:"p",text:"IBD symptoms: bloody diarrhea (especially UC), crampy abdominal pain, urgency, tenesmus, weight loss, fever, fatigue in flares. Extraintestinal: arthritis, uveitis, skin lesions (pyoderma gangrenosum, erythema nodosum)."},
            {type:"p",text:"Workup: colonoscopy with biopsy (gold standard), CBC, CRP/ESR, albumin, fecal calprotectin, CT abdomen/pelvis for Crohn's complications."},
            {type:"p",text:"How it works: A 5-aminosalicylic acid (5-ASA) derivative that acts locally in the bowel wall to reduce inflammation. Suppresses prostaglandin synthesis and cytokine production in the intestinal mucosa. More effective in UC than Crohn's."},
            {type:"note",text:"Available as oral, enema, and suppository formulations. Dose can be titrated upward before escalating to immunomodulators."}
          ]
        },
        {
          id: "steroids-ibd",
          title: "Prednisone / Solumedrol \u2014 Corticosteroids (IBD Use)",
          content: [
            {type:"p",text:"Used for acute IBD flares (both UC and Crohn's). Fast-acting compared to immunomodulators \u2014 used as a bridge while waiting for steroid-sparing agents to take effect."},
            {type:"ul",items:[
              ["IV Solumedrol:"," high-dose inpatient treatment for severe flares, then de-escalated to oral"],
              ["Oral prednisone:"," outpatient taper; goal to wean off steroids as quickly as possible"]
            ]},
            {type:"p",text:"How it works: Rapidly suppresses the acute inflammatory response by broadly inhibiting immune cell activation, cytokine production, and vascular permeability."},
            {type:"note",text:"Prolonged steroid use is avoided due to significant side effects: osteoporosis, hyperglycemia, adrenal suppression, weight gain, immunosuppression."}
          ]
        },
        {
          id: "azathioprine-ref",
          title: "Azathioprine (Imuran) \u2014 Immunomodulator",
          content: [
            {type:"p",text:"Oral immunomodulatory agent for maintenance therapy in IBD not adequately controlled with 5-ASA agents. NOT for acute flares \u2014 takes 2\u20133 months to begin working; corticosteroids bridge until it becomes effective."},
            {type:"p",text:"How it works: Strongly immunosuppressive \u2014 inhibits purine synthesis, suppressing the proliferation of T and B lymphocytes responsible for the dysregulated immune response in IBD."},
            {type:"note",text:"Requires monitoring of CBC (cytopenias) and LFTs (hepatotoxicity). Risks: increased infections, lymphoma, and non-melanoma skin cancers. Teratogenic \u2014 women must use contraception."}
          ]
        },
        {
          id: "infliximab-ref",
          title: "Infliximab (Remicade) \u2014 Biologic TNF Inhibitor",
          content: [
            {type:"p",text:"IV biologic for moderate-to-severe IBD uncontrolled with 5-ASA agents. More commonly used in Crohn's than UC. Can induce remission in an acute flare or be used for maintenance. Patients must first try non-biologic immunomodulators due to cost."},
            {type:"p",text:"How it works: A monoclonal antibody that targets and neutralizes Tumor Necrosis Factor-alpha (TNF-\u03b1), a key pro-inflammatory cytokine central to the chronic inflammation in IBD. By blocking TNF-\u03b1, infliximab dramatically reduces intestinal inflammation."},
            {type:"note",text:"Screen for tuberculosis, viral hepatitis, and fungal infections before starting, due to serious risk of opportunistic infections. Carries increased risk of infection and cancer. Not studied in pregnancy."}
          ]
        },
        {
          id: "stool-softeners",
          title: "Metamucil / Miralax \u2014 Stool Softeners",
          content: [
            {type:"p",text:"Indicated for constipation. Causes: low-fiber/highly refined diet, dehydration, sedentary lifestyle, medications (iron, opioids, anticholinergics), hypothyroidism, IBS."},
            {type:"p",text:"Symptoms: fewer than 3 BMs per week, hard/dry stools, straining, sense of incomplete evacuation, abdominal bloating."},
            {type:"p",text:"How each works:"},
            {type:"ul",items:[
              ["Metamucil (psyllium fiber)"," \u2014 contains soluble fiber that bulks up the stool and increases water content, making it easier to pass. Acts as a gentle, natural bulking agent."],
              ["Miralax (polyethylene glycol)"," \u2014 an osmotic agent that draws water into the bowel lumen, increasing the water content and softness of stool."]
            ]},
            {type:"note",text:"Both are safe for daily use without concerns about laxative dependency. Safe to use chronically."}
          ]
        },
        {
          id: "bisacodyl",
          title: "Bisacodyl (Dulcolax) \u2014 Stimulant Laxative",
          content: [
            {type:"p",text:"Indicated for constipation on a PRN (as-needed) basis only. NOT for daily use."},
            {type:"p",text:"How it works: Stimulates the bowel's smooth muscle directly to trigger peristaltic contractions and empty the bowel. More aggressive than osmotic or bulking agents."},
            {type:"note",text:"Placing the bowel under constant stimulation may lead to laxative dependence and loss of normal bowel motility over time \u2014 therefore restricted to PRN use only. Reserved for when softer agents are insufficient."}
          ]
        }
      ]
    }
  ]
});
