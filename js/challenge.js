document.addEventListener('DOMContentLoaded',()=>{
    const counterElement = document.getElementById("counter")
    const minusButton = document.getElementById("minus")
    const plusButton = document.getElementById("plus")
    const heartButton = document.getElementById("heart")
    const pauseButton = document.getElementById("pause")
    const commentForm = document.getElementById("comment-form")
    const commentInput = document.getElementById("comment-input")
    const likesList = document.querySelector(".list")
    const commentList = document.getElementById("list")

    let counter = 0;
    let ispaused = false;
    let interValid;

    function timerCounter(){
        if(!ispaused){
            counter++;
            counterElement.textContent= counter;
        }
    }
    interValid = setInterval(timerCounter, 10000);


    minusButton.addEventListener("click", ()=>{
        if(!ispaused){
            counter--;
            minusButton.textContent = counter;
        }
    })

    plusButton.addEventListener("click", ()=>{
        if(!ispaused){
            counter++;
            plusButton.textContent= counter;
        }
    })

    heartButton.addEventListener("click", ()=>{
        if(!ispaused){
            const likeItem = document.createElement('li')
            likeItem.textContent = `Number ${counter} has been liked`
            likesList.appendChild(likeItem)
        }
    })

    pauseButton.addEventListener("click", ()=>{
        ispaused = !ispaused
        if(ispaused){
            clearInterval(interValid);
            pauseButton.textContent = 'resume'
            minusButton.disabled = true;
            plusButton.disabled = true;
            heartButton.disabled = true;
        
        } else{
            interValid = setInterval(timerCounter, 10000)
            pauseButton.textContent = 'pause'
            minusButton.disabled = false;
            plusButton.disabled = false;
            heartButton.disabled = false;
        
        }
    })

    commentForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const commentText = commentInput.value. trim()
        if (commentText){
            const commentItem = document.createElement('p')
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem)
            commentInput.value = ' ';
        }
    })
    
})