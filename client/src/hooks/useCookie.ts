import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const useCookie = () => {
    const getCookie = (name: string) => {
        return cookie.get(name);
    };

    const setCookie = (name: string, value: unknown) => {
        return cookie.set(name, value);
    };

    const removeCookie = (name: string) => {
        cookie.remove(name);
    };

    return { getCookie, setCookie, removeCookie };
};
