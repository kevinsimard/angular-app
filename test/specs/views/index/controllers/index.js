describe('Controller - index.index:', function () {
    var scope, controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        scope = _$rootScope_.$new();
        controller = _$controller_('index.index', {
            '$scope': scope
        });
    }));
});
