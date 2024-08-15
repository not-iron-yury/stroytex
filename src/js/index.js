/*----------------------video----------------------*/
const video = document.querySelector(".video");

if (video) {
	// generate video url
	let generateUrl = function (id) {
		let query = "?rel=0&showinfo=0&autoplay=1";
		return "https://www.youtube.com/embed/" + id + query;
	};

	// creating iframe
	let createIframe = function (id) {
		let iframe = document.createElement("iframe");

		iframe.setAttribute("allowfullscreen", "");
		iframe.setAttribute("allow", "autoplay; encrypted-media");
		iframe.setAttribute("src", generateUrl(id));

		return iframe;
	};

	// main code
	let videoId = video.getAttribute("data-video");
	// let youtubeImgSrc = "https://i.ytimg.com/vi/" + videoId + "/sddefault.jpg";
	let youtubeImgSrc =
		"https://kartinkof.club/uploads/posts/2022-09/1662550944_36-kartinkof-club-p-novie-i-krasivie-kartinki-stroika-39.jpg";

	let img = video.querySelector("img");
	img.setAttribute("src", youtubeImgSrc);

	video.addEventListener("click", (e) => {
		e.preventDefault();
		let iframe = createIframe(videoId);
		video.querySelector("img").remove();
		video.appendChild(iframe);
		video.querySelector("button").remove();
	});
}

/*---------------------/video----------------------*/

/*--------------------subscribe--------------------*/
const buttonSubscribe = document.getElementById('btn-subscribe');

switchButtonSubscribe();
window.addEventListener("resize", switchButtonSubscribe);

function switchButtonSubscribe() {
	if(window.innerWidth < 1365 && buttonSubscribe.textContent === 'Подписаться') {
	buttonSubscribe.textContent = 'Go';
	buttonSubscribe.classList.add('footer-subscribe__btn--small');
	}
	if (window.innerWidth > 1364 && buttonSubscribe.textContent !== 'Подписаться') {
	buttonSubscribe.textContent = 'Подписаться'
	buttonSubscribe.classList.remove('footer-subscribe__btn--small');
	}

}

/*-------------------/subscribe--------------------*/


/*----------------------goTop----------------------*/
const gotopBtn = document.getElementById("gotop-btn");

gotopBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
/*---------------------/goTop----------------------*/

/*-------------------offer-details-----------------*/
const offerDetails = document.querySelectorAll('.offer__details');

if(offerDetails) {
	offerDetails.forEach(el => {
		el.addEventListener('click', toggleDetails);
	})
	
	function toggleDetails(e) {
		const elem = e.target;
		if(elem.nodeName === 'DETAILS') {		// клик по маркеру (тега datails)
			if(elem.hasAttribute('open')) {
				elem.removeAttribute('open')
				}else {
					elem.setAttribute('open', '');
				}
		}
	}
}
/*------------------/offer-details-----------------*/
