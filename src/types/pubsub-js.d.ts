declare namespace pubsubjs {
    interface PubSub {
        subscribe(message: string, func: Function): string;
        publish(message: string, data: any, sync?: boolean, immediateExceptions?: boolean): boolean;
    }
}
