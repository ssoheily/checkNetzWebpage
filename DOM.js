// let peopel= [
// 	{name:"sam",new :true},
// 	{name:"ali",new :false},
// 	{name:"reza",new :false},
// 	{name:"haswn",new :true},
// ]

// // create list heer

// function create_navbar(peopel){
// 	let ul = document.querySelector("ul")
// 	ul.innerHTML =""
// 	peopel.forEach( p =>  {
// 	if(p.new){
//      ul.innerHTML += `<li>${p.name} <span class= "badge badge-danger"> new </span></li>`
// 	}
// 	else{
// 	  ul.innerHTML += `<li>${p.name} </li>`

// 	}
// })

// }
// create_navbar(peopel)



// get and set attribute

// let header = document.querySelector("#header")



// // console.log(header.getAttribute("id "))

// header.setAttribute("title","my header title" )
	// let links=document.querySelectorAll("a")

	// links.forEach(link => {
	// 	href= link.getAttribute("href")
	// 	// console.log(href)
	// 	link.setAttribute("href", href.replace("http://","https://"))
	// 	link.setAttribute("data-protocol","SSL")
	// })

// let links=document.querySelectorAll("a")

// 	links.forEach(link => {
// 		link.setAttribute("data-protocol","SSL")
// 		let href=link.href
// 		link.href=href.replace("http://","https://")
// 		console.log(link.dataset.protocol)
// 		link.dataset.protocol2="SSL"
// 	})

// let links=document.querySelectorAll("a")

// 	links.forEach(link => {
// 		// deffirent 1.setAttribute and 2.dataset
// 		// dataset is better weil work style heer and in html together

// 		// 1.
// 		// link.setAttribute("style", "color:red; font-size:20px")

// 		// 2.
// 		link.style.color = 'red'
// 		link.style.fontSize = '15px'
// 	})


// work mit class 
// let header = document.querySelector("#header")
// console.log(header.classList)

// add class 
// header.classList.add("mb-5")

// remove class
// header.classList.remove("btn-success")

// header.classList.add("btn-danger")

// I don t know , have a class or have not. check and denn use
// header.classList.toggle("btn-danger")

// let ul = document.querySelector("ul")

// console.log(ul.children);
// Array.from(ul.children).forEach( (li , index) => {
// 	if(index % 2  == 0){
// 	li.style.color="red";		
// 	}
// 	else{
// 		li.style.color="green"
// 	}
// })

// ul.parentElement.style.fontSize = '20px'
// ul.previousElementSibling.style.color="silver"
// ul.nextElementSibling.style.color = 'blue'


let btn=document.querySelector("button")

btn.addEventListener("click", e => {
	e.target.textContent="clicked!"
	e.target.classList.add("btn-danger")
	alert("you click")

})




