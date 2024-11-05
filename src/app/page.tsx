import SearchBar from '@devWidgets/search/SearchBar';
import Header from '@devWidgets/header/Header';
import TodoView from '@devViews/todo/TodoView';

export default function Page() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4">
                <div className="max-w-[80rem] mx-auto">
                    <SearchBar />
                    <TodoView />
                </div>
            </main>
        </>
    );
}
