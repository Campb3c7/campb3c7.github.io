STUDYAPP.register({
  id: "gi",
  name: "GI Pathophysiology & Pharmacology",
  description: "GI anatomy, motility, GERD, PUD, IBD, GI bleeding, liver, pancreas, and pharmacology",
  sections: [
    {
      id: "anatomy-overview",
      name: "GI Tract Anatomy & Overview",
      cards: [
        {
          id: "gi-tract-layers",
          title: "GI Tract Layers",
          content: [
            {type:"p",text:"The GI tract is about 28\u201330 feet long in an adult. The hollow GI viscera contain 4 layers of tissue:"},
            {type:"ul",items:[
              ["Mucosa"," \u2014 the innermost layer, in contact with the lumen"],
              ["Submucosa"," \u2014 contains the larger blood vessels, lymphatics, and nerves that supply the mucosal layer"],
              ["Muscularis externa"," \u2014 contains longitudinal and circular muscle layers which create peristalsis"],
              ["Serosa"," \u2014 the outer layer, covers the organ and contacts the serosal surface of other organs in the abdomen"]
            ]}
          ]
        },
        {
          id: "accessory-organs",
          title: "Accessory Organs: Liver & Pancreas",
          content: [
            {type:"p",text:"In addition to the hollow viscera, the GI tract contains two major accessory organs:"},
            {type:"ul",items:[
              ["Liver"," \u2014 a major organ which biotransforms, detoxifies, and excretes wastes. The liver is also the major site of plasma protein synthesis."],
              ["Pancreas"," \u2014 a major source of digestive enzymes and the primary regulator of glucose homeostasis."]
            ]}
          ]
        },
        {
          id: "gi-functions",
          title: "Functions of the GI Tract",
          content: [
            {type:"p",text:"The GI tract serves five core functions:"},
            {type:"ul",items:[
              ["Digestion"," \u2014 physical and chemical breakdown of food. Physical digestion begins in the mouth and finishes in the stomach; chemical digestion and nutrient absorption occur primarily in the small intestine at the brush border."],
              ["Secretion"," \u2014 large amounts of fluid are secreted daily: 1.5 L saliva, 2.5 L gastric juice, 0.5 L bile, 1.5 L pancreatic juice, 1 L intestinal secretions, plus 2 L oral intake. All must be replenished from the bloodstream."],
              ["Motility"," \u2014 coordinated movement of intestinal contents for optimal nutrient absorption"],
              ["Absorption"," \u2014 nutrient extraction by passive or active transport"],
              ["Defense"," \u2014 largest body surface exposed to the external environment; defenses include immunologic (GALT) and non-immunologic (acidic gastric juice, mucous, tight junctions)"]
            ]}
          ]
        }
      ]
    },
    {
      id: "gi-control",
      name: "Control of the GI Tract",
      cards: [
        {
          id: "enteric-nervous-system",
          title: "Enteric Nervous System (\"The Little Brain\")",
          content: [
            {type:"p",text:"Intrinsic control of GI motility is most highly governed by the enteric nervous system \u2014 so complex and autonomous it is called the \"little brain.\" It contains two plexuses:"},
            {type:"ul",items:[
              ["Myenteric (Auerbach) plexus"," \u2014 moves contents down the length of the intestine"],
              ["Submucosal (Meissner) plexus"," \u2014 coordinates movement, intestinal secretions, and absorption within each section"]
            ]},
            {type:"p",text:"Both plexuses coordinate with mechanical stretch receptors and chemoreceptors that detect pH and osmolality of GI contents. Persistent high osmolality or pH extremes cause more fluid to be secreted into the lumen."}
          ]
        },
        {
          id: "hormonal-control",
          title: "Hormonal Control of the GI Tract",
          content: [
            {type:"p",text:"GI tract motility and secretions are influenced by local hormonal control. Endocrine cells of the stomach and intestine control the processes of digestion. Key examples:"},
            {type:"ul",items:[
              ["Histamine"," \u2014 stimulates gastric acid secretion by binding H2 receptors on parietal cells"],
              ["Somatostatin"," \u2014 inhibits gastric acid release"],
              ["GLP-1"," \u2014 glucagon-like peptide; its receptor is a target for drug action (GLP-1 receptor agonists)"]
            ]}
          ]
        },
        {
          id: "autonomic-control",
          title: "Autonomic Nervous System Control",
          content: [
            {type:"p",text:"The autonomic nervous system provides the third input controlling the GI tract:"},
            {type:"ul",items:[
              ["Parasympathetic (vagus nerve)"," \u2014 stimulates gut activity and encourages digestion"],
              ["Sympathetic (thoracic spinal cord)"," \u2014 reduces GI motility and enhances sphincter tone, slowing digestion"]
            ]},
            {type:"note",text:"Clinical relevance: Narcotics and anesthetics suppress the parasympathetic system, causing the post-operative ileus seen after surgery."}
          ]
        }
      ]
    },
    {
      id: "esophagus-swallowing",
      name: "Esophagus & Swallowing",
      cards: [
        {
          id: "esophageal-sphincters",
          title: "Upper & Lower Esophageal Sphincters",
          content: [
            {type:"p",text:"The esophagus contains two sphincters that must relax to allow food to pass:"},
            {type:"ul",items:[
              ["Upper esophageal sphincter (UES)"," \u2014 relaxes during the pharyngeal phase of swallowing, then closes after food bolus passage (in less than one second)"],
              ["Lower esophageal sphincter (LES)"," \u2014 must remain tonically closed to prevent reflux of caustic gastric acid into the esophagus. Frequent peristaltic waves in the lower esophagus also help keep acid in the stomach."]
            ]}
          ]
        },
        {
          id: "swallowing-stages",
          title: "Four Stages of Swallowing",
          content: [
            {type:"p",text:"Swallowing has four sequential stages:"},
            {type:"ul",items:[
              ["Oral preparatory"," \u2014 food enters the oral cavity, undergoes mastication, and is formed into the food bolus"],
              ["Oral propulsive"," \u2014 the tongue elevates and the food bolus moves to the back of the mouth and pharynx"],
              ["Pharyngeal"," \u2014 food in the pharynx triggers closure of all pharyngeal openings except the esophagus; the soft palate rises, the larynx moves up, vocal folds close, breathing stops momentarily, and the epiglottis closes over the trachea. Voluntary control transitions to involuntary here."],
              ["Esophageal"," \u2014 begins once the bolus passes the UES; the vagus nerve stimulates peristaltic esophageal contractions and LES relaxation"]
            ]}
          ]
        },
        {
          id: "aspiration-reflux",
          title: "Aspiration & Reflux",
          content: [
            {type:"p",text:"Oropharyngeal control and coordinated esophageal motility are critical to prevent two major complications:"},
            {type:"ul",items:[
              ["Aspiration"," \u2014 pharyngeal contents \"go down the wrong tube\" into the nasal cavity or airways"],
              ["Reflux and regurgitation"," \u2014 esophageal contents do not enter the stomach, or are brought back up and either vomited or aspirated"]
            ]},
            {type:"note",text:"Conditions impairing swallowing: stroke, ALS, Parkinson's disease, dementia, myasthenia gravis, esophageal strictures, esophageal cancer."}
          ]
        }
      ]
    },
    {
      id: "stomach",
      name: "Stomach",
      cards: [
        {
          id: "stomach-cells",
          title: "Gastric Cell Types & Products",
          content: [
            {type:"p",text:"The stomach produces acid, hormones, enzymes, and mucus from three specialized cell types:"},
            {type:"grid",items:[
              ["Parietal cells","Secrete gastric acid (HCl) via H+/K+ ATPase proton pump; also secrete intrinsic factor (required for B12 absorption)"],
              ["Chief cells","Secrete pepsinogen (a zymogen); activated by HCl to become pepsin, which digests proteins"],
              ["Mucous cells","Secrete thick, bicarbonate-rich mucous to protect the gastric mucosa from its own acid"]
            ]}
          ]
        },
        {
          id: "stomach-protection",
          title: "Stomach Protection: Mucous Gel Layer",
          content: [
            {type:"p",text:"The gastric epithelium is protected by a two-layer mucous system:"},
            {type:"ul",items:[
              ["Outer mucous layer"," \u2014 exposed to gastric acid (pH < 3); constantly broken down and must be replenished by epithelial glands"],
              ["Deep unstirred layer"," \u2014 bicarbonate (HCO\u2083\u207b) is secreted here, bringing the pH near the gastric epithelium close to 7 (neutral)"]
            ]},
            {type:"p",text:"High amounts of acid, NSAIDs, alcohol, and poor blood flow to the stomach can all decrease the amount of mucous the epithelial cells are able to produce \u2014 setting the stage for ulcer disease."}
          ]
        },
        {
          id: "gastric-motility",
          title: "Gastric Motility & Emptying",
          content: [
            {type:"p",text:"The corpus (body) of the stomach serves as a reservoir while the antrum exerts powerful muscular contractions to break up ingested food. The pylorus and LES remain tightly closed most of the time."},
            {type:"p",text:"Gastric emptying occurs under the control of stomach contraction and duodenal/pyloric relaxation via the vagus nerve. The rate is influenced by the chemical composition and physical characteristics of food:"},
            {type:"ul",items:[
              "Acid, fat, and hyperosmolar solutions empty slowly; solids take longer to break down",
              "Neutral liquids empty quickly"
            ]}
          ]
        }
      ]
    },
    {
      id: "small-intestine",
      name: "Small Intestine",
      cards: [
        {
          id: "brush-border",
          title: "Brush Border & Intestinal Villi",
          content: [
            {type:"p",text:"The major site of nutrient absorption in the digestive system is the brush border of the small intestine. Intestinal villi have a rich blood supply and greatly increase the surface area. The brush border contains enzymes that break down carbohydrates, proteins, and lipids. H\u2082O and electrolytes are also absorbed here."},
            {type:"p",text:"The small intestine has two types of movement:"},
            {type:"ul",items:[
              ["Segmentation waves"," \u2014 move intestinal contents back and forth over the brush border to maximize absorption"],
              ["Peristaltic contractions"," \u2014 move contents toward the colon"]
            ]}
          ]
        },
        {
          id: "osmotic-load",
          title: "Osmotic Load & Lactase Deficiency",
          content: [
            {type:"p",text:"When the small bowel cannot absorb an ingested substance, it increases the osmolarity within the small bowel lumen. The osmolar weight of the unabsorbed substance pulls water into the small bowel \u2014 the mechanism of osmotic diarrhea."},
            {type:"p",text:"A classic example: lactase deficiency. Without the enzyme lactase, lactose cannot be broken down and absorbed. The unabsorbed lactose draws water into the intestinal lumen, producing bloating, cramping, and diarrhea after consuming dairy products."}
          ]
        }
      ]
    },
    {
      id: "large-intestine",
      name: "Large Intestine / Colon",
      cards: [
        {
          id: "colon-function",
          title: "Fluid, Electrolyte Absorption & the Microbiome",
          content: [
            {type:"p",text:"The colon primarily absorbs large amounts of fluid and electrolytes. When colonic transport is very fast, a patient can easily develop multiple electrolyte abnormalities \u2014 especially hypokalemia, metabolic acidosis, and dehydration."},
            {type:"p",text:"A classic Western diet \u2014 high in fat and dense nutrients \u2014 promotes colon stasis, high stool burden, straining at defecation, and stretching out of the colon."},
            {type:"p",text:"The gut microbiome contains approximately 4,000 bacterial species; bacteria account for 60% of the dry weight of stool. Only 5\u201320% of organisms can be reliably cultured. There is incredible diversity between individuals, and your microbiome is influenced by genetics, smoking, diet, and antibiotic use."}
          ]
        }
      ]
    },
    {
      id: "signs-symptoms",
      name: "Common GI Signs & Symptoms",
      cards: [
        {
          id: "gi-symptoms",
          title: "GI Symptoms Overview",
          content: [
            {type:"p",text:"Common presentations of GI disease include:"},
            {type:"ul",items:[
              ["Dysphagia"," \u2014 altered or difficult swallowing"],
              ["Odynophagia"," \u2014 painful swallowing"],
              ["Nausea / vomiting"," \u2014 may indicate pathology at any level of the GI tract"],
              ["Anorexia"," \u2014 loss of appetite"]
            ]},
            {type:"p",text:"Common complications of GI disease include dehydration and electrolyte abnormalities (large quantities of fluid and electrolytes can be lost without the ability to replace them), infection/sepsis (the gut is full of bacteria), and bleeding (the GI tract is highly vascular and once bleeding starts, there is no way to hold pressure)."}
          ]
        },
        {
          id: "gi-bleeding-types",
          title: "GI Bleeding Terminology",
          content: [
            {type:"p",text:"The type of bleeding and its appearance on presentation helps localize the source:"},
            {type:"ul",items:[
              ["Hematemesis"," \u2014 vomiting of frank red blood; indicates brisk upper GI bleeding"],
              ["Coffee grounds emesis"," \u2014 dark, digested blood; indicates slower upper GI bleeding"],
              ["Melena"," \u2014 black, tarry, very smelly stools from digestion of blood; suggests upper GIB (above ligament of Treitz)"],
              ["Hematochezia"," \u2014 maroon-colored stools; typically lower GIB"],
              ["BRBPR"," \u2014 bright red blood per rectum; small amounts on toilet tissue or staining toilet water; suggests anorectal source"],
              ["Occult bleeding"," \u2014 not visible to the patient; detected on stool testing; slow iron-deficiency anemia"]
            ]},
            {type:"note",text:"The Ligament of Treitz (end of the duodenum) divides upper from lower GI bleeding. Melena typically indicates an upper source; hematochezia a lower source, though a very brisk upper bleed can cause hematochezia."}
          ]
        },
        {
          id: "dehydration-electrolytes",
          title: "Dehydration & Electrolyte Abnormalities",
          content: [
            {type:"p",text:"Dehydration is one of the most common and serious complications of GI illness. The GI tract loses enormous volumes of fluid in diarrhea, vomiting, and third-spacing."},
            {type:"p",text:"Key electrolyte abnormalities seen with GI losses:"},
            {type:"ul",items:[
              ["Hypokalemia"," \u2014 most common; large amounts of K+ lost in diarrhea and vomiting"],
              ["Hypomagnesemia"," \u2014 often accompanies prolonged GI losses"],
              ["Hypocalcemia"," \u2014 can occur with severe or chronic GI disease"],
              ["Acute kidney injury (AKI)"," \u2014 pre-renal from dehydration; very common in GI illness"]
            ]}
          ]
        }
      ]
    },
    {
      id: "gi-evaluation",
      name: "GI Evaluation",
      cards: [
        {
          id: "gi-labs",
          title: "Laboratory Evaluation",
          content: [
            {type:"p",text:"Key labs in GI illness:"},
            {type:"ul",items:[
              ["CBC"," \u2014 acute blood loss anemia, hemoconcentration from fluid loss, leukocytosis/thrombocytosis in infection"],
              ["BMP (chemistry panel)"," \u2014 AKI from dehydration, electrolyte abnormalities (hypokalemia, hypomagnesemia, hypocalcemia)"],
              ["LFTs (transaminases)"," \u2014 ALT, AST, ALKP, bilirubin; evaluate for liver or biliary tract inflammation"],
              ["PT/INR"," \u2014 better test of actual liver function than LFTs, since coagulation factors must be replaced hourly; prolongation signals liver failure"],
              ["Lipase"," \u2014 more specific to pancreas than amylase; elevated in pancreatitis"],
              ["Stool testing"," \u2014 C. difficile toxin/DNA, H. pylori antigen, pathogenic E. coli, Salmonella, food-borne pathogens"]
            ]}
          ]
        },
        {
          id: "gi-imaging",
          title: "Imaging",
          content: [
            {type:"p",text:"Imaging modalities for GI tract disease:"},
            {type:"ul",items:[
              ["CT abdomen/pelvis"," \u2014 imaging study of choice in high-acuity patients; rapidly evaluates for multiple GI disorders; excellent at detecting intra-abdominal pathology"],
              ["Ultrasound"," \u2014 useful for hepatobiliary disease (gallstones, biliary obstruction, liver lesions); first-line for RUQ pain"],
              ["Plain films (KUB/upright)"," \u2014 limited use; reserved for low-acuity patients evaluating for bowel obstruction, ileus, or constipation. Contrast enema or swallowed contrast can be added for more detail."]
            ]}
          ]
        },
        {
          id: "endoscopy",
          title: "Endoscopy",
          content: [
            {type:"p",text:"Direct visualization of the GI tract:"},
            {type:"ul",items:[
              ["EGD (esophagogastroduodenoscopy)"," \u2014 evaluates the esophagus, stomach, and duodenum; can take biopsy specimens, dilate the esophagus, inject substances, and treat bleeding"],
              ["Flexible sigmoidoscopy"," \u2014 evaluates only the left colon (rectum to splenic flexure); can biopsy and remove masses. Requires a prep."],
              ["Colonoscopy"," \u2014 evaluates the entire colon under direct visualization; can biopsy, take photos, remove polyps/masses. Requires a full bowel prep."]
            ]}
          ]
        }
      ]
    },
    {
      id: "motility-disorders",
      name: "Gastric Motility Disorders",
      cards: [
        {
          id: "dumping-syndrome",
          title: "Dumping Syndrome",
          content: [
            {type:"p",text:"Normal gastric emptying delivers small, controlled quantities of stomach contents into the duodenum via the pylorus. The small intestine briefly becomes acidic, but acid is rapidly buffered by alkaline digestive juices."},
            {type:"p",text:"Dumping syndrome occurs when a large amount of acidic, hyperosmolar gastric contents suddenly enters the small intestine all at once. This large osmotic load induces sudden fluid shifts from the blood vessels into the intestine along the concentration gradient."},
            {type:"p",text:"As fluid rapidly shifts from the vasculature into the intestine, perfusion pressures drop \u2014 particularly to the brain \u2014 causing dizziness and orthostatic hypotension."},
            {type:"note",text:"Most commonly occurs after surgical alteration of the GI tract, especially Roux-en-Y gastric bypass, where the pyloric mechanism is bypassed."}
          ]
        },
        {
          id: "diabetic-gastroparesis",
          title: "Diabetic Gastroparesis",
          content: [
            {type:"p",text:"Gastric emptying can also be too slow, due to obstruction at the pylorus or an enteric neuropathy. True obstructions are less common than neuropathy."},
            {type:"p",text:"Poorly controlled diabetes is the most common cause of enteric neuropathy causing decreased gastric motility. This is diabetic gastroparesis \u2014 unfortunately very common and irreversible."},
            {type:"p",text:"Treatment is dietary management: small, frequent meals of bland foods, and liquids instead of solids to facilitate emptying."}
          ]
        },
        {
          id: "pyloric-stenosis",
          title: "Pyloric Stenosis",
          content: [
            {type:"p",text:"Pyloric stenosis is a congenital condition in which the pyloric muscle hypertrophies, obstructing gastric emptying in newborns. It is not caused by neuropathy but by a true mechanical obstruction at the pylorus."},
            {type:"p",text:"Classic presentation: projectile, non-bilious vomiting in a 2\u20136 week-old infant, with a palpable olive-shaped mass in the epigastrum. Treated surgically with a pyloromyotomy."}
          ]
        }
      ]
    },
    {
      id: "gerd",
      name: "GERD",
      cards: [
        {
          id: "gerd-patho",
          title: "GERD — Pathophysiology",
          content: [
            {type:"p",text:"Gastroesophageal reflux disease (GERD) occurs when the lower esophageal barrier is breached. The esophagus does not have a thick mucous layer to protect it from acid like the stomach does."},
            {type:"p",text:"When the LES fails to maintain adequate tone, caustic gastric acid refluxes into the unprotected esophagus, causing burning substernal pain and a chemical burn. Repeated episodes result in permanent changes."},
            {type:"p",text:"Factors that facilitate GERD:"},
            {type:"ul",items:[
              ["Increased stomach volume or pressure"," \u2014 obesity, pregnancy, ascites, overeating"],
              ["Increased gastric acid"," \u2014 acidic foods (citrus, tomato), spicy foods"],
              ["Loss of LES tone or peristalsis"," \u2014 pregnancy (progesterone relaxes smooth muscle), alcohol, caffeine, chocolate, high-fat foods, medications (CCBs, narcotics, benzodiazepines), smoking"]
            ]}
          ]
        },
        {
          id: "hiatal-hernia",
          title: "Hiatal Hernia",
          content: [
            {type:"p",text:"Many patients with significant GERD have a hiatal hernia \u2014 a herniation of a portion of the stomach through the diaphragmatic hiatus into the chest."},
            {type:"p",text:"The loss of the tight diaphragmatic hiatus and its assistance in keeping gastric acid in the stomach means that the hiatal hernia facilitates gastroesophageal reflux. The normal anatomical relationship between the LES and the diaphragm is disrupted."}
          ]
        },
        {
          id: "gerd-complications",
          title: "GERD — Complications",
          content: [
            {type:"p",text:"Over time, recurrent esophageal mucosa damage from refluxing stomach acid results in a spectrum of complications:"},
            {type:"ul",items:[
              ["Esophagitis"," \u2014 friable, inflamed, bleeding mucosa from ongoing acid exposure"],
              ["Esophageal ulcers"," \u2014 deeper erosions of the esophageal wall"],
              ["Esophageal strictures"," \u2014 tight, scarred, non-distensible areas of the esophagus causing dysphagia"],
              ["Hemorrhage, fistula, or perforation"," \u2014 rare, in the most severe cases"],
              ["Barrett's esophagus"," \u2014 replacement of normal squamous epithelium with columnar epithelium; occurs in long-standing GERD. In 2\u20135% of affected persons, this progresses to esophageal adenocarcinoma."]
            ]}
          ]
        },
        {
          id: "gerd-rx",
          title: "GERD — Pharmacologic Treatment",
          content: [
            {type:"p",text:"Non-drug treatment (diet changes, meal timing, weight loss, elevating head of bed) is always first line. The same medication classes treat all acid-mediated disorders:"},
            {type:"ul",items:[
              ["Antacids \u2014 calcium carbonate (Tums)"," \u2014 ions that neutralize acid within the stomach. For occasional (prn) symptoms only. If symptoms are nearly daily, stronger treatment is needed."],
              ["H2 blockers \u2014 famotidine (Pepcid)"," \u2014 block the effect of histamine on parietal cell H2 receptors, reducing acid production. Also used for severe allergic reactions."],
              ["Proton pump inhibitors (PPIs) \u2014 lansoprazole (Prevacid)"," \u2014 block the H+/K+ ATPase pump that creates the acidic gastric environment. The strongest acid treatment available. Long-term use causes increased fracture risk and hypomagnesemia."]
            ]},
            {type:"note",text:"If H. pylori infection is detected, antibiotics must be added to eradicate the infection, or the ulcer will rapidly recur. Also discontinue all NSAIDs and COX-2 inhibitors."}
          ]
        }
      ]
    },
    {
      id: "pud",
      name: "Peptic Ulcer Disease (PUD)",
      cards: [
        {
          id: "pud-spectrum",
          title: "PUD — Spectrum of Disease",
          content: [
            {type:"p",text:"Peptic ulcer disease (PUD) is the collective term for acid-mediated damage to the stomach and duodenum. It exists on a spectrum:"},
            {type:"ul",items:[
              ["Gastritis / duodenitis"," \u2014 initial mucosal damage; only the mucosal layer is affected (partial thickness)"],
              ["Ulceration"," \u2014 damage penetrates through the mucosa into the submucosa and muscularis layers"],
              ["Perforation"," \u2014 damage through all layers, allowing acid to leak into the abdomen; a surgical emergency (rare with modern medications)"]
            ]},
            {type:"p",text:"The two common pathophysiologic mechanisms: (1) excessive acid secreted or ingested, breaking down the mucous layer; (2) inadequate mucosal defense, where the mucous layer cannot be replenished fast enough to protect the stomach."}
          ]
        },
        {
          id: "nsaid-pud",
          title: "NSAID-Induced PUD",
          content: [
            {type:"p",text:"To maintain a healthy mucous layer, the stomach relies on adequate blood flow to replenish mucous daily. This blood flow is maintained, in part, by prostaglandins \u2014 vasodilatory hormones."},
            {type:"p",text:"NSAIDs (ibuprofen/Motrin, naproxen/Naprosyn) inhibit prostaglandin synthesis, causing decreased arterial vasodilation and relative local ischemia of the gastric mucosa. Ischemic gastric mucosa cannot repair itself adequately after acid damage, nor can it produce sufficient mucous and bicarbonate to protect itself."},
            {type:"p",text:"Result: gastric or duodenal ulcers form and worsen with continued NSAID use."}
          ]
        },
        {
          id: "h-pylori",
          title: "H. pylori Infection",
          content: [
            {type:"p",text:"Helicobacter pylori is a bacterium that thrives in the acidic stomach. It colonizes 30\u201340% of people in the US; spread is likely fecal-oral. 90% of colonized individuals show gastritis on EGD (usually asymptomatic), but only 15% develop clinically significant ulcer disease."},
            {type:"p",text:"H. pylori survives and causes disease through several mechanisms:"},
            {type:"ul",items:[
              ["Urease"," \u2014 enzyme that splits urea to produce a base, neutralizing stomach acid in the immediate vicinity"],
              ["Flagella and adhesins"," \u2014 help the organism position itself optimally within the mucosa"],
              ["Toxins"," \u2014 directly damage host stomach tissue"]
            ]},
            {type:"p",text:"H. pylori both increases gastric acid production and weakens mucosal defenses. It is also linked to gastric adenocarcinoma and MALT lymphoma of the upper GI tract. If the ulcer is treated but H. pylori is not eradicated, the ulcer will rapidly recur."}
          ]
        },
        {
          id: "gastric-duodenal-ulcers",
          title: "Gastric vs. Duodenal Ulcers",
          content: [
            {type:"p",text:"Gastric and duodenal ulcers differ in several important ways:"},
            {type:"grid",items:[
              ["Gastric ulcers","Lesser curvature; H. pylori, NSAIDs, smoking; adults > 50 years; pain worsens with eating (patient avoids food \u2192 weight loss); all must be biopsied for cancer"],
              ["Duodenal ulcers","Duodenal bulb (within first 3 cm); H. pylori and NSAIDs; 30\u201360 years; pain relieved with food; 4x more common than gastric ulcers; cancer very rare"]
            ]},
            {type:"note",text:"PUD most commonly presents with gnawing epigastric or substernal chest pain, possibly radiating to the back. Atypical (painless) presentations occur most commonly in the elderly and NSAID users."}
          ]
        }
      ]
    },
    {
      id: "obesity-bariatric",
      name: "Obesity & Bariatric Surgery",
      cards: [
        {
          id: "obesity-bmi",
          title: "Obesity & BMI Classifications",
          content: [
            {type:"p",text:"Obesity is a complex medical disorder due to excessive or abnormal fat accumulation. It affects 41.7% of US adults and 19.7% of children."},
            {type:"grid",items:[
              ["BMI 25\u201329.9","Overweight"],
              ["BMI \u226530","Obese"],
              ["Children","Weight above 95th percentile for age/height"]
            ]},
            {type:"p",text:"Obesity significantly increases the risk of heart disease, stroke, diabetes, and cancer \u2014 all preventable causes of premature death."}
          ]
        },
        {
          id: "lap-band",
          title: "Bariatric Surgery \u2014 Lap Band",
          content: [
            {type:"p",text:"An adjustable tube made of soft silicone, implanted laparoscopically. The tube wraps around the upper portion of the stomach, creating a small pouch that fills quickly and promotes less food intake. The band can be tightened over time."},
            {type:"p",text:"The lap-band is reversible, but produces less weight loss than other bariatric surgeries. It is a restrictive procedure only \u2014 it does not alter absorption."}
          ]
        },
        {
          id: "sleeve-gastrectomy",
          title: "Bariatric Surgery \u2014 Sleeve Gastrectomy",
          content: [
            {type:"p",text:"A gastric sleeve removes about 80% of the stomach, leaving a neo-stomach about the size of a banana. It is performed laparoscopically and is the most common type of bariatric surgery currently being done."},
            {type:"p",text:"In addition to creating early satiety through restriction, the sleeve gastrectomy also works by decreasing ghrelin \u2014 the hormone responsible for cravings and appetite. Removing the greater curvature of the stomach removes the major site of ghrelin production, reducing the impulse to eat."},
            {type:"note",text:"Sleeve gastrectomy produces more weight loss than the lap band, but less than Roux-en-Y gastric bypass."}
          ]
        },
        {
          id: "roux-en-y",
          title: "Bariatric Surgery \u2014 Roux-en-Y Gastric Bypass",
          content: [
            {type:"p",text:"The most aggressive form of bariatric surgery. The surgeon creates a very small neo-stomach (holding only 3\u20135 oz) and connects it directly to the jejunum (the alimentary or roux arm), bypassing the duodenum entirely."},
            {type:"p",text:"The duodenum and remainder of the stomach remain in place but carry only bile and pancreatic enzymes (the pancreatobiliary arm) \u2014 no longer food."},
            {type:"p",text:"Weight loss occurs through three mechanisms: (1) restriction \u2014 tiny stomach size; (2) reduced absorption \u2014 bypassed duodenum; (3) reduced ghrelin \u2014 most of the stomach is excluded."},
            {type:"note",text:"Patients must take supplemental vitamins lifelong after Roux-en-Y bypass due to bypassing the primary absorption site of iron, calcium, and fat-soluble vitamins."}
          ]
        }
      ]
    },
    {
      id: "gi-bleeding",
      name: "GI Bleeding",
      cards: [
        {
          id: "upper-gib",
          title: "Upper GI Bleeding",
          content: [
            {type:"p",text:"Upper GI bleeding originates above the Ligament of Treitz (end of the duodenum). Common causes:"},
            {type:"ul",items:[
              ["Mallory-Weiss tear"," \u2014 a tear at the gastroesophageal junction from forceful retching, classically after an alcohol binge. Usually causes frank hematemesis in small amounts."],
              ["Peptic ulcers"," \u2014 in the stomach or duodenum; may cause coffee-grounds emesis or hematemesis"],
              ["Esophageal varices"," \u2014 dilated esophageal veins from portal hypertension/end-stage liver disease; brisk frank hematemesis"]
            ]},
            {type:"p",text:"Evaluation: prompt EGD. Patient kept NPO and started on high-dose PPI. If severe, blood products may be needed. Treatment options: clipping a vessel, laser/electrocautery, or banding of a varix."}
          ]
        },
        {
          id: "lower-gib",
          title: "Lower GI Bleeding",
          content: [
            {type:"p",text:"Lower GI bleeding originates below the Ligament of Treitz. Common causes:"},
            {type:"ul",items:[
              ["Diverticular bleed"," \u2014 most common cause of lower GIB (LGIB); causes painless hematochezia. Important: diverticular bleeding and diverticulitis do NOT generally occur simultaneously."],
              ["Angiodysplasia"," \u2014 degeneration of blood vessels; second most common cause of lower GI bleeding; causes hematochezia"],
              ["Colorectal cancer"," \u2014 generally causes occult bleeding with iron deficiency anemia"],
              ["IBD"," \u2014 Crohn's or UC; may cause frankly bloody diarrhea with significant abdominal pain"],
              ["Hemorrhoids"," \u2014 BRBPR in small amounts on toilet tissue after passing hard stool"]
            ]},
            {type:"p",text:"Evaluation: colonoscopy after bowel prep. Trend H&H serially. Bleeding into the GI tract can be limitless \u2014 be aggressive with management."}
          ]
        }
      ]
    },
    {
      id: "small-bowel-disease",
      name: "Small Bowel Disease",
      cards: [
        {
          id: "ileus",
          title: "Ileus (Paralytic/Adynamic)",
          content: [
            {type:"p",text:"A paralytic or adynamic ileus is a slowdown of peristalsis \u2014 one of the most common conditions affecting the small bowel, especially in a hospital setting."},
            {type:"p",text:"Ileus is very common post-operatively after the bowel is handled by the surgical team. Post-op narcotics and anesthetics (which suppress parasympathetic activity) further contribute to the ileus."},
            {type:"p",text:"Management: bowel rest, IV hydration, correction of electrolytes, ambulation, and minimizing narcotics."}
          ]
        },
        {
          id: "sbo",
          title: "Small Bowel Obstruction (SBO)",
          content: [
            {type:"p",text:"An SBO occurs when there is a blockage of forward progress for air and liquid within the small bowel. It may be partial (some air and liquid pass) or complete."},
            {type:"p",text:"Most common cause: adhesions from prior surgery or a prior inflammatory process (IBD, peritonitis). Can also be caused by a hernia that has become incarcerated:"},
            {type:"ul",items:[
              ["Incarcerated hernia"," \u2014 bowel is trapped in the hernia defect and cannot be reduced back into the abdominal cavity"],
              ["Strangulated hernia"," \u2014 blood flow to the incarcerated intestine is insufficient; surgical emergency due to bowel ischemia/necrosis"]
            ]},
            {type:"p",text:"Signs: abdominal distention, nausea/vomiting, cessation of flatus/BM, air-fluid levels on imaging. Treatment: partial SBO \u2014 watchful waiting, hydration, electrolyte correction. Complete SBO \u2014 surgery."}
          ]
        }
      ]
    },
    {
      id: "ibd",
      name: "Inflammatory Bowel Disease (IBD)",
      cards: [
        {
          id: "ibd-overview",
          title: "IBD — Overview",
          content: [
            {type:"p",text:"Patients with inflammatory bowel disease have an autoimmune disease in which the immune system attacks the body's own GI tissues, creating inflammation and damage. The exact etiology is unknown; genetics and environment play a large role."},
            {type:"p",text:"IBD most commonly begins in older children and young adults (15\u201335 years of age). Symptoms include cramping abdominal pain, irregular bowel habits with or without blood or mucus, weight loss, and symptoms of infection (fevers, sweats)."},
            {type:"p",text:"There are two types: Crohn's disease and ulcerative colitis. Although both are autoimmune diseases of the gut treated with some of the same medications, they are two very different disease states."}
          ]
        },
        {
          id: "crohns",
          title: "Crohn's Disease",
          content: [
            {type:"p",text:"Crohn's can affect the GI tract anywhere from the mouth to the anus, but inflammation is most commonly found in the terminal ileum."},
            {type:"p",text:"Key distinguishing features:"},
            {type:"ul",items:[
              ["Skip lesions"," \u2014 normal tissue interspersed with diseased (thickened, cobblestone-appearing) tissue; not contiguous"],
              ["Transmural inflammation"," \u2014 all layers of the bowel wall are involved, predisposing to fistula and abscess formation"],
              ["Terminal ileum involvement"," \u2014 impairs vitamin B12 and bile acid absorption"]
            ]},
            {type:"p",text:"Consequences: inflammation interferes with nutrient absorption; bowel wall thickens, decreasing lumen and predisposing to obstruction; adhesions form; abscesses and fistulas develop; severe weight loss and failure to thrive."}
          ]
        },
        {
          id: "uc",
          title: "Ulcerative Colitis",
          content: [
            {type:"p",text:"Ulcerative colitis begins at the rectum and spreads proximally in the colon in a contiguous pattern (no skip lesions). 25% of patients have disease only in the rectum (proctitis); 10% have pancolitis."},
            {type:"p",text:"Key features:"},
            {type:"ul",items:[
              ["Mucosal only"," \u2014 inflammation limited to the innermost mucosal layer; no transmural disease, so no fistulas or abscesses"],
              ["Contiguous"," \u2014 spreads continuously from the rectum proximally; no skip lesions"],
              ["Tenesmus"," \u2014 the sensation of needing to have a BM when the bowel is empty; caused by proctitis"],
              ["Colorectal cancer risk"," \u2014 6x higher risk than the average person; significantly higher than Crohn's; requires regular surveillance colonoscopies"]
            ]}
          ]
        },
        {
          id: "ibd-treatment",
          title: "IBD — Pharmacologic Treatment",
          content: [
            {type:"p",text:"Treatment is stepped up based on disease severity:"},
            {type:"ul",items:[
              ["Mesalamine / 5-ASA (Asacol)"," \u2014 initial treatment for mild-to-moderate IBD (not in flare); available as oral, enema, and suppository. More effective in UC than Crohn's."],
              ["Prednisone / Solumedrol"," \u2014 steroids used to quickly treat acute flares; IV solumedrol for hospitalized patients, then de-escalated to oral prednisone taper. Goal: minimize steroid exposure."],
              ["Azathioprine (Imuran)"," \u2014 oral immunomodulator for IBD not controlled by 5-ASA. Takes 2\u20133 months to work (not for acute flares). Teratogenic; women must use contraception. Monitor CBC and LFTs \u2014 causes cytopenias and hepatitis. Slightly increases risk of lymphoma and non-melanoma skin cancers."],
              ["Infliximab (Remicade)"," \u2014 biologic TNF inhibitor for IBD uncontrolled by 5-ASA agents. More commonly used in Crohn's. Can induce remission in a flare or used for maintenance. Expensive; screen for TB, viral hepatitis, and fungal infections before starting. Increased risk of infection and cancer."]
            ]}
          ]
        }
      ]
    },
    {
      id: "lbo",
      name: "Large Bowel Obstruction (LBO)",
      cards: [
        {
          id: "lbo-causes",
          title: "Large Bowel Obstruction \u2014 Causes & Presentation",
          content: [
            {type:"p",text:"Large bowel obstructions are most commonly caused by colon cancer. Other causes include:"},
            {type:"ul",items:[
              ["Volvulus"," \u2014 a portion of the colon twists around itself; produces a massively dilated colon on plain film"],
              ["Intussusception"," \u2014 common cause of LBO in children (telescoping of bowel into itself)"],
              ["Hernias"," \u2014 defects in the abdominal wall can cause large or small bowel obstructions"],
              ["Adhesions"," \u2014 rare cause of LBO (more common in SBO)"]
            ]},
            {type:"p",text:"Significantly more abdominal distention occurs compared to SBO, and feculent vomiting is a much later sign. Generally, LBO requires surgical treatment, and if cancer is discovered at the time, surgery may become extensive."}
          ]
        }
      ]
    },
    {
      id: "diverticular",
      name: "Diverticular Disease",
      cards: [
        {
          id: "diverticulosis",
          title: "Diverticulosis",
          content: [
            {type:"p",text:"Diverticulosis is an acquired herniation of the mucosa and submucosal layers of the colon through the muscularis layer. The diverticula form at weak areas of the colon wall where blood vessels penetrate the bowel wall."},
            {type:"p",text:"It is a consequence of low-fiber, highly refined diets and chronic constipation. The finger-like out-pouchings are most common on the left side of the colon (descending and sigmoid colon)."},
            {type:"p",text:"Diverticulosis itself is usually asymptomatic but predisposes to two complications: diverticulitis and diverticular bleeding."}
          ]
        },
        {
          id: "diverticulitis",
          title: "Diverticulitis",
          content: [
            {type:"p",text:"Diverticulitis occurs when a diverticular pouch becomes blocked by swelling or fecal material, causing bacterial overgrowth, distention, and venous congestion within the pouch. Within 3\u20135 days, local infection, perforation, and abscess may occur."},
            {type:"p",text:"Symptoms: slowly progressive LLQ abdominal pain, fevers, and bowel habit changes."},
            {type:"p",text:"Treatment covers gram-negative organisms and anaerobes:"},
            {type:"ul",items:[
              ["Outpatient (oral):"," Augmentin (amoxicillin-clavulanate), or Cipro (ciprofloxacin) + Flagyl (metronidazole); clear liquid diet; follow up in 48 hours"],
              ["Inpatient (IV):"," Unasyn (ampicillin-sulbactam), or Cipro + Flagyl; NPO until symptoms improve; de-escalate to oral once afebrile and tolerating diet"],
              ["Surgery"," \u2014 occasionally needed for perforation or severe disease"]
            ]}
          ]
        },
        {
          id: "diverticular-bleed",
          title: "Diverticular Bleeding",
          content: [
            {type:"p",text:"Diverticula form at weak portions of the colonic wall where a penetrating artery enters. As the diverticulum forms, the thin walls stretch the blood vessel, which occasionally ruptures and produces copious amounts of painless hematochezia."},
            {type:"p",text:"Diverticular bleeding is a common cause of lower GI bleeding in the elderly. Importantly, diverticular bleeding and diverticulitis do NOT generally occur simultaneously \u2014 the presence of diverticula predisposes to either one or the other."},
            {type:"note",text:"Always distinguish from other causes of lower GI bleeding, especially colorectal cancer \u2014 has the patient had a recent colonoscopy?"}
          ]
        }
      ]
    },
    {
      id: "diarrhea-constipation",
      name: "Diarrhea & Constipation",
      cards: [
        {
          id: "diarrhea-mechanisms",
          title: "Diarrhea \u2014 Osmotic vs. Secretory",
          content: [
            {type:"p",text:"Two basic pathophysiologic mechanisms of diarrhea:"},
            {type:"ul",items:[
              ["Osmotic diarrhea"," \u2014 the intestines fail to absorb an osmotically active substance, causing water to move into the lumen of the intestine. Causes: nutrient malabsorption (lactase deficiency), osmotic laxatives, pancreatic enzyme insufficiency (leading to undigested fats and proteins)."],
              ["Secretory diarrhea"," \u2014 hormones or peptides in the intestine cause water secretion from intestinal epithelial cells. Causes: enterotoxins from pathogens (C. diff, E. coli), stimulant laxatives."]
            ]}
          ]
        },
        {
          id: "gastroenteritis",
          title: "Acute Gastroenteritis & Norovirus",
          content: [
            {type:"p",text:"Acute gastroenteritis is an acute inflammation of the stomach and intestines, usually caused by a viral pathogen. Symptoms: abrupt onset of nausea, bilious vomiting, non-bloody diarrhea, and abdominal cramps. The disease is self-limiting."},
            {type:"p",text:"Norovirus (Norwalk virus) is one of the most common culprits. Always elicit history of travel, eating out, and sick contacts."},
            {type:"p",text:"Treatment is supportive: sips and chips (popsicles and electrolyte solutions). Hospital treatment with IV fluids and anti-emetics. Limit narcotics so the toxin can be excreted."}
          ]
        },
        {
          id: "c-diff",
          title: "C. difficile Colitis",
          content: [
            {type:"p",text:"Also called antibiotic-associated colitis or pseudomembranous colitis. People are colonized with C. difficile, but normal bowel flora keep the organism in check. Prolonged antibiotic exposure kills off normal enteric organisms, allowing C. difficile to overgrow and produce disease."},
            {type:"p",text:"C. difficile produces enterotoxins that cause colonic inflammation and a secretory diarrhea. Suspect it in any patient with antibiotic exposure in the last 90 days who develops diarrhea. Can also occur without antibiotics in significantly immunosuppressed patients (e.g., chemotherapy)."},
            {type:"p",text:"Presentation: copious watery diarrhea; WBC > 18K is characteristic. Diagnosis: stool toxin or organism DNA testing."},
            {type:"note",text:"Treatment: oral vancomycin or fidaxomycin. Do NOT use the antibiotics that caused it."}
          ]
        },
        {
          id: "constipation",
          title: "Constipation",
          content: [
            {type:"p",text:"Constipation: infrequent, difficult bowel movements with hard, dry stool. Very common in the American diet (high fat, low fiber, low exercise). Disproportionately affects the elderly and females."},
            {type:"p",text:"Complications of chronic constipation:"},
            {type:"ul",items:[
              ["Anal fissures and hemorrhoids"," \u2014 trauma to the anal mucosa from hard stool or straining"],
              ["Vasovagal syncope"," \u2014 straining at stool triggers vagal-mediated bradycardia and loss of consciousness"]
            ]},
            {type:"p",text:"Treatment:"},
            {type:"ul",items:[
              ["Metamucil"," \u2014 contains fiber; bulks up stool and increases water content, making it easier to pass"],
              ["Miralax"," \u2014 osmotic agent that draws water into the bowel lumen, increasing stool water content"],
              ["Bisacodyl (Dulcolax)"," \u2014 stimulant laxative; stimulates the bowel to empty; use prn only (constant stimulation leads to adverse effects)"]
            ]}
          ]
        }
      ]
    },
    {
      id: "pancreas",
      name: "Pancreas",
      cards: [
        {
          id: "acute-pancreatitis",
          title: "Acute Pancreatitis",
          content: [
            {type:"p",text:"The pancreas normally secretes large amounts of zymogens (pre-enzymes) for digestion of fat, carbohydrates, and proteins; these are activated only at the brush border of the small intestine. Occasionally, the pancreatic enzymes are prematurely activated, and they begin to digest surrounding pancreatic tissue and fat."},
            {type:"p",text:"Two main causes in the US: alcohol (more common in men) and gallstones (more common in women). Lipase elevation on labs."},
            {type:"p",text:"Severe acute pancreatitis causes massive release of inflammatory cytokines, making endothelial lining of blood vessels leaky. Large amounts of fluid leave the vascular space and go into the third space, causing severe hypotension, wet lungs (ARDS), and multiple electrolyte abnormalities."},
            {type:"note",text:"Treatment is primarily supportive: NPO to put the pancreas at rest, aggressive IV hydration, and pain control."}
          ]
        },
        {
          id: "chronic-pancreatitis",
          title: "Chronic Pancreatitis",
          content: [
            {type:"p",text:"Multiple episodes of acute pancreatitis can lead to chronic pancreatitis and progressive loss of digestive ability. Chronic pancreatitis is marked by:"},
            {type:"ul",items:[
              ["Loss of exocrine function"," \u2014 decreased digestive enzyme production leading to fat and protein malabsorption"],
              ["Loss of endocrine function"," \u2014 progressive loss of insulin-producing cells, leading to diabetes"],
              ["Chronic LUQ pain"],
              ["Calcifications of the pancreas on imaging"]
            ]}
          ]
        }
      ]
    },
    {
      id: "liver-normal",
      name: "Liver",
      cards: [
        {
          id: "liver-physiology",
          title: "Normal Liver Physiology",
          content: [
            {type:"p",text:"The liver weighs about 3 lbs and is located in the RUQ under the diaphragm and ribcage. It plays a key role in many essential body processes:"},
            {type:"ul",items:[
              ["Metabolism"," \u2014 extracts carbohydrates, proteins, and fat from portal blood and distributes nutrients to the body"],
              ["Storage"," \u2014 stores vitamins, iron, and other nutrients"],
              ["Detoxification"," \u2014 biotransforms chemicals produced with digestion and medications, rendering them less toxic and facilitating excretion"],
              ["Protein synthesis"," \u2014 manufactures plasma proteins including albumin (maintains vascular oncotic pressure) and coagulation factors"]
            ]}
          ]
        },
        {
          id: "fluid-balance",
          title: "Oncotic vs. Hydrostatic Pressure & Fluid Balance",
          content: [
            {type:"p",text:"Body water homeostasis depends on two opposing forces:"},
            {type:"ul",items:[
              ["Oncotic (chemical) pressure"," \u2014 created by plasma proteins (primarily albumin) that are too large to escape blood vessels; pulls water into the vessels"],
              ["Hydrostatic pressure"," \u2014 the force exerted by a fluid pushing against the walls of a container; pushes water out of vessels into tissue"]
            ]},
            {type:"p",text:"When albumin is low (as in liver disease), oncotic pressure drops. When venous pressure is high (as in portal hypertension), hydrostatic pressure rises. Both forces together drive fluid out of the vasculature and into the tissue and body cavities, causing edema and ascites."}
          ]
        },
        {
          id: "hepatobiliary-anatomy",
          title: "Hepatobiliary Anatomy",
          content: [
            {type:"p",text:"The liver has a dual afferent blood supply:"},
            {type:"ul",items:[
              ["Portal vein"," \u2014 partially deoxygenated blood from the intestines; carries absorbed nutrients from the gut directly to the liver"],
              ["Hepatic artery"," \u2014 fully oxygenated blood from systemic circulation"]
            ]},
            {type:"p",text:"These two supplies mix in the hepatic sinusoids, where hepatocytes perform their work. Blood drains via the hepatic vein to the inferior vena cava (IVC)."},
            {type:"p",text:"Biliary anatomy: bile produced by hepatocytes drains through small bile ducts \u2192 common hepatic duct; joins the cystic duct from the gallbladder \u2192 common bile duct \u2192 flows through the head of the pancreas \u2192 empties at the ampulla of Vater, regulated by the sphincter of Oddi."}
          ]
        },
        {
          id: "first-pass-metabolism",
          title: "First Pass Metabolism",
          content: [
            {type:"p",text:"First pass metabolism is the process by which orally ingested medications are absorbed in the gut and transported via the portal vein directly to the liver before entering systemic circulation."},
            {type:"p",text:"At the liver, drug concentration is significantly reduced by liver metabolism. This means that first pass metabolism substantially lowers the bioavailability of oral drugs compared to drugs given parenterally (IV, IM, SQ, sublingual)."},
            {type:"note",text:"Clinical relevance: In severe liver disease, first pass metabolism is impaired, and oral drugs reach systemic circulation in much higher concentrations than expected \u2014 raising the risk of toxicity."}
          ]
        }
      ]
    },
    {
      id: "liver-disease",
      name: "Liver Disease",
      cards: [
        {
          id: "lft-patterns",
          title: "Hepatocellular vs. Cholestatic Injury Patterns",
          content: [
            {type:"p",text:"Liver disease elevates transaminases (LFTs) in one of two patterns:"},
            {type:"ul",items:[
              ["Hepatocellular injury"," \u2014 predominant rise in ALT and AST; occurs in viral hepatitis, alcoholic liver disease, MASLD/MASH"],
              ["Cholestatic injury"," \u2014 predominant rise in alkaline phosphatase (ALKP) and bilirubin; occurs in biliary obstruction, primary biliary cholangitis"]
            ]},
            {type:"note",text:"The best test of actual liver function is PT/INR, not the LFTs. Coagulation factors must be replaced hourly, so a prolonged PT/INR rapidly signals liver failure. LFTs measure inflammation, not function."}
          ]
        },
        {
          id: "viral-hepatitis",
          title: "Viral Hepatitis",
          content: [
            {type:"p",text:"Three major hepatitis viruses in the US:"},
            {type:"ul",items:[
              ["Hepatitis A (HAV)"," \u2014 food and waterborne; the only type to cause spiking fevers; causes acute hepatitis only, no chronic carrier state. Vaccine available."],
              ["Hepatitis B (HBV)"," \u2014 spread by infected bodily fluids and sex; very hardy outside the body. Only 1\u20132% of immunocompetent persons develop chronic infection. Easy to get, easy to give away. Vaccine available."],
              ["Hepatitis C (HCV)"," \u2014 spread by needles and medical equipment; more delicate than HBV. 85% of immunocompetent persons develop chronic infection. Hard to get, but hard to give away. No vaccine; consider in IVDA, remote blood transfusions, military service (baby boomers). Chronic HCV is almost always curable."]
            ]},
            {type:"p",text:"Acute viral hepatitis: ALT/AST in the thousands (hepatocellular pattern). Chronic viral hepatitis: ALT/AST in the low hundreds."}
          ]
        },
        {
          id: "masld",
          title: "Metabolic Liver Disease (MASLD / MASH)",
          content: [
            {type:"p",text:"An increasingly common form of liver disease driven by the obesity epidemic. Extra fat is deposited in the liver, releasing free radicals that damage hepatocytes."},
            {type:"p",text:"Risk factors: obesity, diabetes/glucose intolerance, hypertension, hyperlipidemia."},
            {type:"p",text:"The spectrum of fatty liver disease:"},
            {type:"ul",items:[
              ["MASLD"," \u2014 metabolic dysfunction-associated steatotic liver disease (formerly NAFLD); generally asymptomatic with mild transaminase elevations (ALT > AST in hepatocellular pattern)"],
              ["MASH"," \u2014 metabolic-associated steatohepatitis (formerly NASH); transaminase elevation in the low hundreds; ALT > AST; progresses over years to cirrhosis and end-stage liver disease"]
            ]}
          ]
        },
        {
          id: "alcoholic-liver",
          title: "Alcoholic Liver Disease",
          content: [
            {type:"p",text:"Alcohol is directly hepatotoxic; damage is generally from long-term daily drinking. Women are more vulnerable than men, but men have higher rates of heavy drinking."},
            {type:"p",text:"Transaminase elevations in alcoholic liver disease are in a hepatocellular pattern, in the hundreds, with a characteristic AST:ALT ratio of 2:1 (AST is twice the ALT)."},
            {type:"p",text:"Recommended limits: 1 drink/day for women, 2 drinks/day for most men. One drink = 12 oz of 5% beer, 5 oz of 12% wine, or 1.5 oz of 80-proof liquor."}
          ]
        },
        {
          id: "cirrhosis",
          title: "Fibrosis \u2192 Cirrhosis",
          content: [
            {type:"p",text:"The liver exposed to frequent bouts of inflammation will regenerate and recover, but not without permanent scar tissue forming. This fibrosis replaces normal hepatic architecture with non-functioning scar tissue. The remaining hepatocytes must work harder and wear out more quickly."},
            {type:"p",text:"After months to years of damage, the essential functions of the liver fail:"},
            {type:"ul",items:[
              "The failing liver can no longer detoxify ingested substances or metabolic products \u2014 toxins build up in the blood",
              "The liver can no longer synthesize albumin and coagulation factors \u2014 causing coagulopathy and loss of oncotic pressure"
            ]}
          ]
        },
        {
          id: "portal-hypertension",
          title: "Portal Hypertension",
          content: [
            {type:"p",text:"One of the primary pathophysiologic consequences of chronic liver disease. When the liver parenchyma becomes fibrotic, blood has a more difficult time traveling through the hepatic sinusoids. Transit time lengthens and blood backs up in the portal system."},
            {type:"p",text:"The body responds to congestion by constricting the portal vein \u2014 causing elevated pressures (hypertension) isolated to the portal vessels. Systemic blood pressure is usually low-normal."},
            {type:"p",text:"The body also bypasses the congested liver by creating gastric and esophageal collateral vessels to shunt blood around the obstruction. This helps with hepatic congestion but means less detoxification of blood that bypasses the liver."}
          ]
        },
        {
          id: "esld-complications",
          title: "End-Stage Liver Disease Complications",
          content: [
            {type:"p",text:"Three summary mechanisms drive the complications of end-stage liver disease:"},
            {type:"ul",items:[
              "Less ability to detoxify blood due to liver cell failure and shunting",
              "Loss of protein synthesis causing coagulopathy and loss of oncotic pressure",
              "Portal hypertension as blood backs up in the portal vein"
            ]},
            {type:"p",text:"These produce the cardinal complications:"},
            {type:"ul",items:[
              ["Hepatic encephalopathy"," \u2014 confusion from accumulation of ammonia and other toxins (especially from protein metabolism and colonic bacteria). Precipitated by: alcohol binge, medications that slow peristalsis, GI bleed (increased protein load), or reduced liver blood flow. Treated by keeping the GI tract moving briskly."],
              ["Esophageal varices / internal hemorrhoids / caput medusae"," \u2014 portal hypertension causes engorged venous collaterals in key locations. These vessels rupture easily and are non-compressible; the coagulopathic cirrhotic patient is at severe risk of exsanguination."],
              ["Ascites"," \u2014 high hydrostatic pressure in the portal vein + low oncotic pressure from decreased albumin synthesis \u2192 fluid third-spaces into the abdominal cavity"],
              ["Hypoalbuminemia / anasarca"," \u2014 loss of protein synthesis leads to generalized edema; loss of oncotic pressure allows fluid to leak out of vessels throughout the body"]
            ]}
          ]
        }
      ]
    }
  ]
});
