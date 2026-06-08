const experiments = [
  ["Shishu", "General", "Measurement of human body temperature through clinical thermometer.", "Clinical thermometer"],
  ["Shishu", "General", "Identify the soluble and insoluble objects in water.", "Water, sugar, salt, grains, sand, stones"],
  ["Shishu", "General", "Prepare Oral Rehydration Solution with correct ingredient quantities.", "Water, beaker, lemon, salt, sugar, spoon, knife"],
  ["Shishu", "General", "Experimentally test the purity of milk.", "Beaker, milk, water, lactometer"],
  ["Shishu", "General", "Identify and separate the mixture of five grains.", "Any five grains, watch glass"],
  ["Shishu", "General", "Prove experimentally that one fifth of air is oxygen.", "Candle, matchbox, glass, pot, water"],
  ["Shishu", "General", "Experimentally prove that air exerts pressure.", "Glass, water, card paper"],
  ["Shishu", "General", "Find all four directions by using a bar magnet.", "Bar magnet, thread, stand"],
  ["Shishu", "General", "Determine the acidity and alkalinity of soil by experiment.", "Litmus paper, soil, beaker, water"],
  ["Shishu", "General", "Experimentally prove that peanut contains fat.", "Peanut, filter paper, crusher"],
  ["Shishu", "General", "Experimentally prove that there is air inside soil.", "Soil, water, beaker"],
  ["Shishu", "General", "Experimentally prove that condensation of water vapour takes place.", "Glass, piece of ice, cold water"],
  ["Shishu", "General", "Experimentally show the difference between transparent and translucent materials.", "Transparent glass medium, translucent medium"],
  ["Shishu", "General", "Separate two immiscible liquids from their mixture.", "Funnel, oil, water"],
  ["Shishu", "General", "Show experimentally how a phone can be prepared with cotton thread.", "Cotton thread, matchbox, pin, paper"],

  ["Bal", "General Science", "Test the presence of carbohydrate or starch in a given food item.", "Food material, clean test tube, iodine solution, burner, water bath"],
  ["Bal", "Biology", "Prepare a temporary slide of onion peel.", "Onion, slide, cover slip, scalpel, glycerin, safranine, forceps"],
  ["Bal", "Earth Science", "Prove that soil contains moisture.", "Soil, test tube, spirit lamp, test tube holder"],
  ["Bal", "Chemistry", "Identify the nature of magnesium oxide after burning magnesium ribbon.", "Magnesium ribbon, sand paper, burner, watch glass, tongs, litmus paper, test tube, water"],
  ["Bal", "General Science", "Test the presence of fat in a given food sample.", "Food sample, white paper, light"],
  ["Bal", "Physics", "Determine which liquids conduct electricity.", "Battery, LED bulb, connecting wire, beaker, electrodes, distilled water, tap water, lemon juice, salt water, oil, vinegar"],
  ["Bal", "Physics", "Investigate the image characteristics produced by a concave mirror.", "Concave mirror, mirror holder, white cardboard screen, candle, measuring scale"],
  ["Bal", "Physics", "Calculate the buoyant force exerted on an object immersed in water.", "Measuring jar, balance, weight box, object"],
  ["Bal", "Physics", "Split white light into component colours by using a glass prism.", "Glass prism, white paper, sunlight or white light source, cardboard with narrow slit"],
  ["Bal", "Physics", "Demonstrate that rubbing two materials transfers charge from one object to another.", "Balloon, woollen cloth or dry hair, small pieces of paper"],
  ["Bal", "Chemistry", "Prepare crystals of copper sulphate from an impure sample.", "Impure copper sulphate powder, distilled water, dilute sulphuric acid, beaker, burner, filter paper, china dish, glass rod"],
  ["Bal", "Chemistry", "Demonstrate neutralization using hydrochloric acid, sodium hydroxide, and phenolphthalein.", "Dilute HCl, dilute NaOH, phenolphthalein, test tube, dropper, glass rod"],
  ["Bal", "Chemistry", "Separate a mixture of sulphur, iron filings, and ammonium chloride.", "Sulphur, iron filings, ammonium chloride, magnet, beaker, water, spoon"],
  ["Bal", "Chemistry", "Prove that hydrogen gas is evolved when a metal reacts with acid.", "Zinc metal, HCl, matchstick, test tube"],
  ["Bal", "Biology", "Study the action of saliva on starch.", "Starch, salt, iodine solution, saliva, two test tubes, dropper"],

  ["Kishor", "Physics", "Verify Ohm's law and draw the V-I graph.", "Connecting wire, voltmeter, ammeter, resistance wire, cell or battery, key"],
  ["Kishor", "Physics", "Draw the path of deviation of light through a glass prism.", "Prism, pins, white paper, scale, cardboard"],
  ["Kishor", "Physics", "Determine the density of a solid using a spring balance and measuring cylinder.", "Water, spring balance, measuring cylinder"],
  ["Kishor", "Physics", "Determine the equivalent resistance of two resistors connected in series.", "Voltmeter, ammeter, connecting wire, two resistance wires"],
  ["Kishor", "Physics", "Determine the focal length of a convex lens using the image of a distant object.", "Convex lens, meter scale, optical bench"],
  ["Kishor", "Biology", "Experimentally prove that chlorophyll is essential for photosynthesis.", "Variegated leaves, iodine solution, alcohol, burner, beaker, Petri dish"],
  ["Kishor", "Biology", "Prepare a stained temporary slide of human cheek cells.", "Toothpick, glass slide, methylene blue, microscope, cover slip, glycerin"],
  ["Kishor", "Biology", "Prepare a temporary slide of leaf peel to show stomata.", "Glass slide, cover slip, leaves, safranin, glycerin, microscope, Petri dish"],
  ["Kishor", "Biology", "Prepare a slide of transverse section of ovary of a given flower.", "Flower, blade or razor, slide, coverslip, glycerin, forceps, safranin, microscope"],
  ["Kishor", "Biology", "Study the characteristics of angiospermic plants.", "Angiospermic plants"],
  ["Kishor", "Chemistry", "Study the reaction of zinc and dilute HCl and identify the gas produced.", "Zinc, dilute HCl, test tube, burner"],
  ["Kishor", "Chemistry", "Study the reaction between iron nail and copper sulphate solution.", "Iron nail, CuSO4 solution, beaker, test tube, burner"],
  ["Kishor", "Chemistry", "Verify reactions by performing and observing water with quicklime, heat on ferrous sulphate, and sodium with ethanol.", "Water, CaO, FeSO4, sodium metal, ethanol, test tubes, burner, china dish"],
  ["Kishor", "Chemistry", "Prove by experiment that zinc is an amphoteric metal.", "Test tube, zinc granules, dilute HCl, NaOH solution"],
  ["Kishor", "Chemistry", "Identify the product formed by reaction between acetic acid and ethanol in concentrated sulphuric acid.", "Test tube, ethanol, acetic acid, concentrated H2SO4"],

  ["Tarun", "Physics", "Measure diameter with Vernier calipers and find volume of a beaker or calorimeter.", "Vernier caliper, bob, beaker"],
  ["Tarun", "Physics", "Find velocity of sound in air at room temperature using a resonance tube.", "Resonance tube apparatus, tuning forks, rubber pad, thermometer, water, beaker"],
  ["Tarun", "Physics", "Find resistance of a given wire using a meter bridge.", "Meter bridge, cell, resistance box, resistance wire, galvanometer, jockey, screw gauge"],
  ["Tarun", "Physics", "Convert a galvanometer into an ammeter of desired range and verify it.", "Galvanometer, ammeter, battery, resistance boxes, keys, rheostat, wires, sandpaper"],
  ["Tarun", "Physics", "Find refractive index of water using plane mirror and convex lens.", "Plane mirror with stand, convex lens, water, optical needle"],
  ["Tarun", "Physics", "Verify laws of parallel combination of resistance using a meter bridge.", "Meter bridge, cell, resistance box, three resistances, galvanometer, jockey"],
  ["Tarun", "Physics", "Find v for different u values for a concave mirror and calculate focal length.", "Optical bench, optical needle, concave mirror, graph paper"],
  ["Tarun", "Physics", "Find focal length of a convex lens by plotting graph between u and v.", "Convex lens, optical bench, optical needle, graph paper"],
  ["Tarun", "Physics", "Plot V-I curve for a p-n junction diode and find dynamic resistance.", "P-n diode circuit, ammeter, voltmeter, connecting wires, graph paper"],
  ["Tarun", "Physics", "Plot L-T squared graph for a simple pendulum and find acceleration due to gravity.", "Simple pendulum, stopwatch, Vernier caliper, meter scale, graph paper"],
  ["Tarun", "Physics", "Study relation between wire length and tension at constant frequency using sonometer.", "Sonometer, tuning fork, weights"],
  ["Tarun", "Physics", "Find minimum deviation angle and refractive index of a prism from graph.", "Glass prism, drawing board, half meter scale, thumb pins, pins, protractor, A4 sheet"],
  ["Tarun", "Physics", "Determine resistance and resistivity of a wire from potential difference and current graph.", "Battery eliminator, key, ammeter, voltmeter, 100 cm resistance wire, rheostat, sandpaper"],
  ["Tarun", "Physics", "Find frequency of AC mains with a sonometer.", "Sonometer, slotted weight, hanger, power pack, electromagnet"],
  ["Tarun", "Physics", "Determine radius of curvature of a spherical surface using a spherometer.", "Curved glass, spherometer, plane glass"],

  ["Tarun", "Chemistry", "Identify one acidic radical in a given salt from acetate, chloride, sulphate, sulphide, iodide, nitrate.", "Boiling tube, test tubes, measuring cylinder, stand, holder, corks, filter paper, reagents"],
  ["Tarun", "Chemistry", "Identify one acidic radical in a given salt from carbonate, sulphite, nitrate, bromide, phosphate, oxalate.", "Salt, test tubes with stand, filter paper, Kipp's apparatus, spirit lamp, reagents"],
  ["Tarun", "Chemistry", "Identify one basic radical in a given salt from ammonium, copper, lead, ferric, arsenic.", "Salt, test tubes with stand, filter paper, Kipp's apparatus, spirit lamp, reagents"],
  ["Tarun", "Chemistry", "Identify one basic radical in a given salt from nickel, manganese, cobalt, aluminium.", "Salt, test tubes with stand, filter paper, Kipp's apparatus, spirit lamp, reagents"],
  ["Tarun", "Chemistry", "Identify one basic radical in a given salt from ferric, zinc, barium, calcium, strontium.", "Salt, test tube, stand, filter paper, reagents"],
  ["Tarun", "Chemistry", "Identify functional group in organic compounds: carboxylic acid, alcohol, phenol.", "Given compound, test tubes with stand, spirit lamp, reagents"],
  ["Tarun", "Chemistry", "Identify functional group in organic compounds: aldehyde, ketone, aromatic amine.", "Given compounds, test tube, stand, ignition tube, reagents"],
  ["Tarun", "Chemistry", "Prepare N/15 oxalic acid and find normality of caustic soda solution.", "Oxalic acid, caustic soda solution, chemical balance, weight box"],
  ["Tarun", "Chemistry", "Prepare M/40 oxalic acid and find strength of KMnO4 solution in gram per litre.", "Oxalic acid, KMnO4, pipette, burette"],
  ["Tarun", "Chemistry", "Prepare standard solution using chemical balance.", "Chemical balance, weight box, caustic soda, oxalic acid or sodium carbonate"],
  ["Tarun", "Chemistry", "Prepare M/30 Mohr's salt and find strength of potassium permanganate solution.", "Mohr's salt, chemical balance, KMnO4, pipette, burette"],
  ["Tarun", "Chemistry", "Prepare M/15 sodium carbonate and find normality of hydrochloric acid.", "Chemical balance, sodium carbonate, HCl, conical flask, pipette, burette"],
  ["Tarun", "Chemistry", "Prepare 500 ml standard M/20 solution of Mohr's salt.", "Mohr's salt, chemical balance, weight box, beaker, glass rod, measuring flask"],
  ["Tarun", "Chemistry", "Prepare a standard solution of caustic soda or sodium carbonate.", "Chemical balance, weight box, reagents"],
  ["Tarun", "Chemistry", "Prepare double salt of potash alum or ferrous ammonium sulphate.", "Beaker, conical flask, trough, glass rod, tripod, funnel, wire gauze, salts, dilute sulphuric acid, ethanol"],

  ["Tarun", "Biology", "Explain the human skeleton and different types of joints.", "Human skeleton specimen, charts, models"],
  ["Tarun", "Biology", "Prepare stained mount of T.S. of dicot stem and observe its parts.", "Dicot stem, safranin, glycerine, slide, cover slip, brush, Petri dish, watch glass, microscope"],
  ["Tarun", "Biology", "Study plasmolysis in epidermal peels.", "Leaves, forceps, droppers, slide, watch glass, cover slip, NaCl solutions, microscope"],
  ["Tarun", "Biology", "Study distribution of stomata on upper and lower surfaces of leaves.", "Leaf blade, safranine, cover slip, glycerine, brush, needle, microscope"],
  ["Tarun", "Biology", "Perform controlled pollination by emasculation, tagging, and bagging.", "Bisexual flowers, magnifying lens, tweezers, scissors, brush, alcohol, rubber bands, paper bags, clips, tags"],
  ["Tarun", "Biology", "Test presence of sugar, starch, proteins, and fats in plant materials.", "Test tube, spirit lamp, holders, conc. HNO3, NH4OH or NaOH, Million's reagent, iodine, cobalt chloride"],
  ["Tarun", "Biology", "Separate plant pigments through paper chromatography.", "Whatman paper, spinach, acetone, petroleum ether, corked test tube, mortar, pestle, muslin cloth"],
  ["Tarun", "Biology", "Study blastula through a permanent slide.", "Permanent slide, compound microscope"],
  ["Tarun", "Biology", "Study and describe Solanaceae flower with floral whorls, anther, ovary, root, stem, and leaf.", "Given plant, forceps"],
  ["Tarun", "Biology", "Prepare a temporary mount to observe pollen grain germination.", "Fresh flower, sucrose, slide, cover slip"],
  ["Tarun", "Biology", "Prepare onion root tip mount to study mitosis.", "Slide, onion root tips, cover slip, acetocarmine, glycerine, microscope"],
  ["Tarun", "Biology", "Isolate DNA from plant material such as spinach, green pea, or papaya.", "Plant material, test tube, NaCl, muslin cloth, inoculation rod, detergent, distilled water, ethanol"],
  ["Tarun", "Biology", "Study stages of gamete formation through permanent slides.", "Permanent slides, microscope"],
  ["Tarun", "Biology", "Prepare pedigree chart for a genetic trait.", "Family trait data, chart paper, pedigree symbols"],
  ["Tarun", "Biology", "Identify homologous and analogous organs with flash cards.", "Flash cards"]
].map((item, index) => {
  const id = index + 1;
  const video = (window.experimentVideos || []).find((entry) => entry.id === id) || {};
  return {
    id,
    group: item[0],
    subject: item[1],
    title: item[2],
    materials: item[3],
    videoUrl: video.url || null,
    videoTitle: video.title || ""
  };
});

