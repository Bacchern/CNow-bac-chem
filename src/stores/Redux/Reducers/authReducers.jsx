import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// const actionCreateCollection = createAsyncThunk(
//     'create/collection',
//     async (params, { rejectWithValue }) => {
//         try {
//             let result = await API.post(WEB_API.NFT.createCollection, params)
//             dispatch(actionGetProfile())
//             return result
//         } catch (error) {
//             toastError(error.response.data?.message)
//             return rejectWithValue(error.response.data?.message)
//         }
//     }
// )




// const actionGetNft = createAsyncThunk('create/addNftAddress', async (data) => {
//     const result = await API.get(`/api/nft/v1/get-nft?address=${data}`)
//     const datas = await result?.data?.data

//     return Promise.all(
//         datas.map(async (data) => {
//             const obj = await (await fetch(`${port}nft/${data?.token_id}.json`)).json()
//             const item = { ...obj, data }
//             return item
//         })
//     )
// })

const actionCreateLogin = createAsyncThunk('create/addNftExchange', async (data) => {
    // const result = await API.get(`/api/nft/v1/get-nft?address=${data}`)
    return result
})

export const handleOnLogin = () => {
    return async (dispatch) => {
      try{
            //api 
            localStorage.setItem('token','asjhdgashjgdhjagsdhj' )
            dispatch(SetToken('asjhdgashjgdhjagsdhj'))
            dispatch(handleGetProfile({username:'tranngoctien', email:'tranngoctien@gmail.com'}))
      }catch(error){

      }
    }
}


export const handleGetProfile = (data) => {
    return async (dispatch) => {
        console.log('123');
      try{
            //api 
            dispatch(setAuth(data))
      }catch(error){

      }
    }
}


const authReducers = createSlice({
    name: 'NFTReducers',
    initialState: {
        getUser: '',
        demo: 'bac',
        token: localStorage.getItem('token')|| ''
    },
    reducers: {
        setAuth: (state, action) => {
            state.getUser = action.payload
        },
        SetDemo: (state, action) => {
            state.demo = action.payload
        },
        SetToken: (state, action) => {
            state.token = action.payload
        },
       
     
    },
   
})

export default authReducers
export const {
    setAuth,
    SetDemo,
    SetToken
} = authReducers.actions

