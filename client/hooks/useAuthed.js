import useChitChat from './useChitChat'

export function useAuthed() {
    const { isLoggedIn } = useChitChat()
    return {
        isAuthed: () => isLoggedIn
    };
}