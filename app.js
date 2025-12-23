// -------- ADVANCED COURSE GRADE CALCULATOR --------

// constants (allows us to control the initial rules from a single location)
const MIDTERM_WEIGHT = 0.3;
const FINAL_WEIGHT = 0.4;
const PASS_GRADE = 60;


// functions
function getGrade(message) {
    let value;
    do {
        value = Number(prompt(message));
        if (isNaN(value) || value < 0 || value > 100) {
            alert("Please enter a valid grade between 0 and 100.");
            value = null;
        }
    } while (value === null);
    return value;
}

function calculateAverage(m1, m2, final) {
    return (m1 * MIDTERM_WEIGHT) +
           (m2 * MIDTERM_WEIGHT) +
           (final * FINAL_WEIGHT);
}

function letterGrade(avg) {
    if (avg >= 90) return "AA";
    if (avg >= 80) return "BA";
    if (avg >= 70) return "BB";
    if (avg >= 60) return "CB";
    return "FF";
}

// main flow
function runGradeCalculator() {

    // input
    let midterm1 = getGrade("Enter Midterm 1 grade:");
    let midterm2 = getGrade("Enter Midterm 2 grade:");
    let finalExam = getGrade("Enter Final grade:");

    // process
    let average = calculateAverage(midterm1, midterm2, finalExam);
    let grade = letterGrade(average);

    // output
    if (average >= PASS_GRADE) {
        alert(
            `Congratulations, you passed!
Average: ${average.toFixed(2)}
Letter Grade: ${grade}`
        );
    } else {
        alert(
            `Unfortunately, you failed..
Average: ${average.toFixed(2)}
Letter Grade: ${grade}`
        );
    }
}

// start program
runGradeCalculator();
