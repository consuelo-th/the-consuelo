let mentalTipsCard = document.querySelectorAll(".tips-card");

for (let i = 0; i < mentalTipsCard.length; i++) {
  mentalTipsCard[i].addEventListener("click", function () {
    document.getElementById("main").innerHTML = `
        <section class="w-full max-w-md space-y-5 md:max-w-xl h-auto">
            <a class="pb-20 pr-10" href=""><i class="fa-solid fa-arrow-left"></i>Back</a>
            <h2 class="pb-6 pt-6">Self-care</h2> 
            <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus</p> 
            <h2 class="pb-6">Tips on Self-care</h2>
            <ul class="pb-6 list-disc leading-9">
                <li>Set and implement healthy boundaries. Don’t hold back from saying no when you need to.</li>
                <li>Take care of your physical health. Listen to your body signals. It really does have a lot to say if we take the time to listen.</li>
                <li>Don’t hinge your happiness on material things or people. Be in charge of your own happiness.</li>
                <li>Do something you enjoy every day. As little as watching a favorite TV show or listening to a favorite podcast.</li>
                <li>Practice self-compassion. Grant yourself enough grace and understand that nobody’s perfect.</li>
            </ul>
        </section>
        
        `;
  });
}
