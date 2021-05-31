import profileReducer, {addPostActionCreator, deletePost} from "../Redux/profile-reducer";
//test data

let State = {
    post:
        [
            {
                ID: 0,
                Text: 'kuk',
                Name: 'Ddavar',
                Img: 'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'
            },
            {ID: 1, Text: 'kuk1', Name: 'Ratatata', Img: 'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'}
        ]
}

it('NewPost', () => {
    
    let action = addPostActionCreator('Debi test');
    let newState = profileReducer(State, action);
    //action

    expect(newState.post.length).toBe(3);
 //   expect(newState.post[2].Text).toBe(action.text)
    //expectation
})

it('deleting post', () => {

    let action = deletePost(1);
    let newState = profileReducer(State, action);
    //action

    expect(newState.post.length).toBe(1);
    
    //expectation
})

