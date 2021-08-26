/* Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".

enrollStudent: Enrolls a student in a course.

addGrade: Adds the grade of a student for a course.

getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.

courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
*/

function createSchool() {
  return {
    students: [],
    addStudent(student) {
      const validYears = ['1st', '2nd', '3rd', '4th', '5th']
      if(!validYears.includes(student.year)) {
        console.log("Invalid Year")
        return
      }
      this.students.push(student)
    },
    enrollStudent(student, course) {
      student.addCourse(course)
    },
    addGrade(student, courseCode, grade) {
      student.courses.forEach(obj => {
        if (obj.code === courseCode) {
          obj.grade = grade
        }
      })
    },
    getReportCard(student) {
      student.courses.forEach(course => {
        if(!course.grade) {
          console.log(`${course.name}` + ': In Progress');
        } else {
          console.log(`${course.name}` + ` ${course.grade}`);
        }
      })
     console.log('')
    },
    courseReport(courseName) {
      
      let studentsAndGrades = []
      let total = 0
      let count = 0
      this.students.forEach(student => {
        student.courses.forEach(course => {
          if (course.name === courseName && course.grade) {
            studentsAndGrades.push([student.name, course.grade]);
            total += course.grade
            count += 1
          }
        })
      })
      
     if (studentsAndGrades.length === 0) {
       return undefined
     }
      
     console.log(`=${courseName} Grades=`)
     studentsAndGrades.forEach(arr => {
       console.log(`${arr[0]}: ${arr[1]}`)
     })
     console.log('---')
     console.log(`Course Average: ${total / count}`) 
     console.log('')
    },
  }
}

function createStudent(name, year) {
  return { name,
           year,
           courses: [],
           info() {
             return `${this.name} is a ${this.year} student`
           },
           addCourse(course) {
             this.courses.push(course)
           },
           listCourses() {
             return this.courses
           },
           addNote(courseNum, noteInfo) {
             this.courses.forEach(obj => {
               if (Object.values(obj).includes(courseNum)) {
                 obj.notes = noteInfo
               }
             });
           },
           viewNotes() {
             this.courses.forEach(course => {
               if (course.notes) {
                 console.log(`${course.name}: ${course.notes}`);
               }
             });
           },
           updateNote(noteToUpdate, newNote ) {
            this.courses.forEach(obj => {
              if (Object.values(obj).includes(noteToUpdate)) {
                obj.notes = newNote
              }
            });
           }
         }
}

let foo = createStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101, grade: 95, })
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90, })

let bar = createStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101, grade: 91, })

let qux = createStudent('qux', '2nd');
qux.addCourse({ name: 'Math', code: 101, grade: 93, })
qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90, })

// create a school object
let school = createSchool()
// Add a student to the school
school.addStudent(foo)
school.addStudent(bar)
school.addStudent(qux)
// Enroll student in course
school.enrollStudent(foo, { name: 'Physics', code: 202, })
// check student is in the course
//console.log(foo.listCourses())
// Add grade
//school.addGrade(foo, 202, 78)
// Check grade is added
//console.log(foo.listCourses());
// Output courses and grades for student
school.getReportCard(foo);
// Check course report
school.courseReport('Math');
school.courseReport('Advanced Math');
console.log(school.courseReport('Physics'));


// // getReportCard output

// school.getReportCard(foo);
// // Math: 95
// // Advanced Math: 90
// // Physics: In progress

// // courseReport output

// school.courseReport('Math');
// // =Math Grades=
// // foo: 95
// // bar: 91
// // qux: 93
// // ---
// // Course Average: 93

// school.courseReport('Advanced Math');
// // =Advanced Math Grades=
// // foo: 90
// // qux: 90
// // ---
// // Course Average: 90

// school.courseReport('Physics');
// // = undefined