export const initialState = {
    mainPosts:[{
        id: 1,
        User: {
            id:1,
            nickname:'박명규',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images:[{
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
        },{
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
        },{
            src:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
        }],
        Comments:[{
            User:{
                nickname:'nero',
            },
            content: '우아 개정판이 나왔군요~',
        },{
            User:{
                nickname:'hero',
            },
            content: '얼른 사고싶어요~',
        }]
    }],
    imagePaths:[],
    postAdded:false
}

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id:2,
    content:'더미데이터입니다.',
    User: {
        id: 1,
        nickname: '박명규'
    },
    Images:[],
    Comments:[],
}

const reducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
                
            }
        default : 
            return state;
    }

}

export default reducer;