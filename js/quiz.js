let score = [];
let questionNumber = 1;
let answers = ["", "", "", "", "", "", "", "", "", ""];
let answerID = ["", "", "", "", "", "", "", "", "", ""];
let sum = 0;

let lang = localStorage.getItem("lang")

if (lang === "HTML") {
    document.title = "HTML Quiz"
    document.getElementById("quiz-title").innerText = "HTML Quiz"
    questions = [

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
} else if (lang === "CSS") {
    document.title = "CSS Quiz"
    document.getElementById("quiz-title").innerText = "CSS Quiz"
    questions = [

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
} else if (lang === "JS") {
    document.title = "JavaScript Quiz"
    document.getElementById("quiz-title").innerText = "JavaScript Quiz"
    questions = [

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
} else if (lang === "PY") {
    document.title = "Python Quiz"
    document.getElementById("quiz-title").innerText = "Python Quiz"
    questions = [

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
} else {
    document.title = "C Quiz"
    document.getElementById("quiz-title").innerText = "C Quiz"
    questions = [

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
}

document.getElementById("question-number").innerText = "Question " + questionNumber;
document.getElementById("question").innerText = questions[questionNumber - 1].question;
document.getElementById("label-answer1").innerText = questions[questionNumber - 1].choices[0];
document.getElementById("label-answer2").innerText = questions[questionNumber - 1].choices[1];
document.getElementById("label-answer3").innerText = questions[questionNumber - 1].choices[2];
document.getElementById("label-answer4").innerText = questions[questionNumber - 1].choices[3];
document.getElementById("answer1").value = questions[questionNumber - 1].choices[0];
document.getElementById("answer2").value = questions[questionNumber - 1].choices[1];
document.getElementById("answer3").value = questions[questionNumber - 1].choices[2];
document.getElementById("answer4").value = questions[questionNumber - 1].choices[3];

// document.getElementsByClassName("num")[questionNumber - 1].style.backgroundColor = 'green';

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
        if (document.querySelector('input[name="answer"]:checked').value === questions[questionNumber - 1].choices[questions[questionNumber - 1].answer - 1]) {
            score[questionNumber - 1] = 10;
            console.log("questionNumber -> " + questionNumber)
        } else if (document.querySelector('input[name="answer"]:checked').value !== questions[questionNumber - 1].choices[questions[questionNumber - 1].answer - 1]) {
            score[questionNumber - 1] = 0;
            console.log("questionNumber -> " + questionNumber)
        }

        if (questionNumber < questions.length) {
            document.getElementsByClassName("num")[questionNumber - 1].style.backgroundColor = '#efe57b';
            document.getElementById("question-number").innerText = "Question " + ++questionNumber;
            document.getElementById("question").innerText = questions[questionNumber - 1].question;
            console.log(answers);
            console.log(answerID);
            document.getElementById("label-answer1").innerText = questions[questionNumber - 1].choices[0];
            document.getElementById("label-answer2").innerText = questions[questionNumber - 1].choices[1];
            document.getElementById("label-answer3").innerText = questions[questionNumber - 1].choices[2];
            document.getElementById("label-answer4").innerText = questions[questionNumber - 1].choices[3];
            document.getElementById("answer1").value = questions[questionNumber - 1].choices[0];
            document.getElementById("answer2").value = questions[questionNumber - 1].choices[1];
            document.getElementById("answer3").value = questions[questionNumber - 1].choices[2];
            document.getElementById("answer4").value = questions[questionNumber - 1].choices[3];
            document.getElementById("span").innerText = questionNumber + "";
            if (answerID[8] !== "" && questionNumber > 9) {
                document.getElementById("next").innerText = "Submit";
            }
            //add cursor pointer to num
            if (questionNumber > 9) {
                for (let i = 0; i < 10; i++) {
                    elements = document.getElementsByClassName("num")
                    elements[i].style.cursor = "pointer";
                }
            }
        } else if (answerID[9] !== "" && questionNumber === 10) {
            sum = score.reduce((a, b) => a + b, 0);
            window.location.replace("score.html");
            // alert(sum)
            localStorage.setItem("score", sum);
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
    if (answerID[questionNumber - 1] !== undefined && answerID[questionNumber - 1] !== "") {
        document.getElementById(answerID[questionNumber - 1]).checked = true;
    }
}

function prev() {
    if (questionNumber !== 1) {
        document.getElementById("next").innerText = "Next";
        document.getElementById("answer1").checked = false;
        document.getElementById("answer2").checked = false;
        document.getElementById("answer3").checked = false;
        document.getElementById("answer4").checked = false;
        document.getElementById("question-number").innerText = "Question " + --questionNumber;
        document.getElementById(answerID[questionNumber - 1]).checked = true;
        document.getElementById("question").innerText = questions[questionNumber - 1].question;
        document.getElementById("label-answer1").innerText = questions[questionNumber - 1].choices[0];
        document.getElementById("label-answer2").innerText = questions[questionNumber - 1].choices[1];
        document.getElementById("label-answer3").innerText = questions[questionNumber - 1].choices[2];
        document.getElementById("label-answer4").innerText = questions[questionNumber - 1].choices[3];
        document.getElementById("answer1").value = questions[questionNumber - 1].choices[0];
        document.getElementById("answer2").value = questions[questionNumber - 1].choices[1];
        document.getElementById("answer3").value = questions[questionNumber - 1].choices[2];
        document.getElementById("answer4").value = questions[questionNumber - 1].choices[3];
        document.getElementById("span").innerText = questionNumber + "";
    }
}

document.querySelectorAll('.num').forEach(item => {
    item.addEventListener('click', event => {
        if (answerID[8] !== "") {
            document.getElementById("question-number").innerText = "Question " + item.innerHTML;
            questionNumber = parseInt(item.innerHTML);
            document.getElementById("answer1").checked = false;
            document.getElementById("answer2").checked = false;
            document.getElementById("answer3").checked = false;
            document.getElementById("answer4").checked = false;
            if (document.getElementById(answerID[item.innerHTML - 1])) {
                document.getElementById(answerID[item.innerHTML - 1]).checked = true;
            }
            document.getElementById("question").innerText = questions[item.innerHTML - 1].question;
            document.getElementById("label-answer1").innerText = questions[item.innerHTML - 1].choices[0];
            document.getElementById("label-answer2").innerText = questions[item.innerHTML - 1].choices[1];
            document.getElementById("label-answer3").innerText = questions[item.innerHTML - 1].choices[2];
            document.getElementById("label-answer4").innerText = questions[item.innerHTML - 1].choices[3];
            document.getElementById("answer1").value = questions[item.innerHTML - 1].choices[0];
            document.getElementById("answer2").value = questions[item.innerHTML - 1].choices[1];
            document.getElementById("answer3").value = questions[item.innerHTML - 1].choices[2];
            document.getElementById("answer4").value = questions[item.innerHTML - 1].choices[3];
            document.getElementById("span").innerText = item.innerHTML + "";
            if (questionNumber !== 10) {
                document.getElementById("next").innerText = "Next";
            } else if (questionNumber === 10) {
                document.getElementById("next").innerText = "Submit";
            }
        }
    })
})

document.querySelectorAll('.answer').forEach(item => {
    item.addEventListener('click', event => {
        let questionNumber = (item.parentElement.children.item(0).children.item(0).innerHTML.charAt(item.parentElement.children.item(0).children.item(0).innerHTML.length - 2) + item.parentElement.children.item(0).children.item(0).innerHTML.charAt(item.parentElement.children.item(0).children.item(0).innerHTML.length - 1)).trim();
        console.log(questionNumber)
        answers[questionNumber - 1] = (document.querySelector('input[name="answer"]:checked').value);
        answerID[questionNumber - 1] = (document.querySelector('input[name="answer"]:checked').id);
        if (document.querySelector('input[name="answer"]:checked').value === questions[questionNumber - 1].choices[questions[questionNumber - 1].answer - 1]) {
            score[questionNumber - 1] = 10;
            console.log("questionNumber -> " + questionNumber)
        } else if (document.querySelector('input[name="answer"]:checked').value !== questions[questionNumber - 1].choices[questions[questionNumber - 1].answer - 1]) {
            score[questionNumber - 1] = 0;
            console.log("questionNumber -> " + questionNumber)
        }
        if (answerID[9] !== "") {
            document.getElementsByClassName("num")[9].style.backgroundColor = '#efe57b';
        }
    })
})