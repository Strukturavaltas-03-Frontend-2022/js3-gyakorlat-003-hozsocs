/* 2. Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust megvalósítja:
- `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban,
ahol a sütik neve a key és az értéke a value (pl. { viewed: 5 })
- `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az adott süti
 nevével és értékével
- `flush`: törli az összes sütit

A teszteléshez hozd létre a böngésződben az alábbi sütiket:
- `viewed`: 5
- `uid`: 354774631237
- `ssid`: Bx55OWbHJ0Vt_IGIF */

const cookieHandler = {

  getAll() {
    const allcookies = document.cookie;
    const nameandvalues = allcookies.forEach((cookies) =>
      cookies.slice(0, cookies.search(';')));
    const keyname = nameandvalues.map((cookies) =>
      cookies.slice(0, cookies.search('=')));
    const keyvalue = nameandvalues.map((cookies) =>
      cookies.slice((cookies.search('=') + 1), cookies.length));
    return {
      key: keyname,
      value: keyvalue,
    };
  },

  toSessionStorage() {
    const exists = document.cookies.getAll();
    Object.entries(exists).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  },

  flush() {
    const exists = document.cookie.getAll();
    Object.entries(exists).forEach((key) => {
      document.cookies = `${key}= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  },
};
export {cookieHandler};
