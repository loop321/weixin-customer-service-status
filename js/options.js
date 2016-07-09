function load() {
    console.log(chrome)
	chrome.storage.local.get('a', function (result) {
        alert(result.a);
    });
} 
load()
function set(){
  alert(document.getElementById("a").value)
  chrome.storage.local.set({a:document.getElementById("a").value})
}

