


let el = document.createElement("div")
// el.textContent="hello"
// document.querySelector(".content").append(el)
document.querySelector(".content").prepend(el)


// addEventListener version
window.addEventListener('online', (event) => {
    el.textContent="online"
    el.className="alert"
    el.classList.add("alert-success")
});

// addEventListener version
window.addEventListener('offline', (event) => {
    el.textContent="offline"
    el.className="alert"
    el.classList.add("alert-danger")
});