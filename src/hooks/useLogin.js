import { useAuthContext } from "./useAuthContext"
import { projectAuth } from "../firebase/config"
import { useEffect, useState } from "react"

export const useLogin = () => {

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [isCancelled, setIsCancelled] = useState(false)
    const {dispatch} = useAuthContext()
    

    const login = async (email, password) => {

        setError(null)
        setIsPending(true)
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            dispatch({type: 'LOGIN', payload: res.user})
            if (!isCancelled) {
                setError(null)
                setIsPending(false)
            }

        } catch (err) {
            if (!isCancelled) {
                setError(err.message)
                setIsPending(false)
            }
        }

    }

    useEffect(() => {
        return () => {setIsCancelled(true)}
    }, [])

    
    
    return {isPending, error, login}
}