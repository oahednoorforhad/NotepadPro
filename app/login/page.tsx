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
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function LogIn() {
    const router = useRouter();
    const handleSignIn = async (event) => {
        event.preventDefault();

        const username = event?.target.username.value;
        const password = event?.target.password.value;
        const resp = await signIn('credentials', {
            username, password, redirect: false
        })
        console.log(resp);
        if (resp.status === 200) {
            router.push('/')
        }
        // const resp = await fetch("http://localhost:3000/signup/api", {
        //     method: "POST",
        //     body: JSON.stringify(newUser),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // console.log(resp)
        // if (resp.status === 201) {
        //     event.target.reset()
        // }
    }
    return (
        <div className='lg:flex lg:mt-32 lg:gap-10 place-items-center justify-center items-center border-none p-4 bg-background gap-5 mt-10'>
            <div>
                <Image className='min-w-40' src={auth} height={300} width={500} alt="auth Image" />
            </div>
            <div>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Log in to your account</CardTitle>
                        <CardDescription>Login here</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSignIn}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" placeholder="Enter your username" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="Enter your password" />
                                </div>
                            </div>
                            <CardFooter className="flex justify-between mt-5">
                                <Button variant="outline">Cancel</Button>
                                <Button type='submit'>Sign In</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                    <div className='flex gap-2 place-content-center mb-10'>
                        <p>Not registered yet?</p>
                        <br />
                        <Link href="/signup"><p className='font-bold text-blue-700 hover:scale-110 transition-all duration-500'>Register Here</p></Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}


