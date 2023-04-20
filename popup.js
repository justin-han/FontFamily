document.addEventListener('DOMContentLoaded', function(){
  // Font style selection
  var fontSelect = document.getElementById('fontSelect');
  var applyButton = document.getElementById('applyButton');

  // Font size input
  var fontSize = document.getElementById('fontSize');
  var applySizeButton = document.getElementById('applySizeButton');

  // Change font style on button click
  applyButton.addEventListener("click", function(){
    var font = fontSelect.value;  
    chrome.tabs.insertCSS({
        code: '*{ font-family: "' + font +'" !important;}'
      })
  }) 

  // Change font size on button click
  applySizeButton.addEventListener("click", function(){
    var size = fontSize.value;  
    chrome.tabs.insertCSS({
        code: '*{ font-size: ' + size +'px;}'
      })
  }) 

  applyLineHeight.addEventListener("click", function(){
    var size = lineHeight.value;  
    chrome.tabs.insertCSS({
        code: '*{ line-height: ' + size + ';}'
      })
  }) 

  applySpacing.addEventListener("click", function(){
    var size = spacingSize.value;  
    chrome.tabs.insertCSS({
        code: '*{ letter-spacing: ' + size +'px;}'
      })
  }) 

})
