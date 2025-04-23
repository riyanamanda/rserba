import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const useCookie = () => {
    const getCookie = (key: string) => {
        return cookie.get(key);
    };

    const setCookie = (key: string, value: unknown) => {
        return cookie.set(key, value);
    };

    const removeCookie = (key: string) => {
        cookie.remove(key);
    };

    return { getCookie, setCookie, removeCookie };
};
