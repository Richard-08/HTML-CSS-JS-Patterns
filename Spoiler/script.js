/* $(document).ready(function () {
    $('.block__title').click(function (e) { 
        if ($('.block').hasClass('one')) {
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
}); */

const titles = document.querySelectorAll('.block__title');
const texts = document.querySelectorAll('.block__text');

for (let title of titles) {
    title.addEventListener('click', () => {
        title.classList.toggle('active');
        title.nextElementSibling.classList.toggle('active');
    });
}

