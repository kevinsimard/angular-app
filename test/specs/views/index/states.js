describe('State: index', function () {
    var $rootScope, $state;

    beforeEach(module('app'));

    beforeEach(inject(function (_$rootScope_, _$state_) {
        $rootScope = _$rootScope_;
        $state = _$state_;
    }));

    it('should load the index.index state', function () {
        var state = 'index.index',
            config = $state.get(state);

        $state.go(state);
        $rootScope.$digest();

        expect(config.url).toEqual('');
        expect($state.current.name).toBe(state);
    });
});
