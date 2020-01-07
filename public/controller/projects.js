"use strict";window.onload=getProjects();var updatedProjectId,deletedProjectId,fetchedProjects=[];function getProjects(){fetch("http://localhost/web3api2020/src/model/projects.php",{method:"GET"}).then((function(e){return e.json()})).then((function(e){fetchedProjects=e,document.querySelector("#projectList").innerHTML="",e.forEach((function(e){document.querySelector("#projectList").innerHTML+="\n                    <tr>\n                    <td>".concat(e.startdate," - ").concat(e.enddate,"</td>\n                    <td>").concat(e.project,"</td>\n                    <td>").concat(e.title,"</td>\n                    <td>").concat(e.description,'</td>\n                    <td><button onClick="openUpdateProjectModal(').concat(e.id,')">Update</button></td>\n                    <td><button onClick="openDeleteProjectModal(').concat(e.id,')">Delete</button></td>\n                    </tr>\n                    ')}))}))}function openUpdateProjectModal(e){updatedProjectId=e;var t=fetchedProjects.find((function(t){return t.id==e}));document.querySelector(".update-project-modal").style.display="block",document.querySelector("#update-projectform #startdate").value=t.startdate,document.querySelector("#update-projectform #enddate").value=t.enddate,document.querySelector("#update-projectform #project").value=t.project,document.querySelector("#update-projectform #title").value=t.title,document.querySelector("#update-projectform #description").value=t.description}function closeUpdateProjectModal(){document.querySelector(".update-project-modal").style.display="none"}function openDeleteProjectModal(e){deletedProjectId=e;var t=fetchedProjects.find((function(t){return t.id==e}));document.querySelector(".delete-project-modal").style.display="block",document.querySelector(".delete-project-modal .project-info").innerHTML="",document.querySelector(".delete-project-modal .project-info").insertAdjacentHTML("afterbegin","\n  <p><strong>Start date: ".concat(t.startdate,"</strong></p>\n  <p><strong>End date: ").concat(t.enddate,"</strong></p>\n  <p><strong>Project: ").concat(t.project,"</strong></p>\n  <p><strong>Title: ").concat(t.title,"</strong></p>\n  <p><strong>Description: ").concat(t.description,"</strong></p>\n\n  "))}function closeDeleteProjectModal(){document.querySelector(".delete-project-modal").style.display="none"}function addProject(e){e.preventDefault();var t={startdate:document.getElementById("startdate").value,enddate:document.getElementById("enddate").value,project:document.getElementById("project").value,title:document.getElementById("title").value,description:document.getElementById("description").value};fetch("http://localhost/web3api2020/src/model/projects.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){document.querySelector("#projectform .alert").innerHTML="",document.querySelector("#projectform .alert").insertAdjacentHTML("afterbegin",'<div style="background-color: green; color: white; padding: 5px">'+e.message+"</div>")})).catch((function(e){return e}))}function deleteProject(){fetch("http://localhost/web3api2020/src/model/projects.php",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:deletedProjectId})}).then((function(e){return e.json()})).then((function(e){closeDeleteProjectModal(),getProjects(),document.querySelector("#projectform .alert").innerHTML="",document.querySelector("#projectform .alert").insertAdjacentHTML("afterbegin",'<div style="background-color: red; color: white; padding: 5px">'+e.message+"</div>")})).catch((function(e){return e}))}function updateProject(){var e=document.querySelector("#update-projectform #startdate").value,t=document.querySelector("#update-projectform #enddate").value,o=document.querySelector("#update-projectform #project").value,r=document.querySelector("#update-projectform #title").value,n=document.querySelector("#update-projectform #description").value,c={id:updatedProjectId,startdate:e,enddate:t,project:o,title:r,description:n};fetch("http://localhost/web3api2020/src/model/projects.php",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){closeUpdateProjectModal(),getProjects(),document.querySelector("#projectform .alert").innerHTML="",document.querySelector("#projectform .alert").insertAdjacentHTML("afterbegin",'<div style="background-color: green; color: white; padding: 5px">'+e.message+"</div>")})).catch((function(e){return e}))}document.getElementById("projectform").addEventListener("submit",addProject),window.addEventListener("load",getProjects),document.querySelector(".update-project-btn").addEventListener("click",updateProject),document.querySelector(".delete-project-btn").addEventListener("click",deleteProject);