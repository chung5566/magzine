Parse.initialize("r5t5aNmsQptsKzXchxmm6RezYVZTO1RnniaLUChx", "ldT9P8aBQBePGNhlIKlksHWV4BKVP6VTs9xgIao5");


var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});