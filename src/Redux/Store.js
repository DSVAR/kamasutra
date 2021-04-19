import {act} from "@testing-library/react";
import profileReducer from "./profile-reducer";
import dialogcReducer from "./dialogs-reducer";


let store = {
    _state: {

        dialogs: {
            users: [
                {
                    ID: '0',
                    Name: 'DDvar',
                    Url: 'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'
                },
                {ID: '1', Name: "RAtataat", Url: 'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'}
            ],
            messages: [
                {ID: 0, Nick: "Me", Message: "Hello", Right: true},
                {ID: 1, Nick: "DDvar", Message: "Hi,How are u?", Right: false}
            ],
            newMessage: 'ItDava'

        },
        posts: {
            post:
                [{ID: '0', Text: 'kuk', Name: 'Ddavar',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
                    {ID: '1', Text: 'kuk1', Name: 'Ratatata',Img:'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'}],
            textNew: 'Dva'
        },
        sidebar: {
            friends: [
                {
                    Id: '0',
                    Name: 'Davar',
                    Url: 'https://w7.pngwing.com/pngs/78/95/png-transparent-pentagram-pentacle-satanism-wicca-symbol-symbol-miscellaneous-monochrome-magic.png'
                },
                {
                    Id: '1',
                    Name: 'Ratat',
                    Url: 'https://w7.pngwing.com/pngs/78/95/png-transparent-pentagram-pentacle-satanism-wicca-symbol-symbol-miscellaneous-monochrome-magic.png'
                },
                {
                    Id: '2',
                    Name: 'Debik',
                    Url: 'https://w7.pngwing.com/pngs/78/95/png-transparent-pentagram-pentacle-satanism-wicca-symbol-symbol-miscellaneous-monochrome-magic.png'
                }
            ]
        }

    },
    getState() {
        return this._state;
    },
    rerender() {
    },
    subscribe(observer) {
        this.rerender = observer;

    },

    dispatch(action) {

        this._state.posts=  profileReducer(this._state.posts,action);
        this._state.dialogs= dialogcReducer(this._state.dialogs,action);

        this.rerender(this._state)

    }
}


export default store;