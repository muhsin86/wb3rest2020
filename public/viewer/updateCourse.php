<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css">
    <title>Update Course</title>

</head>
<body>

<?php

include("../includes/config.php");

/* Anslut till databasen */
$course = new Course();

if(isset($_GET['update'])) {
    $updatedCourse = $course->getCourseById($_GET['update']);
    
   }
   
   if(isset($_POST['submit'])) {
     if($course->updateCourse($_POST['startdate'], $_POST['enddate'], $_POST['course'], $_POST['hei'], $_POST['url'], $_GET['update']));
   }

?>

<div class="content">

    <form method="POST" id="courseform" value="<?= $updatedCourse['id']; ?>">

        <h2>UPDATE COURSE</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-startdate" type="text" placeholder="UPADTE START DATE" name="update-startdate"  value="<?= $updatedCourse['startdate']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-enddate" type="text" placeholder="UPADTE END DATE" name="update-enddate"  value="<?= $updatedCourse['enddate']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-course" type="text" placeholder="UPADTE COURSE" name="update-course"  value="<?= $updatedCourse['course']; ?>" required>
        </div>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-hei" type="text" placeholder="UPADTE HEI" name="update-hei"  value="<?= $updatedCourse['hei']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-url" type="text" placeholder="UPADTE URL" name="update-url"  value="<?= $updatedCourse['url']; ?>" required">

        </div>
        <input type="submit" id="submit" name="submit" value="UPDATE" class="btn">

    </form>
</div>

<?php
include("../includes/footer.php");
?>