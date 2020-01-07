'use strict';
// LOAD PAGE
window.onload = getProjects();

var fetchedProjects = [];
var updatedProjectId, 
    deletedProjectId;

//ADDEVENTLISTENER
document.getElementById('projectform').addEventListener('submit', addProject);
window.addEventListener('load', getProjects);
document.querySelector('.update-project-btn').addEventListener('click', updateProject);
document.querySelector('.delete-project-btn').addEventListener('click', deleteProject);

//  GET COURSE FROM MYSQL DATA
function getProjects() {
  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/web3api2020-master/src/model/projects.php', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(projects => {
      fetchedProjects = projects;
      document.querySelector('#projectList').innerHTML = '';

      projects.forEach(function(project) {
        document.querySelector('#projectList').innerHTML += `
                    <tr>
                    <td>${project.startdate} - ${project.enddate}</td>
                    <td>${project.project}</td>
                    <td>${project.title}</td>
                    <td>${project.description}</td>
                    <td><button onClick="openUpdateProjectModal(${project.id})">Update</button></td>
                    <td><button onClick="openDeleteProjectModal(${project.id})">Delete</button></td>
                    </tr>
                    `;
      });
    });
}

function openUpdateProjectModal(projectId) {
  updatedProjectId = projectId;

  var updatedProject = fetchedProjects.find(function(fetchedProject) {
    return fetchedProject.id == projectId;
  });

  document.querySelector('.update-project-modal').style.display = 'block';

  document.querySelector('#update-projectform #startdate').value = updatedProject.startdate;
  document.querySelector('#update-projectform #enddate').value = updatedProject.enddate;
  document.querySelector('#update-projectform #project').value = updatedProject.project;
  document.querySelector('#update-projectform #title').value = updatedProject.title;
  document.querySelector('#update-projectform #description').value = updatedProject.description;
}

function closeUpdateProjectModal() {
  document.querySelector('.update-project-modal').style.display = 'none';
}

function openDeleteProjectModal(projectId) {
  deletedProjectId = projectId;

  var deletedProject = fetchedProjects.find(function(fetchedProject) {
    return fetchedProject.id == projectId;
  });

  document.querySelector('.delete-project-modal').style.display = 'block';

  document.querySelector('.delete-project-modal .project-info').innerHTML = '';
  document.querySelector('.delete-project-modal .project-info').insertAdjacentHTML(
    'afterbegin',

    `
  <p><strong>Start date: ${deletedProject.startdate}</strong></p>
  <p><strong>End date: ${deletedProject.enddate}</strong></p>
  <p><strong>Project: ${deletedProject.project}</strong></p>
  <p><strong>Title: ${deletedProject.title}</strong></p>
  <p><strong>Description: ${deletedProject.description}</strong></p>

  `
  );
}

function closeDeleteProjectModal() {
  document.querySelector('.delete-project-modal').style.display = 'none';
}

//ADD COURSE 
function addProject(e) {
  e.preventDefault();

  let startdate = document.getElementById('startdate').value;
  let enddate = document.getElementById('enddate').value;
  let project = document.getElementById('project').value;
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;

  const myProject = {
    startdate: startdate,
    enddate: enddate,
    project: project,
    title: title,
    description: description
  };

  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/web3api2020-master/src/model/projects.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myProject)
  })
    .then(res => res.json())
    .then(res => {
      document.querySelector('#projectform .alert').innerHTML = '';
      
      document.querySelector('#projectform .alert')
        .insertAdjacentHTML(
          'afterbegin',
          '<div style="background-color: green; color: white; padding: 5px">' +
            res.message +
            '</div>'
        );
    })
    .catch(err => {
      return err;
    });
}

// DELETE COURSE
function deleteProject() {
  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/web3api2020-master/src/model/projects.php', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: deletedProjectId })
  })
    .then(res => res.json())
    .then(res => {
      closeDeleteProjectModal();
      getProjects();
      document.querySelector('#projectform .alert').innerHTML = '';
      document.querySelector('#projectform .alert')
        .insertAdjacentHTML(
          'afterbegin',
          '<div style="background-color: red; color: white; padding: 5px">' +
            res.message +
            '</div>'
        );
    })
    .catch(err => {
      return err;
    });
}

//UPDATE COURSE
function updateProject() {
  let startdate = document.querySelector('#update-projectform #startdate').value;
  let enddate = document.querySelector('#update-projectform #enddate').value;
  let project = document.querySelector('#update-projectform #project').value;
  let title = document.querySelector('#update-projectform #title').value;
  let description = document.querySelector('#update-projectform #description').value;

  const myProject = {
    id: updatedProjectId,
    startdate: startdate,
    enddate: enddate,
    project: project,
    title: title,
    description: description
  };

  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/web3api2020-master/src/model/projects.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myProject)
  })
    .then(res => res.json())
    .then(res => {
      closeUpdateProjectModal();
      getProjects();
      document.querySelector('#projectform .alert').innerHTML = '';
      document.querySelector('#projectform .alert')
        .insertAdjacentHTML(
          'afterbegin',
          '<div style="background-color: green; color: white; padding: 5px">' +
            res.message +
            '</div>'
        );
    })
    .catch(err => {
      return err;
    });
}