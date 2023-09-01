const classAttendance = [3, 5, 1, -6, 3, -9, 2];
const attendanceMinimum = 3;

const attendanceCheckReduced = (currentClassAttendence, attendanceMinimum) =>
  currentClassAttendence.filter((attendee) => attendee <= 0).length >=
  attendanceMinimum
    ? "NO"
    : "YES";

console.log(cancelClass(classAttendance, attendanceMinimum));
