Template.accountListItem.events({
    // 'click .remove':function () {
    //     ABooks.remove({_id:this._id});
    // }
    'click #remove_item':function () {
        // ABooks.remove({_id:this._id}):
        Meteor.call("deleteAccountBook", {_id:this._id});
    }
    
});
$('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
);
