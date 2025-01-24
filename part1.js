// part1.js
const encryptedToken = "NzU5MzQwOTA2MTpBQUhFUENUQ0x0dnhhQVdjRXltNzlnTDh1ZUhSQjd0dkRYZw=="; // TOKEN مشفر
const encryptedChatID = "NjAxNTIxNTY3NA=="; // CHAT_ID مشفر

// فك التشفير باستخدام Base64
const TOKEN = atob(encryptedToken);
const CHAT_ID = atob(encryptedChatID);

console.log('TOKEN:', TOKEN); // للتأكد من أن TOKEN تم فك تشفيره بشكل صحيح
console.log('CHAT_ID:', CHAT_ID); // للتأكد من أن CHAT_ID تم فك تشفيره بشكل صحيح

console.log('Part 1 loaded: Token and Chat ID decrypted.');