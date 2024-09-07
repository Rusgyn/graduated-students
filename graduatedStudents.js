/**
 * Your goal is to look through the list of students. 
 * - If a student has graduated, then your function should output a string literal informing you that the student has graduated and their diploma has been sent to their email. 
 * - If they haven’t, the function should output a string literal informing you that the student has not graduated and no diploma will be sent.
 * 
 * Output: Regardless of the outcome, all string literals should be pushed in the array which the function will return at the end.
 */

const students = [
  {
    name: "Ankit",
    age: 22,
    grade: 85,
    email: "ankit@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kayla",
    age: 28,
    grade: 92,
    email: "kayla@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Charina",
    age: 19,
    grade: 89,
    email: "charina@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Bernard",
    age: 30,
    grade: 75,
    email: "bernard@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Kevin",
    age: 36,
    grade: 82,
    email: "kevin@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Hasheem",
    age: 41,
    grade: 82,
    email: "hasheem@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Erwin",
    age: 34,
    grade: 72,
    email: "erwin@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Christopher",
    age: 50,
    grade: 86,
    email: "christopher@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Angela",
    age: 27,
    grade: 80,
    email: "angela@example.com",
    phone: "555-555-5555",
    graduated: true
  },
];


const graduatedStudents = (listOfStudents) => {
  //Implement function
  const areStudentsGraduated = [];

  listOfStudents.map(({ name, age, grade, email, phone, graduated }) => {
    graduated ? areStudentsGraduated.push(`${name} has graduated and their diploma will be sent to ${email}`) : areStudentsGraduated.push(`${name} has not graduated yet, no diploma will be sent`);
  });

  return areStudentsGraduated;
};

console.log(graduatedStudents(students));

/** or below solution can be use without destructuring.
 * 
 * listOfStudents.forEach(student => { 
    (student.graduated) ? areStudentsGraduated.push(`${student.name} has graduated and their diploma will be sent to ${student.email}.`) : areStudentsGraduated.push(`${student.name} has not graduated yet, no diploma will be sent.`);
  });
 */