import {instance} from "@/api/api";
const FacadeUrlPre='facade';
const Network={
    login(data){
        return instance.post(FacadeUrlPre+"/auth/login",data);
    },

    publishCreator(data){
        return instance.post(FacadeUrlPre+"//creator/publish",data)
    }
}

export {
    Network
}