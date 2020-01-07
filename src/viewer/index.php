<!-- HOME PAGE HEADER -->
<?php
$page_title = "HOME PAGE";
include("../includes/index-page-header.php");
?>

 
<!-- COURSE CONTENT START -->
<div class="content">
<!-- WRAPER START -->
<div class="courseform">

<div class="alert"></div>

<h1 class="txt">COURSES</h1>
<!-- COURSE OUT PUT TABLE START -->
<table>
        <thead>
            <tr>
                <th>START & END DATE</th>
                <th>COURSE</th>
                <th>HEI</th>
                <th>URL</th>
            </tr>
        </thead>
        <tbody id="courseOutput"></tbody>
    </table>
<!-- COURSE TABLE END -->
</div>
<!-- WRAPER END -->
</div>
<!-- COURSE CONTENT END -->


<!-- PROJECT CONTENT START -->
<div class="content">
<!-- WRAPER START -->
<div class="workform">

<div class="alert"></div>

<h1 class="txt">WORKS</h1>
<!-- COURSE OUT PUT TABLE START -->
<table>
        <thead>
            <tr>
                <th>START & END DATE</th>
                <th>WORK</th>
                <th>TITLE</th>
                <th>URL</th>
            </tr>
        </thead>
        <tbody id="workOutput"></tbody>
    </table>
<!-- COURSE TABLE END -->
</div>
<!-- WRAPER END -->
</div>
<!-- PROJECT CONTENT END -->


<!-- FOOTER -->
<?php
include("../includes/footer.php");
?>