angular.module('soham-chak.my-credit-card-component', []);

angular.module('soham-chak.my-credit-card-component', []).
directive('scMyCreditCardDirective', function () {
    // implementation goes here

    var directive = {
        restrict: 'E',
        templateUrl: 'templates/credit-card-directive-template.html',
        scope: {
            max: '='
        },
        require: 'ngModel',
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

        scope.cardType=creditCardFactory.getCardType();
        scope.logoUrl=creditCardFactory.getLogoUrl();

        el.bind("keyup", function() {
            changeCardLogoBasedOnInputChanges();
        });

        el.on('paste', function(){
            changeCardLogoBasedOnInputChanges();
        });

        function changeCardLogoBasedOnInputChanges(){
            console.log(scope.ccnumber);
            creditCardFactory.identifyCardTypeAndSetLogo(scope.ccnumber);
            scope.cardType = creditCardFactory.getCardType();
            scope.logoUrl = creditCardFactory.getLogoUrl();
        }
    }


});

angular
    .module('soham-chak.my-credit-card-component')
    .factory('creditCardFactory', creditCardFactory);

function creditCardFactory() {

    var service = {
        identifyCardTypeAndSetLogo: identifyCardTypeAndSetLogo,
        getLogoUrl: getLogoUrl,
        getCardType: getCardType
    };

    service.cardType = "default";
    service.logoUrl =  "creditcards/credit.png";

    return service;

    function getLogoUrl() {
        return service.logoUrl;
    }

    function setLogoUrl(url){
        service.logoUrl = url;
    }

    function setCardType(type){
        service.cardType = type;
    }

    function getCardType(){
        return service.cardType;
    }


    function identifyCardTypeAndSetLogo(number) {

        var re = new RegExp("^4");
        if(number.match(re) != null){
            setLogoUrl("creditcards/visa.png");
            setCardType("visa");
            return ;
        }

        re = new RegExp("^5[1-5]");
        if(number.match(re) != null) {
            setLogoUrl("creditcards/mastercard.png");
            setCardType("mastercard");
            return ;
        }

        re = new RegExp("^3[47]");
        if(number.match(re) != null){
            setLogoUrl("creditcards/amex.png");
            setCardType("amex");
            return ;
        }

        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if(number.match(re) != null){
            setLogoUrl("creditcards/discover.png");
            setCardType("discover");
            return ;
        }

        re = new RegExp("^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$");
        if(number.match(re) != null){
            setLogoUrl("creditcards/maestro.png");
            setCardType("maestro");
            return ;
        }

        if(getCardType() !== "visa" || getCardType() !== "amex" || getCardType() !== "discover" || getCardType() !== "mastercard"){
            setLogoUrl("creditcards/credit.png");
            setCardType("default");
            return;
        }

    }


}