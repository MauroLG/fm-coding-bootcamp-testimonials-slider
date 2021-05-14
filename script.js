const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const imageProfile = document.querySelector('.img-profile');
const reviewText = document.querySelector('.review__text');
const username = document.querySelector('.user__name');
const profile = document.querySelector('.user__profile');

// ARRAY WITH USER DATA AND REVIEWS AS OBJECTS
const arrReviews = [
  {
    userImage: 'images/image-tanya.jpg',
    userName: 'Tanya Sinclair',
    userProfile: 'UX Engineer',
    userReview:
      '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
  },
  {
    userImage: 'images/image-john.jpg',
    userName: 'John Tarkpor',
    userProfile: 'Junior Front-end Developer',
    userReview:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
  },
];

let i = 0;

// SHOW CONTENT REVIEW WHEN THE WINDOW IS LOADED AND WHEN IS CALLED BY BUTTON FUNCTIONS
const loaded = () => {
  imageProfile.setAttribute('src', arrReviews[i].userImage);
  reviewText.textContent = arrReviews[i].userReview;
  username.textContent = arrReviews[i].userName;
  profile.textContent = arrReviews[i].userProfile;
};

const prev = () => {
  if (i > 0) {
    i += -1;
  } else {
    i = arrReviews.length - 1;
  }
  loaded();
  //console.log(i);
};

const next = () => {
  if (i === arrReviews.length - 1) {
    i = 0;
  } else {
    i += 1;
  }
  loaded();
  //console.log(i);
};

window.onload = loaded();
prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prev();
  } else if (e.key === 'ArrowRight') {
    next();
  }
});
