let textarea=document.querySelector("#textarea");
        let btn=document.querySelector(".btn-1");
        let msg_container=document.querySelector(".message-container");
        btn.addEventListener("click",async()=>{
            let text_area = textarea.value; // Capture the current value of the textarea
            if (text_area.trim() !== "") { // Check if the text is not empty
                let msg = document.createElement("div");
                msg.classList.add("message", "user-message");
                msg.innerText = text_area;
                msg_container.appendChild(msg);
                textarea.value = ""; // Clear the textarea after appending the message
                msg_container.scrollTop = msg_container.scrollHeight; // Scroll to the bottom


                setTimeout(function(){
                    if(text_area){
                        let msg = document.createElement("div");
                        msg.classList.add("message", "bot-message");
                        msg.innerText=text_area;
                        msg.style.cssText="transition-duration: 5s;";
                        msg_container.appendChild(msg);
                    }
                },2000)
            }
            response();
        })