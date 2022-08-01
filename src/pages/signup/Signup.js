import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

import styles from './Signup.module.css'


export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [errorP, setErrorP] = useState(null)
    const { signup , isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorP(null)
        try {
            if (password !== cPassword) {
                throw new Error("Password does not match")
            } 
        } catch (err) {
            setErrorP(err.message)
        }
        signup(email, password, displayName)
        
    }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label>
            <span>Email</span>
            <input 
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
            />
        </label>
        <label>
            <span>Password</span>
            <input 
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
            />
        </label>
        <label>
            <span>Confirm password</span>
            <input 
                type='password'
                onChange={(e) => {setCPassword(e.target.value)}}
                value = {cPassword}
            />
        </label>
        <label>
            <span>Display name</span>
            <input 
                type='text'
                onChange={(e) => {setDisplayName(e.target.value)}}
                value = {displayName}
            />
        </label>
        {!isPending && <button className='btn'>Signup</button>}
        {isPending && <button className="btn" disabled>Loading...</button>}
        {error && <label style={{color: 'red'}}>{error}</label>}

    </form>
  )
}
