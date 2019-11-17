import Pusher from 'pusher-js';
import PubSub from 'pubsub-js';
import './sites';

type Message = {
    siteId: string;
    action: string;
};

const pusher = new Pusher('389909f829d6c714f461', {
    cluster: 'ap3',
    forceTLS: true
});

const channel = pusher.subscribe('my-channel');

channel.bind('manipulate-chrome', (message: Message) => {
    const siteId = message.siteId;
    const action = message.action;
    PubSub.publish(`${siteId}/${action}`, {});
});

// デバック用
chrome.runtime.onMessage.addListener((request, sender, response) => {
    const siteId = request.siteId;
    const action = request.action;
    PubSub.publish(`${siteId}/${action}`, {});
    response({ message: 'opening youtube' });
});
