function getStudentGrade() {
    // Prompt the user for input
    let marks = prompt("Please enter student marks (0-100):");

    // Convert the input to a number
    marks = Number(marks);

    // Check if the input is a valid number and within the range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Please enter a number between 0 and 100.");
        return; // Exit the function if the input is invalid
    }

    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the result
    alert(`The grade for marks ${marks} is: ${grade}`);
}

// Call the function to execute
getStudentGrade();