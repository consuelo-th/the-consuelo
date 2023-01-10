// let newTopicButton = document.getElementById("new_topic");
// newTopicButton.addEventListener("click", )


let commentsButton = document.querySelectorAll(".comments_btn");



for (let i = 0; i < commentsButton.length; i++) {
    commentsButton[i].addEventListener("click", function () {
        document.getElementById("main").innerHTML = `
        <section class="w-full max-w-md space-y-5 md:max-w-xl h-auto">
            <a class="pb-20 pr-10" href=""><i class="fa-solid fa-arrow-left"></i>Back</a>
            <div class="bg-white rounded-3xl py-5 px-6 max-w-3xl mb-6">
            <button class="float-right text-4xl delete_btn">...</button>
            <div class="flex pb-4">
              <img class="mr-3" src="/images/profile_picture.svg" alt="">
              <div>
                <h5>Hassy123</h5>
                <p>Posted on Sep, 22, 2022</p>
              </div>
            </div>  
            <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas blandit facilisi dolor velit orci ac lorem. Ultrices netus convallis scelerisque nam. Ipsum nam vel viverra lectus mattis in. Curabitur netus duis ipsum at in. Cras gravida velit sagittis, felis et aliquam dis. Et lorem interdum sodales velit adipiscing in. Sed vulputate ipsum mi at rhoncus. Et arcu at sed consectetur fermentum venenatis, mauris. Ultricies sed ultrices luctus nulla justo</p>
            <button><img class="inline-block" src="/images/like.svg" alt=""> 10 Likes</button>
            <button class="underline pl-2 comments_btn">10 Comments</button>
          </div>
          <div class="bg-white rounded-3xl py-5 px-6 max-w-3xl mb-6">
          <h1 class="pb-4 font-medium text-xl text-text-title">Join this conversation</h1>
          <hr class="pb-6" >
          <form action="">
            <input class="border py-4 pl-4 w-full rounded-md border-gray-40" type="text" name="" id="" placeholder="Reply to this topic">
          </form>
         
          

        </div>
            
        </section>
        
        `;
    });
};



let ellipsis = document.querySelectorAll(".delete_btn")
for (let i = 0; i< ellipsis.length; i++) {
    ellipsis[i].addEventListener("click", function() {
        ellipsis[i].innerHTML = `<button class="w-24 bg-white rounded border py-2 px-8 h-8 ml-2 text-sm "> Delete </button>`;

        ellipsis[i].addEventListener("click", () => {
            let deleteModal = document.getElementById("deleteModal");
            let confirmDeleteModal = document.getElementById("confirmDeleteModal");
            let cancelDelete = document.getElementsByClassName("cancel")[0];
            let confirmDelete = document.getElementsByClassName("confirm")[0];

            deleteModal.style.display = "block";
            cancelDelete.onclick = function() {
                deleteModal.style.display = "none";
                ellipsis[i].innerHTML = `...`;
                
            }
            confirmDelete.onclick = function() {
                deleteModal.style.display = "none";
                confirmDeleteModal.style.display ="block";
            }


            window.onclick = function(event) {
                if (event.target == confirmDeleteModal) {
                  confirmDeleteModal.style.display = "none";
                  ellipsis[i].innerHTML = `...`;
                }
            }


        } )
    } )
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("newtopic_btn");

var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}