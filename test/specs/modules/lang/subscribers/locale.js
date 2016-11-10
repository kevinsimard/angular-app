describe("Subscriber: locale", function () {
    var $scope, $state, translate, state, abstractState;

    beforeEach(module("mlang"));
    beforeEach(module("app"));

    beforeEach(inject(function (_$injector_, _$rootScope_, _$state_) {
        $scope = _$rootScope_;
        $state = _$state_;

        translate = _$injector_.get("mlang.translate");
        state = { name: "index", url: "/", views: null };
        abstractState = { abstract: true, name: "", url: "^", views: null };
    }));
});
