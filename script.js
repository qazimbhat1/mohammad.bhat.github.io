// Example JavaScript code to dynamically add projects
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { name: 'Project 1', description: 'A brief description of project 1.' },
        { name: 'Project 2', description: 'A brief description of project 2.' },
        { name: 'Project 3', description: 'A brief description of project 3.' }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectList.appendChild(listItem);
    });
});

// Basic form submission handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    alert('Thank you for your message!');
});

