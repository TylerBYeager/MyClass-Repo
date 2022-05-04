var requestUrl = 'https://api.github.com/users';

//Browser XMLHttpRequest, built in the browser and require more code.
//An XMLHttpRequest, or XHR for short, was the predecessor to fetch(). XHR requests involve much more code than a simple fetch(), as shown in the following code:
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {//An event handler that is called whenever the readyState attribute changes.
  if (xhr.readyState === XMLHttpRequest.DONE) { //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
    console.log("typeof", typeof xhr.response)
  
    console.log(JSON.parse(xhr.response));
    console.log('-------------');
  }
};

xhr.open('GET', requestUrl);//Initializes a request.
xhr.send();//Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

// AJAX call requires a third party library, jQuery
//AJAX is another alternative to the Fetch API. AJAX requests require the use of the third-party library jQuery to work, as shown in the following example:
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  console.log(response);
});




