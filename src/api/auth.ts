import { supabase } from '../db/db'

async function isUserRegistered(email: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)

  if (error) {
    console.error('Error checking user registration:', error)
    return false
  }

  return data.length > 0
}

async function createUser(email: string, password: string, fullname: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
  if (error) {
    console.error('Error checking user registration:', error)
    return false
  }

  const { error: error2 } = await supabase.from('users').insert({
    full_name: fullname,
    user_id: data.user?.id,
    email: data.user?.email,
  })

  if (error2) {
    console.error('Error checking user registration:', error2)
    return false
  }

  return true
}

async function signin(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Error checking user registration:', error)
    return false
  }

  return data
}

async function signout(){
  await supabase.auth.signOut();
}

export { isUserRegistered, createUser, signin, signout }
