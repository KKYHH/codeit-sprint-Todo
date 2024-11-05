import '@devShared/styles/index.css';
import localFont from 'next/font/local';

const nanumRegular = localFont({
    src: '../../public/fonts/NanumSquareR.otf',
    variable: '--font-nanum-rg',
});

const nanumBold = localFont({
    src: '../../public/fonts/NanumSquareB.otf',
    variable: '--font-nanum-bd',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="ko"
            className={`${nanumRegular.className} ${nanumBold.className}`}
        >
            <body>{children}</body>
        </html>
    );
}
