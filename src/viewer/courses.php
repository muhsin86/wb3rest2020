<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css">
    <title>COURSE CATEGORY</title>

</head>

<div class="topnav">
    <a href="admin.php" style="float:left"><i class="fab fa-dyalog"></i> ADMIN PANEL</a>
</div>
<div class="header">
    <p>WELCOME TO COURSE CATEGORY</p>
</div>


<div class="topnav"> 
       <a href="admin.php" style="float:left">ADMIN / COURSES</a>
    </div>
<body>

<?php

include("../includes/config.php");

/* Anslut till databasen */
$course = new Course();

?>

<!-- COURSE FORM START HERE -->
<div class="content">

    <form method="POST" id="courseform">

        <h2>ADD A NEW COURSE</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="startdate" type="text" placeholder="START DATE" name="startdate" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="enddate" type="text" placeholder="END DATE" name="enddate" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="course" type="text" placeholder="COURSE" name="course" required>
        </div>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="hei" type="text" placeholder="HEI" name="hei" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="url" type="text" placeholder="URL" name="url" required">
        </div>
        <input type="submit" id="submit" name="submit" value="ADD COURSE" class="btn">

    </form>
</div>
<!-- COURSE FORM END HERE -->

<!--                           UPDATE MODAL FORM START                        -->


<div class="update-modal">
  <div id="update-courseform">
        <a href="#" class="btn" onClick="closeUpdateModal()">CLOSE</a>
        <h2>UPDATE COURSE</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="startdate" type="text" name="startdate">
            <div class="fontAwesome"></div>
            <input class="input-field" id="enddate" type="text" name="enddate">
            <div class="fontAwesome"></div>
            <input class="input-field" id="course" type="text" name="course">
        </div>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="hei" type="text" name="hei">
            <div class="fontAwesome"></div>
            <input class="input-field" id="url" type="text" name="url">
        </div>
        <button class="update-course-btn btn" onClick="updateCourse()">UPDATE</button>

    </div>
  </div>

  <div class="delete-course-modal">
    <p>Do you want to delete the following course?</p>

    <div class="info"></div>
    
    <button class="btn" onClick="closeDeleteModal()">Cancel</button>
    <button class="delete-course-btn btn" onClick="deleteCourse()">Delete</button>
  </div>
 
  <!--                            UPDATE MODAL FORM  END                            -->


<!-- COURSE CONTENT START -->
<div class="content">
<!-- WRAPER START -->
<div class="courseform">

<div class="alert"></div>

<p class="txt">COURSES</p>
<!-- COURSE OUT PUT TABLE START -->
<table>
        <thead>
            <tr>
                <th>START & END DATE</th>
                <th>COURSE</th>
                <th>HEI</th>
                <th>URL</th>
                <th>UPDATE</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody id="courseList"></tbody>
    </table>
<!-- COURSE TABLE END -->
</div>
<!-- WRAPER END -->
</div>
<!-- COURSE CONTENT END -->

<?php
include("../includes/footer.php");
?>