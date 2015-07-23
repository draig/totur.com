TotuRex.tutorboard.Viewport = function() {

    TotuRex.tutorboard.Viewport.elements = {};

    TotuRex.tutorboard.Viewport.elements.category = $('#new-category-fld');
    TotuRex.tutorboard.Viewport.elements.subject = $('#new-subject-fld');

    $.each(TotuRex.tutorboard.data.categoriesWithSubjects, function(option) {
        TotuRex.tutorboard.Viewport.elements.category.append('<option>' + option + '</option>');
    });

    TotuRex.tutorboard.Viewport.elements.subject.prop('disabled', true);
    TotuRex.tutorboard.Viewport.elements.category.on('change', function () {
        TotuRex.tutorboard.Viewport.elements.subject.prop('disabled', false);
        TotuRex.tutorboard.Viewport.elements.subject.empty();
        TotuRex.tutorboard.data.categoriesWithSubjects[$(this).val()].forEach ( function (option) {
            TotuRex.tutorboard.Viewport.elements.subject.append('<option>' + option + '</option>');
        });
    });
};
