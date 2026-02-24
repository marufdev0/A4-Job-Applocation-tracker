1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById select in html id names. 
     getElementsByClassName select in html class names.
     querySelector means thats i want class specific name.
     querySelectorAll means hole html elements hold. 

2. How do you create and insert a new element into the DOM?
Ans: const name =  document.createElement('Element name');

3. What is Event Bubbling? And how does it work?
Ans: when event click in element there parents assume and the parent’s parent also gets thats event bubbling.
    (sorry i am very weak in english (jokhn event e kiso kori tokho jeytay event korchi tar parant ke dhora aber tar perent ke dora eitai event Bubbling ))
    Example:
    const parenNode = event.target.parentNode.parentNode;

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: event delegation is html parent element in child elements handle, minimum code there and daynamic ,maintenance.