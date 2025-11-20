document.getElementById("btn").addEventListener("click", () => {
    chrome.tabs.query({active : true, currentWindow : true},function(tabs){
        const currentTab = tabs[0];
        document.getElementById("title").innerText = currentTab.title;
    });
});