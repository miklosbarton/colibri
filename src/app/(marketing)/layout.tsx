import Footer from "./components/footer";
import { NavBar } from "./components/header";

const MarketingLayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <NavBar/>
            <main className="h-full pt-40">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default MarketingLayout;