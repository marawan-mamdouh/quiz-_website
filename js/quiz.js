let score = [];
let questionNumber = 1;
let answers = [];
let answerID = [];

let HTMLquestions = [

    {
        question: "HTML is what type of language ?",
        choices: ["Scripting Language", "Markup Language", "Programming Language", "Network Protocol"],
        answer: 2

    },

    {
        question: "HTML uses :",
        choices: ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"],
        answer: 3

    },
    {
        question: "The year in which HTML was first proposed _______.",
        choices: ["1990", "1980", "2000", "1995"],
        answer: 1

    },
    {
        question: "Apart from <b> tag, what other tag makes text bold ?",
        choices: ["fat", "strong", "black", "emp"],
        answer: 2

    },
    {/*5*/
        question: "How can you make a bulleted list with numbers? ",
        choices: ["dl", "ol", "list", "ul"],
        answer: 2

    },
    {
        question: "What tag is used to display a picture in a HTML page?",
        choices: ["picture", "image", "pic", "img"],
        answer: 4

    },
    {
        question: "HTML web pages can be read and rendered by _________.",
        choices: ["Compiler", "Server", "Web Browser", "Interpreter"],
        answer: 3

    },
    {
        question: "Which of the following is not a browser ?",
        choices: ["Microsofts Bing", "Netscape Navigator", "Mozilla Firefox", "Opera"],
        answer: 1

    },
    {
        question: "HTML tags are surrounded by which type of brackets.",
        choices: ["Curly", "Round", "Squart", "Angle"],
        answer: 4

    },
    {/*10*/
        question: "Tags and test that are not directly displayed on the page are written in _____ section.",
        choices: ["head", "title", "body", "html"],
        answer: 1

    }

];

