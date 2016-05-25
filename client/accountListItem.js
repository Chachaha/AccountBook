Template.accountListItem.events({
    'click .remove':function (evt, tmpl) {
        ABooks.remove({_id:this._id});
    }
});