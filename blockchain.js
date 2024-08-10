document.addEventListener('DOMContentLoaded', (event) => {
    const loginLink = document.getElementById('loginLink');
    const loginDialog = document.getElementById('loginDialog');
    const closeBtn = document.querySelector('.closeBtn');

    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginDialog.style.display = 'grid';
    });

    closeBtn.addEventListener('click', () => {
        loginDialog.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginDialog) {
            loginDialog.style.display = 'none';
        }
    });

    const loginOptions = document.querySelectorAll('.login-option');
    loginOptions.forEach(option => {
        option.addEventListener('click', () => {
            loginOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
});

        // JavaScript code to handle role selection and redirection
        document.addEventListener('DOMContentLoaded', () => {
            let selectedRole = '';

            document.getElementById('insurance-partner').addEventListener('click', () => {
                selectedRole = 'insurance-partner';
            });

            document.getElementById('patient').addEventListener('click', () => {
                selectedRole = 'patient';
            });

            document.getElementById('hospital').addEventListener('click', () => {
                selectedRole = 'hospital';
            });

            document.getElementById('loginForm').addEventListener('submit', (event) => {
                event.preventDefault();
                const form = event.target;
                const username = form.username.value;
                const password = form.password.value;

                if (username && password && selectedRole) {
                    // You can add your form submission logic here, for example using AJAX
                    // Redirect based on selected role
                    if (selectedRole === 'insurance-partner') {
                        window.location.href = "insurancecompany.html";
                    } else if (selectedRole === 'patient') {
                        window.location.href = 'patientdashboard.html';
                    } else if (selectedRole === 'hospital') {
                        window.location.href = 'hospitaladminform.html';
                    }
                } else {
                    alert('Please fill in all fields and select a role.');
                }
            });
        });

        // Get the modal
        const modal = document.getElementById('loginDialog');

        // Get the button that opens the modal
        const btn = document.getElementById('loginGet');

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName('closeBtn')[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = 'block';
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = 'none';
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';document.addEventListener("DOMContentLoaded", function () {
                    const chatbotButton = document.getElementById("sheru-chatbot-button");
                    const chatWindow = document.getElementById("sheru-chat-window");
                    const closeChatButton = document.getElementById("sheru-close-chat");
                    const sendButton = document.getElementById("sheru-send-button");
                    const userInput = document.getElementById("sheru-user-input");
                    const chatBody = document.getElementById("sheru-chat-body");
                
                    // Open chatbot window
                    chatbotButton.addEventListener("click", function () {
                        chatWindow.classList.toggle("hidden");
                    });
                
                    // Close chatbot window
                    closeChatButton.addEventListener("click", function () {
                        chatWindow.classList.add("hidden");
                    });
                
                    // Handle sending messages
                    sendButton.addEventListener("click", function () {
                        const userMessage = userInput.value.trim();
                        if (userMessage !== "") {
                            appendMessage("You", userMessage);
                            userInput.value = "";
                
                            // Add a response from Sheru
                            setTimeout(function () {
                                sheruResponse(userMessage);
                            }, 500);
                        }
                    });
                
                    function appendMessage(sender, message) {
                        const messageElement = document.createElement("div");
                        messageElement.classList.add("chat-message");
                        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
                        chatBody.appendChild(messageElement);
                        chatBody.scrollTop = chatBody.scrollHeight;
                    }
                
                    function sheruResponse(message) {
                        let response;
                        if (message.toLowerCase().includes("hello")) {
                            response = "Hello! How can I assist you today?";
                        } else if (message.toLowerCase().includes("help")) {
                            response = "Sure! I'm here to help. What do you need assistance with?";
                        } else {
                            response = "I'm sorry, I didn't understand that. Can you please rephrase?";
                        }
                        appendMessage("Sheru", response);
                    }
                });
                
            }
        }

        document.getElementById('loginGet').addEventListener('click', function() {
            document.getElementById('loginDialog').classList.add('show');
        });
        document.addEventListener("DOMContentLoaded", function () {
            const chatbotButton = document.getElementById("sheru-chatbot-button");
            const chatWindow = document.getElementById("sheru-chat-window");
            const closeChatButton = document.getElementById("sheru-close-chat");
            const sendButton = document.getElementById("sheru-send-button");
            const userInput = document.getElementById("sheru-user-input");
            const chatBody = document.getElementById("sheru-chat-body");
        
            console.log("Chatbot initialized");
        
            // Verify that elements are not null
            console.log({ chatbotButton, chatWindow, closeChatButton, sendButton, userInput, chatBody });
        
            // Open chatbot window
            chatbotButton.addEventListener("click", function () {
                console.log("Chatbot button clicked");
                chatWindow.classList.toggle("hidden");
            });
        
            // Close chatbot window
            closeChatButton.addEventListener("click", function () {
                console.log("Close button clicked");
                chatWindow.classList.add("hidden");
            });
        
            // Handle sending messages
            sendButton.addEventListener("click", function () {
                console.log("Send button clicked");
                const userMessage = userInput.value.trim();
                if (userMessage !== "") {
                    console.log("User message:", userMessage);
                    appendMessage("You", userMessage);
                    userInput.value = "";
        
                    // Add a response from Sheru
                    setTimeout(function () {
                        sheruResponse(userMessage);
                    }, 500);
                } else {
                    console.log("User message is empty, not sending.");
                }
            });
        
            function appendMessage(sender, message) {
                console.log(`Appending message from ${sender}: ${message}`);
                const messageElement = document.createElement("div");
                messageElement.classList.add("chat-message");
                messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
                chatBody.appendChild(messageElement);
                chatBody.scrollTop = chatBody.scrollHeight;
            }
        
            function sheruResponse(message) {
                console.log("Processing Sheru response to:", message);
                let response;
                if (message.toLowerCase().includes("hello")) {
                    response = "Hello! How can I assist you today?";
                } else if (message.toLowerCase().includes("help")) {
                    response = "Sure! I'm here to help. What do you need assistance with?";
                } else {
                    response = "I'm sorry, I didn't understand that. Can you please rephrase?";
                }
                appendMessage("Sheru", response);
            }
        });
       
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            var formData = new FormData(this);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:5000/submit', true);
    
            xhr.onload = function() {
                if (xhr.status === 200) {
                    alert(xhr.responseText); // Show the response message as an alert
                } else {
                    alert('An error occurred: ' + xhr.statusText);
                }
            };
    
            xhr.send(formData);
        });

        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const formData = new FormData(this);

            fetch('http://localhost:5000/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text()) // Convert response to text
            .then(data => {
                alert(data); // Show the alert with the response message
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });