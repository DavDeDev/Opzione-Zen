chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});
const sites = {
  google: "https://developer.chrome.com/docs/",
  mdn: "https://developer.mozilla.org/en-US/docs/Web",
  w3: "https://www.w3schools.com/",
  sof: "https://stackoverflow.com/questions/",  
};
chrome.action.onClicked.addListener(async (tab) => {
  for (const site in sites) {
    if (tab.url.startsWith(sites[site])) {
      var domain = site;
      break;
    }
    
  }
  if (domain === undefined) {
    return;
  }

  // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  // Next state will always be the opposite
  const nextState = prevState === "ON" ? "OFF" : "ON";

  // Set the action badge to the next state
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
  });
  if (nextState === "ON") {
    // Insert the CSS file when the user turns the extension on
    await chrome.scripting.insertCSS({
      files: [`focus-mode-${domain}.css`],
      target: { tabId: tab.id },
    });
  } else if (nextState === "OFF") {
    // Remove the CSS file when the user turns the extension off
    await chrome.scripting.removeCSS({
      files: [`focus-mode-${domain}.css`],
      target: { tabId: tab.id },
    });
  }
});
/* <a href="https://www.flaticon.com/free-icons/zen" title="zen icons">Zen icons created by NeXore88 - Flaticon</a> */
