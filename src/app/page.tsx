import SearchBar from '@devWidgets/search/SearchBar';
import Header from '@devWidgets/header/Header';

export default function Page() {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-center items-center">
                <SearchBar />
            </main>
        </>
    );
}
