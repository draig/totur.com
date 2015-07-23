// resource/js
window.TotuRex = window.TotuRex || {};

// resource/js/tutor-board
TotuRex.tutorboard = TotuRex.tutorboard || {};
TotuRex.tutorboard.Viewport = function() {

    TotuRex.tutorboard.Viewport.elements = {};

    TotuRex.tutorboard.Viewport.elements.category = $('#new-category-fld');
    TotuRex.tutorboard.Viewport.elements.subject = $('#new-subject-fld');

    $.each(TotuRex.tutorboard.data.categoriesWithSubjects, function(option) {
        TotuRex.tutorboard.Viewport.elements.category.append('<option>' + option + '</option>');
    });

    TotuRex.tutorboard.Viewport.elements.subject.prop('disabled', true);
    TotuRex.tutorboard.Viewport.elements.category.on('change', function() {
        TotuRex.tutorboard.Viewport.elements.subject.prop('disabled', false);
        TotuRex.tutorboard.Viewport.elements.subject.clear();
        $.each(TotuRex.tutorboard.data.categoriesWithSubjects[this.val()], function(option) {
            TotuRex.tutorboard.Viewport.elements.subject.append('<option>' + option + '</option>');
        });
    });

};

// resource/js/tutor-board/data
TotuRex.tutorboard.data = TotuRex.tutorboard.data || {};
TotuRex.tutorboard.data.categoriesWithSubjects = {
    "school": ["biology", "chemistry", "english", "geography", "math"],
    "exams": ["math", "history", "physics"]
};