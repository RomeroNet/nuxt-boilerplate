export const setUp = () =>  useState<string>('title', () => 'No title');

export const get = () => useState<string>('title');

export const change = (title: string) => useState<string>('title').value = title;
