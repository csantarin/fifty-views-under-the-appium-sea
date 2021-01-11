# Fifty Views Under The Appium Sea

This source code demonstrates the inability of Appium to detect nested layers deeper in a React Native `<View />` hierarchy when it passes its threshold (default: `50`). Any further than the threshold causes the nested layers down the hierarchy to be merged together as a single UI element in Appium's element hierarchy inspector.

And yes, the title is a reference to _[Twenty Thousand Leagues Under the Sea](https://en.wikipedia.org/wiki/Twenty_Thousand_Leagues_Under_the_Sea)_.