const groupInfo = {
  Shishu: "Classes 4-5",
  Bal: "Classes 6-8",
  Kishor: "Classes 9-10",
  Tarun: "Classes 11-12"
};

let currentFilter = "all";
let currentSubject = "all";
const cards = document.querySelector("#cards");
const search = document.querySelector("#search");
const resultCount = document.querySelector("#resultCount");
const totalCount = document.querySelector("#totalCount");
const dialog = document.querySelector("#detailDialog");
const detailContent = document.querySelector("#detailContent");
const subjectFilters = document.querySelector(".subject-filters");

totalCount.textContent = experiments.length;

function videoMarkup(experiment) {
  if (!experiment.videoUrl) {
    return `<span class="video-missing">Exact video pending</span>`;
  }
  const verified = isVideoVerified(experiment);
  const badge = verified ? "Verified video" : "Review video";
  return `
    <a class="video-link" href="${experiment.videoUrl}" target="_blank" rel="noreferrer">Watch video</a>
    <span class="video-badge ${verified ? "is-verified" : "needs-review"}">${badge}</span>
    <span class="video-title">${experiment.videoTitle || "Selected experiment video"}</span>
  `;
}

function isVideoVerified(experiment) {
  const checkedIds = new Set([1, 2, 3, 4, 6, 7, 12, 14, 15, 17, 18, 19, 21, 26, 27, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 45, 47, 48, 49, 54, 55, 57, 59, 60, 68, 69, 71, 72, 73, 75, 78, 79, 82, 85, 86, 87, 89, 90]);
  return checkedIds.has(experiment.id);
}

function tagsFor(experiment) {
  const text = `${experiment.title} ${experiment.materials}`.toLowerCase();
  const tags = [];
  if (/graph|ohm|resistance|lens|mirror|prism|pendulum|sonometer|sound|diode|density|buoyant/.test(text)) tags.push("calculation");
  if (/acid|base|salt|hcl|naoh|kmno4|solution|sulphate|zinc|ethanol/.test(text)) tags.push("chemistry");
  if (/slide|leaf|stomata|cell|plant|dna|pollen|skeleton|mitosis/.test(text)) tags.push("microscopy");
  if (/air|water|soil|milk|food|grain|peanut/.test(text)) tags.push("home lab");
  return tags.slice(0, 2);
}

function theoryFor(experiment) {
  const t = experiment.title.toLowerCase();
  if (t.includes("ohm")) return "Ohm's law states that current through a conductor is directly proportional to potential difference when temperature remains constant.";
  if (t.includes("density")) return "Density is mass per unit volume. For an irregular solid, volume can be found from displaced water.";
  if (t.includes("focal") || t.includes("lens") || t.includes("mirror")) return "Image formation depends on object distance, image distance, and focal length. Record distances carefully and use the lens or mirror relation where required.";
  if (t.includes("starch") || t.includes("iodine")) return "Iodine forms a blue-black colour with starch, so it is used as an indicator for starch presence.";
  if (t.includes("neutralization")) return "Neutralization is the reaction of an acid with a base to form salt and water; phenolphthalein helps detect the endpoint.";
  if (t.includes("photosynthesis")) return "Chlorophyll absorbs light energy and is essential for photosynthesis; starch formation indicates photosynthetic activity.";
  if (t.includes("dna")) return "DNA can be separated by breaking cells, dissolving membranes with detergent, and precipitating DNA with cold ethanol.";
  if (t.includes("chromatography")) return "Chromatography separates pigments because each pigment travels at a different rate with the solvent.";
  if (t.includes("oxygen")) return "Burning uses oxygen from air; the fall in water level shows the approximate oxygen fraction.";
  if (t.includes("air exerts pressure")) return "Air has mass and exerts pressure in all directions. A card can stay in place when outside air pressure balances water pressure.";
  if (t.includes("soluble")) return "A soluble substance dissolves uniformly in water, while an insoluble substance remains separate even after stirring.";
  if (t.includes("temperature")) return "A clinical thermometer measures human body temperature by expansion of liquid in a narrow tube.";
  if (t.includes("milk")) return "A lactometer works on buoyancy. Pure milk and diluted milk have different densities, so the instrument floats at different levels.";
  if (t.includes("condensation")) return "Water vapour changes into liquid water when it touches a cold surface. This process is called condensation.";
  if (t.includes("transparent")) return "Transparent materials allow most light to pass clearly; translucent materials allow partial light and form blurred images.";
  return "This experiment verifies the named scientific fact through controlled observation, comparison, and recording of measurable results.";
}

