
import json

existing_people = [
    "Dalia Khaled",
    "Catherine Nunez",
    "Avinash Puppala",
    "Alexander Sedlack"
]

with open('src/data/students.json', 'r') as f:
    students = json.load(f)

# Deduplicate by name within the JSON
unique_students = {}
for s in students:
    name = s['name'].strip()
    # Normalize name for check (remove extra spaces, check for similar ones?)
    # detailed check for "Alexander Sedlack" vs "Alex Sedlack"
    if name == "Alex Sedlack" and "Alexander Sedlack" in unique_students:
        continue
    if name not in unique_students:
        unique_students[name] = s

# Filter out existing people
to_add = []
for name, s in unique_students.items():
    if name in existing_people:
        continue
    # Special case for name variations if needed
    if name == "Alex Sedlack": continue # Already have Alexander Sedlack

    to_add.append(s)

# valid groups = "Leadership" | "Faculty" | "Staff" | "Student" | "Associate Professor" | "Professor"
# Generate TS
with open('new_students.txt', 'w') as f:
    for s in to_add:
        name = s['name']
        title = s['title'].replace('\n', ' ')
        # Extract image filename
        image_path = s['image_path']
        basename = image_path.split('/')[-1]
        src = f"/people/students/{basename}"
        
        f.write(f"  {{\n")
        f.write(f"    name: \"{name}\",\n")
        f.write(f"    tags: [\"{title}\"],\n")
        f.write(f"    src: \"{src}\",\n")
        f.write(f"    group: [\"Student\"],\n")
        f.write(f"  }},\n")

