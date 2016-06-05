Session.set('bank', '농협');

Template.input_modal.events({
    'change #select_bank': function (evt) {
        var bank = '';
        if (evt.target.value == 'nonghyup') {
            bank = '농협';
        }
        else if (evt.target.value == 'kookmin') {
            bank = '국민';
        }
        Session.set('bank', bank);

    },

    'click #modal_ok': function (evt, tmpl) {
        var date = tmpl.find('input[name=day]').value;
        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var day = date.substring(8, 10);

        var bank = Session.get('bank');
        var money = tmpl.find('input[name=money]').value;
        var place = tmpl.find('input[name=place]').value;
        Meteor.call("addAccountBook", bank, year, month, day, money, place);
    }
});