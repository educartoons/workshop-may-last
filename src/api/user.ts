import { supabase } from "../db/db"

async function getUserProfile(userId: string){
  const {data, error} = await supabase.from("users").select("*").eq("user_id",userId);

  if(error){
    console.error('There was an error trying to get the User Profile', error);
  }

  if(data){
    return data[0]
  }

  throw new Error('There was an error trying to get the User Profile')

}

export {getUserProfile}

