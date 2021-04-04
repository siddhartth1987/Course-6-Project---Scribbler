// Javascript code for creating a new post and listing all posts

const createPostModal = document.getElementById('modal-createpost');

function CreatePost() {
    modalContainer.style.display = 'block';
    createPostModal.style.display = 'block';
}

function CloseCreatePost() {
    modalContainer.style.display = 'none';
    createPostModal.style.display = 'none';
}
function getAllPosts() {
    window.location.href = './html/postslist.html';
}
