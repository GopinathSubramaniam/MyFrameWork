var LoginController = (function(params) {

    this.name = 'Rushi Created';
    this.testFunct = function() {
        console.log('This is testFunct :::: ');
    };

    this.login = function() {
        $bind.go('/home');
    }

});