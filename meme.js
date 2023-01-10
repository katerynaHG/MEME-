document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector("form");
    let img = document.getElementById("imgurl");
    const btn = document.querySelector("button");
    
    const memePlacement = document.getElementById("location");
   form.addEventListener("submit", (e)=>{e.preventDefault();
    
        // create div with meme img and text
        const newImg = document.createElement("img");
        const meme = document.createElement("div");
        const textTop = document.createElement("div");
        const btmText = document.createElement("div");
        const btnRemove = document.createElement("div");
        
        newImg.src = img.value;
     
        textTop.classList.add('texttop');
        textTop.innerHTML = document.getElementById('toptext').value;
    
        btmText.classList.add('btmText');
        btmText.textContent = document.getElementById('bottomtext').value;
    
        btnRemove.classList.add('btn-delete');
        btnRemove.textContent = "X";
        
        // create meme
        meme.classList.add("meme");
        meme.appendChild(textTop);
        meme.appendChild(btmText);
        meme.appendChild(newImg);
        meme.appendChild(btnRemove);
        
    
        memePlacement.append(meme);
    form.reset();
    
    // deleting each meme by clicking on X button on each meme
    
    btnRemove.addEventListener("click", (e)=>e.target.parentNode.remove());
        });
    });
