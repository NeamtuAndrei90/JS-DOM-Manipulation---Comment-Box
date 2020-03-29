(function(){

const commentBox = document.querySelector('.commentBox');
const commentInput = document.querySelector('#commentInput');
const btn = document.querySelector('#commentBtn');
const email = "email1@gmail.com";
btn.addEventListener('click', function(event){
    event.preventDefault();
    if(commentInput.value !== ""){
        commentBox.innerHTML += '<div class="commentArea">' +
                                "<img class='altImage' src='user.png' />" +
                                "<h2>"+ email +"</h2>" + 
                                "<p>" + commentInput.value + "</p>" +
                                '<button class="deleteBtn" onclick="Delete(this);">Delete</button> </div>';   
    };
    document.getElementById('commentInput').value = "";    
});

})();

function Delete(currentComment){
    currentComment.parentNode.parentNode.removeChild(currentComment.parentNode);
};