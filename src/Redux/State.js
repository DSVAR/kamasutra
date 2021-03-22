const UpdateMessage = 'UPDATE-MESSAGE';
const AddMessage = 'ADD-MESSAGE';


let store = {
    _State: {

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
        return this._State;
    },
    rerender() {
        console.log("debian");
    },
    AddMessage() {
    },
    updateMessage(text) {

    },
    subscribe(observer) {
        this.rerender = observer;

    },

    dispatch(action) {
        switch (action.type) {
            case AddMessage: {
                let MessageNew = {
                    ID: 2,
                    Message: this._State.dialogs.newMessage,
                    Nick: "Me",
                    Right: true
                };

                this._State.dialogs.messages.push(MessageNew);
                this._State.dialogs.newMessage = '';
                this.rerender(this._State)

            }
            case UpdateMessage: {

                this._State.dialogs.newMessage = action.text;
                this.rerender(this._State)
            }
        }

    }
}


export const addMessageActionCreator = () => ({type: AddMessage})

export const updateNewMessageActionCreator = (message) => ({
    type: UpdateMessage,
    text: message

})


export default store;