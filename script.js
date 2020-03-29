(function(){

const commentBox = document.getElementById('commentBox');
const commentInput = document.getElementById('commentInput').value;
const btn = document.getElementById('commentBtn');
const email = "email1@gmail.com";
btn.addEventListener('click', function(event){
    event.preventDefault();
    if(commentInput.value !== ""){
        commentBox.innerHTML += '<div class="commentArea">' +
                                "<img class='altImage' src='user.png' />" +
                                "<h2>"+ email +"</h2>" + 
                                "<p>" + commentInput + "</p>" +
                                '<button class="deleteBtn" onclick="Delete(this);">Delete</button> </div>';   
    };
    document.getElementById('commentInput').value = "";    
});

})();

function Delete(currentComment){
    currentComment.parentNode.parentNode.removeChild(currentComment.parentNode);
};