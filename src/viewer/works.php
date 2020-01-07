<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css">
    <title>WORK CATEGORY</title>

</head>

<div class="topnav">
    <a href="admin.php" style="float:left"><i class="fab fa-dyalog"></i> ADMIN PANEL</a>
</div>
<div class="header">
    <p>WELCOME TO WORK CATEGORY</p>
</div>

<div class="topnav"> 
       <a href="admin.php" style="float:left">ADMIN / WORKS</a>
    </div>
<body>

<body>

<?php
include("../includes/config.php");

/* Anslut till databasen */
$work = new Work();

if(isset($_POST['submit'])) {
	$work ->addWork($_POST['startdate'], $_POST['enddate'], $_POST['work'], $_POST['title'], $_POST['url']);
}

?>

<!-- WORK FORM END HERE -->

<div class="content">

    <form method="POST" id="workform">
        <h2>ADD A NEW WORK</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="startdate" type="text" placeholder="START DATE" name="startdate" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="enddate" type="text" placeholder="END DATE" name="enddate" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="work" type="text" placeholder="WORK PLACE" name="work" required>
        </div>

        <div class="input-container">
        <div class="fontAwesome"></div>
            <input class="input-field" id="title" type="text" placeholder="TITLE" name="title" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="url" type="text" placeholder="URL" name="url" required">
        </div>
        <input type="submit" name="submit" value="ADD WORK" class="btn">

    </form>
</div>

<!-- WORK FORM END HERE -->

<!--                           UPDATE MODAL FORM START                        -->

  <div class="update-work-modal">
  <div id="update-workform",>
   <a href="#" class="btn" onClick="closeUpdateWorkModal()">CLOSE</a>
        <h2>UPDATE WORK</h2>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="startdate" type="text" placeholder="START DATE" name="startdate" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="enddate" type="text" placeholder="END DATE" name="enddate" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="work" type="text" placeholder="WORK" name="work" required>
        </div>

        <div class="input-container">
            <div class="fontAwesome"></div>
            <input class="input-field" id="title" type="text" placeholder="HEI" name="title" required>
            <div class="fontAwesome"></div>
            <input class="input-field" id="url" type="text" placeholder="URL" name="url" required">
        </div>
        <button class="update-work-btn btn" onClick="updateWork()">UPDATE</button>

    </div>
  </div>

  <div class="delete-work-modal">
    <p>Do you want to delete the following work?</p>

    <div class="work-info"></div>
    
    <button class="btn" onClick="closeDeleteWorkModal()">Cancel</button>
    <button class="delete-work-btn btn" onClick="deleteWork()">Delete</button>
  </div>
<!--                           UPDATE MODAL FORM END                        -->

<!-- WORK CONTENT START -->
<div class="content">
<!-- WRAPER START -->
<div class="workform">

<div class="alert"></div>

<h1 class="txt">WORKS</h1>
<!-- WORK OUT PUT TABLE START -->
<table>
        <thead>
            <tr>
                <th>START & END DATE</th>
                <th>WORK</th>
                <th>TITLE</th>
                <th>URL</th>
                <th>UPDATE</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody id="workList"></tbody>
    </table>
<!-- WORK TABLE END -->
</div>
<!-- WRAPER END -->
</div>
<!-- WORK CONTENT END -->


<!--                           UPDATE MODAL FORM END                        -->

<?php
include("../includes/footer.php");
?>