const student = {
    s_name : "Koim",
    s_age : 8 
}
// Object ke Freeze kore dey are  change hoy nh
Object.freeze(student);
student.s_name ="KKwdqwdoim";

console.log(student);
