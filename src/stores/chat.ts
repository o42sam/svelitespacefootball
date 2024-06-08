import { writable } from 'svelte/store';

export const chatMessages = writable<{ message: string, sent: boolean }[]>([]);

export function addIncomingMessage(message: string) {
    chatMessages.update(messages => {
        messages.push({ message, sent: false });
        return messages;
    });
}

export function addSentMessage(message: string) {
    chatMessages.update(messages => {
        messages.push({ message, sent: true });
        return messages;
    });
}

export function clearChatMessages() {
    chatMessages.set([]);
}