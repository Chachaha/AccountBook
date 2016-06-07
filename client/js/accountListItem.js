
Template.removeItem_modal.events({
    // 'click #remove_item':function () {
    //     // ABooks.remove({_id:this._id}):
    //     Meteor.call("deleteAccountBook", {_id:this._id});
    // },
    'click #remove_item':function () {
        Session.set('del_id', this._id);
        $('#removeItem_modal').openModal();
    },
    'click #removeItem_ok':function () {
        Meteor.call("deleteAccountBook", (Session.get('del_id')));
        $('#removeItem_modal').closeModal();
    }
    
});
//
// $('.dropdown-button').dropdown({
//         inDuration: 300,
//         outDuration: 225,
//         constrain_width: false, // Does not change width of dropdown to that of the activator
//         hover: true, // Activate on hover
//         gutter: 0, // Spacing from edge
//         belowOrigin: false, // Displays dropdown below the button
//         alignment: 'left' // Displays dropdown with edge aligned to the left of button
//     }
// );
