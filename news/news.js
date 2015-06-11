Parse.initialize("r5t5aNmsQptsKzXchxmm6RezYVZTO1RnniaLUChx", "ldT9P8aBQBePGNhlIKlksHWV4BKVP6VTs9xgIao5");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});

var News = Parse.Object.extend("News");

var Newss = Parse.Collection.extend({
	model:News
});

var newss = new Newss()
var NewsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { newss: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});

newss.fetch({
    success: function(newss) {
    var NewsView = new NewsView({ collection: newss });
    NewsView.render();
    $('.main-container').html(NewsView.el);
	},
    error: function(newss, error) {
        console.log(error);
    }
});



