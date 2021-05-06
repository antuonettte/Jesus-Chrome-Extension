chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info =>{
        console.log(current_tab_info.url);
        if (/^https:\/\/www\.google/.test(current_tab_info.url)){
            //injecting css into the tab, {active tab, file, callback function(optional)}
            chrome.tabs.insertCSS(null, {file: './css/google.css'});
            //injecting foreground script into tab, null is the tab id, null will inject into active tab, followed by script location, and then a callback funtion.
            chrome.tabs.executeScript(null, {file: './scripts/foreground.js'}, () => console.log('successfull injection baby!'));
        }
    })
});

