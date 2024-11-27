(()=>{
    document.querySelector('button').addEventListener('click',()=>{ // if button is pressed
        const n1 = document.querySelector(".n1").value; // we get the values of the numbers written in the text boxes, dont forget .value
        
        const n2 = document.querySelector(".n2").value;
        document.querySelector(".form p").textContent=parseFloat(n1)+parseFloat(n2); // in ".form p" we add the number sum, remember, the numbers we wrote are strings, thats why we use parseInt
        // "document.querySelector(".form p")" allows us to go into the p in our html code and use it in JS
    });



})();