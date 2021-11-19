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

if ( hour > 8 && hour < 18) {
    document.body.classList.add("business-hours");
    }



(function loadPlaylist() {
    let playlist 
    switch(hour) {
        case 9, 10:
            document.getElementById("iframe").src="https://www.youtube.com/embed/videoseries?modestbranding=1&showinfo=0&autohide=1&autoplay=1&mute=1&loop=1&playlist=PLe4n-KWTVK_q_ewqHwHCVHmv57KkiknH1&&controls=0&list=PLe4n-KWTVK_q_ewqHwHCVHmv57KkiknH1&"
          break;
        case 11, 12, 13, 14, 15, 16:
            document.getElementById("iframe").src="https://www.youtube.com/embed/videoseries?modestbranding=1&showinfo=0&autohide=1&autoplay=1&mute=1&loop=1&playlist=PLe4n-KWTVK_pYaFxx9oExCHmk9eJJGhHR&&controls=0&list=PLe4n-KWTVK_pYaFxx9oExCHmk9eJJGhHR&"
          break;
        case 17:
            document.getElementById("iframe").src="https://www.youtube.com/embed/videoseries?modestbranding=1&showinfo=0&autohide=1&autoplay=1&mute=1&loop=1&playlist=PLe4n-KWTVK_quw4goIZ_99qqEp0LtOZMi&&controls=0&list=PLe4n-KWTVK_quw4goIZ_99qqEp0LtOZMi&"
        default:
            document.getElementById("iframe").src="https://www.youtube.com/embed/videoseries?modestbranding=1&showinfo=0&autohide=1&autoplay=1&mute=1&loop=1&playlist=PLe4n-KWTVK_o05TTD0WlHywYQkjH0O_zg&&controls=0&list=PLe4n-KWTVK_o05TTD0WlHywYQkjH0O_zg&"
      }
    
    
})()

// - do i need a break in the final case of the switch above?
// - how to embiggen the youtube screen to cut off the logos
// - clock hands aren't quite aligned

// // MULTIPLE VIDEOS ARRAY:
// let videoSource = new Array();
// videoSource[0]='videos/181015_13_Venice Beach Drone_25.mp4';
// videoSource[1]='videos/afternoon-pexels-pavel-danilyuk-7320532.mp4';
// videoSource[2]='videos/dusk-pexels-samson-katt-5228669.mp4.mp4';
// videoSource[3]='videos/night-production ID_4323285.mp4';
// let videoCount = videoSource.length;

// document.getElementById("myVideos").setAttribute("src", videoSource[0]);

// function videoPlay(videoSource0) {
//     document.getElementById("myVideos").setAttribute("src",videoSource[0]);
//     document.getElementById("myVideos").load();
//     document.getElementById("myVideos").play();
// }

// document.getElementById('myVideos').addEventListener('ended',myHandler,false);
// function myHandler() {
// i++;
// if(i == (videoCount-1)){
// i = 0;
// videoPlay(i);
// } else{
// videoPlay(i);
// }
        
    //    }





// const videoPlayerSource = document.querySelector( '.fullscreen-video source' );
// // timeOfDay is a variable for example, and its value would be taken from the clock or something
// // I've hard-coded it here as 'morning'.
// // It could equally be a number or whatever format the clock uses.
// const timeOfDay = 'morning';
// switch(timeOfDay) {
//   case 'morning':
//     videoPlayerSource.setAttribute( 'src', 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' );
//     break;
//   case 'afternoon':
//     videoPlayerSource.setAttribute( 'src', 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' );
//     break;
//   default:
//     videoPlayerSource.setAttribute( 'src', 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' );
// }






// // - load dif video each hour using switch statement (figure out how to use bit where log is ('inner logic') to put video), could change source of vid, dif ways to do that.
// - change the clock styling based on whether or not it's in business hours. during business hours use the lcass, apply dif css based on that, like adding clases to certain numbers
