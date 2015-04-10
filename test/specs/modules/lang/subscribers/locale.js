describe('Subscriber: locale', function () {
    var $scope, $state, translate, state, abstractState;

    beforeEach(module('mlang'));
    beforeEach(module('app'));

    beforeEach(inject(function (_$injector_, _$rootScope_, _$state_) {
        $scope = _$rootScope_;
        $state = _$state_;

        translate = _$injector_.get('mlang.translate');
        state = { 'name': 'index', 'url': '/', 'views': null };
        abstractState = { 'abstract': true, 'name': '', 'url': '^', 'views': null };
    }));

    it('should add a part on $stateChangeSuccess event', function () {
        $scope.$broadcast('$stateChangeSuccess', state, {}, abstractState, {});

        expect(translate.has(state.name)).toBeTruthy();
    });

    it('should remove a part on $stateChangeSuccess event', function () {
        $scope.$broadcast('$stateChangeSuccess', state, {}, abstractState, {});
        $scope.$broadcast('$stateChangeSuccess', abstractState, {}, state, {});

        expect(translate.has(state.name)).toBeFalsy();
    });
});
