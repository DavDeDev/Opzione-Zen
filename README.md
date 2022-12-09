![This is an image](zen_extension/images/flower_128.png)
# Opzione Zen
---
### Video Demo:  https://youtu.be/f_eCVh4mz8U
#### Description:
The idea of creating a Chrome Extension was born after a need that I had of creating an extension that could handle my reading list and randomly pick a random article to be displayed once the user opens the browser. However, it didn't take much time before discovering that [there's no API to access the Reading List of the user](https://bugs.chromium.org/p/chromium/issues/detail?id=1265326), therefore I decided to focus on another project that could help me.

Here comes "Opzione Zen", an extension that helps me focus when I read documentation by removing all the noise around the main content: this will lookup for the marginal components in the most known websites and remove them to help the user focus on the main content of each page (especially documentation).

Before the development of this extension I had to study JavaScript thoroughly and then I could start thinking about a basic Chrome Extension, but even to start that I read the [Google documentation](https://developer.chrome.com/docs/) to better know the structure and how they work. In addition, I tried to lookup for more resources online, and [this tutorial](https://youtu.be/0n809nd4Zu4) helped me a lot (Thanks, @freeCodeCamp.org and @raman-at-pieces !).

My work is inspired by the [Google's introduction tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/), but include much more features and I decided to take a different approach to favorite re-usability of the code for different website.

My project, as every extension, include a `manifest.json` file which is mandatory to develop an chromium extension, this file contains generic information about the extension (like a `description`, `version`, etc.), as well as more detailed ones like the permission that the software needs to work properly. I also added a keyboard shortcut `CTRL+Z` on Windows and `CMD+Z` on MacOs to activate the extension easily without clicking on the icon in the toolbar.

`Background.js` is the main file of the project as it is responsible for the behave of the program. In it, there's a dictionary that associate each "domain" to specific URL of some popular websites, and whenever the user click on the icon or via shortcut, it's triggered an async function which retrieve the current website's URL (via [tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/#manifest)) and if it includes any of the of the URL in the dictionary, it means that is a documentation page and a specific CSS stylesheet can be applied, otherwise the function is returned without result.

Based on the domain, a different css file is applied to the page and this is why the choice for naming the files were helpful, and for each stylesheet I change components by inspecting the different websites and finding common components that could be obscured.

In future, I will extend the set of website where this extension can be applied to and I look forward to develop my other idea as soon as Google release an API to work with reading list.

I want to thank professor Malan, Doug Lloyd, Rongxin Liu and all the staff for this wonderful course!
```diff
- This was CS50!!
```