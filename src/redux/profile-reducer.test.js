import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 12},
        {id: 2, messages: 'It\'s my first post', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {

    // 1. test data
    let action = addPostActionCreator("it-kamasutra");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {

    // 1. test data
    let action = addPostActionCreator("it-kamasutra");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].messages).toBe("it-kamasutra");
});

it('after deleting length of messages should be decrement', () => {

    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

it(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {

    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});