console.log('This is background service worker - edit me!');
const fuzzysort = require('fuzzysort')
import { defaultTargets } from './tragets';

const targets = []
const optionsSuggest = {
        limit: 10, // don't return more results than you need!
        // threshold: -10000, // don't return bad results
        key: "descPrepared"
}
const optionsEnter = {
    limit: 1, // don't return more results than you need!
    key: "descPrepared"
}

function initDefaultTargets() {
    defaultTargets.forEach(t => {
        t.descPrepared = fuzzysort.prepare(t.desc)
        targets.push(t)
    })
}

initDefaultTargets()

const bookmarkIdsMap = {}
function readTree(bookmarkTreeNodes) {
    bookmarkTreeNodes.forEach(
        function(btn) {
            var children = btn.children
            if (typeof children !== 'undefined' && children.length > 0) {
                readTree(children)
            } else {
                if (btn.url) {
                    bookmarkIdsMap[btn.id] = targets.length
                    targets.push({url: btn.url, desc: btn.title, type: 'bookmark'})
                }
            }
        }
    )
}
function initTargets(btn) {
    readTree(btn)
    targets.forEach(t => {
        t.descPrepared = fuzzysort.prepare(t.desc)
    })
}

function initBookmarks() {
    chrome.bookmarks.getTree(initTargets)
}

initBookmarks()

chrome.bookmarks.onCreated.addListener(
    function(id, bookmark) {
        if(bookmark.url) {
            bookmarkIdsMap[id] = targets.length
            targets.push({
                url: bookmark.url, desc: bookmark.title, type: 'bookmark', 
                descPrepared: fuzzysort.prepare(bookmark.title)
            })
        }
    }
)

chrome.bookmarks.onChanged.addListener(
    function(id, changeInfo) {
        if(bookmarkIdsMap[id] !== undefined) {
            if(changeInfo.url) {
                targets[bookmarkIdsMap[id]].url = changeInfo.url
            }
            if(changeInfo.title) {
                targets[bookmarkIdsMap[id]].desc = changeInfo.title
                targets[bookmarkIdsMap[id]].descPrepared = fuzzysort.prepare(changeInfo.title)
            }
        }
    }
)

chrome.omnibox.onInputChanged.addListener(
    function(text, suggest) {
    var results = fuzzysort.go(text, targets, optionsSuggest)
    var suggestions = []
    results.forEach(t => {
        suggestions.push({content: t.target, description: t.target})
    })
    suggest(suggestions);

    // suggest([{content: 'yo', description: '<match>yo</match>lo'},
    // {content: 'lo', description: '<dim>lo</dim>ko'},
    // {content: 'ko', description: 'koyo'}])
    // const newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
    // chrome.tabs.update({ url: newURL });
  }
);

chrome.omnibox.onInputEntered.addListener((text) => {
    var results = fuzzysort.go(text, targets, optionsEnter)
    var newURL = ''
    if (typeof results !== 'undefined' && results.length > 0) {
        newURL = results[0].obj.url
    } else {
        newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
    }
    chrome.tabs.update({ url: newURL });
})
