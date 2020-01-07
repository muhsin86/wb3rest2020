<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css">
    <title>Update Project</title>

</head>
<body>

<?php
//
include("../includes/config.php");

/* Anslut till databasen */
$project = new Project();

if(isset($_GET['update'])) {
    $updatedProject = $project->getProjectById($_GET['update']);
    
   }
   
   if(isset($_POST['submit'])) {
     if($project->updateProject($_POST['startdate'], $_POST['enddate'], $_POST['project'], $_POST['title'], $_POST['description'], $_GET['update']));
   }

?>

<div class="content">

    <form method="POST" id="projectform" value="<?= $updatedProject['id']; ?>">

        <h2>UPDATE Project</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-startdate" type="text" name="update-startdate"  value="<?= $updatedProject['startdate']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-enddate" type="text" name="update-enddate"  value="<?= $updatedProject['enddate']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-Project" type="text" name="update-Project"  value="<?= $updatedProject['project']; ?>" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="update-title" type="text" name="update-title"  value="<?= $updatedProject['title']; ?>" required>
        </div>

        
        <div class="input-container">
        <div class="fontAwesome"></div>
        <textarea name="description" id="update-description" cols="53" rows="10" placeholder="DESCRIPTION" required>
        <?= $updatedProject['description']; ?></textarea>
        </div>

        <input type="submit" id="submit" name="submit" value="UPDATE" class="btn">

    </form>
</div>

<?php
include("../includes/footer.php");
?>