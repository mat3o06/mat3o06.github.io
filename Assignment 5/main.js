//Mateo Awon-Magliaro
// 2025-04-08
//Adding accessability to a webpage
// functionality for showing/hiding the comments section

// show/hide comments functionality
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// initialize as hidden
commentWrapper.hidden = true;
showHideBtn.setAttribute('aria-expanded', 'false');

showHideBtn.addEventListener('click', toggleComments);
showHideBtn.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleComments();
  }
});

function toggleComments() {
  const isHidden = commentWrapper.hidden;
  commentWrapper.hidden = !isHidden;
  showHideBtn.setAttribute('aria-expanded', String(!isHidden));
  showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  
  // focus on first interactive element when showing
  if (isHidden) {
    setTimeout(() => {
      const firstInput = commentWrapper.querySelector('input, textarea, button');
      if (firstInput) firstInput.focus();
    }, 100);
  }
}

// comment form submission
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#comment-name');
const commentField = document.querySelector('#comment-text');
const commentList = document.querySelector('.comment-container');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const name = nameField.value.trim();
  const comment = commentField.value.trim();
  
  if (name && comment) {
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    
    namePara.innerHTML = `<strong>${name}</strong>`;
    commentPara.textContent = comment;
    
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);
    commentList.appendChild(listItem);
    
    // clear form
    nameField.value = '';
    commentField.value = '';
    
    // focus back on name field
    nameField.focus();
    
    // announce to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = 'Comment added successfully';
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  } else {
    alert('Please fill in both fields');
  }
}
