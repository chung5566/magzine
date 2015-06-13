$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("r5t5aNmsQptsKzXchxmm6RezYVZTO1RnniaLUChx", "ldT9P8aBQBePGNhlIKlksHWV4BKVP6VTs9xgIao5");
 
});



var LoginV = Parse.View.extend({
    template: Handlebars.compile($('#login-tpl').html()),
    events: {
        'submit .form-signin': 'login'
    },
    login: function(e) {
 
        // Prevent Default Submit Event
        e.preventDefault();
 
        // Get data from the form and put them into variables
        var data = $(e.target).serializeArray(),
            username = data[0].value,
            password = data[1].value;
 
        // Call Parse Login function with those variables
        Parse.User.logIn(username, password, {
            // If the username and password matches
            success: function(user) {
                alert('Welcome!');
            },
            // If there is an error
            error: function(user, error) {
                console.log(error);
            }
        });
    },
        render: function(){
        this.$el.html(this.template());
    }
}),
    WelcomeView = Parse.View.extend({
        template: Handlebars.compile($('#welcome-tpl').html()),
        render: function(){
            var attributes = this.model.toJSON();
            this.$el.html(this.template(attributes));
        }
    });


 
    var loginV = new LoginV();
    loginV.render();
    $('.main-container').html(loginV.el);    



