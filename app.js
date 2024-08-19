document.addEventListener('DOMContentLoaded', function() {
   
    const imageInput        = document.querySelector("#image-input");
    const topTextInput      = document.querySelector("#top-text-input");
    const bottomTextInput   = document.querySelector("#bottom-text-input");
    const submitBtn         = document.querySelector("#submit-btn")
    const mainContainer     = document.querySelector(".main-container"); // get reference of main-container

    // generate random number
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // generate random color
    function randColor() {

        let r = getRandomInt(256);
        let g = getRandomInt(256);
        let b = getRandomInt(256);

        return `rgb(${r}, ${g}, ${b})`;
    }

    // Add new meme
    function appendNewMeme(e)
    {
        // Prevent button from refreshing
        e.preventDefault();

        /////////////////////////////////////////////
        /////////////////////////////////////////////
        //--------------- create div --------------//

        // create new div that will hold our img and top and bottom text
        const div = document.createElement("div");

        div.width = 512;

        // set new div class name
        div.classList.add("meme");

        //--------------- create div --------------//
        /////////////////////////////////////////////
        /////////////////////////////////////////////

        /////////////////////////////////////////////
        /////////////////////////////////////////////
        //--------------- create img --------------//

        // create new img
        const img = document.createElement("img")

        // set img src from input
        img.src = "" + imageInput.value;  
       
        // set height of img
        img.width = "512";

        // add random border to img
        img.style.border = "5px solid " + randColor();

        // add img new div
        div.append(img);

        //--------------- create img --------------//
        /////////////////////////////////////////////
        /////////////////////////////////////////////

        /////////////////////////////////////////////
        /////////////////////////////////////////////
        //------------ create top-text ------------//

        // create top-text div
        const divTopText = document.createElement("div")

        // set div value
        divTopText.innerText = "" + topTextInput.value;

        // add div class
        divTopText.classList.add("top-text");

        // append top-text div to div
        div.append(divTopText);

        //------------ create top-text ------------//
        /////////////////////////////////////////////
        /////////////////////////////////////////////

        // create bottom-text div
        const divBottomText = document.createElement("div");

        // add div value
        divBottomText.innerText = bottomTextInput.value;

        // add div class
        divBottomText.classList.add("bottom-text");

        // append bottom-text to div
        div.append(divBottomText);

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        //-------------------------- append div to main div --------------------------//

        // append div to main container
        mainContainer.append(div);

        // get last child of main-container
        const lastChild = mainContainer.lastChild;
        //-------------------------- append div to main div --------------------------//
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
    }

    // When clicking submit button, add new div to main container that holds all other divs
    submitBtn.addEventListener("click", function(e)
    {
        // add new meme with img and text
        appendNewMeme(e);        

        // scroll to last child of main-container
        mainContainer.lastChild.scrollIntoView({ behavior: "smooth", block: "start" });

        // check height of main container, change footer behavior if height greater than 16px

    });

    // Remove image on click
    mainContainer.addEventListener("click", function()
    {
        // get reference to ALL meme divs
        const memes = document.querySelectorAll(".meme");

        // get reference to EACH
        for (let meme of memes)
        {
            // add "onclick" event for EACH meme
            meme.addEventListener("click", function()
            {
                // remove meme
                meme.remove();
            });
        }

    });
      
});