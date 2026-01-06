import {projectsArr} from '/projectsArr.js'

document.getElementById('display-projects').innerHTML = renderProjects(projectsArr)

function renderProjects(projectsArr){
const displayProjects = projectsArr.map(function(projects){
    return `<div class="project-apps">
            <h2 class="project-heading">${projects.projectTitle}</h2>
            <P class="project-description">${projects.projectDescription}</P>
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-play"></i>
        </div>`
}).join('')
return displayProjects
}
