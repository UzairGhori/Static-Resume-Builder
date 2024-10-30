document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
    const skillsSection = document.getElementById("skills");

    if (toggleSkillsBtn && skillsSection) {
        toggleSkillsBtn.addEventListener("click", () => {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block";
                toggleSkillsBtn.textContent = "SKILLS HIDE";
            } else {
                skillsSection.style.display = "none";
                toggleSkillsBtn.textContent = "SKILLS SHOW";
            }
        });
    }
});
