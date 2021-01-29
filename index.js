function ch123()
{
    var firstName = "Orya";
    var lastName = "Ahmad";
    var age = 25;
    alert("Hello " + firstName + " " + lastName + ", You are " + age + " years old."); 
}
function ch123sc()
{
    document.getElementById("ch123").innerHTML = 'var firstName = "Orya"; </br> var lastName = "Ahmad";</br>var age = 25;</br>alert("Hello " + firstName + " " + lastName + ", You are " + age + " years old.");</br>' ;
}
    // -------------------------------------------------------//
function ch567()
{
    var numberA = 2;
    var numberB = numberA++ + ++numberA - --numberA + numberA--;
    alert(numberA); 
    alert(numberB); 
}
function ch567sc()
{
    document.getElementById("ch567").innerHTML = 'var numberA = 2;</br> var numberB = numberA++ + ++numberA - --numberA + numberA--;</br> alert(numberA); alert(numberB);</br>' ;
}

//-------------------------------------------------------//
function ch9()
{
    var firstName = prompt("Enter Your First Name.");
    var lastName = prompt("Enter Your Last Name.");
    var age = prompt("Enter your age.");
    alert("Hello " + firstName + " " + lastName + ", You are " + age + " years old.");  
}
function ch9sc()
{
    document.getElementById("ch9").innerHTML = 'var firstName = prompt("Enter Your First Name.");</br> var lastName = prompt("Enter Your Last Name.");</br> var age = prompt("Enter your age.");</br> alert("Hello " + firstName + " " + lastName + ", You are " + age + " years old.");</br>' ;
}
//-------------------------------------------------------//

function ch10141()
{
    var num1 = prompt("Enter first number.");
    var num2 = prompt("Enter second number.");
    var func = prompt('Enter a function e.g. "+" or "-" or "*" or "/" or "%"');
    if (func == "+")
    {   
        sum = parseInt(num1) + parseInt(num2);
        alert(num1 + func + num2 + "=" + sum);
    }
    else if (func == "-")
    {   
        neg = parseInt(num1) - parseInt(num2);
        alert(num1 + func + num2 + "=" + neg);
    }
    else if (func == "*")
    {   
        mul = parseInt(num1) * parseInt(num2);
        alert(num1 + func + num2 + "=" + mul);
    }
    else if (func == "/")
    {   
        divi = parseInt(num1) / parseInt(num2);
        alert(num1 + func + num2 + "=" + divi);
    }
    else if (func == "%")
    {   
        mod = parseInt(num1) % parseInt(num2);
        alert(num1 + func + num2 + "=" + mod);
    }
}
function ch10141sc()
{
    document.getElementById("ch10141").innerHTML = 'var num1 = prompt("Enter first number."); </br> var num2 = prompt("Enter second number.");</br> var func = prompt(\'Enter a function e.g. "+" or "-" or "*" or "/" or "%"\');</br> if (func == "+")</br> {</br> sum = parseInt(num1) + parseInt(num2);</br> alert(num1 + func + num2 + "=" + sum);</br> } </br>else if (func == "-")</br> {</br> neg = parseInt(num1) - parseInt(num2);</br> alert(num1 + func + num2 + "=" + neg);</br> }</br> else if (func == "*")</br> {</br> mul = parseInt(num1) * parseInt(num2);</br>alert(num1 + func + num2 + "=" + mul);</br> } </br>else if (func == "/")</br> {</br> divi = parseInt(num1) / parseInt(num2);</br> alert(num1 + func + num2 + "=" + divi);</br> } </br>else if (func == "%")</br> { </br>mod = parseInt(num1) % parseInt(num2);</br> alert(num1 + func + num2 + "=" + mod);</br> }'
}