function calculationFor(experiment) {
  const t = experiment.title.toLowerCase();
  if (t.includes("ohm")) return "Create a V-I table, plot V on the y-axis and I on the x-axis, and calculate resistance from slope R = V/I.";
  if (t.includes("density")) return "Mass = reading in air. Volume = final water level - initial water level. Density = mass / volume.";
  if (t.includes("buoyant")) return "Buoyant force = weight in air - apparent weight in water. Compare with weight of displaced water.";
  if (t.includes("focal") || t.includes("lens") || t.includes("mirror")) return "Use 1/f = 1/v - 1/u for lens work or 1/f = 1/v + 1/u for mirror work as per sign convention; verify with graph where required.";
  if (t.includes("resistivity")) return "From V-I graph find R = V/I, then calculate resistivity using rho = RA/L.";
  if (t.includes("pendulum")) return "Record time for multiple oscillations, find T, plot L vs T squared, and use g = 4 pi squared / slope.";
  if (t.includes("normality")) return "Use N1V1 = N2V2 at endpoint. Record concordant burette readings before final calculation.";
  if (t.includes("strength")) return "Strength in g/L = normality x equivalent weight, or molarity x molar mass as applicable.";
  if (t.includes("standard solution")) return "Mass required = molarity x molar mass x volume in litres. Adjust for normality when equivalents are used.";
  if (t.includes("clinical thermometer") || t.includes("temperature")) return "Temperature reading = final thermometer reading in degree Celsius. Normal human body temperature is about 37 degree Celsius.";
  if (t.includes("soluble")) return "Count each test material under soluble or insoluble category and write the classification in the observation table.";
  if (t.includes("oral rehydration")) return "For standard ORS at home level: use clean water with measured sugar and salt. Record the ratio used and ensure salt is not excessive.";
  if (t.includes("milk")) return "Compare lactometer reading of the milk sample with standard milk reading. Lower density may indicate dilution with water.";
  if (t.includes("one fifth of air")) return "Approximate oxygen fraction = rise in water level / total air column inside glass. Expected value is nearly 1/5.";
  if (t.includes("four directions")) return "A freely suspended bar magnet rests along north-south direction. East and west are marked perpendicular to it.";
  if (t.includes("acidity and alkalinity")) return "Red litmus turning blue indicates basic soil; blue litmus turning red indicates acidic soil; no change indicates neutral soil.";
  if (t.includes("immiscible")) return "Record upper layer and lower layer separately. Oil generally forms the upper layer and water forms the lower layer.";
  if (t.includes("white light")) return "No numerical calculation is required. Record the observed spectrum order: violet, indigo, blue, green, yellow, orange, red.";
  if (t.includes("equivalent resistance") && t.includes("series")) return "Equivalent resistance in series: Rs = R1 + R2. Verify using observed R = V/I.";
  if (t.includes("parallel combination")) return "For parallel combination: 1/Rp = 1/R1 + 1/R2 + 1/R3. Compare calculated value with meter bridge value.";
  if (t.includes("vernier")) return "Measurement = main scale reading + Vernier coincidence x least count. Volume of cylinder/beaker = pi r squared h.";
  if (t.includes("resonance tube")) return "Velocity of sound v = 2f(l2 - l1), where l1 and l2 are first and second resonance lengths.";
  if (t.includes("meter bridge")) return "Unknown resistance X = R x l / (100 - l), where l is balance length in cm.";
  if (t.includes("galvanometer")) return "Shunt resistance S = IgG / (I - Ig), where G is galvanometer resistance and Ig is full-scale current.";
  if (t.includes("diode")) return "Dynamic resistance rd = change in voltage / change in current from the linear part of V-I curve.";
  if (t.includes("spherometer")) return "Radius of curvature R = l squared / 6h + h / 2, where l is mean leg distance and h is sagitta.";
  if (t.includes("salt")) return "No numerical calculation is required. Identify the radical from confirmatory test observation.";
  if (t.includes("functional group")) return "No numerical calculation is required. Record the reagent used, observation, and identified functional group.";
  if (t.includes("chromatography")) return "Rf value = distance travelled by pigment / distance travelled by solvent front.";
  if (t.includes("pollen")) return "Calculate percentage germination = germinated pollen grains / total pollen grains counted x 100.";
  return "Use an observation table. If no numerical formula is needed, write qualitative result, colour change, separation, or labelled diagram as the calculation/result section.";
}

function formulaFor(experiment) {
  const t = experiment.title.toLowerCase();
  if (t.includes("vernier")) return [
    "Least count, L.C. = 1 MSD - 1 VSD",
    "Correct reading = MSR + (VSR x L.C.)",
    "Volume of sphere = 4/3 pi r^3",
    "Volume of cylinder/beaker = pi r^2 h"
  ];
  if (t.includes("ohm")) return ["V is directly proportional to I", "Resistance, R = V/I", "Slope of V-I graph = R"];
  if (t.includes("density")) return ["Volume of solid = final water level - initial water level", "Density = mass / volume"];
  if (t.includes("buoyant")) return ["Buoyant force = weight in air - apparent weight in water"];
  if (t.includes("focal") && t.includes("convex lens")) return ["Lens formula: 1/f = 1/v - 1/u", "Magnification, m = v/u"];
  if (t.includes("concave mirror")) return ["Mirror formula: 1/f = 1/v + 1/u", "Magnification, m = -v/u"];
  if (t.includes("equivalent resistance") && t.includes("series")) return ["For series combination: Rs = R1 + R2", "Observed resistance: R = V/I"];
  if (t.includes("parallel combination")) return ["For parallel combination: 1/Rp = 1/R1 + 1/R2 + 1/R3"];
  if (t.includes("meter bridge")) return ["Unknown resistance, X = R x l / (100 - l)"];
  if (t.includes("resistivity")) return ["Resistance, R = V/I", "Resistivity, rho = RA/L"];
  if (t.includes("pendulum")) return ["Time period, T = time for n oscillations / n", "g = 4 pi^2 L / T^2"];
  if (t.includes("resonance tube")) return ["Velocity of sound, v = 2f(l2 - l1)"];
  if (t.includes("diode")) return ["Dynamic resistance, rd = Delta V / Delta I"];
  if (t.includes("spherometer")) return ["R = l^2 / 6h + h / 2"];
  if (t.includes("normality")) return ["At end point: N1V1 = N2V2"];
  if (t.includes("strength")) return ["Strength = normality x equivalent weight"];
  if (t.includes("standard solution")) return ["Mass required = molarity x molar mass x volume in litres"];
  if (t.includes("chromatography")) return ["Rf value = distance travelled by pigment / distance travelled by solvent front"];
  if (t.includes("pollen")) return ["Percentage germination = germinated pollen grains / total pollen grains x 100"];
  return ["No numerical formula is required. Record observation and inference carefully."];
}

