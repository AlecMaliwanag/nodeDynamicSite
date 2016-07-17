var fs = require("fs");

function mergeValues(values, content) {
  //cycle over the keys
  for(var key in values) {
    //replace key vallues with values from object
    content = content.toString().replace("{{" + key +"}}", values[key]);
  }
  
  return content;
}
;
function view(templateName, values, response) {
  //Read from the template files
var fileContents = fs.readFileSync('./views/' + templateName + ".html",{encoding: "UTF8"} );     
    //Insert values in to the content
    fileContents = mergeValues(values, fileContents);
    //Write out to the response
    response.write(fileContents);
}
  

module.exports.view = view;