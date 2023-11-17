function Student(name, gender, age) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
      } else {
        return 0;
      }
}

Student.prototype.getAverage = function () {
    if(!this.marks || this.marks.length === 0) {
        return 0;
      }
        let sum = 0;
        let count = this.marks.length;
    
      this.marks.map(item => sum = sum + item);
      this.average = sum / count;
      return this.average;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}