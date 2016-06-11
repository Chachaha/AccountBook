Meteor.publish("user_abook", function () {
    return ABooks.find({
        owner:this.userId
    });
});