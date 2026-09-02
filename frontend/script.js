const API_URL = "http://localhost:5000/api";
// ======================================================
// LOAD PROJECTS
// Existing API: GET /api/projects
// ======================================================
async function loadProjects() {

    const container =
        document.querySelector(".projects-container");

    if (!container) {
        return;
    }

    try {

        const response =
            await fetch(`${API_URL}/projects`);

        if (!response.ok) {
            throw new Error("Failed to fetch projects");
        }
        const projects =
            await response.json();

        container.innerHTML = "";

        if (projects.length === 0) {

            container.innerHTML = `
                <div class="project-card">
                    <h3>No Projects Available</h3>
                    <p>
                        Projects will appear here when they
                        are added to the database.
                    </p>
                </div>
            `;

            return;
        }


        projects.forEach((project) => {

            const projectCard =
                document.createElement("div");

            projectCard.className =
                "project-card";


            projectCard.innerHTML = `

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

                <p>
                    <strong>Technologies:</strong>
                    ${project.technologies}
                </p>

                ${
                    project.github_url
                    ?
                    `
                    <a
                        href="${project.github_url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>
                    `
                    :
                    ""
                }

                ${
                    project.live_url
                    ?
                    `
                    <a
                        href="${project.live_url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                    `
                    :
                    ""
                }

            `;


            container.appendChild(projectCard);

        });

    }

    catch (error) {

        console.error(
            "Error loading projects:",
            error
        );

        container.innerHTML = `
            <div class="project-card">
                <h3>Unable to Load Projects</h3>

                <p>
                    Please make sure the backend server
                    is running on port 5000.
                </p>
            </div>
        `;

    }

}
// ======================================================
// CONTACT FORM
// Existing API: POST /api/contact
// ======================================================
const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            const status =
                document.getElementById(
                    "contact-status"
                );


            status.textContent =
                "Sending...";


            try {

                const response =
                    await fetch(
                        `${API_URL}/contact`,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({
                                name: name,
                                email: email,
                                message: message
                            })
                        }
                    );


                const data =
                    await response.json();


                if (response.ok) {

                    status.textContent =
                        "Message sent successfully!";

                    contactForm.reset();

                }

                else {

                    status.textContent =
                        data.message ||
                        "Failed to send message.";

                }

            }

            catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );

                status.textContent =
                    "Unable to connect to server.";

            }

        }
    );

}

// ======================================================
// MOBILE NAVIGATION
// ======================================================
const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    const links =
        navLinks.querySelectorAll("a");


    links.forEach((link) => {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    });

}
// ======================================================
// START
// ======================================================
loadProjects();