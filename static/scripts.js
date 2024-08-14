document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.querySelector('input[type="file"]');
    const preview = document.createElement('img');
    const form = document.querySelector('form');
    const uploadButton = document.querySelector('input[type="submit"]');
    
    preview.style.display = 'none';
    preview.style.marginTop = '10px';
    preview.style.border = '1px solid #ccc';
    preview.style.borderRadius = '4px';
    preview.style.padding = '5px';
    preview.style.background = '#fff';
    preview.width = 300;
    form.insertBefore(preview, uploadButton);

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', function() {
        uploadButton.value = 'Uploading...';
        uploadButton.disabled = true;
    });
});
