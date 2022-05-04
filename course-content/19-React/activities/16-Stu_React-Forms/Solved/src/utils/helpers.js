export function validateEmail(email) {
  // one or more chars that don't match <>()[\]\\.,;: or whitespace separated by period(s)
  // OR
  // a string "" which contains any character
  // @
  // [ ip address .ie NUM.NUM.NUM.NUM ]
  // OR
  // domain name (1 or more alphanumerics followed by a period followed by 2 or more alpha)
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //tests to see whether a string matches a specified regular expression.
  return re.test(String(email).toLowerCase());
}

export function checkPassword(input) {
  //consist 8-15 chars, first character must A-Z or a-z, the next 17-14 chars a word char (\w) - (A-Z, a-z, 0-9, _)
  const passw = /^[A-Za-z]\w{7,14}$/;
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  //The match() method retrieves the result of matching a string against a regular expression.
  if (input.match(passw)) {
    return true;
  }
  return false;
}
