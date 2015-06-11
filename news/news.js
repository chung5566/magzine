Parse.initialize("r5t5aNmsQptsKzXchxmm6RezYVZTO1RnniaLUChx", "ldT9P8aBQBePGNhlIKlksHWV4BKVP6VTs9xgIao5");



var News = Parse.Object.extend("News");

var Newss = Parse.Collection.extend({
	model:News
});

var newss = new Newss()

newss.fetch({
    success: function(newss) {
    var newssView = new NewssView({ collection: newss });
    newssView.render();
    $('.main-container').html(newssView.el);
},
    error: function(newss, error) {
        console.log(error);
    }
});




var NewssView =  Parse.View.extend({
    template : Handlebars.compile($("#blogs-tpl").html()),
    render: function(){ 
        var collection = { news: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});




