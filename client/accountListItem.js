Template.accountListItem.events({
    'click .remove':function () {
        ABooks.remove({_id:this._id});
    }
});