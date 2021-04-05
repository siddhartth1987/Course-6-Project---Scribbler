const postTitleElem = document.getElementById('post-title');
const postTextElem = document.getElementById('post-text');
const editPostElem = document.getElementById('post-edit');
const savePostElem = document.getElementById('post-save');
const likeElem = document.getElementById('post-like');
const likeCountElem = document.getElementById('post-like-count');
const commentInputElem = document.getElementById('comment-input');
const commentsContainerElem = document.getElementById('comments-container');

let likeCount = 0;
let commentList = [];

function editPost() {
    editPostElem.style.display = 'none';
    savePostElem.style.display = 'inline';
    postTitleElem.contentEditable = true;
    postTextElem.contentEditable = true;

    postTitleElem.style.border = '2px';
    postTitleElem.style.borderStyle = 'solid'
    postTitleElem.style.borderColor = 'pink';

    postTextElem.style.border = '2px';
    postTextElem.style.borderStyle = 'solid'
    postTextElem.style.borderColor = 'pink';
}

function savePost() {
    savePostElem.style.display = 'none';
    editPostElem.style.display = 'inline';
    postTitleElem.contentEditable = false;
    postTextElem.contentEditable = false;

    postTitleElem.style.border = '0px';
    postTitleElem.style.borderStyle = 'none'
    postTitleElem.style.borderColor = 'none';

    postTextElem.style.border = '0px';
    postTextElem.style.borderStyle = 'none'
    postTextElem.style.borderColor = 'none';
}

function likePost() {
    likeCount++;
    likeElem.innerText = 'Liked';
    likeCountElem.innerText = likeCount === 1 ? '1 person likes this!' : `${likeCount} people like this!`;
}

function addComment() {
    const commentText = commentInputElem.value;
    if (!commentText) return;
    commentList.push(commentText);
    commentInputElem.value = '';
    renderComments();
}

function renderComments() {
    if (commentList.length === 0) {
        commentsContainerElem.style.display = 'none';
        return;
    }
    commentsContainerElem.style.display = 'block';
    commentsContainerElem.innerText = '';

    let i = commentList.length - 1;
    while (i >= 0) {
        const element = document.createElement('p');
        element.className = 'comment';
        element.innerText = commentList[i];
        commentsContainerElem.appendChild(element);
        i--;
    }
}

renderComments();