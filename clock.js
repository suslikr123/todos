window.onload = function () {
    let tDay = document.querySelector('.day');
    let tTime = document.querySelector('.time');

    function sTime() {

        let date = new Date();
        let hrs = date.getHours();
        let min = date.getMinutes();

        tTime.innerHTML = `${hrs < 10 ? `0${hrs}` : hrs} : ${min < 10 ? `0${min}` : min}`;


        let day = date.getDate();
        let month = date.getMonth();

        switch (month) {
            case 0:
                if (month == 0) { month = 'Январь'; break; }
            case 1:
                if (month == 1) { month = 'Февраль'; break; }
            case 2:
                if (month == 2) { month = 'Март'; break; }
            case 3:
                if (month == 3) { month = 'Апрель'; break; }
            case 4:
                if (month == 4) { month = 'Май'; break; }
            case 5:
                if (month == 5) { month = 'Июнь'; break; }
            case 6:
                if (month == 6) { month = 'Июль'; break; }
            case 7:
                if (month == 7) { month = 'Август'; break; }
            case 8:
                if (month == 8) { month = 'Сентябрь'; break; }
            case 9:
                if (month == 9) { month = 'Октябрь'; break; }
            case 10:
                if (month == 10) { month = 'Ноябрь'; break; }
            case 11:
                if (month == 11) { month = 'Декабрь'; break; }
        }

        tDay.innerHTML = `${day}, ${month}`;
    }



    function init() {
        sTime();
        setInterval(sTime, 1000);
    }

    init();
}