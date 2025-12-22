const fs = require('fs');
const path = require('path');

const facultyPath = path.join(__dirname, '../src/data/faculty.json');
const peoplePath = path.join(__dirname, '../src/data/people.ts');

const facultyRaw = fs.readFileSync(facultyPath, 'utf8');
const faculty = JSON.parse(facultyRaw);

const peopleRaw = fs.readFileSync(peoplePath, 'utf8');

// Simple regex to extract names from people.ts for comparison
// Matches name: "Name String",
const nameRegex = /name:\s*"([^"]+)"/g;
let match;
const existingNames = [];
while ((match = nameRegex.exec(peopleRaw)) !== null) {
    existingNames.push(match[1]);
}

function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z ]/g, "").replace(/\s+/g, " ").trim();
}

const existingNormalized = new Set(existingNames.map(normalize));

const newPeople = [];

// Hardcoded explicit skips based on user request or known issues
const explicitSkips = [
    "Jose M. Azorin", // Duplicate of Jose Azorin (user mentioned)
    "Jose Luis Contreras-Vidal", // Already exists
];

faculty.forEach(f => {
    let name = f.name;

    // Decode unicode if it's still escaped (JSON.parse handles standard \uXXXX but let's be safe)
    // Actually JSON.parse handles it.

    // Manual fix for "Jose M. Azor\u00edn" if it came through raw, but it should be fine.

    if (explicitSkips.includes(name)) return;

    // Check for duplicate
    const normName = normalize(name);

    // Check for exact match
    if (existingNormalized.has(normName)) {
        // console.log(`Skipping exact duplicate: ${name}`);
        return;
    }

    // Check for partial match (e.g. "Jose M. Azorin" vs "Jose Azorin")
    // If the new name is contained in an existing name or vice versa (loosely)
    let isDuplicate = false;
    for (const en of existingNormalized) {
        if (en.includes(normName) || normName.includes(en)) {
            // Be careful with short names, but for full names this is usually a dupe
            // console.log(`Skipping partial duplicate: ${name} matches ${en}`);
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) return;

    // Process Image
    // nsf_faculty_images/filename.jpg -> /people/faculty/filename.jpg
    let imageSrc = f.image_path;
    if (imageSrc) {
        const filename = path.basename(imageSrc);
        imageSrc = `/people/faculty/${filename}`;
    } else {
        // user said "dont use the nsf_faculty_images path but the one that already exists"
        // If image_path is null, maybe we don't have an image? Or should we use a placeholder?
        // existing people have src. If null, we might need a default or just leave it empty string?
        // people.ts type says src: string, so let's put empty string or a placeholder if logic demands.
        // For now, let's keep it null-ish or empty string. The type definition requires `src: string`.
        imageSrc = "";
    }

    // Construct Person object
    newPeople.push({
        name: name,
        tags: ["Faculty"],
        src: imageSrc,
        group: ["Faculty"]
    });
});

// Output the TS array entries
newPeople.forEach(p => {
    console.log(`  {`);
    console.log(`    name: "${p.name}",`);
    console.log(`    tags: ${JSON.stringify(p.tags)},`);
    console.log(`    src: "${p.src}",`);
    console.log(`    group: ["Faculty"],`); // Hardcoded as requested/inferred
    console.log(`  },`);
});

