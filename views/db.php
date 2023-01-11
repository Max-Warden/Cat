<?php
  // Step 1: Connect to the database
  $db = mysqli_connect("localhost", "root", "", "galerija");
  
  // Step 2: Write the SQL SELECT query
  $query = "SELECT image FROM cat WHERE id = 1";
  
  // Step 3: Execute the query
  $result = mysqli_query($db, $query);
  
  // Step 4: Bind the result to a variable
  mysqli_bind_result($result, $image);
  
  // Step 5: Fetch the data
  mysqli_fetch($result);
  
  // Step 6: Set the header
  header("Content-type: image/jpg");
  
  // Step 7: Output the image data
  echo $image;
?>