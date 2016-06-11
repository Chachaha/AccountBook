
Template.removeItem_modal.events({
    'click #remove_item':function () {
        Session.set('del_id', this._id);
        $('#removeItem_modal').openModal();
    },
    'click #removeItem_ok':function () {
        Meteor.call("deleteAccountBook", (Session.get('del_id')));
        $('#removeItem_modal').closeModal();
    }
    
});