function ch10142()
{
    var total_marks = 500;
    var course1 = prompt("Enter Course 1 score out of 100");
    var course2 = prompt("Enter Course 2 score out of 100");
    var course3 = prompt("Enter Course 3 score out of 100");
    var course4 = prompt("Enter Course 4 score out of 100");
    var course5 = prompt("Enter Course 5 score out of 100");
    
    var obtained_marks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5);
    var percentage = (obtained_marks/total_marks)*100;
    alert(percentage + "%");
}
function ch10142sc()
{
    document.getElementById("ch10142").innerHTML = 'var total_marks = 500; var course1 = prompt("Enter Course 1 score out of 100");</br> var course2 = prompt("Enter Course 2 score out of 100");</br> var course3 = prompt("Enter Course 3 score out of 100");</br> var course4 = prompt("Enter Course 4 score out of 100");</br> var course5 = prompt("Enter Course 5 score out of 100");</br> var obtained_marks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5);</br> var percentage = (obtained_marks/total_marks)*100;</br> alert(percentage + "%");' ;
}
// ----------------------------------------------------------------- //

function ch151617()
{
    var cources = [];
    prompt("enter your last name");
    var course1 = prompt("Enter Course 1 name");
    cources.push(course1);
    var course2 = prompt("Enter Course 2 name");
    cources.push(course2);
    var course3 = prompt("Enter Course 3 name");
    cources.push(course3);
    var course4 = prompt("Enter Course 4 name");
    cources.push(course4);
    var course5 = prompt("Enter Course 5 name");
    cources.push(course5);
    alert("cources array : " + cources);
    
    index0=cources.indexOf(course1);
    var course1 = prompt("edit course 1", course1);
    cources.splice(index0, 1, course1);
    
    index1=cources.indexOf(course2);
    var course2 = prompt("edit course 2", course2);
    cources.splice(index1, 1, course2);
    
    index2=cources.indexOf(course3);
    var course3 = prompt("edit course 3", course3);
    cources.splice(index2, 1, course3);
    
    index3=cources.indexOf(course4);
    var course4 = prompt("edit course 4", course4);
    cources.splice(index3, 1, course4);
    
    index4=cources.indexOf(course5);
    var course5 = prompt("edit course 5", course5);
    cources.splice(index4, 1, course5);    
    
    alert("cources array : " + cources);
}
function ch151617sc()
{
    document.getElementById("ch151617").innerHTML = 'var cources = [];</br> prompt("enter your last name"); </br>var course1 = prompt("Enter Course 1 name");</br> cources.push(course1);</br> var course2 = prompt("Enter Course 2 name");</br> cources.push(course2);</br> var course3 = prompt("Enter Course 3 name");</br> cources.push(course3);</br> var course4 = prompt("Enter Course 4 name");</br> cources.push(course4);</br> var course5 = prompt("Enter Course 5 name");</br> cources.push(course5);</br> alert("cources array : " + cources);</br> index0=cources.indexOf(course1);</br> var course1 = prompt("edit course 1", course1);</br> cources.splice(index0, 1, course1);</br> index1=cources.indexOf(course2);</br> var course2 = prompt("edit course 2", course2);</br> cources.splice(index1, 1, course2);</br> index2=cources.indexOf(course3);</br> var course3 = prompt("edit course 3", course3);</br> cources.splice(index2, 1, course3);</br> index3=cources.indexOf(course4);</br> var course4 = prompt("edit course 4", course4);</br> cources.splice(index3, 1, course4);</br>index4=cources.indexOf(course5);</br> var course5 = prompt("edit course 5", course5);</br> cources.splice(index4, 1, course5);</br> alert("cources array : " + cources);</br>' ;
}
// -----------------------------------------------

function ch181920()
{
    prompt("enter your last name");
    var cources = [];
    for (var i=0; i <5 ; i++ )
    {
        cources.push(prompt("Enter Course "+ (i+1) + " name."));
    }   
    alert("cources array : " + cources);
    
    for (var i = 0 ; i<5 ; i++)
    {
        cources.splice(cources.indexOf(cources[i]),1,prompt("edit course " + (i+1), cources[i]));
    }
    alert("cources array : " + cources);
}
function ch181920sc()
{
    document.getElementById("ch181920").innerHTML = 'prompt("enter your last name");</br> var cources = [];</br> for (var i=0; i <5 ; i++ )</br> {</br> cources.push(prompt("Enter Course "+ (i+1) + " name.")); </br>}</br> alert("cources array : " + cources);</br> for (var i = 0 ; i<5 ; i++)</br> {</br> cources.splice(cources.indexOf(cources[i]),1,prompt("edit course " + (i+1), cources[i])); </br>}</br> alert("cources array : " + cources);</br>' ;
}
// -------------------------------------------------------------//

