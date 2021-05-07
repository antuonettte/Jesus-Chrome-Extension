chrome.tabs.onUpdated.addListener(tab => {
    chrome.tabs.get(tab.tabID, current_tab_info => {
        if (/^https:\/\/www\.google/.test(current_tab_info.url)){
            console.log('url deteced');
            // chrome.tabs.insertCSS(null, {file: './css/jesus.css'})
            // chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('injected'));
        }
    });
});