function diagramFor(experiment) {
  const t = experiment.title.toLowerCase();
  if (t.includes("vernier")) return ["Vernier caliper with main scale and vernier scale", "Spherical/cylindrical body held between jaws", "Beaker internal diameter and depth marking"];
  if (t.includes("clinical thermometer") || t.includes("temperature")) return ["Clinical thermometer", "Bulb end", "Scale reading in degree Celsius"];
  if (t.includes("soluble")) return ["Three labelled beakers with water", "Soluble sample dissolved", "Insoluble sample settled at bottom"];
  if (t.includes("oral rehydration")) return ["Beaker with water", "Sugar, salt, lemon", "Stirring spoon and labelled ORS"];
  if (t.includes("milk")) return ["Lactometer floating in milk cylinder", "Reading mark at milk surface"];
  if (t.includes("five grains")) return ["Five labelled heaps of grains", "Watch glass"];
  if (t.includes("one fifth of air")) return ["Burning candle in water trough", "Inverted glass", "Risen water level"];
  if (t.includes("air exerts pressure")) return ["Inverted water-filled glass", "Card paper at mouth", "Upward air pressure arrow"];
  if (t.includes("four directions")) return ["Suspended bar magnet", "N-S line", "E-W line"];
  if (t.includes("soil") && t.includes("moisture")) return ["Test tube with soil", "Spirit lamp", "Water droplets on upper wall"];
  if (t.includes("air inside soil")) return ["Beaker with soil and water", "Air bubbles rising"];
  if (t.includes("condensation")) return ["Glass with ice/cold water", "Droplets outside glass"];
  if (t.includes("transparent")) return ["Transparent sheet with clear object", "Translucent sheet with blurred object"];
  if (t.includes("immiscible")) return ["Separating funnel", "Oil layer", "Water layer", "Stopcock"];
  if (t.includes("cotton thread")) return ["Two cups/matchboxes", "Taut cotton thread", "Speaker and listener"];
  if (t.includes("starch") || t.includes("food sample")) return ["Test tube with food extract", "Iodine dropper", "Blue-black colour observation"];
  if (t.includes("onion peel") || t.includes("cheek") || t.includes("leaf peel") || t.includes("stomata") || t.includes("mitosis")) return ["Glass slide", "Cover slip", "Microscope field with labelled cells"];
  if (t.includes("magnesium")) return ["Burning magnesium ribbon held with tongs", "Watch glass with white ash", "Litmus test"];
  if (t.includes("conduct electricity")) return ["Battery", "LED/bulb", "Electrodes dipped in liquid", "Connecting wires"];
  if (t.includes("concave mirror")) return ["Candle/object", "Concave mirror", "Screen", "Principal axis"];
  if (t.includes("buoyant")) return ["Spring balance", "Object immersed in measuring jar", "Water displacement"];
  if (t.includes("white light") || t.includes("prism")) return ["Narrow slit", "Glass prism", "Screen with spectrum"];
  if (t.includes("charge")) return ["Rubbed balloon", "Small paper pieces", "Attraction arrows"];
  if (t.includes("copper sulphate")) return ["Beaker/china dish", "Filter funnel", "Blue crystals"];
  if (t.includes("neutralization")) return ["Test tube", "HCl dropper", "NaOH with phenolphthalein", "Colour change"];
  if (t.includes("sulphur, iron")) return ["Magnet separating iron filings", "Sublimation setup for ammonium chloride"];
  if (t.includes("hydrogen") || t.includes("zinc and dilute hcl")) return ["Test tube with Zn + HCl", "Gas bubbles", "Burning matchstick pop test"];
  if (t.includes("ohm") || t.includes("resistance") || t.includes("diode")) return ["Circuit diagram with cell, key, ammeter, voltmeter, resistor/diode", "V-I graph axes"];
  if (t.includes("density")) return ["Spring balance", "Measuring cylinder", "Solid immersed in water"];
  if (t.includes("focal") || t.includes("lens")) return ["Convex lens on stand", "Screen", "Distant object/image path"];
  if (t.includes("photosynthesis") || t.includes("chlorophyll")) return ["Variegated leaf", "Alcohol water bath", "Iodine test leaf"];
  if (t.includes("angiospermic") || t.includes("solanaceae")) return ["Flower with labelled whorls", "Root, stem and leaf sketch"];
  if (t.includes("esterification")) return ["Water bath", "Test tube with ethanol and acetic acid", "Fruity smell note"];
  if (t.includes("resonance")) return ["Resonance tube", "Water reservoir", "Tuning fork"];
  if (t.includes("meter bridge")) return ["Meter bridge wire", "Resistance box", "Galvanometer and jockey"];
  if (t.includes("galvanometer")) return ["Galvanometer with shunt resistance", "Converted ammeter circuit"];
  if (t.includes("pendulum")) return ["Simple pendulum", "Length L", "Bob", "Stopwatch"];
  if (t.includes("sonometer")) return ["Sonometer wire", "Weights", "Tuning fork/electromagnet"];
  if (t.includes("spherometer")) return ["Spherometer on curved glass", "Three legs", "Central screw"];
  if (t.includes("salt") || t.includes("radical") || t.includes("functional")) return ["Test tube stand", "Test tube with reagent", "Colour/precipitate observation"];
  if (t.includes("titration") || t.includes("normality") || t.includes("kmno4") || t.includes("mohr") || t.includes("sodium carbonate")) return ["Burette", "Pipette", "Conical flask", "Endpoint colour change"];
  if (t.includes("chromatography")) return ["Chromatography paper", "Solvent front", "Separated pigment bands"];
  if (t.includes("pollen")) return ["Slide with pollen grains", "Germ tube under microscope"];
  if (t.includes("dna")) return ["Test tube layers", "Ethanol layer", "White DNA threads"];
  if (t.includes("pedigree")) return ["Pedigree symbols: square, circle, shaded affected trait", "Generations I, II, III"];
  if (t.includes("homologous") || t.includes("analogous")) return ["Two flash cards comparing organs", "Same origin/different function and different origin/same function"];
  return ["Neat labelled diagram of apparatus setup", "Arrows for observation/change", "Label all important parts"];
}

