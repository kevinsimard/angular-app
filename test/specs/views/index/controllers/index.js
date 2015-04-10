describe('Controller: index.index', function () {
    var $scope;

    beforeEach(module('app'));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        $scope = _$rootScope_.$new();

        _$controller_('index.index', {
            '$scope': $scope
        });
    }));

    it('should load the index.index controller', function () {
        //
    });
});
