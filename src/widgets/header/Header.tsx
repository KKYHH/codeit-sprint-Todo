import Logo from '@devShared/images/Logo.png';
import Image from 'next/image';

export default function Header() {
    return (
        <section className="bg-white shadow-sm w-full p-2">
            <article>
                <Image src={Logo} alt="Logo" width={150} height={150} />
            </article>
        </section>
    );
}
