Session.set('bank', '농협');

Template.accountInput.events({
    'change #bank': function (evt) {
        var bank = '';
        if (evt.target.value == 'nonghyup') {
            bank = '농협';
        }
        else if (evt.target.value == 'kookmin') {
            bank = '국민';
        }
        Session.set('bank', bank);

    },

    'click .add': function (evt, tmpl) {
        var date = tmpl.find('input[name=day]').value;
        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var day = date.substring(8, 10);
        ABooks.insert({
            bank: Session.get('bank'),
            year: year,
            month: month,
            day: day,
            money: tmpl.find('input[name=money]').value,
            place: tmpl.find('input[name=place]').value
        });
    }
});