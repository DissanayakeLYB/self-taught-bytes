// Add event listener to the comment form
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    if (commentForm) {
        commentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const commentInput = document.getElementById('comment');
            const commentText = commentInput.value.trim();

            if (commentText) {
                const commentElement = document.createElement('p');
                commentElement.classList.add('border-bottom', 'pb-2', 'mb-3');
                commentElement.textContent = commentText;
                commentsList.appendChild(commentElement);
                commentInput.value = '';
            }
        });
    }
});