function procedureFor(experiment) {
  const t = experiment.title.toLowerCase();
  if (t.includes("ohm")) return [
    "Connect cell, key, ammeter, resistance wire, and rheostat in series.",
    "Connect the voltmeter in parallel across the resistance wire.",
    "Close the key and adjust the rheostat to get different current readings.",
    "Record corresponding ammeter and voltmeter readings.",
    "Plot V-I graph and calculate resistance from the slope."
  ];
  if (t.includes("onion peel")) return [
    "Remove a thin transparent peel from the inner side of onion scale leaf.",
    "Place the peel in safranin for staining, then rinse gently.",
    "Transfer it to a clean slide with a drop of glycerin.",
    "Place cover slip carefully to avoid air bubbles.",
    "Observe under microscope and draw labelled diagram of cells."
  ];
  if (t.includes("starch") && t.includes("food")) return [
    "Take a small amount of food sample in a clean test tube.",
    "Add a little water and warm it in a water bath if needed.",
    "Add two or three drops of iodine solution.",
    "Observe the colour change carefully.",
    "Blue-black colour confirms the presence of starch."
  ];
  if (t.includes("saliva")) return [
    "Prepare starch solution and divide it equally into two test tubes.",
    "Add saliva to one test tube and keep the second as control.",
    "Keep both test tubes warm for 10 to 15 minutes.",
    "Add iodine solution to both test tubes.",
    "Compare colour change to show starch digestion by saliva."
  ];
  if (t.includes("clinical thermometer") || t.includes("temperature")) return [
    "Wash the clinical thermometer and check that the reading is below 35 degree Celsius.",
    "Place the bulb under the tongue or in the armpit as instructed.",
    "Wait for the required time without touching the bulb.",
    "Read the temperature at eye level.",
    "Record the reading in degree Celsius and clean the thermometer."
  ];
  if (t.includes("soluble")) return [
    "Take equal amounts of water in separate transparent beakers.",
    "Add one test substance to each beaker.",
    "Stir each beaker for the same amount of time.",
    "Observe whether the substance disappears uniformly or remains visible.",
    "Classify each substance as soluble or insoluble."
  ];
  if (t.includes("oral rehydration")) return [
    "Take clean water in a beaker.",
    "Add measured sugar and salt in the correct proportion.",
    "Stir until both dissolve completely.",
    "Add lemon if required and mix again.",
    "Label the prepared ORS and note its use in dehydration."
  ];
  if (t.includes("milk")) return [
    "Pour the milk sample into a clean beaker.",
    "Gently place the lactometer in the milk.",
    "Wait until it floats steadily without touching the beaker wall.",
    "Read the lactometer mark at the milk surface.",
    "Compare the reading with standard/pure milk reading."
  ];
  if (t.includes("five grains")) return [
    "Spread the mixed grain sample on a clean watch glass.",
    "Observe size, shape, colour, and surface texture of each grain.",
    "Separate each type of grain into a different group.",
    "Count or estimate the amount of each grain type.",
    "Write identification features for all five separated grains."
  ];
  if (t.includes("one fifth of air")) return [
    "Fix a candle in a shallow pot containing water.",
    "Light the candle and carefully cover it with an inverted glass.",
    "Observe the candle flame until it goes out.",
    "Mark the rise of water inside the glass.",
    "Conclude that oxygen used in burning is about one fifth of air."
  ];
  if (t.includes("air exerts pressure")) return [
    "Fill a glass completely with water.",
    "Place a smooth card paper over the mouth of the glass.",
    "Hold the card and invert the glass carefully.",
    "Remove the supporting hand slowly.",
    "Observe that the card remains attached due to air pressure."
  ];
  if (t.includes("four directions")) return [
    "Tie a thread at the centre of the bar magnet.",
    "Suspend it freely from a stand.",
    "Wait until the magnet comes to rest.",
    "Mark the north-south direction indicated by the magnet.",
    "Use this line to identify east and west directions."
  ];
  if (t.includes("acidity and alkalinity of soil")) return [
    "Take soil sample in a beaker and add a little water.",
    "Stir well and allow the heavier particles to settle.",
    "Dip blue and red litmus papers in the soil water.",
    "Observe any colour change.",
    "Decide whether the soil is acidic, basic, or neutral."
  ];
  if (t.includes("peanut")) return [
    "Crush a peanut seed gently.",
    "Rub the crushed peanut on clean filter paper.",
    "Hold the paper against light after a few minutes.",
    "Observe the translucent greasy patch.",
    "Conclude that peanut contains fat."
  ];
  if (t.includes("air inside soil")) return [
    "Put dry soil in a beaker.",
    "Pour water slowly over the soil.",
    "Observe bubbles rising from the soil.",
    "Continue adding water until bubbling slows.",
    "Conclude that air present in soil pores escapes as bubbles."
  ];
  if (t.includes("soil contains moisture")) return [
    "Take a small amount of soil in a dry test tube.",
    "Heat the test tube gently with a spirit lamp.",
    "Keep the mouth of the test tube slightly tilted away.",
    "Observe water droplets on the cooler upper part of the tube.",
    "Conclude that soil contains moisture."
  ];
  if (t.includes("condensation")) return [
    "Take cold water and ice pieces in a clean glass.",
    "Keep the glass undisturbed for a few minutes.",
    "Observe the outer surface of the glass.",
    "Touch the droplets formed outside the glass.",
    "Conclude that water vapour in air condensed on the cold surface."
  ];
  if (t.includes("transparent and translucent")) return [
    "Place printed text behind the transparent material.",
    "Observe whether the text is clearly visible.",
    "Place the same text behind the translucent material.",
    "Compare the clarity of the image.",
    "Classify the materials based on light transmission."
  ];
  if (t.includes("immiscible")) return [
    "Pour oil and water into a beaker and stir gently.",
    "Allow the mixture to stand until two layers form.",
    "Transfer the mixture into a separating funnel.",
    "Open the stopcock to drain the lower layer first.",
    "Collect both liquids separately."
  ];
  if (t.includes("cotton thread")) return [
    "Make a small hole in the base of two matchboxes or paper cups.",
    "Pass cotton thread through both holes.",
    "Tie knots so the thread does not slip out.",
    "Stretch the thread tightly between two students.",
    "Speak into one box and listen through the other."
  ];
  if (t.includes("magnesium oxide")) return [
    "Clean magnesium ribbon with sand paper.",
    "Hold it with tongs and burn it in a flame.",
    "Collect the white ash in a watch glass.",
    "Dissolve a little ash in water.",
    "Test the solution with litmus paper to identify basic nature."
  ];
  if (t.includes("conduct electricity")) return [
    "Make a simple circuit using battery, LED/bulb, wires, and electrodes.",
    "Dip electrodes in the first test liquid without touching each other.",
    "Close the circuit and observe whether the LED glows.",
    "Wash electrodes and repeat for each liquid.",
    "Classify liquids as conductors or non-conductors."
  ];
  if (t.includes("concave mirror") && t.includes("image")) return [
    "Fix the concave mirror on a stand facing a candle.",
    "Place the screen on the same line as the mirror.",
    "Move the candle to different distances from the mirror.",
    "Adjust the screen until a sharp image is formed.",
    "Record image nature, size, and position for each distance."
  ];
  if (t.includes("buoyant force")) return [
    "Measure the weight of the object in air.",
    "Fill the measuring jar with water and note the initial level.",
    "Immerse the object fully in water without touching the bottom.",
    "Measure the apparent weight in water and final water level.",
    "Calculate buoyant force from loss of weight."
  ];
  if (t.includes("white light")) return [
    "Allow a narrow beam of sunlight or white light to pass through a slit.",
    "Place a glass prism in the path of the beam.",
    "Adjust the prism until a coloured band appears on white paper.",
    "Observe the order of colours in the spectrum.",
    "Conclude that white light is made of component colours."
  ];
  if (t.includes("transfers charge")) return [
    "Tear paper into very small pieces.",
    "Rub a balloon with woollen cloth or dry hair.",
    "Bring the rubbed balloon near the paper pieces.",
    "Observe attraction of paper pieces.",
    "Conclude that rubbing transfers electric charge."
  ];
  if (t.includes("copper sulphate")) return [
    "Dissolve impure copper sulphate in hot distilled water.",
    "Add a few drops of dilute sulphuric acid.",
    "Filter the hot solution to remove insoluble impurities.",
    "Heat the filtrate in a china dish until saturated.",
    "Cool slowly to obtain blue copper sulphate crystals."
  ];
  if (t.includes("neutralization")) return [
    "Take dilute sodium hydroxide in a test tube.",
    "Add two drops of phenolphthalein indicator.",
    "Add dilute hydrochloric acid drop by drop while stirring.",
    "Observe disappearance of pink colour at endpoint.",
    "Record that acid and base neutralized each other."
  ];
  if (t.includes("sulphur, iron filings")) return [
    "Pass a magnet over the mixture to remove iron filings.",
    "Add water to the remaining mixture and stir.",
    "Filter if needed to separate insoluble sulphur.",
    "Heat the portion containing ammonium chloride carefully for sublimation.",
    "Collect separated components and record their properties."
  ];
  if (t.includes("hydrogen gas") || t.includes("zinc and dilute hcl")) return [
    "Take zinc granules in a test tube.",
    "Add dilute hydrochloric acid carefully.",
    "Observe effervescence due to gas evolution.",
    "Bring a burning matchstick near the mouth of the test tube.",
    "Pop sound confirms hydrogen gas."
  ];
  if (t.includes("path of deviation")) return [
    "Fix a white sheet on a drawing board and place the prism on it.",
    "Trace the boundary of the prism.",
    "Insert two pins to mark the incident ray.",
    "Observe from the other side and place two pins in line with refracted ray.",
    "Remove prism and draw incident, refracted, and emergent rays."
  ];
  if (t.includes("equivalent resistance") && t.includes("series")) return [
    "Connect two resistors in series with battery, key, and ammeter.",
    "Connect voltmeter across the series combination.",
    "Record current and potential difference.",
    "Calculate equivalent resistance using R = V/I.",
    "Compare with R1 + R2."
  ];
  if (t.includes("chlorophyll")) return [
    "Take a variegated leaf that has been exposed to sunlight.",
    "Boil it in water and then in alcohol using a water bath.",
    "Wash the decolourised leaf in warm water.",
    "Place it in a Petri dish and add iodine solution.",
    "Observe blue-black colour only in green parts."
  ];
  if (t.includes("cheek")) return [
    "Gently scrape inner cheek with a clean toothpick.",
    "Spread the material on a glass slide.",
    "Add methylene blue stain and wait briefly.",
    "Place cover slip and remove extra stain.",
    "Observe cell membrane, cytoplasm, and nucleus under microscope."
  ];
  if (t.includes("leaf peel") || t.includes("stomata")) return [
    "Remove a thin peel from the lower surface of a leaf.",
    "Stain it with safranin and rinse gently.",
    "Mount it in glycerin on a glass slide.",
    "Place cover slip without air bubbles.",
    "Observe stomata and guard cells under microscope."
  ];
  if (t.includes("iron nail and copper sulphate")) return [
    "Clean an iron nail with sand paper.",
    "Take blue copper sulphate solution in a test tube.",
    "Put the iron nail into the solution and leave it undisturbed.",
    "Observe reddish-brown deposit on nail and fading blue colour.",
    "Conclude that iron displaces copper from copper sulphate."
  ];
  if (t.includes("amphoteric")) return [
    "Take zinc granules in two separate test tubes.",
    "Add dilute HCl to the first test tube.",
    "Add NaOH solution to the second test tube.",
    "Observe gas evolution in both cases.",
    "Conclude that zinc reacts with both acid and base."
  ];
  if (t.includes("acetic acid and ethanol")) return [
    "Take ethanol and acetic acid in a dry test tube.",
    "Add a few drops of concentrated sulphuric acid carefully.",
    "Warm the mixture in a water bath.",
    "Pour the mixture into water after cooling.",
    "Fruity smell confirms formation of ester."
  ];
  if (t.includes("vernier")) return [
    "Find the least count and zero error of the Vernier caliper.",
    "Measure diameter of the spherical/cylindrical object in different directions.",
    "Measure internal diameter of the beaker.",
    "Measure depth of the beaker.",
    "Use readings to calculate volume."
  ];
  if (t.includes("resonance tube")) return [
    "Set up resonance tube with water reservoir.",
    "Strike a tuning fork and hold it above the tube.",
    "Adjust water level until maximum sound is heard.",
    "Record first and second resonance lengths.",
    "Calculate velocity of sound using resonance relation."
  ];
  if (t.includes("meter bridge") || t.includes("metre bridge")) return [
    "Connect the given resistance and resistance box in the meter bridge gaps.",
    "Connect cell, key, galvanometer, and jockey properly.",
    "Close the key and find the balance point.",
    "Repeat with different resistance box values.",
    "Use bridge formula to calculate unknown resistance."
  ];
  if (t.includes("galvanometer")) return [
    "Note galvanometer resistance and figure of merit.",
    "Calculate shunt resistance for desired ammeter range.",
    "Connect calculated shunt in parallel with galvanometer.",
    "Connect converted ammeter in circuit with standard ammeter.",
    "Compare readings and verify conversion."
  ];
  if (t.includes("p-n junction") || t.includes("diode")) return [
    "Connect diode in forward bias with ammeter and voltmeter.",
    "Increase voltage gradually and note current.",
    "Reverse the diode connections for reverse bias readings.",
    "Plot V-I characteristic curve.",
    "Find dynamic resistance from slope of the curve."
  ];
  if (t.includes("simple pendulum")) return [
    "Measure length of pendulum from point of suspension to centre of bob.",
    "Displace bob slightly and release without push.",
    "Record time for 20 oscillations.",
    "Repeat for different lengths.",
    "Plot L versus T squared and calculate g."
  ];
  if (t.includes("spherometer")) return [
    "Find least count of the spherometer.",
    "Take reading on plane glass.",
    "Place spherometer on curved surface and take reading.",
    "Measure distance between legs.",
    "Calculate radius of curvature using spherometer formula."
  ];
  if (t.includes("paper chromatography")) return [
    "Crush spinach leaves with solvent to obtain pigment extract.",
    "Place a small spot of extract near one end of Whatman paper.",
    "Suspend the paper in solvent without dipping the spot.",
    "Allow solvent to rise and separate pigments.",
    "Mark solvent front and pigment spots."
  ];
  if (t.includes("dna")) return [
    "Grind plant material with salt solution.",
    "Filter through muslin cloth.",
    "Add detergent to break cell membranes.",
    "Slowly add cold ethanol along the side of the test tube.",
    "Observe thread-like DNA precipitate."
  ];
  if (t.includes("mitosis")) return [
    "Take young onion root tips.",
    "Stain root tips with acetocarmine.",
    "Place stained tip on slide and squash gently under cover slip.",
    "Observe under microscope.",
    "Identify different stages of mitosis."
  ];
  const materialLead = experiment.materials.split(",").slice(0, 4).join(", ");
  return [
    `Arrange and label the apparatus: ${materialLead}.`,
    "Write the initial observation before starting the activity.",
    "Perform the experiment slowly, changing only the required variable.",
    "Record observations immediately in a table with units wherever needed.",
    "Compare the observation with the theory and write the final result."
  ];
}

