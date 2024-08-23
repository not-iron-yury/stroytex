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

/*------------------projects-work------------------*/
const tabsButtons = document.querySelectorAll('.project-tabs__btn');
const projectCardsAll = document.querySelectorAll(".project-grid__item");
if (tabsButtons) {
	// кнопка подгрузки карточек проектов
	const moreButton = document.getElementById('project-grid__more-btn');
	
	// стартовое значение видимых карточек
	const prevCountCards = 3;
	
	// количество видимых карточек
	const countCards = {
		_count: prevCountCards,
		set(value){
			this._count = value;
		},
		increment(value) {
			this._count += value;
			filteredListProjects(filterType.get(), this._count); 
		},
		get() {
			return this._count;
		},
	};
	Object.preventExtensions(countCards);
	
	// тип фильтрации карточек
	const filterType = {
		_value: 'all',
		set(value) {
			this._value = value;
			countCards.set(prevCountCards);
			filteredListProjects(this._value, countCards.get());
		},
		get() {
			return this._value;
		},
	};
	Object.preventExtensions(filterType);


	// отображение списка проектов при первой загрузке страницы
	filteredListProjects('all', 3);

	//-------------------------------------------------------//
	// активный таб (active class и изменение filterType)
	tabsButtons.forEach(btn =>
		btn.addEventListener('click', switchingTabs)
	)

	function switchingTabs(e) {
		tabsButtons.forEach(btn => btn.classList.remove("active")); 	// отключение active class для всех
		e.target.classList.add("active");															// active class для активного таба
		filterType.set(e.target.dataset.filter);											// новое значение фильтра карточек
	}

	//-------------------------------------------------------//
	// кнопка moreButton (анимация и изменение countCrads)
	moreButton.addEventListener('click', loadMoreProject);
	function loadMoreProject() {
		moreButton.firstElementChild.classList.add('active');					// включение анимации
		countCards.increment(3);																			// увеличение countCrads
		setTimeout(()=> {
			moreButton.firstElementChild.classList.remove('active')
		}, 1000);																											// удаление класса запускающего анимацию
	}

	//-------------------------------------------------------//
	// фильтр списка проектов
	function filteredListProjects(type, count){
		projectCardsAll.forEach(card => card.classList.add("hidden"));	

		const projectList = (type === 'all') 
			? projectCardsAll 
			: document.querySelectorAll(`.project-grid__item[data-filter="${type}"]`);
		
		for (const card of projectList) {
			if (count !== 0) {
				card.classList.remove("hidden");
				count--;
			} else break;
		}

		visibilityMoreButton(projectList.length);
	}

	//-------------------------------------------------------//
	// скрытие/отображение кнопки "Показать ещё"
	function visibilityMoreButton(listLength) {
		if (countCards.get() >= listLength) {
			moreButton.classList.add('hidden');
		} else {
			moreButton.classList.remove('hidden');
		}	
	}
}
/*-----------------/projects-work------------------*/
