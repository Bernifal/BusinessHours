const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// const videoPlayerSource = document.querySelector( '.fullscreen-video source' );

setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.transform = 'rotate('+(rotationRatio*360)+'deg)';
}

setClock()

const time = new Date()
const hour = time.getHours()

if ( hour > 8 && hour < 17) {
    document.body.classList.add("business-hours");
    
    }

    const iframe = document.getElementById("iframe");

    const dawn =
        "https://www.youtube.com/embed/videoseries?modestbranding=1&showinfo=0&autohide=1&autoplay=1&mute=1&loop=1&playlist=PLe4n-KWTVK_q_ewqHwHCVHmv57KkiknH1&&controls=0&list=PLe4n-KWTVK_q_ewqHwHCVHmv57KkiknH1&";
    const day =
        "https://www.youtube.com/embed/videoseries?modestbranding=1&showinfo=0&autohide=1&autoplay=1&mute=1&loop=1&playlist=PLe4n-KWTVK_pYaFxx9oExCHmk9eJJGhHR&&controls=0&list=PLe4n-KWTVK_pYaFxx9oExCHmk9eJJGhHR&";
    const dusk =
        "https://www.youtube.com/embed/videoseries?modestbranding=1&showinfo=0&autohide=1&autoplay=1&mute=1&loop=1&playlist=PLe4n-KWTVK_quw4goIZ_99qqEp0LtOZMi&&controls=0&list=PLe4n-KWTVK_quw4goIZ_99qqEp0LtOZMi&";
    const night =
        "https://www.youtube.com/embed/videoseries?modestbranding=1&showinfo=0&autohide=1&autoplay=1&mute=1&loop=1&playlist=PLe4n-KWTVK_o05TTD0WlHywYQkjH0O_zg&&controls=0&list=PLe4n-KWTVK_o05TTD0WlHywYQkjH0O_zg";
    (function loadPlaylist() {
        switch (hour) {
            case 9:
            case 10:
                changeIframeSrc(dawn);
                break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                changeIframeSrc(day);
                break;
            case 16:
                changeIframeSrc(dusk);
                break;
            default:
                changeIframeSrc(night);
        }
    })();

    function changeIframeSrc(url) {
        iframe.src = url;
    }

let DayOfTheWeek = new Date().getDay();  //0=Sun, 1=Mon, ..., 6=Sat

if(DayOfTheWeek == 6 || DayOfTheWeek == 0){
    $("business-hours").hide();
} else {
    $("business-hours").show();
}

loadPlaylist();


