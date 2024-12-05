let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

// Render reviews
function renderReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = ''; // Clear existing reviews

    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p class="text-center">No reviews yet. Be the first to leave a review!</p>';
        return;
    }

    // Render each review dynamically
    reviews.forEach(review => {
        const reviewHTML = `
            <div class="review-item">
			
                <h5>${review.name}</h5>
                <p>${review.message}</p>
                ${review.image ? `<img src="${review.image}" alt="Review Image">` : ''}
            </div>
        `;
        reviewsContainer.innerHTML += reviewHTML;
    });
}

// Handle review submission
function handleReviewSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('reviewerName').value;
    const message = document.getElementById('reviewText').value;
    const imageFile = document.getElementById('reviewImage').files[0];

    if (!name || !message) {
        alert('Please complete all fields.');
        return;
    }

    // Handle image upload
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageBase64 = e.target.result;
            saveReview(name, message, imageBase64);
        };
        reader.readAsDataURL(imageFile);
    } else {
        saveReview(name, message, ''); // No image
    }
}

// Save review and update UI
function saveReview(name, message, imageBase64) {
    const review = { name, message, image: imageBase64 };
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    renderReviews();
    document.getElementById('reviewForm').reset();
}

// Initialize
document.getElementById('reviewForm').addEventListener('submit', handleReviewSubmit);
renderReviews();
