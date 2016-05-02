/**
 * Created by sohamChakraborty on 4/30/16.
 */
describe('credit card service tests', function () {

    var creditCardFactory;

   beforeEach(function() {
       module('soham-chak.my-credit-card-component');

       inject(function (_creditCardFactory_) {
           creditCardFactory = _creditCardFactory_;
       });
   });


    it('correctly identifies the card type and card logo', function () {
        creditCardFactory.identifyCardTypeAndSetLogo("hjfjhgdd");
       expect(creditCardFactory.getCardType()).toEqual("default");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/credit.png");
    });

    it('should correctly identify visa card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("4111111111111111");
        expect(creditCardFactory.getCardType()).toEqual("visa");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/visa.png");
        creditCardFactory.identifyCardTypeAndSetLogo("4012888888881881");
        expect(creditCardFactory.getCardType()).toEqual("visa");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/visa.png");
        creditCardFactory.identifyCardTypeAndSetLogo("4222222222222");
        expect(creditCardFactory.getCardType()).toEqual("visa");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/visa.png");
    });

    it('should correctly identify amex card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("378282246310005");
        expect(creditCardFactory.getCardType()).toEqual("amex");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/amex.png");
        creditCardFactory.identifyCardTypeAndSetLogo("371449635398431");
        expect(creditCardFactory.getCardType()).toEqual("amex");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/amex.png");
        creditCardFactory.identifyCardTypeAndSetLogo("378734493671000");
        expect(creditCardFactory.getCardType()).toEqual("amex");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/amex.png");

    });

    it('should correctly identify master card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("5555555555554444");
        expect(creditCardFactory.getCardType()).toEqual("mastercard");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/mastercard.png");
    });

    it('should correctly identify discover card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("6011111111111117");
        expect(creditCardFactory.getCardType()).toEqual("discover");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/discover.png");
        creditCardFactory.identifyCardTypeAndSetLogo("6011000990139424");
        expect(creditCardFactory.getCardType()).toEqual("discover");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/discover.png");
    });


    it('should correctly identify maestro card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("6759649826438453");
        expect(creditCardFactory.getCardType()).toEqual("maestro");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/maestro.png");
    });

});