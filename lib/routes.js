// Router.configure({
//     layoutTemplate: 'home'
// });
//
// Router.route('/', {
//     name : 'home',
//     waitOn : function(){
//         if(Meteor.userId()){
//         return [Meteor.subscribe("all_abook")];
//         }else{
//             return [];
//         }
//     },
//
// });
// Router.route('/graph', {
//     name: 'graph'
// });


FlowRouter.route('/', {
    name:'home',
    action(){
        BlazeLayout.render('HomeLayout');
    }
});

//noinspection JSAnnotator
FlowRouter.route('/graph', {
    name:'graph',
    action(){
        BlazeLayout.render('MainLayout', {main:'graph'});
    }
});