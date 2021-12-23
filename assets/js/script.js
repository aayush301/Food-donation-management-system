const path = window.location.pathname;
const items = document.querySelectorAll("#sidebar-nav a");
const activeItem = [].slice.call(items).find(item => item.getAttribute("href") == path);
if(activeItem) {
	activeItem.classList.add("active");
}


if(path.startsWith("/donor") || path.startsWith("/admin") || path.startsWith("/agent"))
{
	document.querySelector(".nav-link[href='/auth/login']").style.display = "none";
	document.querySelector(".nav-link[href='/auth/signup']").style.display = "none";
}


window.setTimeout(() => {
	let alertsWrapper = document.querySelector(".alerts-wrapper");
	if(alertsWrapper) {
		alertsWrapper.style.display = "none";
	}
}, 5000);


let btn = document.querySelector("#sidebar-toggler-btn");
if(btn) {
	btn.addEventListener("click", () => {
		document.querySelector("#sidebar").classList.toggle("sidebar-hide");
	});
}
