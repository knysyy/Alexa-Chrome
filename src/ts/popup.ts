const sendMessage = (siteId: string, action: string) => {
    chrome.runtime.sendMessage({
        siteId,
        action
    }, (response) => {
        console.log(response);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("create").addEventListener("click", () => sendMessage("YOUTUBE", "create"));
    document.getElementById("hello").addEventListener("click", () => sendMessage("YOUTUBE", "hello"));
    document.getElementById("delete").addEventListener("click", () => sendMessage("YOUTUBE", "delete"));
});
