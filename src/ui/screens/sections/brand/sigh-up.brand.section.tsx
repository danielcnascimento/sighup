import Image from 'next/image';
import { BrandStyle } from './sigh-up.brand.section.style'

function SighUpBrand() {
  return (
    <BrandStyle>
      <Image  src="/icons/logo_uau_white.svg" alt="Logo" layout="intrinsic" width={295} height={254}/>

      <p>
        Faça seu cadastro e aproveite todos os
        nossos conteúdos!
      </p>
    </BrandStyle>
  )
}

export default SighUpBrand
