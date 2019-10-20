// Created by iWeb 3.0.4 local-build-20150823

setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.fullybugged.com/Fully_Bugged/Projects/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Projects_files/ProjectsMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
