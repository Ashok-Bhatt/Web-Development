
let review_no = 0;

let review_list = [{name:"Logan Paul", occupation: "YouTuber, Wrestler, Boxer", image:"images/loganPaul.jpg", review: "Ashok is such a great personality. I wish I could donate my all 30+ million subscribers to him. He really deserves to work in faang companies."},
                    {name:"Brock Lesnar", occupation: "Wrestler, MMA Fighter, Farmer", image:"images/brockLesnar.jpg", review: "I hasn't seen a person like Ashok in my entire professional life. He could have been the first man to beat me for UFC Championship. He was so close. Even after losing he showed a true sportsman spirit and invited me for the dinner the same night he lossed. Truly a gentleman persona"},
                    {name:"Roman Reigns", occupation: "Wrestler, Formar Footballer", image:"images/romanReigns.jpg", review: "He's one of the greatest person that I ever met. Apart form being such a great person, he has achieved so much in his life at this small age that anyone could only dreamt. I won't even mind if he's the one to dethrone me for the undisputed universal championship. After all, he acknowledeged me."},
                    {name:"Triple H", occupation: "Wrestler, CAO of WWE", image:"images/tripleH.jpg", review: "He is not only my employee. He's a family. He always performed for our comapany whether he was sick, injured or depressed. He always gave his 100%. A very very happy birthday Ashok"}];

const profile_name = document.querySelector(".profile-name");
const profile_image = document.querySelector(".profile-photo");
const profile_occupation = document.querySelector(".profile-occupation");
const profile_review = document.getElementById("review");

function next_review(){
    if (review_no < review_list.length-1){
        review_no++;
    }
}

function previous_review(){
    if (review_no > 0){
        review_no--;
    }
}

function random_review(){
    review_no = Math.floor(Math.random()*review_list.length);
}

function show_review(func){
    func();
    const item = review_list[review_no];
    profile_name.innerText = item.name;
    profile_image.src = item.image;
    profile_occupation.innerText = item.occupation;
    profile_review.innerText = item.review;
}

window.addEventListener('DOMContentLoaded', show_review(random_review));