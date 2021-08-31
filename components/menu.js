import Link from 'next/link'



function MENU(){
return(
    <>
        <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="https://www.google.com">google</Link></li>
            <li><Link href="https://vercel.com">Vercel</Link></li>
            <li><Link href="/receitas">receitas</Link></li>
            <li><Link href="">sobre</Link></li>
            <div>
            <Image src={profilePic} alt="Picture of the author" />
            </div>

        </ul>
    </>
)

}

export default MENU