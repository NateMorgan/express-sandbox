class Student{
  constructor(first, last, location, nickname){
    this.firstName = first
    this.lastName = last
    this.location = location
    this.nickname = nickname
  }
}

studentArr = [
  new Student("Nathaniel","Morgan","Boston","Captain Morgan"),
  new Student("Rachel","Hassett","Unknown","Hellfire Elmo"),
  new Student("Emily","Smith","NJ","Cool Alumni"),
  new Student("Amanda","Stern","Boston","Fun Hiker"),
  new Student("Joe","Malatesta","DC","Tom Cruise of the Cohort")
]

export {
  Student,
  studentArr
}