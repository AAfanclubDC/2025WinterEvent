main.floors.MT7=
{
    "floorId": "MT7",
    "title": "主塔 7 层",
    "name": "7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,9": [
            {
                "type": "if",
                "condition": "(core.hasEquip('shield4') ||core.hasItem('shield4'))",
                "true": [
                    "\t[弱智,default]等下，又是你，那隻可惡的兔子汪",
                    "\t[???,Getter.png]嗯?我上次說甚麼",
                    {
                        "type": "playBgm",
                        "name": "SoftTime.mp3",
                        "keep": true
                    },
                    "\t[弱智,default](跪下、爬行)好的主人，是的主人汪",
                    "\t[弱智,default]不對，你是不是又要騙我錢了汪",
                    "\t[???,Getter.png]並沒有，我這次說的可都是真話，我需要你的盾牌，我可以把它強化成更強的型態",
                    "\t[???,Getter.png]交出來吧，狗狗",
                    {
                        "type": "choices",
                        "text": "交出來嗎?",
                        "choices": [
                            {
                                "text": "好的主人汪",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:__Getter2__",
                                        "value": "1"
                                    },
                                    {
                                        "type": "if",
                                        "condition": "core.hasEquip('shield4') ",
                                        "true": [
                                            {
                                                "type": "unloadEquip",
                                                "pos": 1
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:shield4",
                                        "value": "0"
                                    },
                                    "\t[???,Getter.png]很好，我就知道你做得到，現在跪下來再汪兩聲",
                                    "\t[弱智,default](趴下)汪!汪!",
                                    "\t[弱智,default]主人，所以升級完的盾牌你甚麼時候給我汪",
                                    "\t[???,Getter.png]什麼盾牌?你說甚麼我聽不懂",
                                    {
                                        "type": "hide",
                                        "remove": true
                                    },
                                    "\t[弱智,default](爬起來)不是，你又坑我",
                                    "\t[弱智,default]不要再搞我了啦幹！",
                                    {
                                        "type": "animate",
                                        "name": "EMsikao",
                                        "loc": "hero"
                                    },
                                    "\t[弱智,default]我到底...在幹什麼汪",
                                    "\t[弱智,default]不行，弱智啊弱智，你怎麼會如此墮落",
                                    "\t[弱智,default]我一定要脫離主...那兔子的掌控"
                                ]
                            },
                            {
                                "text": "媽的，你肯定又坑我，我才不交",
                                "action": [
                                    "\t[弱智,default]我不會再被你騙一次的汪",
                                    "\t[弱智,default]我這次肯定不交",
                                    "\t[???,Getter.png]不交?不交就不交，下好離手，不能後悔喔",
                                    "\t[弱智,default]過去抖M的我已經死了，現在是更加抖...呸胚，意志堅定的我",
                                    "\t[???,Getter.png]那你的獎勵也取消了，再見",
                                    {
                                        "type": "hide",
                                        "remove": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "EMsikao",
                                        "loc": "hero"
                                    },
                                    "\t[弱智,default]可惡，剛剛說不知錢應該要先請他踩我一遍的",
                                    "這個沒救了，直接電死吧"
                                ]
                            }
                        ]
                    },
                    {
                        "type": "playBgm",
                        "name": "bgm.mp3",
                        "keep": true
                    },
                    {
                        "type": "exit"
                    }
                ]
            },
            "\t[???,Getter.png]在哪裡呢，能當作材料的東西(自言自語)"
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 88,  0, 82,  0,  0,204,  0,  0, 32,  0,267,144],
    [144,  0,  0,144,  0, 27,  2,226,  2,  0,  2,  0,144],
    [144, 81,144,144,144, 81,  2,  0,  2,214,  0,  0,144],
    [144, 27,  0,144,  0,210,  2, 27,  2,  2,  2, 32,144],
    [144,  0,210, 81, 28,  0,  2,  0,  2, 37,  2, 28,144],
    [144,  2,  2,  2,  2,  2,  2,226,  2,  0,253,  0,144],
    [144, 53,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,144],
    [144,  0,214,  0,  2,  0,  0,  0,  0,210,  0,  0,144],
    [144,  2,  2,  2,  2,  2,351,  2,  2,  2,  2,210,144],
    [144, 21,  0,  0,  2,  0,  0,  0,  2,  0,211,  0,144],
    [144, 22, 28,253,267,  0, 87,  0,  0, 32,  0,211,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}