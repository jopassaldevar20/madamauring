export default {
    deleteCookie (name) {
        const date = new Date();
        const yesterday = date.setDate(date.getDate() - 1);
        const parseYesterday = new Date(yesterday);

        document.cookie = `${name}=;path=/;expires=${parseYesterday}`;
    },

    formatMoney (sign, num = 0, decPlaces, decSeparator, thouSeparator) {
        let integerNum = '';
        let decimalNum = '';
        let strNum = num !== null ? num.toString() : '0';

        const decSep = decSeparator || '.';
        const thouSep = thouSeparator || ',';
        const isNegative = strNum.indexOf('-') >= 0;

        /**
         * Check and remove negative to the string
         */
        if (isNegative) {
            strNum = strNum.slice(1, strNum.length);
        }

        if (decPlaces > 0) {
            const hasDecimal = strNum.indexOf(decSep);

            if (hasDecimal >= 0) {
                integerNum = strNum.slice(0, hasDecimal);
                decimalNum = strNum.slice(hasDecimal, ((hasDecimal + 1) + decPlaces));
            } else {
                integerNum = strNum;
                decimalNum = decSep;
            }

            /**
             * Add zero if not reach the given decimal places
             */
            const count = decimalNum.length - 1;

            if (count < decPlaces) {
                for (let i = 0; i < (decPlaces - count); i++) {
                    decimalNum += '0';
                }
            }
        } else {
            integerNum = strNum;
        }

        let arrChar = [];
        let ctr = 0;

        for (let i = (integerNum.length - 1); i > -1; i--) {
            ctr++; arrChar.unshift(integerNum.charAt(i));

            /**
             * Add thousand separator if
             * Skip the last char
             */
            if (ctr % 3 === 0 && ctr !== integerNum.length) {
                arrChar.unshift(thouSep);
            }
        }

        return ((isNegative ? '-' : '') + sign + arrChar.join('') + decimalNum);
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

    entitiesEncoder (str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    },

    entitiesDecoder (str) {
        return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    },

    parseRichText (json) {
        const parseParagraph = (content) => {
            let mainTags = '<p>';

            if (content.content) {
                for (let j = 0; j < content.content.length; j++) {
                    const paragraphContent = content.content[j];

                    if (paragraphContent.type === 'text') {
                        let trailTag = '';

                        if (paragraphContent.marks) {
                            for (let k = 0; k < paragraphContent.marks.length; k++) {
                                const textMarks = paragraphContent.marks[k];

                                if (textMarks.type === 'bold') {
                                    mainTags += '<b>';
                                    trailTag = `</b>${trailTag}`;
                                } else if (textMarks.type === 'italic') {
                                    mainTags += '<i>';
                                    trailTag = `</i>${trailTag}`;
                                } else if (textMarks.type === 'underline') {
                                    mainTags += '<u>';
                                    trailTag = `</u>${trailTag}`;
                                }
                            }
                        }

                        mainTags += `${this.entitiesEncoder(paragraphContent.text)}${trailTag}`;
                    }
                }
            }

            mainTags += '</p>';

            return mainTags;
        };

        const docContents = json.content;
        let htmlTags = '';

        for (let i = 0; i < docContents.length; i++) {
            const content = docContents[i];

            if (content.type === 'paragraph') {
                htmlTags += parseParagraph(content);
            } else if (content.type === 'bullet_list' || content.type === 'ordered_list') {
                htmlTags += content.type === 'bullet_list' ? '<ul>' : '<ol>';

                if (content.content) {
                    for (let j = 0; j < content.content.length; j++) {
                        const bulletContent = content.content[j];

                        if (bulletContent.type === 'list_item') {
                            for (let k = 0; k < bulletContent.content.length; k++) {
                                const listItemContent = bulletContent.content[k];

                                htmlTags += '<li>';

                                if (listItemContent.type === 'paragraph') {
                                    htmlTags += parseParagraph(listItemContent);
                                }

                                htmlTags += '</li>';
                            }
                        }
                    }
                }

                htmlTags += content.type === 'bullet_list' ? '</ul>' : '</ol>';
            }
        }

        return htmlTags;
    },

    randomBetween (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    regExpTest (str, only) {
        let rx = null;

        switch (only) {
        case 'alpha':
            rx = /^[a-zA-Z ]+$/i;
            break;
        case 'numeric':
            rx = /^[0-9]+$/i;
            break;
        case 'alphanumeric':
            rx = /^[a-zA-Z0-9 ]+$/i;
            break;
        case 'email':
            rx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            break;
        case 'currency':
            rx = /^(-?)[0-9]+(\.?)\d*$/i;
            break;
        case 'currency-without-negative':
            rx = /^[0-9]+(\.?)\d*$/i;
            break;
        default:
            rx = only;
            break;
        }

        const pattern = new RegExp(rx);

        return pattern.test(str);
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
    },

    generateUniqueId () {
        return `#${Math.random().toString(36).substr(2, 9)}_`;
    },

    dateDifferent (firstDate, secondDate) {
        return Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24));
    }
};
