describe("Factory: translate", function () {
    var translate, constants;

    beforeEach(module("mlang"));
    beforeEach(module("app"));

    beforeEach(inject(function (_$injector_) {
        translate = _$injector_.get("mlang.translate");
        constants = _$injector_.get("constants");
    }));

    it("should get a translate id", function () {
        expect(translate.get("key")).toBe("key");
    });

    it("should get the current locale", function () {
        expect(translate.getLocale()).toBe(constants.locale);
    });

    it("should set the current locale", function () {
        angular.forEach(constants.locales, function (locale) {
            translate.setLocale(locale);
            expect(translate.getLocale()).toBe(locale);
        });
    });
});