function ch21_30_1()
{
    var input_decimal_num = parseFloat(prompt("enter a float number."));
    var conversion = Math.ceil(input_decimal_num);
    var string_var = "this is my dummy text";
    var slice_string = string_var.slice(0,conversion);
    var arr = [];
    alert(slice_string);
    for (var i = 0; i < slice_string.length; i++)
    {
        arr.push(slice_string[i]);
    }
    arr = arr.reverse().join("");  
    alert(arr);
}
function ch21_30_1sc()
{
    document.getElementById("ch21_30_1").innerHTML = 'var input_decimal_num = parseFloat(prompt("enter a float number."));</br> var conversion = Math.ceil(input_decimal_num);</br> var string_var = "this is my dummy text";</br> var slice_string = string_var.slice(0,conversion); </br>var arr = [];</br> alert(slice_string); </br>for (var i = 0; i < slice_string.length; i++)</br> {</br> arr.push(slice_string[i]);</br> } </br>arr = arr.reverse().join("");</br> alert(arr);'

}

function ch21_30_2()
{
    var input_string = prompt("Enter a string.");
    var arr = input_string.split(" ");
    for (var i=0; i<arr.length ; i++)
    {
        var word = arr[i];
        var first_char = word.charAt(0).toUpperCase();
        var word_arr = word.split("");
        word_arr.splice(0,1,first_char);
        var word_str= word_arr.join("");
        arr.splice(i,1,word_str);
    }
    alert(arr.join(" "));
}
function ch21_30_2sc()
{
    document.getElementById("ch21_30_2").innerHTML = 'var input_string = prompt("Enter a string.");</br> var arr = input_string.split(" ");</br> for (var i=0; i<arr.length ; i++) </br>{</br> var word = arr[i];</br> var first_char = word.charAt(0).toUpperCase();</br> var word_arr = word.split("");</br> word_arr.splice(0,1,first_char);</br> var word_str= word_arr.join("");</br> arr.splice(i,1,word_str);</br> }</br> alert(arr.join(" "));</br>' 
}

