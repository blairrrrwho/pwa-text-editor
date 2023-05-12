const butInstall = document.getElementById('buttonInstall');

// logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
    // event.preventDefault();
    // store the triggered events
    window.deferredPrompt = event;
    // remove the hidden class from the button
    butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // show prompt
    promptEvent.prompt();

    // reset the deferred prompt variable; it can only be used once
    window.deferredPrompt = null;

    butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
    // clear prompt
    window.deferredPrompt = null;
});