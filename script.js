document.addEventListener("DOMContentLoaded", () => {

    // Перенос доп ссылков в футуре

    let enter = document.querySelector('.zfooter__dop');
    let place = document.querySelector('.zfooter__bot-inner');
    let back = document.querySelector('.zfooter__bot-left');

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 992) {
            place.append(enter);
        } else {
            back.append(enter);
        }
    });

    if (window.innerWidth <= 992) {
        place.append(enter);
    } else {
        back.append(enter);
    }

    // Перенос смотреть все в популярных котегориях


    let enter2 = document.querySelector('.zmainPopular__all');
    let place2 = document.querySelector('.zmainPopular__inner');
    let back2 = document.querySelector('.zmainPopular__panel');

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 576) {
            place2.append(enter2);
        } else {
            back2.append(enter2);
        }
    });

    if (window.innerWidth <= 576) {
        place2.append(enter2);
    } else {
        back2.append(enter2);
    }
});