//----------------------------------------------------------
function ch31_34()
{
    var name = prompt("what is your name?");
    var date = parseInt(prompt("data of birth?"));
    var month = parseInt(prompt("month of birth?"));
    var year = parseInt(prompt("year of birth?"));
    var birth = new Date(year, month-1, date);
    var rightNow = new Date();
    var simple_year = rightNow.getFullYear();
    var for_days = new Date(simple_year, month-1, date);
    var for_days1 = new Date(simple_year+1, month-1, date);
    
    if (rightNow.getHours() >= 5 && rightNow.getHours() <= 11)
    {
        console.log("Good Morning " + name);
    }
    else if (rightNow.getHours() > 11 && rightNow.getHours() <= 17)
    {
        console.log("Good After Noon " + name);
    }
    else if (rightNow.getHours() > 17 && rightNow.getHours() <= 21)
    {
        console.log("Good Evening " + name);
    }
    else if ((rightNow.getHours() >= 0 && rightNow.getHours() < 5) || rightNow.getHours() > 21)
    {
        console.log("Good Night " + name);
    }
    console.log("Your date of birth is : " +date+ "/" +month+ "/" + year);

    var age_in_mili = rightNow - birth;
    var age_in_sec = age_in_mili/1000;
    var age_in_minitus = age_in_sec/60;
    var age_in_hours =  age_in_minitus/60;
    var age_in_days = Math.floor(age_in_hours/24);
    var age_in_months = Math.floor(age_in_days/30.417);
    var age_in_year = Math.floor(age_in_months/12);

    var remaining_months = rightNow.getMonth()+1;
    var remaining_days = rightNow.getDate();
    var remaining_hours = rightNow.getHours();
    var remaining_minutes = rightNow.getMinutes();
    var remaining_seconds = rightNow.getSeconds();

    console.log("You are " +age_in_year+ " years " +remaining_months+ " Month " + remaining_days+ " Days " +remaining_hours+ " Hours " +remaining_minutes+ " Minutes " +remaining_seconds+ " Seconds old Your Age in Days " + (age_in_days));

    if (rightNow.getDate() == 27 && rightNow.getMonth() == 5)
    {
        console.log("Happy BirthDay Auria Ahmad.");
    } 
    else if(rightNow.getDate() != 27 || rightNow.getMonth() != 5)
    {
        if (rightNow.getMonth() < 5 && (rightNow.getDate() <=27 || rightNow.getDate() >=27 ))
        {
            if ((rightNow.getDate() > 27 || rightNow.getDate() < 27) && rightNow.getMonth()>=5)
            {
                var remaining_milis_days = for_days1 - rightNow;
                var remaining_bd_days = remaining_milis_days/(1000*60*60*24);
                console.log("remaining days in your birth day is : " + Math.floor(remaining_bd_days));
            }
            else if ((rightNow.getDate() < 27 || rightNow.getDate() > 27) && rightNow.getMonth() <= 5)
            {
                var remaining_milis_days = for_days - rightNow;
                var remaining_bd_days = remaining_milis_days/(1000*60*60*24);
                console.log("remaining days in your birth day is : " + Math.floor(remaining_bd_days));
            }
        }
    }
}
function ch31_34sc()
{
    document.getElementById("ch31_34").innerHTML = 'var name = prompt("what is your name?"); var date = parseInt(prompt("data of birth?")); var month = parseInt(prompt("month of birth?")); var year = parseInt(prompt("year of birth?")); var birth = new Date(year, month-1, date); var rightNow = new Date(); var simple_year = rightNow.getFullYear(); var for_days = new Date(simple_year, month-1, date); var for_days1 = new Date(simple_year+1, month-1, date); if (rightNow.getHours() >= 5 && rightNow.getHours() <= 11) { console.log("Good Morning " + name); } else if (rightNow.getHours() > 11 && rightNow.getHours() <= 17) { console.log("Good After Noon " + name); } else if (rightNow.getHours() > 17 && rightNow.getHours() <= 21) { console.log("Good Evening " + name); } else if ((rightNow.getHours() >= 0 && rightNow.getHours() < 5) || rightNow.getHours() > 21) { console.log("Good Night " + name); } console.log("Your date of birth is : " +date+ "/" +month+ "/" + year); var age_in_mili = rightNow - birth; var age_in_sec = age_in_mili/1000; var age_in_minitus = age_in_sec/60; var age_in_hours =  age_in_minitus/60; var age_in_days = Math.floor(age_in_hours/24); var age_in_months = Math.floor(age_in_days/30.417); var age_in_year = Math.floor(age_in_months/12); var remaining_months = rightNow.getMonth()+1; var remaining_days = rightNow.getDate(); var remaining_hours = rightNow.getHours(); var remaining_minutes = rightNow.getMinutes(); var remaining_seconds = rightNow.getSeconds(); console.log("You are " +age_in_year+ " years " +remaining_months+ " Month " + remaining_days+ " Days " +remaining_hours+ " Hours " +remaining_minutes+ " Minutes " +remaining_seconds+ " Seconds old Your Age in Days " + (age_in_days)); if (rightNow.getDate() == 27 && rightNow.getMonth() == 5) { console.log("Happy BirthDay Auria Ahmad."); } else if(rightNow.getDate() != 27 || rightNow.getMonth() != 5) { if (rightNow.getMonth() < 5 && (rightNow.getDate() <=27 || rightNow.getDate() >=27 )) { if ((rightNow.getDate() > 27 || rightNow.getDate() < 27) && rightNow.getMonth()>=5) { var remaining_milis_days = for_days1 - rightNow; var remaining_bd_days = remaining_milis_days/(1000*60*60*24); console.log("remaining days in your birth day is : " + Math.floor(remaining_bd_days)); } else if ((rightNow.getDate() < 27 || rightNow.getDate() > 27) && rightNow.getMonth() <= 5) { var remaining_milis_days = for_days - rightNow; var remaining_bd_days = remaining_milis_days/(1000*60*60*24); console.log("remaining days in your birth day is : " + Math.floor(remaining_bd_days)); } } }' ;
}

//-----------------------------------------
function ch35_38_1()
{
    var input_string = prompt("Enter a string.");
    var arr = input_string.split(" ");
    for (var i=0; i<arr.length ; i++)
    {
        var word = arr[i];
        var first_char = word.charAt(0).toUpperCase();
        var word_arr = word.split("");
        word_arr.splice(0,1,first_char);
        var word_str= word_arr.join("");
        arr.splice(i,1,word_str);
    }
    console.log(arr.join(" "));
}

