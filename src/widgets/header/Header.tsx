import Logo from '@devShared/images/Logo.png';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <div className="bg-white shadow-sm p-2">
                <article className="flex justify-around">
                    <Image src={Logo} alt="Logo" width={100} height={100} />
                    <div></div>
                </article>
            </div>
        </>
    );
}
