import Image from 'next/image'
import profilePic from '../Users/henriqueque.rpsantos/ze/site/image/cozinheira.png'

function COZINHEIRA() {
    return (
      <>
        <Image src={profilePic} alt="Picture of the author" />
      </>
    )
  }
  
  export default COZINHEIRA