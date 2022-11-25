import { onMounted } from 'vue';
<template>
    <h3>Total reviews <span>{{ totalReviews }}</span></h3>
    <button @click="toggleViewReview">View Reviews</button>
    <div>
        <div v-if="showReviews" id="comments-container">
            <h3>Enter a new review</h3>

        </div>
    </div>
</template>

<script >

import { ref } from 'vue';
export default {
    name: "ItemCard",
    props: ["item"],
    data() {

        const showReviews = ref(false);
        const totalReviews = ref(0);
        const functionGetTotalReviews = ref(null)

        return {
            title: "Card Title",
            totalReviews,
            showReviews,
            functionGetTotalReviews,
        }
    },
    methods: {
        toggleViewReview() {
            this.showReviews = !this.showReviews
            if (this.showReviews) {
                const comments = this.validateStorage(this.item.id)
                setTimeout(() => {
                    this.renderReviews(comments, this.item.id, this.functionGetTotalReviews);

                }, 100)
            }
        },
        validateStorage(key) {

            if (localStorage.getItem(key) !== null) {
                const otherComments = JSON.parse(localStorage.getItem(key));
                return otherComments;

            }

        },
        getTotalReviews(key) {
            if (this.validateStorage(key)) {

                this.totalReviews = this.validateStorage(key).length;
            }
            else {
                this.totalReviews = 0;
            }
            return this.totalReviews;
        },
        renderReviews(comments = [], key, fn) {



            const commentsContainer = document.getElementById('comments-container');

            const inputContainer = document.createElement('div');
            const input = document.createElement('input');

            input.classList.add('input');

            input.addEventListener('keydown', e => {

                handleEnter(e, null);

            })
            commentsContainer.appendChild(inputContainer);
            inputContainer.appendChild(input);



            function saveToStorage(id = 'idvue', comments) {
                localStorage.setItem(id, JSON.stringify(comments));
            }

            function handleEnter(e, current) {

                if (e.key == 'Enter' && e.target.value !== '') {
                    const newComment = {
                        text: e.target.value,
                        likes: 0,
                        responses: [],
                    }

                    if (current == null) {
                        comments.unshift(newComment);
                    }
                    else {
                        current.responses.unshift(newComment);

                    }


                    e.target.value = '';
                    commentsContainer.innerHTML = '';
                    commentsContainer.appendChild(inputContainer);
                    renderComments(comments, commentsContainer);
                    saveToStorage(key, comments)
                    fn(key);
                }
            }

            if (comments.length != 0) {
                renderComments(comments, commentsContainer)
            }


            function renderComments(arr, parent) {
                arr.forEach(element => {

                    const commentContainer = document.createElement('div');
                    commentContainer.classList.add('comment-container');
                    const responsesContainer = document.createElement('div');
                    responsesContainer.classList.add('responses-container');

                    const textContainer = document.createElement('div');
                    textContainer.textContent = element.text;

                    const actionsContainer = document.createElement('div');

                    const replyButton = document.createElement('button');
                    const likeButton = document.createElement('button');

                    replyButton.textContent = 'reply';
                    likeButton.textContent = `${element.likes > 0 ? `${element.likes} likes` : 'like'}`;

                    replyButton.addEventListener('click', e => {

                        const newInput = inputContainer.cloneNode(true);
                        newInput.value = '';
                        newInput.focus();
                        newInput.addEventListener('keydown', e => {
                            handleEnter(e, element);
                        });

                        commentContainer.insertBefore(newInput, responsesContainer);

                    })
                    likeButton.addEventListener('click', e => {
                        element.likes++;
                        likeButton.textContent = `${element.likes > 0 ? `${element.likes} likes` : 'like'}`;
                        saveToStorage(key, comments);
                    })

                    // appending elements

                    commentContainer.appendChild(textContainer);
                    commentContainer.appendChild(actionsContainer);
                    actionsContainer.appendChild(replyButton);
                    actionsContainer.appendChild(likeButton);
                    commentContainer.appendChild(responsesContainer);

                    if (element.responses.length > 0) {

                        renderComments(element.responses, responsesContainer);
                    }

                    parent.appendChild(commentContainer);



                });

            }



        }
    },
    mounted() {
        this.getTotalReviews(this.item.id);
        this.functionGetTotalReviews = this.getTotalReviews;


    }

}



</script>

<style >
#comments-container {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5px;

}

.comment-container {
    border: solid 1px #91a8c2;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: #1e2f41;
}

.responses-container {
    margin-top: 10px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;



}

.responses-container .comment-container {
    background-color: #4e5a66;
    color: white;
}

.input {
    padding: 5px 15px;
    border: solid 1px #cccc;
    border-radius: 15px;
    margin: 5px 0;
}

.button {
    border-radius: 5px;
    border: none;
    background-color: #eee;
    padding: 5px 15px;
    cursor: pointer;
    margin-right: 5px;

}

button:hover {
    background-color: #1c6fc2;
    color: white;
}
</style>