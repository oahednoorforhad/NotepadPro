'use client'
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import auth from "../../public/assets/auth.png"
import { Button } from '@/components/ui/button';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function signUp() {

    const handleSignUp = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event?.target.name.value,
            email: event?.target.email.value,
            password: event?.target.password.value,
            username: event?.target.username.value,
            notes: [{ title: "", content: "" }]
        };
        console.log(newUser);
        const resp = await fetch("http://localhost:3000/signup/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(resp)
        if (resp.status === 201) {
            event.target.reset()
        }

    }
    return (
        <div className='lg:flex lg:mt-32 lg:gap-10 place-items-center justify-center items-center border-none p-4 bg-background gap-5 mt-10'>
            <div>
                <Image className='min-w-40' src={auth} height={300} width={500} alt="auth Image" />
            </div>
            <div>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Create New Account</CardTitle>
                        <CardDescription>Register here</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSignUp}>

                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Full Name" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="Enter your email" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="username">Usermame</Label>
                                    <Input id="username" placeholder="Enter your username" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="Enter your password" />
                                </div>
                            </div>
                            <CardFooter className="flex justify-between mt-5">
                                <Button variant="outline">Cancel</Button>
                                <Button type='submit'>Sign Up</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                    <div className='flex gap-2 place-content-center mb-10'>
                        <p>Already signed in?</p>
                        <br />
                        <Link href="/login"><h2 className='font-bold text-blue-700 hover:scale-110 transition-all duration-500'>Login</h2></Link>
                    </div>
                </Card>

            </div>
        </div>
    )
}


