var exp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(exp);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.get(Number(tabId), current_tab_info => {
        if (regex.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null, {file: './css/jesus.css'})
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('injected'));
        }
    });
});



