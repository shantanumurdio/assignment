const button =  document.getElementById("btn");
const input = document.getElementById("input");
const output = document.getElementById("outPut");
button.addEventListener("click" , ()=>{
    const content = input.value;

    if(content !== ""){
        const paragraph = document.createElement("p");
        paragraph.innerText = content;
        output.appendChild(paragraph);
        input.value = "";
    }
})