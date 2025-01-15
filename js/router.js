
const pageTitle = "nama-website";

const route = (event) => {
	event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handleLocation();
};

const routes = {
    // 404: "/pages/404.html",
    // "/": "/pages/index.html",
    // "/about": "/pages/about.html",
    // "/lorem": "/pages/lorem.html",
	404: {
		template: "/templates/404.html",
		title: pageTitle + " | 404",
		description: "Page not found",
	},
	"/": {
		template: "/templates/index.html",
		title: pageTitle + " | Home",
		description: "This is the Home page",
	},
	"/simple-games": {
		template: "/templates/simple-games.html",
		title: pageTitle + " | Simple Games",
		description: "This is the Simple Games page",
	},
	"/edu-games": {
		template: "/templates/edu-games.html",
		title: pageTitle + " | Educational Games",
		description: "This is the Educational Games page",
	},
	"/tools": {
		template: "/templates/tools.html",
		title: pageTitle + " | Tools",
		description: "This is the Tools page",
	},
	"/blog": {
		template: "/templates/blog.html",
		title: pageTitle + " | Blog",
		description: "This is the Blog page",
	},
	"/contact": {
		template: "/templates/contact.html",
		title: pageTitle + " | Contact",
		description: "This is the Contact page",
	},
};

const handleLocation = async () => {
    // const path = window.location.pathname;
    // const route = routes[path] || routes[404];
    // const html = await fetch(route).then((data) => data.text());
    // document.getElementById("main-page").innerHTML = html;

    
	const location = window.location.pathname; // get the url path
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = "/";
	}
	// get the route object from the urlRoutes object
	const route = routes[location] || routes[404];
	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());
	// set the content of the content div to the html
	document.getElementById("content").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document.querySelector('meta[name="description"]').setAttribute("content", route.description);
};

// add an event listener to the window that watches for url changes
window.onpopstate = handleLocation;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
handleLocation();

