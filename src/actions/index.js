

export function movieslist(){

    return {
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'pulp fiction'},
            {id:2,name:'pacific Rim'},
            {id:3,name:'rambo'}
        ]
    }

}
export function directorslist(){

    return {
        type:'DIR_LIST',
        payload:[
            {id:1,name:'tatapito'},
            {id:2,name:'asds sfd'}
        ]
    }

}