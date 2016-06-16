Router.configure({
    layoutTemplate: 'homeLayout',
    loadingTemplate: 'loading',
    waitOn : function(){
        if(Meteor.userId()){
        return [Meteor.subscribe("user_abook")];
        }else{
            return [];
        }
        // Meteor.subscribe("user_abook");
    }
});
Router.route('/', {name: 'home'});

Router.route('/graph', {
    name: 'graph'
});