(function(info, tab) {
    var regexp = {
        "BaiduPan": {
            reg: /^1[a-z]+/i,
            site: "http://pan.baidu.com/s/"
        },
        "Bilibili": {
            reg: /^av\d+$/i,
            site: "http://www.bilibili.com/video/"
        },
        "Acfun": {
            reg: /^ac\d+$/i,
            site: "http://www.acfun.tv/v/"
        }
    };
    var Pixiv = {
            "pic": "http://www.pixiv.net/member_illust.php?mode=medium&illust_id=",
            "auth": "http://www.pixiv.net/member.php?id="
        };
        //add an item
        // chrome.runtime.onInstalled.addListener(function() {
    var id = chrome.contextMenus.create({
        "title": "PixivLink",
        "contexts": ["selection"],
        "id": "oldDriver"
        // "onclick": onClickHandler
    });
    console.log("item:" + id);
    chrome.contextMenus.create({
        "title": "图片id",
        "parentId": "oldDriver",
        "contexts": ["selection"],
        "id": "picId",
        "onclick": function(info, tab) {
            var value = info.selectionText.trim();
            window.open(Pixiv["pic"] + value, "_blank");
        }
    });
    chrome.contextMenus.create({
        "title": "作者id",
        "parentId": "oldDriver",
        "contexts": ["selection"],
        "id": "authid",
        "onclick": function(info, tab) {
            var value = info.selectionText.trim();
            window.open(Pixiv["auth"] + value, "_blank");
        }
    });
    chrome.contextMenus.create({
        "title": "其他",
        "parentId": "oldDriver",
        "contexts": ["selection"],
        "id": "others",
        "onclick": onClickHandler
    });
    // });

    // chrome.contextMenus.onClicked.addListener(onClickHandler);

    function onClickHandler(info, tab) {
        var value = info.selectionText.trim();
        console.log(value);
        if (value != "") {
            for (var i in regexp) {
                if (regexp.hasOwnProperty(i)) {
                    if (regexp[i].reg.test(value)) {
                        console.log(i);
                        window.open(regexp[i].site + value, "_blank");
                    }
                }
            }
        }
    }
})();
