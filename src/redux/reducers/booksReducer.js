import { ADD_BOOK_TO_USER_LIST, FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "../actions/booksactions"

const initState={
    books:[],
    laoding:false,
    error:null
}
export const booksReducer=(state=initState,action)=>{
    switch(action.type){
        case FETCH_BOOKS_REQUEST:
            return{
                ...state, loading:true
            }
            case FETCH_BOOKS_SUCCESS:
                return{
                    ...state, books:action.payload, loading:false
                }
                case FETCH_BOOKS_FAILURE:
                    return{
                        ...state, error:action.paylaod
                    }
                    case ADD_BOOK_TO_USER_LIST:
                        return{...state, books:[...state.books, action.payload]
                        }
                    default:
                        return state;
    }
}