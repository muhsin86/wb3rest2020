'use strict';
// LOAD PAGE
window.onload = getWorks();

var fetchedWorks = [];
var updatedWorkId, deletedWorkId;

//ADDEVENTLISTENER
document.getElementById('workform').addEventListener('submit', addWork);
window.addEventListener('load', getWorks);
document.querySelector('.update-work-btn').addEventListener('click', updateWork);
document.querySelector('.delete-work-btn').addEventListener('click', deleteWork);

//  GET COURSE FROM MYSQL DATA
function getWorks() {
  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/src/model/works.php', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(works => {
      fetchedWorks = works;
      document.querySelector('#workList').innerHTML = '';

      works.forEach(function(work) {
        document.querySelector('#workList').innerHTML += `
                    <tr>
                    <td>${work.startdate} - ${work.enddate}</td>
                    <td>${work.work}</td>
                    <td>${work.title}</td>
                    <td>${work.url}</td>
                    <td><button onClick="openUpdateWorkModal(${work.id})">Update</button></td>
                    <td><button onClick="openDeleteWorkModal(${work.id})">Delete</button></td>
                    </tr>
                    `;
      });
    });
}

function openUpdateWorkModal(workId) {
  updatedWorkId = workId;

  var updatedWork = fetchedWorks.find(function(fetchedWork) {
    return fetchedWork.id == workId;
  });

  document.querySelector('.update-work-modal').style.display = 'block';

  document.querySelector('#update-workform #startdate').value = updatedWork.startdate;
  document.querySelector('#update-workform #enddate').value = updatedWork.enddate;
  document.querySelector('#update-workform #work').value = updatedWork.work;
  document.querySelector('#update-workform #title').value = updatedWork.title;
  document.querySelector('#update-workform #url').value = updatedWork.url;
}

function closeUpdateWorkModal() {
  document.querySelector('.update-work-modal').style.display = 'none';
}

function openDeleteWorkModal(workId) {
  deletedWorkId = workId;

  var deletedWork = fetchedWorks.find(function(fetchedWork) {
    return fetchedWork.id == workId;
  });

  document.querySelector('.delete-work-modal').style.display = 'block';

  document.querySelector('.delete-work-modal .work-info').innerHTML = '';
  document.querySelector('.delete-work-modal .work-info').insertAdjacentHTML(
    'afterbegin',

    `
  <p><strong>Start date: ${deletedWork.startdate}</strong></p>
  <p><strong>End date: ${deletedWork.enddate}</strong></p>
  <p><strong>Work: ${deletedWork.work}</strong></p>
  <p><strong>Title: ${deletedWork.title}</strong></p>
  <p><strong>url: ${deletedWork.url}</strong></p>

  `
  );
}

function closeDeleteWorkModal() {
  document.querySelector('.delete-work-modal').style.display = 'none';
}

//ADD COURSE 
function addWork(e) {
  e.preventDefault();

  let startdate = document.getElementById('startdate').value;
  let enddate = document.getElementById('enddate').value;
  let work = document.getElementById('work').value;
  let title = document.getElementById('title').value;
  let url = document.getElementById('url').value;

  const myWork = {
    startdate: startdate,
    enddate: enddate,
    work: work,
    title: title,
    url: url
  };

  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/src/model/works.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myWork)
  })
    .then(res => res.json())
    .then(res => {
      document.querySelector('#workform .alert').innerHTML = '';
      
      document.getElementById('#workform .alert')
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
function deleteWork() {
  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/src/model/works.php', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: deletedworkId })
  })
    .then(res => res.json())
    .then(res => {
      closeDeleteWorkModal();
      getWorks();
      document.querySelector('#workform .alert').innerHTML = '';
      document
        .querySelector('#workform .alert')
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
function updateWork() {
  let startdate = document.querySelector('#update-workform #startdate').value;
  let enddate = document.querySelector('#update-workform #enddate').value;
  let work = document.querySelector('#update-workform #work').value;
  let title = document.querySelector('#update-workform #title').value;
  let url = document.querySelector('#update-workform #url').value;

  const myWork = {
    id: updatedProjectId,
    startdate: startdate,
    enddate: enddate,
    work: work,
    title: title,
    url: url
  };

  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/src/model/works.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myWork)
  })
    .then(res => res.json())
    .then(res => {
      closeUpdateWorkModal();
      getWorks();
      document.querySelector('.workform .alert').innerHTML = '';
      document
        .querySelector('.workform .alert')
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