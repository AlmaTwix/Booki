const feed = document.querySelector('.instagram-feed');
        const loadMoreButton = document.getElementById('load-more-button');
        const initialPostCount = 3;
        let postCount = initialPostCount;

        loadMoreButton.addEventListener('click', () => {
            // Simulate loading new posts (you should replace this with actual data retrieval)
            for (let i = postCount + 1; i <= postCount + initialPostCount; i++) {
                const newPost = document.createElement('div');
                newPost.className = 'instagram-post';
                newPost.innerHTML = `
                    <img src="image${i}.jpg" alt="Instagram Post ${i}">
                    <p>Caption ${i}</p>
                `;
                feed.appendChild(newPost);
            }
            postCount += initialPostCount;
        });