    // JavaScript to handle the pop-up modal for the subscription form
    document.addEventListener("DOMContentLoaded", function() {
        const subscribeButton = document.querySelector('.subscription button');
        const modal = document.createElement('div');
        const modalContent = document.createElement('div');
        
        // Create the modal elements
        modal.className = 'modal';
        modalContent.className = 'modal-content';
        modalContent.innerHTML = `
            <h2>Subscription Successful!</h2>
            <p>Thank you for subscribing. You'll now receive updates.</p>
            <button class="close-modal">Close</button>
        `;
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Style the modal (can be added in your CSS)
        const modalStyle = document.createElement('style');
        modalStyle.innerHTML = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: none;
                justify-content: center;
                align-items: center;
            }

            .modal-content {
                background-color: #f5f5f5;
                padding: 20px;
                text-align: center;
                border-radius: 10px;
                color: #222;
            }

            .close-modal {
                background-color: #ffdd57;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
            }

            .close-modal:hover {
                background-color: #ffcc00;
            }
        `;
        document.head.appendChild(modalStyle);

        // Open modal when the "Subscribe" button is clicked
        subscribeButton.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
        });

        // Close modal when "Close" button is clicked
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });

