<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css">
    <title>PROJECT CATEGORY</title>

</head>

<div class="topnav">
    <a href="admin.php" style="float:left"><i class="fab fa-dyalog"></i> ADMIN PANEL</a>
</div>
<div class="header">
    <p>WELCOME TO PROJECT CATEGORY</p>
</div>

<div class="topnav"> 
       <a href="admin.php" style="float:left">ADMIN / PROJECTS</a>
    </div>
<body>

<body>

<?php

include("../includes/config.php");

/* Anslut till databasen */
$project = new Project();

if(isset($_POST['submit'])) {
	$project->addProject($_POST['startdate'], $_POST['enddate'], $_POST['project'], $_POST['title'], $_POST['description']);
}

?>

<!-- PROJECT FORM END START -->

<div class="content">

    <form method="POST"  id="projectform">

        <h2>ADD A NEW PROJECT</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="startdate" type="text" placeholder="START DATE" name="startdate" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="enddate" type="text" placeholder="END DATE" name="enddate" required>
        </div>

        <div class="input-container">
        <div class="fontAwesome"></div>
        <input class="input-field" id="title" type="text" placeholder="TITLE" name="title" required>
        <div class="fontAwesome"></div>
        <input class="input-field" id="project" type="text" placeholder="PROJECT URL" name="project" required>
        </div>


        <div class="input-container">
            <div class="fontAwesome"></div>
    <textarea class="input-field" name="description" id="description" cols="88" rows="10" placeholder="DESCRIPTION" required></textarea>
        </div>
        <input type="submit" name="submit" value="ADD" class="btn">

    </form>
</div>
<!-- PROJECT FORM START HERE -->

<!--                           UPDATE MODAL FORM START                        -->


<div class="update-project-modal">
  <div id="update-projectform">

        <a href="#" class="btn" onClick="closeUpdateProjectModal()">CLOSE</a>
        <h2>UPDATE PROJECT</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="startdate" type="text" placeholder="START DATE" name="startdate" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="enddate" type="text" placeholder="END DATE" name="enddate" required>
        </div>

        <div class="input-container">
         <div class="fontAwesome"></div>
        <input class="input-field" id="project" type="text" placeholder="PROJECT" name="project" required>
        <div class="fontAwesome"></div>
        <input class="input-field" id="title" type="text" placeholder="TITLE" name="title" required>
        </div>


        <div class="input-container">
            <div class="fontAwesome"></div>
    <textarea name="description" id="description" cols="53" rows="10" placeholder="DESCRIPTION" required></textarea>
        </div>

        <button class="update-project-btn btn" onClick="updateProject()">UPDATE</button>

    </div>
  </div>

  <div class="delete-project-modal">
    <p>Do you want to delete the following project?</p>

    <div class="project-info"></div>
    
    <button class="btn" onClick="closeDeleteProjectModal()">Cancel</button>
    <button class="delete-project-btn btn" onClick="deleteProject()">Delete</button>
  </div>
 <!-- PROJECT FORM END HERE -->


<!-- PROJECT CONTENT START -->
<div class="content">
<!-- WRAPER START -->
<div class="projectform">

<div class="alert"></div>

<p class="txt">PROJECTS</p>
<!-- PROJECT OUT PUT TABLE START -->
<table>
        <thead>
            <tr>
                <th>START & END DATE</th>
                <th>PROJECT</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>UPDATE</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody id="projectList"></tbody>
    </table>
<!-- PROJECT TABLE END -->
</div>
<!-- WRAPER END -->
</div>
<!-- PROJECT CONTENT END -->


<!--                           UPDATE MODAL FORM END                       -->

<?php
include("../includes/footer.php");
?>