# Web Design Document & Personal Portfolio

## 1. Project Overview & Questionnaire Responses

### Part 1: Content
1. **Full Name:** Zephan Constantine[cite: 6]
2. **Purpose of Website:** Introduce myself professionally and showcase my technical skills and projects[cite: 6].
3. **Target Audience:** Employers, recruiters, IT professionals[cite: 6].
4. **Skills Highlighted:** Cybersecurity, Networking, Java, HTML and CSS, JavaScript, PHP, SQL[cite: 6].
5. **Projects Showcased:** Cybersecurity Labs[cite: 6].
6. **Professional Bio:** I am an Information Systems student at Farmingdale State College with an interest in cybersecurity, information technology, networking, and software development. I enjoy solving technical problems, learning new technologies, and developing practical projects that strengthen my technical skills. My goal is to begin a career in IT or cybersecurity while continuing to grow my knowledge and professional experience[cite: 6].
7. **Site Pages:** Home, About Me, Skills, Projects, Resume, Contact[cite: 6].
8. **Career Goal:** Begin a career in information technology or cybersecurity, particularly in an entry-level position[cite: 6].
9. **Technologies & Tools:** HTML5, CSS3, JavaScript, Java, PHP, SQL, Git, GitHub, MySQL/SQL Server, Cisco networking tools, Wireshark, Nmap, Metasploit Framework, NetBeans, Visual Studio Code[cite: 6].
10. **Achievements & Experiences:** Studying Information Systems at Farmingdale State College, completing cybersecurity training, pursuing cybersecurity certifications, developing web applications, completing programming and database projects, and working with networking technologies[cite: 6].
11. **Call-to-Action:** Primary: "View my projects" / Secondary: "Contact Me"[cite: 6].
12. **Resume:** Included as a downloadable document link ("Download Resume")[cite: 6].
13. **Professional Links:** LinkedIn profile and professional email[cite: 6].

### Part 2: Design
1. **Overall Style:** Professional, clean, and modern.
2. **Color Scheme:** Earthy and grounded palette featuring deep brown (`#3b3025`), warm gold (`#c9a227`), and soft cream background (`#f5efe6`) to establish a polished aesthetic.
3. **Typography:** Playfair Display serif font used consistently across headings and body text.
4. **Personality Reflection:** Represents a detail-oriented, structured approach tailored to IT operations and information systems.
5. **Homepage Layout:** Clean flexbox-based side-by-side container separating professional text descriptions from profile imagery.
6. **Project Organization:** Accessible via direct navigation menu links and structured page layouts.
7. **Responsiveness:** Fully mobile-friendly utilizing CSS media queries and flexible layout containers.
8. **Visual Hierarchy:** Distinct heading scales (`h1`, `h2`), consistent padding, and clear navigation structuring.
9. **Visual Consistency:** Maintained through a centralized external stylesheet (`style.css`) applied across all pages.
10. **Accessibility Considerations:** High color contrast ratios, semantic HTML tags, and ARIA attributes integrated into interactive buttons.
11. **Visual Assets:** Professional profile photographs and clean button layouts.
12. **Design Inspiration:** Modern developer and systems engineer portfolios.

### Part 3: Interactivity
1. **Interactive Elements:** Responsive navigation menu toggle, theme switcher, collapsible skill sections, and contact form validation.
2. **Contact Form:** Includes native HTML5 required field validation paired with Formspree endpoint submission handling.
3. **JavaScript Features:** Mobile hamburger menu toggle with automatic resize event listeners, dark mode theme switcher, skill list toggles, and form error reporting.
4. **User Feedback:** Dynamic button text updates (`Dark Mode` / `Light Mode`), hover transitions, and visual aria-expanded state changes.
5. **User Experience Enhancement:** Streamlines navigation seamlessly across mobile and desktop viewports without page reloads.

---

## 2. Main Design & Structural Sections

### Project Overview
A responsive, multi-page professional portfolio website created from scratch to highlight technical proficiencies in systems configuration, troubleshooting, and cybersecurity[cite: 6].

### Target Audience
Recruiters, hiring managers, and industry peers seeking a transparent overview of technical competencies, academic history, and project portfolios[cite: 6].

### Content Strategy
Delivers a clean, distraction-free reading experience utilizing an intentional earthy color scheme and structured page layouts that prioritize quick access to resume files, project links, and direct communication channels.

### Information Organization
* **`index.html`:** Home and professional about-me overview.
* **`skills.html`:** Categorized technical abilities and interactive skill breakdowns.
* **`contact.html`:** Contact information and interactive message form.
* External links directing users to GitHub project repositories and downloadable resume files.

### Visual Design & Wireframe
* **Palette:** `#3b3025` (Primary), `#c9a227` (Accent), `#f5efe6` (Background).
* **Wireframe Structure:**
  * **Desktop:** Horizontal navbar at the top; two-column flex container placing text on the left and portrait images on the right.
  * **Mobile:** Stacked single-column layout with a JavaScript-driven collapsible `Menu ☰` toggle.

### Interaction & Functionality
Built using vanilla JavaScript ES6+, implementing robust event listeners for theme toggling, menu state management, and form validation checks.

### Technical Overview
* **Frontend:** HTML5, CSS3 (Flexbox, Media Queries), Vanilla JavaScript.
* **Version Control:** Git and GitHub.
* **Hosting:** Published live via GitHub Pages.

### Timeline & Project Milestones
* **Milestone 1:** Content planning and questionnaire drafting.
* **Milestone 2:** HTML document architecture setup (`index.html`, `skills.html`, `contact.html`).
* **Milestone 3:** CSS styling implementation, custom color variables, and responsive layout configuration.
* **Milestone 4:** JavaScript logic integration for navigation toggling and dark mode.
* **Milestone 5:** Final deployment, repository synchronization, and GitHub Pages publishing.

---

## 3. External Resources & Links
* [Google Fonts - Playfair Display](https://fonts.google.com/)
* [Formspree Contact Service](https://formspree.io/)
* [GitHub Pages Documentation](https://pages.github.com/)
