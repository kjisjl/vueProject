import {getMovie} from "@/api/maizuo";

const maizuo={
    namespaced:true,
    state:{
        films:[]
    },
    mutations:{
        SET_FILMS(state,data){
            state.films=data
        }    },
    actions:{
        async getMovieAsync(context,type){
            const {data}= await getMovie(type);
            context.commit('SET_FILMS',data.films)
        }
    }
}

export default maizuo