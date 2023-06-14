// 게시글 데이터
let posts = [];

// 게시글 추가
function addPost(author, title, content) {
  const post = {
    author: author,
    title: title,
    content: content
  };
  posts.push(post);
  savePosts();
  renderPosts();
}

// 게시글 저장
function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// 게시글 로드
function loadPosts() {
  const savedPosts = localStorage.getItem('posts');
  if (savedPosts) {
    posts = JSON.parse(savedPosts);
    renderPosts();
  }
}

// 게시글 렌더링
function renderPosts() {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const li = document.createElement('li');
    const author = document.createElement('p');
    const title = document.createElement('h3');
    const content = document.createElement('p');

    author.textContent = '작성자: ' + post.author;
    title.textContent = post.title;
    content.textContent = post.content;

    li.appendChild(author);
    li.appendChild(title);
    li.appendChild(content);

    postList.appendChild(li);
  }
}

// 폼 제출 핸들러
function handleSubmit(event) {
  event.preventDefault();

  const authorInput = document.getElementById('author');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');

  const author = authorInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  if (author && title && content) {
    addPost(author, title, content);
    authorInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
  }
}

// 폼 제출 이벤트 리스너
const postForm = document.getElementById('post-form');
postForm.addEventListener('submit', handleSubmit);

// 초기화
loadPosts();