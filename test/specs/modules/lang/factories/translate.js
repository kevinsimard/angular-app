describe('Factory: translate', function () {
    var $translatePartialLoader, translate, constants;

    beforeEach(module('mlang'));
    beforeEach(module('app'));

    beforeEach(inject(function (_$injector_) {
        $translatePartialLoader = _$injector_.get('$translatePartialLoader');

        translate = _$injector_.get('mlang.translate');
        constants = _$injector_.get('constants');
    }));

    it('should have the part', function () {
        var part = 'index';

        $translatePartialLoader.addPart(part);

        expect(translate.has(part)).toBeTruthy();
    });

    it('should add a part', function () {
        var part = 'index';

        translate.add(part);

        expect(translate.has(part)).toBeTruthy();
    });

    it('should remove a part', function () {
        var part = 'index';

        translate.add(part);
        translate.remove(part);

        expect(translate.has(part)).toBeFalsy();
    });

    it('should get the current locale', function () {
        expect(translate.getLocale()).toBe(constants.locale);
    });

    it('should set the current locale', function () {
        angular.forEach(constants.locales, function (locale) {
            translate.setLocale(locale);
            expect(translate.getLocale()).toBe(locale);
        });
    });
});