function ch35_38_1sc()
{
    document.getElementById("ch35_38_1").innerHTML = 'var input_string = prompt("Enter a string.");</br> var arr = input_string.split(" ");</br> for (var i=0; i<arr.length ; i++)</br> {</br> var word = arr[i];</br> var first_char = word.charAt(0).toUpperCase();</br> var word_arr = word.split("");</br> word_arr.splice(0,1,first_char); </br>var word_str= word_arr.join("");</br> arr.splice(i,1,word_str); </br>}</br> console.log(arr.join(" "));</br>' ;
}


function ch35_38_2()
{
    var value = parseInt(prompt("Input a number."));
    factorialize(value);

    function factorialize(x)
    {
        var memory = 1;
        for(var i = x ; i > 0 ; i--)
        {
            memory = memory * i;
        }
        console.log(memory);
    }
}

function ch35_38_2sc()
{
    document.getElementById("ch35_38_2").innerHTML = 'var value = parseInt(prompt("Input a number."));</br> factorialize(value);</br> function factorialize(x) </br>{</br> var memory = 1; </br>for(var i = x ; i > 0 ; i--)</br> { </br>memory = memory * i;</br> }</br> console.log(memory); </br>} </br>' ;
}


function ch35_38_3()
{
    var value= multiply(4,3,6);
    console.log("value", value); // The result is ?
    function add(a, b){ var z= a+b; return z; };
    function multiply(a, b, c){ var z= a* add(b, c); return z; };
    var course="cloud native computing";
    console.log("course", course); // The result is ? console.log("z", z); // The result is ?
}

function ch35_38_3sc()
{
    document.getElementById("ch35_38_3").innerHTML = 'value = 36 </br> course: cloud native computing' ;
}

//------------------------------------------

function ch39_42()
{
    var total_marks = 500;
    var course1 = prompt("Enter Course 1 score out of 100");
    var course2 = prompt("Enter Course 2 score out of 100");
    var course3 = prompt("Enter Course 3 score out of 100");
    var course4 = prompt("Enter Course 4 score out of 100");
    var course5 = prompt("Enter Course 5 score out of 100");
    
    var obtained_marks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5);
    var percentage = (obtained_marks/total_marks)*100;

    switch(true)
    {
        case percentage>=90:
            alert("Grade A+ "+percentage+"%");
            break;
        case percentage>=75 && percentage <90:
            alert("Grade A "+percentage+"%");
            break;
        case percentage>=60 && percentage <75:
            alert("Grade B "+percentage+"%");
            break;
        case percentage>=45 && percentage <60:
            alert("Grade C "+percentage+"%");
            break;
        case percentage>=30 && percentage <45:
            alert("Grade D "+percentage+"%");
            break;
        case percentage>=0 && percentage <30:
            alert("Grade F "+percentage+"%");
            break;
        default:
            alert("please enter correctly");
    }
}
function ch39_42sc()
{
    document.getElementById("ch39_42").innerHTML = 'var total_marks = 500; </br>var course1 = prompt("Enter Course 1 score out of 100");</br> var course2 = prompt("Enter Course 2 score out of 100");</br> var course3 = prompt("Enter Course 3 score out of 100");</br> var course4 = prompt("Enter Course 4 score out of 100");</br> var course5 = prompt("Enter Course 5 score out of 100");</br> var obtained_marks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5);</br> var percentage = (obtained_marks/total_marks)*100;</br> switch(true) </br>{</br> case percentage>=90:</br> alert("Grade A+ "+percentage+"%");</br> break;</br> case percentage>=75 && percentage <90:</br> alert("Grade A "+percentage+"%");</br> break;</br> case percentage>=60 && percentage <75:</br> alert("Grade B "+percentage+"%");</br> break;</br> case percentage>=45 && percentage <60: </br>alert("Grade C "+percentage+"%");</br> break;</br> case percentage>=30 && percentage <45:</br> alert("Grade D "+percentage+"%");</br> break;</br> case percentage>=0 && percentage <30: </br>alert("Grade F "+percentage+"%"); </br>break; </br>default:</br> alert("please enter correctly"); </br>}</br>' ;
}
