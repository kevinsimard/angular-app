describe('State: index', function () {
    var $scope, $state;

    beforeEach(module('app'));

    beforeEach(inject(function (_$rootScope_, _$state_) {
        $scope = _$rootScope_;
        $state = _$state_;
    }));

    it('should load the index.index state', function () {
        var state = 'index.index',
            config = $state.get(state);

        $state.go(state);
        $scope.$digest();

        expect(config.url).toEqual('');
        expect($state.current.name).toBe(state);
    });
});
