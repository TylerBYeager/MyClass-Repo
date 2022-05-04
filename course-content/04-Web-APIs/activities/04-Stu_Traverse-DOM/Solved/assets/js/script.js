// Access element using id
//We use the method getElementById() to select the elements with an id of main and articles, and we store them in variables. 
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");

// Change style by accessing style object's properties
//To access elements nested inside the div, we use children[], which will return a list of all the child elements. To select the first child element of the article <div>, we use children[0]. This selects the article title and sets the font size. See the following code for an example:
articlesDiv.children[0].style.fontSize = "50px";
//The headline "Welcome to World News" is the second child of the main <div>. We access the element's style object to set the color of font to white, as follows:
mainDiv.children[1].style.color = "white";