let CSSquestions = [

    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        choices: ["Id", "text", "class", "name"],
        answer: 1

    },
    {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choices: ["margin", "clear", "float", "padding"],
        answer: 2

    },
    {
        question: "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack ?",
        choices: ["d-inex", "s-index", "x-index", "z-index"],
        answer: 4

    },
    {/*4*/
        question: "Can we align a Block element by setting the left and right margins ?",
        choices: ["Yes, we can", "Not Possible", "Depends on browser", "Depends upon operating System"],
        answer: 2

    },
    {
        question: "If we want to wrap a block of text around an image, which css property will we use ?",
        choices: ["wrap", "push", "float", "align"],
        answer: 3

    },
    {/*6*/
        question: "If we want to show an Arrow as cursor, then which value we will use ?",
        choices: ["pointer", "default", "arrow", "arr"],
        answer: 2

    },
    {
        question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
        choices: ["border-color", "border-decoration", "border-style", "border-line"],
        answer: 3

    },
    {/*8*/
        question: "Which of the following properties will we use to display border around a cell without any content ?",
        choices: ["empty-cell", "blank-cell", "noncontent-cell", "void-cell"],
        answer: 1

    },
    {
        question: "What should be the table width, so that the width of a table adjust to the current width of the browser window?",
        choices: ["640 pixels", "100%", "full-screen", "1024px"],
        answer: 2

    },
    {
        question: "How can we write comment along with CSS code ?",
        choices: ["/* a comment */", "// a comment //", "/ a comment /", "<' a comment'>"],
        answer: 1

    }

];
let JSquestions = [

    {
        question: "Which of the following is true about let iable naming conventions in JavaScript?",
        choices: ["JavaScript let iable names must begin with a letter or the underscore character.", "JavaScript let iable names are case sensitive.", "Both of the above.", " None of the above."],
        answer: 3

    },
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Function", "File", "FilleUpload", "Data"],
        answer: 2

    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["False", "True"],
        answer: 1

    },
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["The number of days since January 1st, 1900", "The number of seconds since January 1st, 1970", "The number of milliseconds since January 1st, 1970", "The number of picoseconds since January 1st, 1970"],
        answer: 3

    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["False", "True"],
        answer: 2

    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["True", "False"],
        answer: 2

    },
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        choices: ["Pathname", "Protocol", "Defaultststus", "Host"],
        answer: 3

    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        choices: ["visibilty", "visible", "invisible", "None of the above"],
        answer: 1

    },
    {
        question: " Javascript is an object oriented language?",
        choices: ["False", "True"],
        answer: 2

    },
    {
        question: "What is the alternate name for Java script?",
        choices: ["LimeScript", "ECMScript", "Both of the above", "ECMAScript"],
        answer: 4

    }

];
let PYquestions = [

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH", "Hello Worl", "d", "Error"],
        answer: 1

    },
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int", "bool", "void", "None"],
        answer: 4

    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re", "regex", "pyregex", "None of the above"],
        answer: 1

    },
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True", "False", "Machine Dependent", "Error"],
        answer: 2

    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j", "k = complex(2, 3)", "k = 2 + 3l", "k = 2 + 3J"],
        answer: 3

    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5", "-11", "+11", "-5"],
        answer: 1

    },
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]", "print s.lower()", "s[1] = ‘r’", "print s.strip()"],
        answer: 3

    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub", "Function", "A function developed using bottom-up approach", "A function developed using top-down approach"],
        answer: 1

    },
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python", "go python", "python", "run python"],
        answer: 3

    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.", "It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java", "Both of the above", "None of the above"],
        answer: 3

    }

];
let Cquestions = [

    {
        question: "C Language was developed in the year ____",
        choices: ["1970", "1975", "1980", "1985"],
        answer: 1

    },
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto", "main", "case", "register"],
        answer: 2

    },
    {
        question: "A C let iable name can start with a ____",
        choices: ["Number", "Plus Sign", "Underscore", "Asterisk"],
        answer: 3

    },
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function", "Output of Function", "Declaration of Function", "Input of a Function"],
        answer: 3

    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for", "If", "do-while", "while"],
        answer: 3

    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location", "No memory location", "All memory location", "First and Last Memory Address"],
        answer: 3

    },
    {
        question: "A pointer pointing to a memory location of the let iable even after deletion of the let iavle is known as _____",
        choices: ["far pointer", "dangling pointer", "null pointer", "void pointer"],
        answer: 2

    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor", "dangling pointer", "Wild Pointer", "Destructor"],
        answer: 3

    },
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer", "DANGLING Pointer", "NULL Pointer", "WILD Pointer"],
        answer: 3

    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay", "James A. Sosling", "Dr. E. F. Codd", "Dennis Ritchie"],
        answer: 4

    }

];

document.getElementById("question-number").innerText = "Question " + questionNumber;
document.getElementById("question").innerText = HTMLquestions[questionNumber - 1].question;
document.getElementById("label-answer1").innerText = HTMLquestions[questionNumber - 1].choices[0];
document.getElementById("label-answer2").innerText = HTMLquestions[questionNumber - 1].choices[1];
document.getElementById("label-answer3").innerText = HTMLquestions[questionNumber - 1].choices[2];
document.getElementById("label-answer4").innerText = HTMLquestions[questionNumber - 1].choices[3];
document.getElementById("answer1").value = HTMLquestions[questionNumber - 1].choices[0];
document.getElementById("answer2").value = HTMLquestions[questionNumber - 1].choices[1];
document.getElementById("answer3").value = HTMLquestions[questionNumber - 1].choices[2];
document.getElementById("answer4").value = HTMLquestions[questionNumber - 1].choices[3];
document.getElementsByClassName("num")[questionNumber - 1].style.backgroundColor = 'green';

function answer1Click() {
    document.getElementById("answer1").checked = true;
}

function answer2Click() {
    document.getElementById("answer2").checked = true;
}

function answer3Click() {
    document.getElementById("answer3").checked = true;
}

function answer4Click() {
    document.getElementById("answer4").checked = true;
}

