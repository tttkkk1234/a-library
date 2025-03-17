const API_KEY = "AIzaSyC4PbgbO3-zwo9lfhIuYEAkeyAknUfy0ck"; 
        const API_ENDPOINT = "https://api.gemini.com/chat"; 
        const messagesDiv = document.getElementById("messages");

        async function sendMessage() {
            const userInput = document.getElementById("userInput");
            const userMessage = userInput.value.trim();

            if (userMessage) {
                displayMessage(userMessage, "user");

                // Send the message to the Gemini API
                const botResponse = await fetchGeminiResponse(userMessage);

                setTimeout(() => {
                    displayMessage(botResponse, "bot");
                }, 1000);

                userInput.value = "";
            }
        }

        function displayMessage(message, sender) {
            const messageDiv = document.createElement("div");
            messageDiv.className = `message ${sender}`;
            messageDiv.textContent = message;
            messagesDiv.appendChild(messageDiv);

            messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
        }

        async function fetchGeminiResponse(userMessage) {
            try {
                const response = await fetch(API_ENDPOINT, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${API_KEY}` // Typical API key header
                    },
                    body: JSON.stringify({ message: userMessage })
                });

                if (response.ok) {
                    const data = await response.json();
                    return data.reply || "Sorry, no response received.";
                } else {
                    return `Error: ${response.status}`;
                }
            } catch (error) {
                console.error(error);
                return "Something went wrong while connecting to the Gemini API.";
            }
        }