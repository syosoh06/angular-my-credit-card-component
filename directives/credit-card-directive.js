/**
 * Created by sohamChakraborty on 4/30/16.
 */
/* recommended */
/* credit-card-directive.js */

/**
 * @desc credit card directive that casn automatically detect the credit card type
 * @example <div credit-card-identifier></div>
 */
angular
    .module('soham-chak.my-credit-card-component')
    .directive('creditCardIdentifier', creditCardIdentifier);

function creditCardIdentifier(creditCardFactory) {
    /* implementation details */

    var directive = {
        restrict: 'E',
        templateUrl: 'templates/credit-card-directive-template.html',
        scope: { },
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
    
    

}