function next() {
    console.log("before if -> " + questionNumber)
    if (document.querySelector('input[name="answer"]:checked') !== null) {
        if (document.querySelector('input[name="answer"]:checked').value === HTMLquestions[questionNumber - 1].choices[HTMLquestions[questionNumber - 1].answer - 1]) {
            score[questionNumber - 1] = 10;
            console.log("questionNumber -> " + questionNumber)
        } else if (document.querySelector('input[name="answer"]:checked').value !== HTMLquestions[questionNumber - 1].choices[HTMLquestions[questionNumber - 1].answer - 1]) {
            score[questionNumber - 1] = 0;
            console.log("questionNumber -> " + questionNumber)
        }

        if (questionNumber < HTMLquestions.length) {
            document.getElementsByClassName("num")[questionNumber].style.backgroundColor = 'green';
            answers[questionNumber - 1] = (document.querySelector('input[name="answer"]:checked').value);
            answerID[questionNumber - 1] = (document.querySelector('input[name="answer"]:checked').id);
            document.getElementById("question-number").innerText = "Question " + ++questionNumber;
            document.getElementById("question").innerText = HTMLquestions[questionNumber - 1].question;
            console.log(answers);
            console.log(answerID);
            document.getElementById("label-answer1").innerText = HTMLquestions[questionNumber - 1].choices[0];
            document.getElementById("label-answer2").innerText = HTMLquestions[questionNumber - 1].choices[1];
            document.getElementById("label-answer3").innerText = HTMLquestions[questionNumber - 1].choices[2];
            document.getElementById("label-answer4").innerText = HTMLquestions[questionNumber - 1].choices[3];
            document.getElementById("answer1").value = HTMLquestions[questionNumber - 1].choices[0];
            document.getElementById("answer2").value = HTMLquestions[questionNumber - 1].choices[1];
            document.getElementById("answer3").value = HTMLquestions[questionNumber - 1].choices[2];
            document.getElementById("answer4").value = HTMLquestions[questionNumber - 1].choices[3];
            document.getElementById("span").innerText = questionNumber + "";
            if (questionNumber === HTMLquestions.length) {
                document.getElementById("next").innerText = "Finish";
            }
        } else if (questionNumber === HTMLquestions.length) {
            answers[questionNumber - 1] = (document.querySelector('input[name="answer"]:checked').value);
            answerID[questionNumber - 1] = (document.querySelector('input[name="answer"]:checked').id);
            const sum = score.reduce((a, b) => a + b, 0);
            alert(sum)
            document.getElementById("next").disabled = true;
            document.getElementById("prev").disabled = true;
        }
        console.log(score)
        document.getElementById("answer1").checked = false;
        document.getElementById("answer2").checked = false;
        document.getElementById("answer3").checked = false;
        document.getElementById("answer4").checked = false;
    } else {
        alert("please chose answer")
    }
    if (answerID[questionNumber - 1] !== undefined) {
        document.getElementById(answerID[questionNumber - 1]).checked = true;
    }
}

function prev() {
    if (questionNumber !== 1) {
        document.getElementById("next").innerText = "Next";
        document.getElementsByClassName("num")[questionNumber - 1].style.backgroundColor = '#bad';
        document.getElementById("answer1").checked = false;
        document.getElementById("answer2").checked = false;
        document.getElementById("answer3").checked = false;
        document.getElementById("answer4").checked = false;
        document.getElementById("question-number").innerText = "Question " + --questionNumber;
        document.getElementById(answerID[questionNumber - 1]).checked = true;
        document.getElementById("question").innerText = HTMLquestions[questionNumber - 1].question;
        document.getElementById("label-answer1").innerText = HTMLquestions[questionNumber - 1].choices[0];
        document.getElementById("label-answer2").innerText = HTMLquestions[questionNumber - 1].choices[1];
        document.getElementById("label-answer3").innerText = HTMLquestions[questionNumber - 1].choices[2];
        document.getElementById("label-answer4").innerText = HTMLquestions[questionNumber - 1].choices[3];
        document.getElementById("answer1").value = HTMLquestions[questionNumber - 1].choices[0];
        document.getElementById("answer2").value = HTMLquestions[questionNumber - 1].choices[1];
        document.getElementById("answer3").value = HTMLquestions[questionNumber - 1].choices[2];
        document.getElementById("answer4").value = HTMLquestions[questionNumber - 1].choices[3];
        document.getElementById("span").innerText = questionNumber + "";
    }
}