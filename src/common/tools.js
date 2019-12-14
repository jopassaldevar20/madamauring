export default {
    deleteCookie (name) {
        const date = new Date();
        const yesterday = date.setDate(date.getDate() - 1);
        const parseYesterday = new Date(yesterday);

        document.cookie = `${name}=;path=/;expires=${parseYesterday}`;
    },

    getCookie (name) {
        const splitCookie = (document.cookie).split(';');
        let hasCookie = false;

        splitCookie.map((value) => {
            const cookieName = (value.trim()).split('=');

            if (cookieName[0] === name) {
                hasCookie = cookieName[1];
            }
        });

        return hasCookie;
    },

    setCookie (name, value) {
        const date = new Date();
        const tomorrow = date.setDate(date.getDate() + 1);
        const parseTomorrow = new Date(tomorrow);

        document.cookie = `${name}=${value};expires=${parseTomorrow}`;
    },

    sortArrayByKey (arr, key) {
        return arr.sort((a, b) => {
            const itemA = a[key];
            const itemB = b[key];

            if (itemA < itemB) {
                return -1;
            }

            if (itemA > itemB) {
                return 1;
            }

            return 0;
        });
    }
};
