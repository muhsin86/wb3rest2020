'use strict';
// LOAD PAGE
window.onload = getCourses();

var fetchedCourses = [];
var updatedCourseId, 
    deletedCourseId;

//ADDEVENTLISTENER
document.getElementById('courseform').addEventListener('submit', addCourse);
window.addEventListener('load', getCourses);
document.querySelector('.update-course-btn').addEventListener('click', updateCourse);
document.querySelector('.delete-course-btn').addEventListener('click', deleteCourse);


// GET COURSE FROM MYSQL DATA
function getCourses() {
  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/src/model/courses.php', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(courses => {
      fetchedCourses = courses;
      document.querySelector('#courseList').innerHTML = '';

      courses.forEach(function(course) {
        document.querySelector('#courseList').innerHTML += `
                    <tr>
                    <td>${course.startdate} - ${course.enddate}</td>
                    <td>${course.course}</td>
                    <td>${course.hei}</td>
                    <td><a href="${course.url}" class="projects__link" target="_blank">${course.url}</a></td>
                    <td><button onClick="openUpdateModal(${course.id})">Update</button></td>
                    <td><button onClick="openDeleteModal(${course.id})">Delete</button></td>
                    </tr>
                    `;
      });
    });

}

function openUpdateModal(courseId) {
  updatedCourseId = courseId;

  var updatedCourse = fetchedCourses.find(function(fetchedCourse) {
    return fetchedCourse.id == courseId;
  });

  document.querySelector('.update-modal').style.display = 'block';

  document.querySelector('#courseform #startdate').value =
    updatedCourse.startdate;
  document.querySelector('#courseform #enddate').value =
    updatedCourse.enddate;
  document.querySelector('#courseform #course').value =
    updatedCourse.course;
  document.querySelector('#courseform #hei').value = updatedCourse.hei;
  document.querySelector('#courseform #url').value = updatedCourse.url;
}

function closeUpdateModal() {
  document.querySelector('.update-modal').style.display = 'none';
}

function openDeleteModal(courseId) {
  deletedCourseId = courseId;

  var deletedCourse = fetchedCourses.find(function(fetchedCourse) {
    return fetchedCourse.id == courseId;
  });

  document.querySelector('.delete-course-modal').style.display = 'block';

  document.querySelector('.delete-course-modal .info').innerHTML = '';
  document.querySelector('.delete-course-modal .info').insertAdjacentHTML(
    'afterbegin',
    `
  <p><strong>Start date: ${deletedCourse.startdate}</strong></p>
  <p><strong>End date: ${deletedCourse.enddate}</strong></p>
  <p><strong>Course: ${deletedCourse.course}</strong></p>
  <p><strong>Hei: ${deletedCourse.hei}</strong></p>
  <p><strong>Url: ${deletedCourse.url}</strong></p>
  `
  );
}

function closeDeleteModal() {
  document.querySelector('.delete-course-modal').style.display = 'none';
}

//ADD COURSE 
function addCourse(e) {
  e.preventDefault();

  let startdate = document.getElementById('startdate').value;
  let enddate = document.getElementById('enddate').value;
  let course = document.getElementById('course').value;
  let hei = document.getElementById('hei').value;
  let url = document.getElementById('url').value;

  const myCourse = {
    startdate: startdate,
    enddate: enddate,
    course: course,
    hei: hei,
    url: url
  };

  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/src/model/courses.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myCourse)
  })
    .then(res => res.json())
    .then(res => {
      document.querySelector('.courseform .alert').innerHTML = '';
      
      document
        .getElementById('.courseform .alert')
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
function deleteCourse() {
  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/src/model/courses.php', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: deletedCourseId })
  })
    .then(res => res.json())
    .then(res => {
      closeDeleteModal();
      getCourses();
      document.querySelector('.courseform .alert').innerHTML = '';
      document.querySelector('.courseform .alert')
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
function updateCourse() {
  let startdate = document.querySelector('#update-courseform #startdate').value;
  let enddate = document.querySelector('#update-courseform #enddate').value;
  let course = document.querySelector('#update-courseform #course').value;
  let hei = document.querySelector('#update-courseform #hei').value;
  let url = document.querySelector('#update-courseform #url').value;

  const myCourse = {
    id: updatedCourseId,
    startdate: startdate,
    enddate: enddate,
    course: course,
    hei: hei,
    url: url
  };

  fetch('http://studenter.miun.se/~momo1600/writeable/DT173G/src/model/courses.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myCourse)
  })
    .then(res => res.json())
    .then(res => {
      closeUpdateModal();
      getCourses();
      document.querySelector('.courseform .alert').innerHTML = '';
      document.querySelector('.courseform .alert')
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
