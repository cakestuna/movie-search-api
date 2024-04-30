let url = " http://www.omdbapi.com/?i=tt3896198&apikey=fcb9e974"

let button = document.getElementById("button")

button.addEventListener("click", function(){
    data()
    
})

async function data(){

    try{

        let input = document.getElementById("input").value
        let data1 = await fetch(`${url}&s=${input}`)
        let data2 = await data1.json()
        console.log(data2.Search)
        display(data2.Search)
        
    }
    catch(error){
        console.log(error)
    }
}

let con = document.getElementById("container")

function display(arr){
    con.innerHTML= ""
    
    arr.forEach(function(ele){
        
        let box = document.createElement("div")
        let image = document.createElement("img")
        image.src = ele.Poster
        let ptag = document.createElement("p")
        ptag.textContent = ele.Year
        let h1 = document.createElement("h1")
        h1.textContent = ele.Title

        box.append(image, h1, ptag)
        con.append(box)


        
        
    })

}