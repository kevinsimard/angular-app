describe("Directive: uiHeader", function () {
    var $scope, $compile;

    beforeEach(module("app"));

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_;
        $compile = _$compile_;
    }));

    it("should load the uiHeader directive as an attribute", function () {
        var element = $compile("<ui-header></ui-header>")($scope);

        $scope.$digest();

        expect(element.scope).toEqual(jasmine.any(Function));
    });

    it("should load the uiHeader directive as an element", function () {
        var element = $compile("<div ui-header></div>")($scope);

        $scope.$digest();

        expect(element.scope).toEqual(jasmine.any(Function));
    });
});
