/**
 * Created by sohamChakraborty on 5/1/16.
 */
describe('credit card directive tests', function(){

    var elm, scope, creditCardFactory;

    beforeEach(module('soham-chak.my-credit-card-component'));

    // load the templates
    beforeEach(module('templates/credit-card-directive-template.html'));

    beforeEach(inject(function($rootScope, $compile, _creditCardFactory_) {
        // we might move this tpl into an html file as well...
        elm = angular.element(
            '<div>' +
            '<img src="{{logoUrl}}">' +
            '<input ng-model="ccnumber" />' +
            '</div>');
        creditCardFactory = _creditCardFactory_;
        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();
    }));



    it('should have an image element and an input element', function(){
        //console.log(elm);
        var imageElement = elm.find('img');
        var inputElement = elm.find('input');
        expect(imageElement).toBeDefined();
        expect(inputElement).toBeDefined();
    });
    
    it('should load default card image if the card number is not being able to be recognized', function () {

        scope.$apply(function(){
           scope.ccnumber = "1111111111";
            scope.logoUrl="";
            scope.cardType = "";
            creditCardFactory.identifyCardTypeAndSetLogo(scope.ccnumber);
            scope.cardType = creditCardFactory.getCardType();
            scope.logoUrl = creditCardFactory.getLogoUrl();
        });
        var imageElement = elm.find('img');
        expect(scope.cardType).toEqual('default');
        expect(imageElement.attr('src')).toBe("creditcards/credit.png");

    });
    
    it('should load visa card image for visa card number', function(){

        scope.$apply(function(){
            scope.ccnumber = "4111111111111111";
            scope.logoUrl="";
            scope.cardType = "";
            creditCardFactory.identifyCardTypeAndSetLogo(scope.ccnumber);
            scope.cardType = creditCardFactory.getCardType();
            scope.logoUrl = creditCardFactory.getLogoUrl();
        });
        var imageElement = elm.find('img');
        expect(scope.cardType).toEqual('visa');
        expect(imageElement.attr('src')).toBe("creditcards/visa.png");

    });

    it('should load amex card image for amex card number', function(){
        scope.$apply(function(){
            scope.ccnumber = "378282246310005";
            scope.logoUrl="";
            scope.cardType = "";
            creditCardFactory.identifyCardTypeAndSetLogo(scope.ccnumber);
            scope.cardType = creditCardFactory.getCardType();
            scope.logoUrl = creditCardFactory.getLogoUrl();
        });
        var imageElement = elm.find('img');
        expect(scope.cardType).toEqual('amex');
        expect(imageElement.attr('src')).toBe("creditcards/amex.png");
    });

    it('should load discover card image for discover card number', function(){
        scope.$apply(function(){
            scope.ccnumber = "6011111111111117";
            scope.logoUrl="";
            scope.cardType = "";
            creditCardFactory.identifyCardTypeAndSetLogo(scope.ccnumber);
            scope.cardType = creditCardFactory.getCardType();
            scope.logoUrl = creditCardFactory.getLogoUrl();
        });
        var imageElement = elm.find('img');
        expect(scope.cardType).toEqual('discover');
        expect(imageElement.attr('src')).toBe("creditcards/discover.png");
    });

    it('should load master card image for master card number', function(){
        scope.$apply(function(){
            scope.ccnumber = "5555555555554444";
            scope.logoUrl="";
            scope.cardType = "";
            creditCardFactory.identifyCardTypeAndSetLogo(scope.ccnumber);
            scope.cardType = creditCardFactory.getCardType();
            scope.logoUrl = creditCardFactory.getLogoUrl();
        });
        var imageElement = elm.find('img');
        expect(scope.cardType).toEqual('mastercard');
        expect(imageElement.attr('src')).toBe("creditcards/mastercard.png");
    });
    
});