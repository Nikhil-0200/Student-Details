"use strict";

function marks5(science, maths, social_science, english, hindi) {
    this.science = science;
    this.maths = maths;
    this.social_science = social_science;
    this.english = english;
    this.hindi = hindi;
}

function StudentDetails(name, roll_no, clas, section, marksSci) {
    this.name = name;
    this.roll_no = roll_no;
    this.clas = clas;
    this.section = section;
    this.marksSci = marksSci;

    this.info = function () {
        console.log(`Name - ${this.name}, Roll No, - ${this.roll_no}, Class - ${this.clas}, Section - ${this.section}, Science - ${this.marksSci.science}, Maths - ${this.marksSci.maths}, S.Sc - ${this.marksSci.social_science}, English - ${this.marksSci.english}, Hindi - ${this.marksSci.hindi}`);
    };

    this.printTop3Subjects = function () {
        let subjects = Object.entries(this.marksSci)
            .sort((a, b) => b[1] - a[1]) 
            .slice(0, 3) 
            .map(entry => entry[0]); 

        console.log("+--------------------+");
        console.log("|  TOP 3 SUBJECTS   |");
        console.log("+--------------------+");
        subjects.forEach(subject => {
        console.log(`| ${subject.padEnd(18)} |`);
        });
        console.log("+--------------------+");
    };

    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no}    |`);
        console.log(`| Class    - ${this.clas}  |`);
        console.log(`| Section  - ${this.section}       |`);
        console.log(`| Science  - ${this.marksSci.science}      |`);
        console.log(`| S.Sc     - ${this.marksSci.social_science}      |`);
        console.log(`| Maths    - ${this.marksSci.maths}      |`);
        console.log(`| English  - ${this.marksSci.english}      |`);
        console.log(`| Hindi    - ${this.marksSci.hindi}      |`);
        console.log(`| Percentage - ${Percentage(this.marksSci)}% |`);
        console.log("+--------------------+");
    };

   
}

function Percentage(marks) {
    let totalMarks = marks.science + marks.maths + marks.social_science + marks.english + marks.hindi;
    let percentage = (totalMarks / 500) * 100;
    return percentage.toFixed(1);
}

let totalmarks = new marks5(73, 79, 75, 80, 67);
let student = new StudentDetails("Nikhil", 106, "CAP106", "D", totalmarks);


student.printTop3Subjects();
student.printReportCard();
