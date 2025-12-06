const colorInput = document.getElementById("color");
const fontSelect = document.getElementById("font");
const iconInput = document.getElementById("icon");
const frame = document.getElementById("previewFrame");
const finalUrl = document.getElementById("finalUrl");

function updatePreview() {
    const params = new URLSearchParams();
    if (colorInput.value.trim()) params.set("color", colorInput.value.trim().replace(/#/g, ''));
    if (fontSelect.value.trim()) params.set("font", fontSelect.value.trim());

    if (!iconInput.checked) params.set("icon", iconInput.checked ? "1" : "0");

    const qs = params.toString();
    const url = qs ? `overlay.html?${qs}` : `overlay.html`;
    frame.src = url;
    finalUrl.value = window.location.origin + "/rashid/" + url;
}

fontSelect.addEventListener("change", updatePreview);
colorInput.addEventListener("input", updatePreview);
iconInput.addEventListener("change", updatePreview);

window.addEventListener("DOMContentLoaded", () => {
    const finalUrlField = document.getElementById("finalUrl");
    if (finalUrlField && !finalUrlField.value.trim()) {
        finalUrlField.value = window.location.origin + "/rashid/overlay.html";
    }
    updatePreview();
});