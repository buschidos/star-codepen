$(function() {
    var morph = new Morph('#canvas');
    var currentState = null;
    var currentIndex = null;
    morph.init();

    $('.js-btn').each(function(i, el) {
        var $el = $(el);
        var state = $el.data('morph');
        $el.on('click', function(e) {
            if (state === currentState) return;
            if (currentState === 'star') {
                morph.morphStar('initial');
                setTimeout(function() {
                    morph.toggleMorphToStar();
                    morph.activate(state);
                }, 800);
            } else if (morph.state.active) {
                var direction = (i > currentIndex) ? 'FORWARD' : 'REVERSE';
                morph.changeState(state, direction);
            } else {
                morph.activate(state);
            }
            currentState = state;
            currentIndex = i;
        });
    });

    $('.js-btn-star').on('click', function() {
        if (currentState === 'star') return;
        if (morph.state.active) {
            morph.deactivate();
            setTimeout(function() {
                morph.toggleMorphToStar();
                morph.morphStar('final');
            }, 800);
        } else {
            morph.toggleMorphToStar();
            morph.morphStar('final');
        }
        currentState = 'star';
    });
});
