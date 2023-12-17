let rootElement = document.querySelector("#root");

const heading = React.createElement("h1", null, "Learn Web Development");

const p1 = React.createElement('p', {className : "p1"}, "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");

const firstContainer = React.createElement("div", {className: "firstContainer"}, p1);

const anchor = React.createElement('a', { href: 'https://developer.mozilla.org/en-US/' }, 'the rest of MDN');

const p2 = React.createElement("p", {className : "p2"}, 'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ' , anchor, ' and other intermediate to advanced resources that assume a lot of previous knowledge.');

const secondContainer = React.createElement("div", {className: "secondContainer"}, p2);

const p3 = React.createElement("p", {className: "p3"}, "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");

const thirdContainer = React.createElement("div", {className: "thirdContainer"}, p3);

const container = React.createElement("div", {className: 'container'}, heading, firstContainer, secondContainer, thirdContainer);
ReactDOM.render(container, rootElement);
