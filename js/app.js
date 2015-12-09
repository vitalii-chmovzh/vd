(function (ko) {

    var VilmateCalculatorViewModel = function() {
        var viewModel;

        viewModel = {

        };

        return viewModel;

    };

    document.addEventListener('DOMContentLoaded', function() {
        ko.applyBindings(new VilmateCalculatorViewModel(), document.getElementById('js-calculator'));
    });

})(ko);