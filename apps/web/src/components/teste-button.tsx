'use client'
import React from 'react'
import { Button } from './ui/button'

export default function Butao() {

    async function login(email:string, password: string) {
        try {
            const response = await fetch('http://localhost:3333/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include' // Ensures cookies (refresh token) are stored
            });
    
            if (!response.ok) throw new Error('Login failed');
    
            const data = await response.json();
            console.log('Access Token:', data.accessToken);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <Button onClick={() => login('andrellopes021@gmail.com', 'changeme')}>Click me</Button>
    )
}

export function CheckButao() {

    async function commomrequest() {
        try {
            const response = await fetch('http://localhost:3333/api/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include' // Ensures cookies (refresh token) are stored
            });
    
            if (!response.ok) throw new Error('Login failed');
    
            const data = await response.json();
            console.log('Access Token:', data.accessToken);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <Button onClick={commomrequest}>Click me</Button>
    )
}
