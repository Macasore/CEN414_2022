// Creating a function for finding the determinant of a 2 by 2 matrix
let matrix_a = [
    [6, 3],
    [3, 7],
  ];
  
  function det_a() {
    determinant = matrix_a[0][0] * matrix_a[1][1] - matrix_a[0][1] * matrix_a[1][0];
    console.log(determinant);
  }
  
  det_a();