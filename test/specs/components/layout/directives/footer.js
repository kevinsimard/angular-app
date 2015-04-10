describe('Directive: uiFooter', function () {
    var $scope, $compile;

    beforeEach(module('app'));

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should load the uiFooter directive as an attribute', function () {
        var element = $compile('<ui-footer></ui-footer>')($scope);

        $scope.$digest();

        expect(element.scope).toEqual(jasmine.any(Function));
    });

    it('should load the uiFooter directive as an element', function () {
        var element = $compile('<div ui-footer></div>')($scope);

        $scope.$digest();

        expect(element.scope).toEqual(jasmine.any(Function));
    });
});
