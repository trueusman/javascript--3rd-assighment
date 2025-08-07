                 //CHAPTER 14-16 ARRAYS
                 //ANSWER OF QUESTION 1
var literalNotation = [];
                 //ANSWER OF QUESTION 2
var objectNotation = new Array();
                 //ANSWER OF QUESTION 3
var stringArray = ["karachi","pakistan","bangladesh"];
                 //ANSWER OF QUESTION 4
var numberArray = [1,2,3,4,5,6];
                 //ANSWER OF QUESTION 5
var booleanArray = [true,false,true,false];
                 //ANSWER OF QUESTION 6
var mixedArray = ["Noman",100,true];
                 //ANSWER OF QUESTION 7
var education_qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil","phD"];
document.writeln("Qualifications:","<br>","1)",education_qualifications[0],"<br>","2)",education_qualifications[1],"<br>","3)",education_qualifications[2],"<br>","4)",education_qualifications[3],"<br>","5)",education_qualifications[4],"<br>","6)",education_qualifications[5],"<br>","7)",education_qualifications[6],"<br>","8)",education_qualifications[0],"<br>");
                  //ANSWER OF QUESTION 8
var student_names = ["Noman","Aman","Essa"];
var student_score = [320,230,480];
document.writeln("Score of"+" "+student_names[0]+" "+"is"+" "+320.+" "+"Percentage:"+" "+(320/500*100)+"%","<br>");
document.writeln("Score of"+" "+student_names[1]+" "+"is"+" "+230.+" "+"Percentage:"+" "+(230/500*100)+"%","<br>");
document.writeln("Score of"+" "+student_names[2]+" "+"is"+" "+480.+" "+"Percentage:"+" "+(480/500*100)+"%","<br>");
                   //ANSWER OF QUESTION 9
var color = ["White","Black","red"];
document.writeln(color.join("<br>"),("<br>"),("<br>"),("<br>"));
      //(a)adding color at start
var color_start = prompt("Write a color name which you want to fill in begining array's element");
color.unshift (color_start);
document.writeln(color.join("<br>"),("<br>"),("<br>"),("<br>"));
    //(b)adding color at the end
var color_end = prompt("Write a color name which you want to fill at the end of the array's element");
color.push (color_end);
document.writeln(color.join("<br>"),("<br>"),("<br>"),("<br>"));
    //(c)adding two colors to the begining
color.unshift("dark white","dark red");
document.writeln(color.join("<br>"),("<br>"),("<br>"),("<br>"));
   //(d)deleting first color
color.shift();
document.writeln(color.join("<br>"),("<br>"),("<br>"),("<br>"));
  //(e)deleting last color
color.pop();
document.writeln(color.join("<br>"),("<br>"),("<br>"),("<br>"));
  //(f)adding color as per user wish
var adding_color_index = prompt("in which position you want to adding color? (e.g 123)");
var adding_color_name = prompt("which color you want to addiing at?");
color.splice(adding_color_index,0,adding_color_name);
document.writeln(color.join("<br>"),("<br>"),("<br>"),("<br>"));
   //(g)deleting color as per user wish
var removing_color_index = prompt("in which position you want to removing color? (e.g 123)");
var removing_color_Quantity = prompt("how many colors you want to remove at?");
color.splice(removing_color_index,removing_color_Quantity);
document.writeln(color.join("<br>"),("<br>"),("<br>"),("<br>"));
   
                   //ANSWER OF QUESTION 10
var student_numbers = [100,80,40,70,50,30,120,140];
student_numbers.sort(function(a, b){
    return a-b
});
document.writeln(student_numbers)
                   //ANSWER OF QUESTION 11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Multan"];
var selected_cities = cities.slice(1,4);
                   //ANSWER OF QUESTION 12
var arr = ["This","is","my","cat"];
var joining = arr.join(" ");
                   //ANSWER OF QUESTION 13
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("monitor");
devices.push("printer");
devices.shift();
devices.shift();
devices.shift();
devices.shift();
                   //ANSWER OF QUESTION 14
var device = [];
device.push("keyboard");
device.push("mouse");
device.push("monitor");
device.push("printer");
device.pop();
device.pop();
device.pop();
device.pop();
                   //ANSWER OF QUESTION 15
var phones_manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.writeln("<select>");
for (var i = 0; i<phones_manufacturers.length; i++){
    document.writeln("<option>"+phones_manufacturers[i]+"</option>")
};