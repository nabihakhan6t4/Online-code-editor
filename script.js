document.getElementById('runCodeBtn').addEventListener('click', function() {
    const code = document.getElementById('codeEditor').value;
    const previewFrame = document.getElementById('livePreview');
    const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;

    preview.open();
    preview.write(code);
    preview.close();
});
