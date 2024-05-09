const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');
const copyBtn = document.getElementById('copy-btn');
const shortUrlTextarea = document.getElementById("shortUrl");

shortBtn.addEventListener('click', () => {
    const longUrl = document.getElementById('longUrl').value;
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;

    fetch(apiUrl)
    .then(response => response.text())
    .then(data => shortUrlTextarea.value = data)
    .catch(error => shortUrlTextarea.value = "Error: Unable to shorten URL");
});

reloadBtn.addEventListener('click', () => location.reload());

copyBtn.addEventListener('click', () => {
    shortUrlTextarea.select();
    document.execCommand('copy');
    alert('Short Link Copied to Clipboard!!!!');
});