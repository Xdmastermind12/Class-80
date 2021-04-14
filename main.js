name_of_the_student_array=[];
function Submit(){
var display_student_array=[];
for(var k=1; k<=4; k++){
    var name_of_the_student=document.getElementById("student"+k).value;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_student_array);
var length=name_of_the_student_array.length;
console.log(length);
for(var l=0;l<length; l++){
    display_student_array.push("<h4>Name:"+name_of_the_student_array[l]+"</h4>");
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_comma").innerHTML=display_student_array;
var remove_comma=display_student_array.join("");
console.log(remove_comma);
document.getElementById("display_name_without_comma").innerHTML=remove_comma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
name_of_the_student_array.sort();
console.log (name_of_the_student_array);
var display_student_sort=[];
var length=name_of_the_student_array.length;
console.log (length);
for(var l=0;l<length; l++){
    display_student_sort.push("<h4>Name:"+name_of_the_student_array[l]+"</h4>");
    console.log(display_student_sort);
}
var remove_comma=display_student_sort.join("");
console.log(remove_comma);
document.getElementById("display_name_without_comma").innerHTML=remove_comma;
}
