# BRAIN Center Website Content Guide

This guide will help you add, update, and remove content on the BRAIN Center website. No programming experience is required - just follow these step-by-step instructions.

---

## Table of Contents

1. [Before You Begin - Prerequisites](#before-you-begin---prerequisites)
2. [One-Time Setup - Getting the Website on Your Computer](#one-time-setup---getting-the-website-on-your-computer)
3. [How to View the Website Locally](#how-to-view-the-website-locally)
4. [How to Add Faculty Members](#1-how-to-add-faculty-members)
5. [How to Remove Faculty Members](#how-to-remove-faculty-members)
6. [How to Add News Articles](#2-how-to-add-news-articles)
7. [How to Remove News Articles](#how-to-remove-news-articles)
8. [How to Add Events](#3-how-to-add-events)
9. [How to Remove Events](#how-to-remove-events)
10. [How to Add Publications](#4-how-to-add-publications)
11. [How to Add Research Projects](#5-how-to-add-research-projects)
12. [How to Add Students](#6-how-to-add-students)
13. [How to Remove Students](#how-to-remove-students)
14. [How to Add Brain Media Items](#7-how-to-add-brain-media-items)
15. [Publishing Your Changes to the Live Website](#publishing-your-changes-to-the-live-website)
16. [Important Tips](#important-tips)
17. [Troubleshooting Common Problems](#troubleshooting-common-problems)

---

## Before You Begin - Prerequisites

Before you can edit the website, you need to install some free software on your computer. **You only need to do this once.**

### Step 1: Install Visual Studio Code (Your Text Editor)

Visual Studio Code (VS Code) is a free program for editing website files. Think of it like Microsoft Word, but for code.

1. Open your web browser and go to: **https://code.visualstudio.com**
2. Click the big blue **"Download"** button
3. **On Mac:**
   - Open your Downloads folder
   - Drag "Visual Studio Code" into your Applications folder
   - Double-click to open it
4. **On Windows:**
   - Run the downloaded installer
   - Click "Next" through all the steps
   - Click "Install" then "Finish"

### Step 2: Install Node.js (Required to Run the Website)

Node.js is a free program that runs the website on your computer so you can preview changes.

1. Open your web browser and go to: **https://nodejs.org**
2. Click the green button that says **"LTS"** (this is the stable version)
3. **On Mac:**
   - Open the downloaded file
   - Follow the installer steps, clicking "Continue" and "Install"
   - Enter your computer password when asked
4. **On Windows:**
   - Run the downloaded installer
   - Click "Next" through all steps, keeping default options
   - Click "Install" then "Finish"

### Step 3: Install Git (Required to Save and Publish Changes)

Git is a free program that tracks your changes and publishes them to the live website.

1. Open your web browser and go to: **https://git-scm.com**
2. Click **"Download for Mac"** or **"Download for Windows"**
3. **On Mac:**
   - Open the downloaded file and follow the installer
   - If you see a security warning, go to System Settings > Privacy & Security and click "Open Anyway"
4. **On Windows:**
   - Run the installer
   - Click "Next" through all steps, keeping all default options
   - Click "Install" then "Finish"

### Step 4: Create a GitHub Account

GitHub is a free website where the code is stored. You need an account to make changes.

1. Go to: **https://github.com**
2. Click **"Sign up"**
3. Enter your email, create a password, and choose a username
4. Complete the verification steps
5. **Important:** Ask the repository owner to give your GitHub account access to the brain-web project

### How to Verify Everything is Installed

After installing everything, let's make sure it worked:

1. **On Mac:** Open the "Terminal" app (search for it in Spotlight with Cmd+Space)
2. **On Windows:** Open "Command Prompt" (search for it in the Start menu)
3. Type each of these commands and press Enter after each:

```
node --version
```
You should see something like `v20.11.0` (the numbers may differ)

```
git --version
```
You should see something like `git version 2.43.0` (the numbers may differ)

If you see version numbers, everything is installed correctly!

---

## One-Time Setup - Getting the Website on Your Computer

Now you need to download the website files to your computer. **You only need to do this once.**

### Step 1: Open Terminal (Mac) or Command Prompt (Windows)

- **Mac:** Press `Cmd + Space`, type "Terminal", press Enter
- **Windows:** Press the Windows key, type "Command Prompt", press Enter

### Step 2: Navigate to Your Desktop

Type this command and press Enter:

**Mac:**
```
cd ~/Desktop
```

**Windows:**
```
cd %USERPROFILE%\Desktop
```

### Step 3: Download the Website Files

Type this command and press Enter (replace `[REPOSITORY-URL]` with the actual GitHub URL):

```
git clone [REPOSITORY-URL]
```

For example:
```
git clone https://github.com/brain-center/brain-web.git
```

You'll see text scrolling as it downloads. Wait until it finishes.

### Step 4: Enter the Project Folder

```
cd brain-web
```

### Step 5: Install the Website Dependencies

This downloads additional files the website needs to run:

```
npm install
```

Wait for this to complete (it may take 1-2 minutes). You'll see lots of text scrolling.

**Done!** You now have the website on your computer. You won't need to repeat these steps.

---

## How to View the Website Locally

Before making changes, you should start the website on your computer so you can preview your edits.

### Step 1: Open the Project in VS Code

1. Open **Visual Studio Code**
2. Click **File** > **Open Folder** (Mac: **File** > **Open...**)
3. Navigate to your **Desktop** and select the **brain-web** folder
4. Click **Open**

### Step 2: Open the Built-in Terminal

1. In VS Code, click **View** > **Terminal** (or press `Ctrl + ~` on Windows, `Cmd + ~` on Mac)
2. A panel will appear at the bottom of the window

### Step 3: Start the Website

Type this command in the terminal and press Enter:

```
npm run dev
```

You'll see some text, and then a message like:
```
  ▲ Next.js 14.x.x
  - Local: http://localhost:3000
```

### Step 4: View the Website

1. Open your web browser (Chrome, Safari, Firefox, etc.)
2. Go to: **http://localhost:3000**
3. You should see the BRAIN Center website!

**Keep this terminal running** while you make changes. The website will automatically update when you save files.

### To Stop the Website

When you're done, go back to the terminal and press `Ctrl + C` (same on Mac and Windows).

---

## Getting Started with Content Editing

### Understanding the File Structure

All content is stored in simple text files with a `.ts` extension. Don't worry about the technical format - just follow the patterns shown in the examples below.

**Main content folder location:**
```
src/data/
```

**Image folders:**
- Faculty photos: `public/people/faculty/`
- Student photos: `public/people/students/`
- News/Media images: `public/media/`
- Event images: `public/images/`

---

## 1. How to Add Faculty Members

Faculty members are stored in the people data file.

### File to Edit
```
src/data/people.ts
```

### Step-by-Step Instructions

1. **Prepare the faculty photo:**
   - Save the photo as a `.jpg` or `.png` file
   - Name it using lowercase with hyphens (e.g., `john-smith.jpg`)
   - Place it in: `public/people/faculty/`

2. **Open the people.ts file** in your text editor

3. **Find the faculty section** - scroll to where you see other faculty entries

4. **Copy this template** and paste it at the end of the faculty list (before the closing `];`):

```typescript
  {
    name: "Faculty Member Name",
    tags: ["Position or Role", "University/Institution"],
    src: "/people/faculty/filename.jpg",
    group: ["Faculty"],
  },
```

5. **Fill in the information:**
   - `name`: Full name of the faculty member
   - `tags`: An array with role and institution (keep the brackets and quotes)
   - `src`: Path to the photo (use the filename you saved)
   - `group`: Leave this as `["Faculty"]`

### Example

```typescript
  {
    name: "Dr. Jane Smith",
    tags: ["Associate Professor", "University of Houston"],
    src: "/people/faculty/jane-smith.jpg",
    group: ["Faculty"],
  },
```

### Required vs Optional Fields

**Required:**
- `name` - Faculty member's full name
- `tags` - At least one tag (role or institution)
- `src` - Photo path (use empty string `""` if no photo available)
- `group` - Must include `["Faculty"]`

**Optional:**
- `href` - Link to faculty member's profile page (if they have one)

### For Leadership Members

If the faculty member is also in leadership, add "Leadership" to the group array:

```typescript
  {
    name: "Dr. Director Name",
    tags: ["Center Director", "UH"],
    src: "/people/faculty/director-name.jpg",
    group: ["Faculty", "Leadership"],
  },
```

---

## How to Remove Faculty Members

Removing a faculty member requires two steps: deleting their entry from the data file and optionally deleting their photo.

### Step 1: Open the File

Open `src/data/people.ts` in VS Code.

### Step 2: Find the Person to Remove

Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search for their name.

### Step 3: Delete the Entire Entry

Select and delete everything from the opening `{` to the closing `},` including the comma.

**Example - Delete everything highlighted below:**
```typescript
  {                                    // ← Start here
    name: "Dr. Jane Smith",
    tags: ["Associate Professor", "University of Houston"],
    src: "/people/faculty/jane-smith.jpg",
    group: ["Faculty"],
  },                                   // ← End here (include the comma)
```

### Step 4: Save the File

Press **Ctrl+S** (Windows) or **Cmd+S** (Mac) to save.

### Step 5 (Optional): Delete Their Photo

1. In VS Code, navigate to `public/people/faculty/` in the left sidebar
2. Right-click the person's photo file
3. Click **Delete**

### Important Warning

- Make sure you delete the **entire entry** including both curly braces `{ }` and the trailing comma
- If you accidentally delete too much or too little, press **Ctrl+Z** (Windows) or **Cmd+Z** (Mac) to undo

---

## 2. How to Add News Articles

News articles appear on the News page and homepage.

### File to Edit
```
src/data/news.ts
```

### Step-by-Step Instructions

1. **Prepare the news image:**
   - Save the image as a `.jpg` or `.png` file
   - Place it in: `public/media/`

2. **Open the news.ts file**

3. **Copy this template** and paste it inside the `newsItems` array:

```typescript
  {
    slug: "article-url-name",
    title: "Article Title Here",
    date: "2025-01-15",
    dateLabel: "Jan 15, 2025",
    summary: "Brief summary of the article that appears on the news listing page.",
    imageSrc: "/media/image-name.jpg",
    imageAlt: "Description of the image for accessibility",
    content: `
Full article text goes here. You can write multiple paragraphs.

This is the second paragraph. Keep writing until you have the complete article.

You can include all the details you need here.
    `,
  },
```

4. **Fill in the information:**
   - `slug`: Short URL-friendly name (lowercase, use hyphens, no spaces)
   - `title`: Full article title
   - `date`: Date in YYYY-MM-DD format (for sorting)
   - `dateLabel`: Date in readable format (e.g., "Jan 15, 2025")
   - `summary`: 1-2 sentence summary (appears on listing pages)
   - `imageSrc`: Path to your image
   - `imageAlt`: Describe the image for screen readers
   - `content`: Full article text (can be multiple paragraphs)

### Example

```typescript
  {
    slug: "new-research-grant",
    title: "BRAIN Center Receives $2M Research Grant",
    date: "2025-01-20",
    dateLabel: "Jan 20, 2025",
    summary: "The NSF has awarded the BRAIN Center a $2 million grant to advance neural interface research over the next three years.",
    imageSrc: "/media/research-grant-2025.jpg",
    imageAlt: "Researchers working in the BRAIN Center laboratory",
    content: `
The National Science Foundation has awarded the BRAIN Center a $2 million grant to advance cutting-edge research in neural interfaces.

This three-year grant will support multiple research projects focusing on brain-computer interface technology and its applications in healthcare and rehabilitation.

Dr. Jose Luis Contreras-Vidal, Center Director, stated: "This funding enables us to push the boundaries of what's possible in neurotechnology and directly impact patient care."
    `,
  },
```

### Required vs Optional Fields

**Required:**
- `slug` - Unique identifier for the article
- `title` - Article headline
- `date` - ISO format date (YYYY-MM-DD)
- `dateLabel` - Human-readable date
- `summary` - Brief description
- `imageSrc` - Path to image
- `imageAlt` - Image description
- `content` - Full article text

**All fields are required for news articles.**

### Important Notes

- Articles are automatically sorted by date (newest first)
- Make sure the `slug` is unique - no two articles should have the same slug
- Use the backticks (`) around the content field to allow multi-line text

---

## How to Remove News Articles

### Step 1: Open the File

Open `src/data/news.ts` in VS Code.

### Step 2: Find the Article

Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search for the article title or slug.

### Step 3: Delete the Entire Entry

Delete everything from the opening `{` to the closing `},` for that article.

### Step 4: Save and Delete Image (Optional)

1. Save the file with **Ctrl+S** / **Cmd+S**
2. Optionally delete the article's image from `public/media/`

---

## 3. How to Add Events

Events appear on the Events page.

### File to Edit
```
src/data/events.ts
```

### Step-by-Step Instructions

1. **Prepare the event image (optional):**
   - Save the image as a `.jpg` or `.png` file
   - Place it in: `public/images/`

2. **Open the events.ts file**

3. **Copy this template** and paste it inside the `events` array:

```typescript
  {
    id: 3,
    title: "Event Title Here",
    dateLabel: "Mon, Jan 15, 7:00 PM",
    location: "Venue Name • City, State",
    imageSrc: "/images/event-image.jpg",
    imageAlt: "Description of the event or image",
    href: "https://event-registration-link.com",
    external: true,
  },
```

4. **Fill in the information:**
   - `id`: A unique number (use the next number in sequence)
   - `title`: Event name
   - `dateLabel`: Date and time in readable format
   - `location`: Venue and location (use • symbol to separate venue from city)
   - `imageSrc`: Path to event image (or use `""` for no image)
   - `imageAlt`: Image description
   - `href`: Link to event page or registration (use `"#"` if no link)
   - `external`: Set to `true` for external links, `false` for internal pages

### Example

```typescript
  {
    id: 3,
    title: "BRAIN Center Annual Symposium 2025",
    dateLabel: "Fri, Mar 22, 9:00 AM",
    location: "Student Center Building • Houston, TX",
    imageSrc: "/images/symposium-2025.jpg",
    imageAlt: "BRAIN Center symposium poster with neural network graphics",
    href: "https://www.uh.edu/brain-symposium-2025",
    external: true,
  },
```

### Required vs Optional Fields

**Required:**
- `id` - Unique number
- `title` - Event name
- `dateLabel` - Date and time
- `location` - Event location
- `imageAlt` - Image description
- `href` - Link to event info
- `external` - Boolean (true/false)

**Optional:**
- `imageSrc` - Event image (use empty string `""` if none)

---

## How to Remove Events

### Step 1: Open the File

Open `src/data/events.ts` in VS Code.

### Step 2: Find the Event

Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search for the event title.

### Step 3: Delete the Entire Entry

Delete everything from the opening `{` to the closing `},` for that event.

### Step 4: Save

Save the file with **Ctrl+S** / **Cmd+S**.

**Tip:** Old events can be removed to keep the events page current and relevant.

---

## 4. How to Add Publications

Publications appear on the Publications page.

### File to Edit
```
src/data/publications.ts
```

### Step-by-Step Instructions

1. **Open the publications.ts file**

2. **Copy this template** and paste it inside the `publications` array:

```typescript
  {
    id: "6",
    authors: "Last, First and Last, First and Last, First",
    title: "Publication Title in Sentence Case",
    citation: "Journal Name, v.Volume, Year",
    href: "https://doi.org/publication-link",
    imageSrc: "/images/publication-thumbnail.jpg",
  },
```

3. **Fill in the information:**
   - `id`: A unique number as a string (e.g., "6", "7", "8")
   - `authors`: List of authors (use "and" to separate them)
   - `title`: Full publication title
   - `citation`: Journal name, volume, and year
   - `href`: Link to the publication (DOI link preferred)
   - `imageSrc`: Path to thumbnail image (optional)

### Example

```typescript
  {
    id: "6",
    authors: "Smith, Jane and Johnson, Robert and Williams, Sarah",
    title: "Advanced Brain-Computer Interfaces for Rehabilitation: A Systematic Review",
    citation: "Journal of Neural Engineering, v.18, 2025",
    href: "https://doi.org/10.1088/1741-2552/abc123",
    imageSrc: "/images/pub-bci-review.jpg",
  },
```

### Required vs Optional Fields

**Required:**
- `id` - Unique identifier (as a string)
- `authors` - Author list
- `title` - Publication title
- `citation` - Journal citation

**Optional:**
- `href` - Link to publication (leave as `""` if not available)
- `imageSrc` - Thumbnail image (leave as `""` if not available)

### Important Notes

- Publications without an `imageSrc` may be hidden on some pages
- Use empty string `""` rather than leaving fields out entirely
- Keep author formatting consistent: "Last, First and Last, First"

---

## 5. How to Add Research Projects

Research projects appear on the Research/Projects page, organized by year.

### File to Edit
```
src/data/projects.ts
```

### Step-by-Step Instructions

1. **Open the projects.ts file**

2. **Find the correct year section** (or create a new one)

3. **Copy this template** and paste it inside the `projects` array for that year:

```typescript
      {
        title: "Project Title Here",
        leaders: "Principal Investigator Name (Institution), Co-PI Name (Institution)",
        year: 2025,
        imageSrc: "/images/projects/project-name.jpg",
        imageAlt: "Description of project image",
        href: "/research/projects/project-slug",
      },
```

4. **Fill in the information:**
   - `title`: Full project title
   - `leaders`: List of project leaders with institutions in parentheses
   - `year`: Year the project started (optional)
   - `imageSrc`: Path to project image (optional)
   - `imageAlt`: Image description (optional)
   - `href`: Link to project details page (optional)

### Example

```typescript
      {
        title: "Development of Non-Invasive Brain Stimulation for Stroke Recovery",
        leaders: "Dr. Jane Smith (UH), Dr. Robert Johnson (ASU), Dr. Sarah Williams (GT)",
        year: 2025,
        imageSrc: "/images/projects/stroke-recovery.jpg",
        imageAlt: "Patient participating in brain stimulation therapy session",
        href: "/research/projects/stroke-recovery-2025",
      },
```

### Adding a New Year

If you need to add projects for a year that doesn't exist yet, copy this template:

```typescript
  {
    year: 2025,
    projects: [
      {
        title: "Your Project Title",
        leaders: "PI Name (Institution)",
        year: 2025,
      },
    ],
  },
```

### Required vs Optional Fields

**Required:**
- `title` - Project title
- `leaders` - List of project leaders

**Optional:**
- `year` - Project year
- `imageSrc` - Project image
- `imageAlt` - Image description (required if imageSrc is provided)
- `href` - Link to project page

### Important Notes

- Projects are organized by year, with current projects listed separately
- Years are listed in reverse chronological order (newest first)
- If a project is current/ongoing, add it to the `currentProjects` array instead

---

## 6. How to Add Students

Students are stored in the same file as faculty members.

### File to Edit
```
src/data/people.ts
```

### Step-by-Step Instructions

1. **Prepare the student photo:**
   - Save the photo as a `.jpg` or `.png` file
   - Name it using lowercase with hyphens (e.g., `john-doe.jpg`)
   - Place it in: `public/people/students/`

2. **Open the people.ts file**

3. **Find the student section** - scroll to where you see other student entries

4. **Copy this template** and paste it at the end of the student list:

```typescript
  {
    name: "Student Name",
    tags: ["Program (University) Mentor: Dr. Mentor Name"],
    src: "/people/students/filename.jpg",
    group: ["Student"],
  },
```

5. **Fill in the information:**
   - `name`: Student's full name
   - `tags`: Program, university, and mentor information
   - `src`: Path to the photo
   - `group`: Leave this as `["Student"]`

### Example

```typescript
  {
    name: "Emily Rodriguez",
    tags: ["BME (UH) Mentor: Dr. Jose Contreras-Vidal"],
    src: "/people/students/emily-rodriguez.jpg",
    group: ["Student"],
  },
```

### Alternative Tag Formats

You can use different tag formats depending on what information is available:

**With mentor:**
```typescript
tags: ["BME (UH) Mentor: Dr. Jose Contreras-Vidal"],
```

**Without mentor:**
```typescript
tags: ["BME (UH)"],
```

**REU Student:**
```typescript
tags: ["REU Student"],
```

**Graduated student:**
```typescript
tags: ["Now @ Company Name, ECE (UH)"],
```

### Required vs Optional Fields

**Required:**
- `name` - Student's full name
- `tags` - At least one tag (program, university, or status)
- `src` - Photo path (use empty string `""` if no photo available)
- `group` - Must be `["Student"]`

**Optional:**
- `href` - Link to student's profile or portfolio

---

## How to Remove Students

Removing a student follows the same process as removing faculty.

### Step 1: Open the File

Open `src/data/people.ts` in VS Code.

### Step 2: Find the Student

Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search for their name.

### Step 3: Delete the Entire Entry

Delete everything from the opening `{` to the closing `},` for that student.

### Step 4: Save and Delete Photo (Optional)

1. Save the file with **Ctrl+S** / **Cmd+S**
2. Optionally delete their photo from `public/people/students/`

**Tip:** When students graduate, you can either remove them entirely or update their tags to show their current position (e.g., `"Now @ Google, ECE (UH)"`).

---

## 7. How to Add Brain Media Items

Brain Media items (photos, videos, outreach materials) appear on the Media page.

### File to Edit
```
src/app/media/page.tsx
```

### Step-by-Step Instructions

1. **Prepare the media image:**
   - Save the image as a `.jpg` or `.png` file
   - Place it in: `public/media/`

2. **Open the page.tsx file** in the media folder

3. **Find the `mediaItems` array** (near the top of the file)

4. **Copy this template** and paste it inside the array:

```typescript
  {
    id: 3,
    title: "Media Item Title",
    label: "Brief description of what this media shows",
    imageSrc: "/media/image-name.jpg",
    imageAlt: "Detailed description of the image for accessibility",
    href: "https://link-to-full-article-or-media.com",
  },
```

5. **Fill in the information:**
   - `id`: A unique number (use the next number in sequence)
   - `title`: Title or headline of the media item
   - `label`: Short description (1-2 sentences)
   - `imageSrc`: Path to your image
   - `imageAlt`: Describe the image for screen readers
   - `href`: Link to full story, article, or media source

### Example

```typescript
  {
    id: 3,
    title: "BRAIN Center Students Present Research at International Conference",
    label: "Graduate students showcase their neural interface research findings",
    imageSrc: "/media/conference-presentation-2025.jpg",
    imageAlt: "Three BRAIN Center students presenting research posters at IEEE conference",
    href: "https://www.uh.edu/news-events/stories/2025/brain-student-conference.php",
  },
```

### Required vs Optional Fields

**Required:**
- `id` - Unique number
- `title` - Media item title
- `label` - Brief description
- `imageSrc` - Path to image
- `imageAlt` - Image description
- `href` - Link to full content

**All fields are required for media items.**

---

## Publishing Your Changes to the Live Website

After making changes, you need to "push" them to GitHub, which automatically updates the live website.

### Step 1: Open the Terminal in VS Code

If it's not already open, click **View** > **Terminal**.

### Step 2: Check What You Changed

Type this command and press Enter:

```
git status
```

You'll see a list of files you modified in red or green. This is normal.

### Step 3: Stage Your Changes

This tells Git which files to include in your update:

```
git add .
```

(The period means "all changed files")

### Step 4: Create a Commit (Save Point)

Type this command, replacing the message with a brief description of what you changed:

```
git commit -m "Add Dr. Jane Smith to faculty"
```

**Good commit message examples:**
- `"Add Dr. Jane Smith to faculty"`
- `"Remove old events from 2024"`
- `"Update news article about research grant"`
- `"Add three new student photos"`

### Step 5: Push to the Live Website

```
git push
```

If this is your first time pushing, you may be asked to log in to GitHub. Follow the prompts.

### Step 6: Verify Your Changes

1. Wait 1-2 minutes for the website to rebuild
2. Open the live website in your browser
3. Do a hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
4. Check that your changes appear correctly

### Complete Example

Here's what the full process looks like in the terminal:

```
git status
git add .
git commit -m "Add new faculty member Dr. Jane Smith"
git push
```

### If You Made a Mistake

If you pushed something wrong, don't panic! You can:

1. Make the correction in the file
2. Save the file
3. Run the same commands again:
```
git add .
git commit -m "Fix typo in Dr. Smith's title"
git push
```

---

## Important Tips

### General Guidelines

1. **Always make a backup** of the file before editing
2. **Pay attention to commas** - each item needs a comma after it (except the last one)
3. **Use straight quotes** (" ") not curly quotes (" ")
4. **Be consistent** with formatting - follow the existing patterns
5. **Test your changes** before publishing to make sure nothing broke

### Image Best Practices

- **Faculty/Student photos**: Square images work best (e.g., 500x500 pixels)
- **News/Media images**: Landscape orientation (e.g., 1200x630 pixels)
- **File size**: Keep images under 500KB for fast loading
- **File names**: Use lowercase letters, numbers, and hyphens only (no spaces or special characters)

### Common File Naming Examples

**Good:**
- `jane-smith.jpg`
- `conference-2025.jpg`
- `research-grant-announcement.png`

**Bad:**
- `Jane Smith.jpg` (has spaces)
- `Conference_2025.JPG` (has underscores and capital letters)
- `Research Grant!.png` (has spaces and special characters)

### Understanding Dates

Different formats are used in different places:

- **ISO format** (for sorting): `2025-01-15`
- **Readable format**: `Jan 15, 2025`
- **Event format**: `Mon, Jan 15, 7:00 PM`

### Text Formatting in Content

When writing article content or descriptions:

- **Paragraphs**: Separate with blank lines
- **Quotes**: Use regular quotes - they'll display correctly
- **Line breaks**: Use actual line breaks (press Enter)
- **Special characters**: Most will work fine (é, ñ, ü, etc.)

### What to Do If Something Goes Wrong

If the website doesn't display correctly after your changes:

1. **Check for missing commas** between items
2. **Check for missing quotes** around text values
3. **Check for matching brackets** - every `{` needs a `}`
4. **Compare your entry** to similar existing entries
5. **Restore from backup** and try again

### Getting Help

- **Look at existing examples** in the same file - they're your best guide
- **Match the formatting exactly** - spacing and punctuation matter
- **Start small** - add one item at a time and test
- **Keep it simple** - you don't need to use all optional fields

---

## Quick Reference: File Paths

| Content Type | Data File | Image Folder |
|-------------|-----------|--------------|
| Faculty | `/src/data/people.ts` | `/public/people/faculty/` |
| Students | `/src/data/people.ts` | `/public/people/students/` |
| News | `/src/data/news.ts` | `/public/media/` |
| Events | `/src/data/events.ts` | `/public/images/` |
| Publications | `/src/data/publications.ts` | `/public/images/` |
| Projects | `/src/data/projects.ts` | `/public/images/projects/` |
| Media | `/src/app/media/page.tsx` | `/public/media/` |

---

## Examples: Complete Entries

### Complete Faculty Entry
```typescript
  {
    name: "Dr. Sarah Johnson",
    tags: ["Associate Professor", "Georgia Tech"],
    src: "/people/faculty/sarah-johnson.jpg",
    group: ["Faculty"],
    href: "/faculty/sarah-johnson",
  },
```

### Complete Student Entry
```typescript
  {
    name: "Michael Chen",
    tags: ["ECE (UH) Mentor: Dr. Jose Contreras-Vidal"],
    src: "/people/students/michael-chen.jpg",
    group: ["Student"],
  },
```

### Complete News Article
```typescript
  {
    slug: "breakthrough-neural-interface",
    title: "BRAIN Center Achieves Breakthrough in Neural Interface Technology",
    date: "2025-02-10",
    dateLabel: "Feb 10, 2025",
    summary: "Researchers develop new method for more accurate brain-computer communication using advanced signal processing.",
    imageSrc: "/media/neural-interface-breakthrough.jpg",
    imageAlt: "Researcher examining neural interface device in laboratory setting",
    content: `
BRAIN Center researchers have achieved a significant breakthrough in neural interface technology that could revolutionize brain-computer communication.

The new method improves signal accuracy by 40% compared to existing techniques, enabling more precise control of assistive devices and prosthetics.

This advancement resulted from a collaborative effort between the University of Houston, Arizona State University, and Georgia Tech research teams.
    `,
  },
```

### Complete Event Entry
```typescript
  {
    id: 4,
    title: "Neural Engineering Workshop for High School Students",
    dateLabel: "Sat, Apr 12, 10:00 AM",
    location: "Engineering Building Room 101 • Houston, TX",
    imageSrc: "/images/workshop-2025.jpg",
    imageAlt: "High school students learning about neural engineering",
    href: "https://www.uh.edu/brain-workshops",
    external: true,
  },
```

---

## Troubleshooting Common Problems

### Problem: Website Won't Start (`npm run dev` fails)

**Symptoms:** You see an error message when running `npm run dev`

**Solutions:**
1. Make sure you're in the correct folder. Run:
   ```
   cd ~/Desktop/brain-web
   ```
2. Try installing dependencies again:
   ```
   npm install
   ```
3. If you still see errors, try deleting and reinstalling:
   ```
   rm -rf node_modules
   npm install
   ```

---

### Problem: "Permission Denied" When Pushing

**Symptoms:** `git push` shows "permission denied" or "authentication failed"

**Solutions:**
1. Make sure you're logged into GitHub. Run:
   ```
   git config --global user.email "your-email@example.com"
   git config --global user.name "Your Name"
   ```
2. Make sure you have access to the repository (ask the repository owner)
3. Try pushing again - you may be prompted to log in via browser

---

### Problem: Image Not Showing on Website

**Symptoms:** You added a photo but it shows as a broken image or blank space

**Solutions:**
1. **Check the file path** - make sure it matches exactly (case-sensitive!)
   - Wrong: `"/people/faculty/Jane-Smith.jpg"`
   - Right: `"/people/faculty/jane-smith.jpg"`

2. **Check the file exists** - navigate to the folder in VS Code and confirm the file is there

3. **Check the file extension** - make sure you used the correct extension
   - If file is `photo.jpeg`, use `"photo.jpeg"` not `"photo.jpg"`

---

### Problem: Changes Not Showing on Live Website

**Symptoms:** You pushed changes but the live site looks the same

**Solutions:**
1. **Wait a few minutes** - the site takes 1-2 minutes to rebuild
2. **Hard refresh your browser:**
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
3. **Check the build status** on GitHub or Vercel to make sure it deployed successfully
4. **Clear your browser cache** or try a different browser

---

### Problem: Website Shows Error After Editing

**Symptoms:** The website shows a red error screen or blank page

**Solutions:**
1. **Check for syntax errors** - common issues:
   - Missing comma between entries
   - Missing closing bracket `}` or `]`
   - Missing quote marks around text

2. **Undo your changes:**
   - Press `Ctrl+Z` (Windows) or `Cmd+Z` (Mac) multiple times to undo
   - Or close the file without saving and reopen it

3. **Compare with working entries** - copy a working entry and modify it instead

---

### Problem: "Your branch is behind" Message

**Symptoms:** Git says your branch is behind or there are conflicts

**Solutions:**
1. First, pull the latest changes:
   ```
   git pull
   ```
2. If there are conflicts, you may need help from someone technical
3. If you just want to start fresh:
   ```
   git stash
   git pull
   ```

---

### Problem: Accidentally Deleted Too Much

**Symptoms:** You deleted something important and saved the file

**Solutions:**
1. **If you haven't closed VS Code:**
   - Press `Ctrl+Z` (Windows) or `Cmd+Z` (Mac) repeatedly to undo

2. **If you closed VS Code but haven't pushed:**
   - Run this command to undo all changes since last commit:
   ```
   git checkout -- src/data/people.ts
   ```
   (Replace the file path with whichever file you edited)

3. **If you already pushed:**
   - You can view old versions on GitHub
   - Contact someone technical to help restore the old version

---

### Getting More Help

If you're stuck:

1. **Take a screenshot** of any error messages
2. **Note what you were trying to do** when the problem happened
3. **Don't keep trying random things** - you might make it worse
4. **Contact someone technical** with the screenshot and description

---

**Remember: When in doubt, copy an existing entry and modify it. This is the safest way to ensure correct formatting!**
