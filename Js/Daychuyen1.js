$(document).ready(function() {
            $('p img').click(function() {
                let imgPath = $(this).attr('src');
                $('#main-img').attr('src', imgPath);
            });
        });

        