function observationTableFor(experiment) {
  const t = experiment.title.toLowerCase();
  if (t.includes("clinical thermometer") || t.includes("temperature")) return [["S. No.", "Person/Trial", "Initial reading (C)", "Final body temperature (C)", "Normal/High/Low"], ["1", "Trial 1", "", "", ""], ["2", "Trial 2", "", "", ""]];
  if (t.includes("soluble")) return [["S. No.", "Substance", "Appearance before stirring", "Observation after stirring", "Soluble/Insoluble"], ["1", "Sugar", "", "", ""], ["2", "Salt", "", "", ""], ["3", "Sand/grains", "", "", ""]];
  if (t.includes("oral rehydration")) return [["S. No.", "Ingredient", "Quantity taken", "Purpose", "Dissolved properly?"], ["1", "Clean water", "", "Solvent", ""], ["2", "Sugar", "", "Glucose/energy", ""], ["3", "Salt", "", "Electrolyte", ""]];
  if (t.includes("milk")) return [["S. No.", "Sample", "Lactometer reading", "Density/purity note", "Inference"], ["1", "Pure/standard milk", "", "", ""], ["2", "Given milk sample", "", "", ""]];
  if (t.includes("five grains")) return [["S. No.", "Grain name", "Colour", "Shape/size", "Separated quantity"], ["1", "Grain 1", "", "", ""], ["2", "Grain 2", "", "", ""], ["3", "Grain 3", "", "", ""], ["4", "Grain 4", "", "", ""], ["5", "Grain 5", "", "", ""]];
  if (t.includes("one fifth of air")) return [["S. No.", "Initial water level", "Final water level", "Rise in water level", "Approx. fraction of oxygen"], ["1", "", "", "", ""]];
  if (t.includes("air exerts pressure")) return [["S. No.", "Condition", "Card position", "Water falls?", "Inference"], ["1", "Glass filled and inverted with card", "", "", ""], ["2", "Card removed/loose", "", "", ""]];
  if (t.includes("four directions")) return [["S. No.", "Trial", "Magnet end pointing north", "Magnet end pointing south", "Direction line"], ["1", "Trial 1", "", "", ""], ["2", "Trial 2", "", "", ""]];
  if (t.includes("acidity and alkalinity")) return [["S. No.", "Litmus paper", "Original colour", "Colour after soil solution", "Inference"], ["1", "Blue litmus", "Blue", "", ""], ["2", "Red litmus", "Red", "", ""]];
  if (t.includes("peanut") || t.includes("fat")) return [["S. No.", "Food sample", "Paper before rubbing", "Paper after rubbing", "Fat present/absent"], ["1", "Peanut/sample", "", "", ""], ["2", "Control paper", "", "", ""]];
  if (t.includes("air inside soil")) return [["S. No.", "Soil condition", "Water added", "Bubbles observed", "Inference"], ["1", "Dry soil", "", "", ""], ["2", "Wet/settled soil", "", "", ""]];
  if (t.includes("soil contains moisture")) return [["S. No.", "Soil sample", "Heating time", "Droplets on test tube", "Moisture present/absent"], ["1", "Given soil", "", "", ""]];
  if (t.includes("condensation")) return [["S. No.", "Glass contents", "Time kept", "Outer surface observation", "Inference"], ["1", "Ice/cold water", "", "", ""], ["2", "Normal water control", "", "", ""]];
  if (t.includes("transparent")) return [["S. No.", "Material", "Object/text visibility", "Light transmission", "Transparent/Translucent"], ["1", "Glass/transparent sheet", "", "", ""], ["2", "Butter paper/translucent sheet", "", "", ""]];
  if (t.includes("immiscible")) return [["S. No.", "Layer", "Position in funnel", "Liquid collected", "Reason"], ["1", "Oil", "Upper layer", "", ""], ["2", "Water", "Lower layer", "", ""]];
  if (t.includes("cotton thread")) return [["S. No.", "Thread condition", "Distance", "Sound heard clearly?", "Inference"], ["1", "Thread tight", "", "", ""], ["2", "Thread loose", "", "", ""]];
  if (t.includes("starch") && t.includes("food")) return [["S. No.", "Food sample", "Iodine added", "Colour obtained", "Starch present/absent"], ["1", "Given sample", "2-3 drops", "", ""], ["2", "Control sample", "2-3 drops", "", ""]];
  if (t.includes("onion peel")) return [["S. No.", "Cell part", "Observation under microscope", "Function/label", "Diagram shown?"], ["1", "Cell wall", "", "", ""], ["2", "Cytoplasm", "", "", ""], ["3", "Nucleus", "", "", ""]];
  if (t.includes("magnesium oxide")) return [["S. No.", "Step/test", "Observation", "Inference", "Nature of MgO"], ["1", "Burning Mg ribbon", "", "", ""], ["2", "Ash + water + litmus", "", "", ""]];
  if (t.includes("conduct electricity")) return [["S. No.", "Liquid tested", "LED/bulb glows?", "Conducting nature", "Inference"], ["1", "Distilled water", "", "", ""], ["2", "Tap water", "", "", ""], ["3", "Salt water/lemon juice", "", "", ""], ["4", "Oil", "", "", ""]];
  if (t.includes("concave mirror") && t.includes("image")) return [["S. No.", "Object distance u", "Image distance v", "Image nature", "Image size"], ["1", "Beyond C", "", "", ""], ["2", "At C", "", "", ""], ["3", "Between C and F", "", "", ""]];
  if (t.includes("buoyant")) return [["S. No.", "Weight in air", "Apparent weight in water", "Loss of weight", "Buoyant force"], ["1", "", "", "", ""]];
  if (t.includes("white light")) return [["S. No.", "Prism position", "Screen distance", "Colours observed", "Order of colours"], ["1", "", "", "", "VIBGYOR"]];
  if (t.includes("charge")) return [["S. No.", "Object rubbed", "Material used for rubbing", "Attracted object", "Inference"], ["1", "Balloon", "Wool/dry hair", "Paper pieces", ""]];
  if (t.includes("copper sulphate") && t.includes("crystals")) return [["S. No.", "Step", "Observation", "Inference"]];
  if (t.includes("neutralization")) return [["S. No.", "Drops of acid/base", "Indicator colour", "Inference"]];
  if (t.includes("sulphur, iron")) return [["S. No.", "Separation method", "Component separated", "Observation"]];
  if (t.includes("hydrogen") || t.includes("zinc and dilute hcl")) return [["S. No.", "Reactants", "Gas test observation", "Gas identified"]];
  if (t.includes("saliva")) return [["S. No.", "Test tube", "Content", "Iodine colour after time"]];
  if (t.includes("ohm")) return [["S. No.", "Voltmeter reading V (V)", "Ammeter reading I (A)", "Resistance R = V/I (ohm)", "Mean R"], ["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""], ["4", "", "", "", ""]];
  if (t.includes("path of deviation")) return [["S. No.", "Incident ray pin points", "Emergent ray pin points", "Angle of incidence", "Angle of deviation"], ["1", "P1, P2", "P3, P4", "", ""]];
  if (t.includes("density")) return [["S. No.", "Mass/weight of solid", "Initial water level", "Final water level", "Volume and density"], ["1", "", "", "", ""]];
  if (t.includes("equivalent resistance") && t.includes("series")) return [["S. No.", "Resistor combination", "Voltmeter V", "Ammeter I", "Equivalent resistance R"], ["1", "R1", "", "", ""], ["2", "R2", "", "", ""], ["3", "R1 + R2 in series", "", "", ""]];
  if (t.includes("focal length") && t.includes("distant object")) return [["S. No.", "Distant object", "Lens position", "Screen position", "Focal length"], ["1", "", "", "", ""], ["2", "", "", "", ""]];
  if (t.includes("chlorophyll")) return [["S. No.", "Leaf part", "Iodine colour", "Starch formed?"]];
  if (t.includes("cheek")) return [["S. No.", "Cell structure", "Observation", "Label"]];
  if (t.includes("stomata")) return [["S. No.", "Leaf surface", "Number/visibility of stomata", "Inference"]];
  if (t.includes("ovary")) return [["S. No.", "Flower/section part", "Observation", "Label"]];
  if (t.includes("angiospermic")) return [["S. No.", "Plant part", "Characteristic observed", "Inference"]];
  if (t.includes("iron nail and copper sulphate")) return [["S. No.", "Before reaction", "After reaction", "Inference"]];
  if (t.includes("quicklime") || t.includes("ferrous sulphate") || t.includes("sodium metal")) return [["S. No.", "Reaction", "Observation", "Type/inference"]];
  if (t.includes("amphoteric")) return [["S. No.", "Reagent added to zinc", "Observation", "Inference"]];
  if (t.includes("acetic acid and ethanol")) return [["S. No.", "Reactants", "Observation/smell", "Product identified"]];
  if (t.includes("vernier")) return [["S. No.", "Measurement", "MSR (cm)", "VSR", "Observed reading = MSR + VSR x LC"], ["1", "Diameter of bob - Trial 1", "", "", ""], ["2", "Diameter of bob - Trial 2", "", "", ""], ["3", "Diameter of bob - Trial 3", "", "", ""], ["4", "Internal diameter of beaker - Trial 1", "", "", ""], ["5", "Internal diameter of beaker - Trial 2", "", "", ""], ["6", "Depth of beaker - Trial 1", "", "", ""], ["7", "Depth of beaker - Trial 2", "", "", ""]];
  if (t.includes("resonance tube")) return [["S. No.", "Frequency f (Hz)", "First resonance l1 (cm)", "Second resonance l2 (cm)", "v = 2f(l2-l1)"], ["1", "", "", "", ""], ["2", "", "", "", ""]];
  if (t.includes("meter bridge")) return [["S. No.", "Resistance from box R (ohm)", "Balance length l (cm)", "100-l (cm)", "Unknown X = Rl/(100-l)"], ["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""]];
  if (t.includes("galvanometer")) return [["S. No.", "Current by standard ammeter", "Current by converted ammeter", "Difference/error", "Verification"], ["1", "", "", "", ""], ["2", "", "", "", ""]];
  if (t.includes("refractive index of water")) return [["S. No.", "Real depth/reading without water", "Apparent depth/reading with water", "Refractive index", "Mean"], ["1", "", "", "", ""], ["2", "", "", "", ""]];
  if (t.includes("parallel combination")) return [["S. No.", "Combination used", "Balance length l", "Equivalent resistance observed", "Calculated equivalent resistance"], ["1", "R1 || R2", "", "", ""], ["2", "R1 || R2 || R3", "", "", ""]];
  if (t.includes("convex lens by plotting") || t.includes("concave mirror and find")) return [["S. No.", "Object distance u (cm)", "Image distance v (cm)", "1/u or graph value", "Focal length"], ["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""]];
  if (t.includes("diode")) return [["S. No.", "Bias", "Voltage V (V)", "Current I (mA)", "Dynamic resistance"], ["1", "Forward", "", "", ""], ["2", "Forward", "", "", ""], ["3", "Reverse", "", "", ""]];
  if (t.includes("pendulum")) return [["S. No.", "Length L (cm)", "Time for 20 oscillations (s)", "T (s)", "T^2 (s^2)"], ["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""]];
  if (t.includes("sonometer") && t.includes("tension")) return [["S. No.", "Load/tension", "Resonant length l", "Frequency kept constant", "Relation observed"], ["1", "", "", "", ""], ["2", "", "", "", ""]];
  if (t.includes("minimum deviation")) return [["S. No.", "Angle of incidence i", "Angle of emergence e", "Angle of deviation D", "Minimum D"], ["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""]];
  if (t.includes("resistivity")) return [["S. No.", "Potential difference V", "Current I", "Resistance R = V/I", "Resistivity rho"], ["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""]];
  if (t.includes("ac mains")) return [["S. No.", "Load/tension", "Resonant length l", "Mode/loop observed", "Frequency of AC mains"], ["1", "", "", "", ""], ["2", "", "", "", ""]];
  if (t.includes("spherometer")) return [["S. No.", "Surface", "Pitch scale reading", "Circular scale reading", "Total reading"], ["1", "Plane glass", "", "", ""], ["2", "Curved surface", "", "", ""], ["3", "Difference h", "", "", ""]];
  if (t.includes("acidic radical") || t.includes("basic radical") || t.includes("salt")) return [["S. No.", "Experiment/test", "Reagent used", "Observation", "Inference/radical"], ["1", "Preliminary test", "", "", ""], ["2", "Group test", "", "", ""], ["3", "Confirmatory test", "", "", ""]];
  if (t.includes("functional group")) return [["S. No.", "Functional group test", "Reagent used", "Observation", "Inference"], ["1", "Litmus/solubility test", "", "", ""], ["2", "Specific confirmatory test", "", "", ""]];
  if (t.includes("normality") || t.includes("strength") || t.includes("standard solution") || t.includes("mohr") || t.includes("sodium carbonate")) return [["S. No.", "Titration", "Initial burette reading", "Final burette reading", "Volume used"], ["1", "Rough", "", "", ""], ["2", "I", "", "", ""], ["3", "II", "", "", ""], ["4", "III", "", "", ""]];
  if (t.includes("double salt")) return [["S. No.", "Step", "Observation", "Crystal/product note"]];
  if (t.includes("skeleton")) return [["S. No.", "Bone/joint observed", "Type of joint", "Movement possible", "Function"], ["1", "Skull", "", "", ""], ["2", "Shoulder/elbow/knee", "", "", ""], ["3", "Vertebral column", "", "", ""]];
  if (t.includes("dicot stem")) return [["S. No.", "Tissue/part", "Position", "Identifying feature", "Label in diagram"], ["1", "Epidermis", "", "", ""], ["2", "Cortex", "", "", ""], ["3", "Vascular bundle", "", "", ""], ["4", "Pith", "", "", ""]];
  if (t.includes("plasmolysis")) return [["S. No.", "Solution used", "Cell membrane/protoplast position", "Cell appearance", "Inference"], ["1", "Water/0.1% NaCl", "", "", ""], ["2", "5% NaCl", "", "", ""]];
  if (t.includes("distribution of stomata")) return [["S. No.", "Leaf surface", "Microscopic field area", "Number of stomata", "Inference"], ["1", "Upper surface", "", "", ""], ["2", "Lower surface", "", "", ""]];
  if (t.includes("pollination")) return [["S. No.", "Operation", "Flower condition", "Material used", "Purpose"], ["1", "Emasculation", "", "", ""], ["2", "Bagging", "", "", ""], ["3", "Tagging", "", "", ""]];
  if (t.includes("sugar, starch, proteins")) return [["S. No.", "Nutrient tested", "Reagent used", "Positive observation", "Result"], ["1", "Starch", "Iodine", "Blue-black", ""], ["2", "Protein", "HNO3/NH4OH or NaOH", "Yellow/violet", ""], ["3", "Fat", "Cobalt chloride/paper", "Translucent/colour change", ""], ["4", "Sugar", "Suitable test reagent", "Colour change", ""]];
  if (t.includes("chromatography")) return [["S. No.", "Pigment band colour", "Distance by pigment (cm)", "Distance by solvent front (cm)", "Rf value"], ["1", "Yellow/orange", "", "", ""], ["2", "Light green", "", "", ""], ["3", "Dark green", "", "", ""]];
  if (t.includes("blastula")) return [["S. No.", "Slide structure", "Observation", "Identification point", "Label"], ["1", "Blastocoel", "", "", ""], ["2", "Blastomeres", "", "", ""]];
  if (t.includes("solanaceae")) return [["S. No.", "Plant part", "Observation", "Family character", "Diagram label"], ["1", "Root", "", "", ""], ["2", "Stem", "", "", ""], ["3", "Leaf", "", "", ""], ["4", "Flower", "", "", ""], ["5", "Ovary/anther", "", "", ""]];
  if (t.includes("pollen")) return [["S. No.", "Total pollen grains counted", "Germinated pollen grains", "Germination percentage", "Observation"], ["1", "", "", "", ""], ["2", "", "", "", ""]];
  if (t.includes("mitosis")) return [["S. No.", "Stage", "Chromosome appearance", "Nuclear membrane/spindle", "Diagram label"], ["1", "Prophase", "", "", ""], ["2", "Metaphase", "", "", ""], ["3", "Anaphase", "", "", ""], ["4", "Telophase", "", "", ""]];
  if (t.includes("dna")) return [["S. No.", "Step", "Reagent/material added", "Observation", "Inference"], ["1", "Grinding/filtering", "", "", ""], ["2", "Detergent/salt treatment", "", "", ""], ["3", "Ethanol addition", "", "", ""]];
  if (t.includes("gamete")) return [["S. No.", "Slide/stage", "Cell/stage observed", "Important feature", "Label"], ["1", "Prepared slide 1", "", "", ""], ["2", "Prepared slide 2", "", "", ""]];
  if (t.includes("pedigree")) return [["S. No.", "Generation", "Male/female symbol", "Trait present/absent", "Inheritance note"], ["1", "I", "", "", ""], ["2", "II", "", "", ""], ["3", "III", "", "", ""]];
  if (t.includes("homologous") || t.includes("analogous")) return [["S. No.", "Organ pair", "Origin", "Function", "Homologous/Analogous"], ["1", "", "", "", ""], ["2", "", "", "", ""]];
  return [["S. No.", "Material/Test", "Observation", "Conclusion"]];
}

function tableHtml(rows) {
  const [head] = rows;
  const bodyRows = rows.length > 1
    ? rows.slice(1)
    : Array.from({ length: 3 }, () => head.map(() => "&nbsp;"));
  return `
    <table class="manual-table">
      <thead><tr>${head.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
      <tbody>
        ${bodyRows.map((row) => `<tr>${head.map((_, index) => `<td>${row[index] || "&nbsp;"}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function resultFor(experiment) {
  const t = experiment.title.toLowerCase();
  if (t.includes("starch")) return "The given sample contains starch if iodine turns blue-black; otherwise starch is absent.";
  if (t.includes("fat")) return "A translucent greasy spot on paper confirms the presence of fat.";
  if (t.includes("ohm")) return "The straight-line V-I graph verifies Ohm's law, and the slope gives resistance.";
  if (t.includes("density")) return "The density of the given solid is calculated from measured mass and displaced volume.";
  if (t.includes("neutralization")) return "The endpoint shows that acid and base have neutralized each other to form salt and water.";
  if (t.includes("soluble")) return "Substances that dissolve completely are soluble; substances left undissolved are insoluble.";
  if (t.includes("temperature")) return "The measured body temperature is recorded in degree Celsius.";
  if (t.includes("milk")) return "The purity of milk is inferred from the lactometer/density reading.";
  if (t.includes("one fifth of air")) return "The rise of water after the candle goes out shows that oxygen is about one fifth of air.";
  if (t.includes("air exerts pressure")) return "The card remains in place because atmospheric pressure acts upward on it.";
  if (t.includes("four directions")) return "A freely suspended bar magnet helps identify north-south direction.";
  if (t.includes("acidity and alkalinity")) return "The soil sample is identified as acidic, basic, or neutral according to litmus colour change.";
  if (t.includes("air inside soil")) return "Bubbles rising from wet soil prove that air is present in soil pores.";
  if (t.includes("condensation")) return "Droplets outside the cold glass prove condensation of water vapour.";
  if (t.includes("immiscible")) return "Oil and water are separated because they are immiscible and form different layers.";
  if (t.includes("cotton thread")) return "Sound travels through the stretched cotton thread and reaches the second phone.";
  if (t.includes("magnesium oxide")) return "Magnesium oxide formed after burning magnesium is basic in nature.";
  if (t.includes("conduct electricity")) return "Liquids that make the LED/bulb glow conduct electricity; others do not.";
  if (t.includes("white light")) return "White light splits into seven component colours through a prism.";
  if (t.includes("copper sulphate")) return "Blue copper sulphate crystals are obtained from the impure sample.";
  if (t.includes("hydrogen gas") || t.includes("zinc and dilute hcl")) return "Hydrogen gas is evolved, confirmed by a pop sound.";
  if (t.includes("chlorophyll")) return "Only green parts turn blue-black, proving chlorophyll is necessary for photosynthesis.";
  if (t.includes("cheek")) return "Human cheek cells with nucleus, cytoplasm, and cell membrane are observed.";
  if (t.includes("stomata")) return "Stomata and guard cells are observed in the leaf peel.";
  if (t.includes("copper sulphate solution")) return "Iron displaces copper from copper sulphate solution.";
  if (t.includes("amphoteric")) return "Zinc reacts with both acid and base, so it is amphoteric.";
  if (t.includes("acetic acid and ethanol")) return "A fruity-smelling ester is formed.";
  if (t.includes("chromatography")) return "Different plant pigments are separated as different coloured bands.";
  if (t.includes("dna")) return "White thread-like DNA is isolated from plant material.";
  if (t.includes("mitosis")) return "Different stages of mitosis are observed in onion root tip cells.";
  return `The experiment verifies that ${experiment.title.replace(/\.$/, "").toLowerCase()}.`;
}

function safetyFor(experiment) {
  const text = `${experiment.title} ${experiment.materials}`.toLowerCase();
  if (/acid|hcl|naoh|sulphuric|burner|sodium metal|ethanol/.test(text)) {
    return "Use goggles, avoid direct contact with chemicals, keep flames controlled, and perform reactive chemistry only under teacher supervision.";
  }
  if (/microscope|slide|blade|razor|needle|scalpel/.test(text)) {
    return "Handle glass slides and sharp tools carefully. Dispose of biological samples and broken glass as instructed.";
  }
  if (/battery|ammeter|voltmeter|current|diode|mains/.test(text)) {
    return "Use low-voltage supplies unless a teacher provides the setup. Check connections before switching on the circuit.";
  }
  return "Keep the workspace dry and organized, avoid tasting materials, and clean the apparatus after observation.";
}

function sourcesOfErrorFor(experiment) {
  const text = `${experiment.title} ${experiment.materials}`.toLowerCase();
  if (/vernier|spherometer|meter bridge|pendulum|resonance|sonometer|lens|mirror|prism|density|buoyant/.test(text)) {
    return ["Zero error or least-count error.", "Improper alignment of apparatus.", "Parallax error while taking readings.", "Loose adjustment or movement during observation."];
  }
  if (/acid|hcl|naoh|sulphuric|kmno4|salt|solution|titration|radical|functional|ester/.test(text)) {
    return ["Impure reagent or contaminated test tube.", "Excess reagent added.", "Endpoint or colour change not observed carefully.", "Improper washing of apparatus."];
  }
  if (/slide|microscope|cell|leaf|stomata|root|pollen|dna|chromatography|plant/.test(text)) {
    return ["Air bubbles under cover slip.", "Over-staining or under-staining.", "Specimen not thin or fresh.", "Microscope not focused properly."];
  }
  return ["Material quantity not taken properly.", "Observation not recorded immediately.", "Apparatus not clean or dry.", "Human error while comparing results."];
}

function listHtml(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function render() {
  const q = search.value.trim().toLowerCase();
  const list = experiments.filter((exp) => {
    const filterMatch = currentFilter === "all" || exp.group === currentFilter;
    const subjectMatch = currentSubject === "all" || (exp.group === "Tarun" && exp.subject === currentSubject);
    const queryMatch = !q || `${exp.title} ${exp.materials} ${exp.subject} ${exp.group}`.toLowerCase().includes(q);
    return filterMatch && subjectMatch && queryMatch;
  });

  subjectFilters.classList.toggle("is-visible", currentFilter === "Tarun");

  resultCount.textContent = `${list.length} shown`;
  if (!list.length) {
    cards.innerHTML = `<div class="empty-state">No experiment found. Try another group or search word.</div>`;
    return;
  }

  cards.innerHTML = list.map((exp) => {
    return `
      <article class="card">
        <div class="meta">
          <span class="pill">#${String(exp.id).padStart(2, "0")}</span>
          <span class="pill">${exp.group} - ${groupInfo[exp.group]}</span>
          <span class="pill subject">${exp.subject}</span>
        </div>
        <h3>${exp.title}</h3>
        <p class="materials"><strong>Requirements:</strong> ${exp.materials}</p>
        <div class="card-actions">
          <button type="button" data-open="${exp.id}">Manual</button>
          ${videoMarkup(exp)}
        </div>
      </article>
    `;
  }).join("");
}

function openDetail(id) {
  const exp = experiments.find((item) => item.id === Number(id));
  const procedure = procedureFor(exp).map((step) => `<li>${step}</li>`).join("");
  detailContent.innerHTML = `
    <div class="meta">
      <span class="pill">${exp.group} - ${groupInfo[exp.group]}</span>
      <span class="pill subject">${exp.subject}</span>
    </div>
    <h2>${exp.title}</h2>
    <p class="materials"><strong>Apparatus/Requirements:</strong> ${exp.materials}</p>
    ${videoMarkup(exp)}
    <div class="detail-grid">
      <section class="note">
        <h3>Aim</h3>
        <p>To ${exp.title.charAt(0).toLowerCase()}${exp.title.slice(1)}</p>
      </section>
      <section class="note">
        <h3>Apparatus</h3>
        <p>${exp.materials}</p>
      </section>
      <section class="note wide">
        <h3>Theory</h3>
        <p>${theoryFor(exp)}</p>
      </section>
      <section class="note wide">
        <h3>Formula Used</h3>
        ${listHtml(formulaFor(exp))}
      </section>
      <section class="note wide diagram-note">
        <h3>Diagram To Draw</h3>
        <div class="diagram-box">
          <div class="diagram-icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          ${listHtml(diagramFor(exp))}
        </div>
      </section>
      <section class="note wide">
        <h3>Procedure</h3>
        <ol>${procedure}</ol>
      </section>
      <section class="note wide">
        <h3>Observation Table</h3>
        ${tableHtml(observationTableFor(exp))}
      </section>
      <section class="note">
        <h3>Calculation</h3>
        <p>${calculationFor(exp)}</p>
      </section>
      <section class="note">
        <h3>Result</h3>
        <p>${resultFor(exp)}</p>
      </section>
      <section class="note wide">
        <h3>Precautions And Viva Prompts</h3>
        <p>${safetyFor(exp)}</p>
        <p>Prepare to explain the principle, sources of error, apparatus choice, and one real-life application.</p>
      </section>
      <section class="note wide">
        <h3>Sources Of Error</h3>
        ${listHtml(sourcesOfErrorFor(exp))}
      </section>
    </div>
  `;
  dialog.showModal();
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    currentFilter = button.dataset.filter;
    if (currentFilter !== "Tarun") currentSubject = "all";
    document.querySelectorAll(".subject-filter").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.subject === currentSubject);
    });
    render();
  });
});

document.querySelectorAll(".subject-filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".subject-filter.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    currentSubject = button.dataset.subject;
    currentFilter = "Tarun";
    document.querySelector(".filter.is-active").classList.remove("is-active");
    document.querySelector('[data-filter="Tarun"]').classList.add("is-active");
    render();
  });
});

search.addEventListener("input", render);

cards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open]");
  if (button) openDetail(button.dataset.open);
});

document.querySelector(".close-button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

render();
