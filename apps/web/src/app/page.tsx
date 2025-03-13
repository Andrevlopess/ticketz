import Butao, { CheckButao } from "@/components/teste-button";
import { cookies } from 'next/headers'

export default async function Page() {

    const cookieStore = await cookies()


    console.log(cookieStore);

    return (
        <>
            <div>Cookies</div>
            <Butao />
            <CheckButao />
        </>
    )
}
