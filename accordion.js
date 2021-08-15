




let accordion = document.querySelector(".accordion")
// convsert htmlCollection to Array,weil cann t work mit forEach
Array.from(accordion.children).forEach(wrapper => {
    wrapper.querySelector("span").addEventListener("click", e => {
        // console.log(e.target)
        let span=e.target;
        let wrapper = span.parentElement
        wrapper.classList.toggle("show")
        Array.from(accordion.children).forEach(w => {
            if(w != wrapper){
                w.classList.remove("show")
            }
        })
    })
})




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