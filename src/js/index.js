/*----------------------video----------------------*/
const video = document.querySelector(".video");

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
