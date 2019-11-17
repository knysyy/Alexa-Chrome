import PubSub from 'pubsub-js';

export default class Youtube {

    static tabId: number = NaN;
    static siteId: string = "YOUTUBE";
    static url: string = "https://www.youtube.com";

    constructor() {
        this.init();
    }

    init(): void {
        PubSub.subscribe(`${Youtube.siteId}/hello`, this.hello);
        PubSub.subscribe(`${Youtube.siteId}/create`, this.create);
        PubSub.subscribe(`${Youtube.siteId}/delete`, this.delete);
    }

    hello(): void {
        console.log('hello');
        chrome.tabs.sendMessage(Youtube.tabId, {}, (response) => {
            if(response) {
                console.log('hello');
            }
        });
    }

    create() {
        console.log('create');
        chrome.tabs.create({
            url: Youtube.url
        }, tab => {
            Youtube.tabId = tab.id;
            console.log('created');
        });
    }

    delete() {
        console.log('delete');
        chrome.tabs.remove(Youtube.tabId, () => {
            Youtube.tabId = NaN;
            console.log('deleted');
        });
    }
}
