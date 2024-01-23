/* eslint-disable react/prop-types */
import { Header } from "../Header/Header";
import { PopExit } from "../popups/PopExit/PopExit";

export const Layout = ({children}) => {
    return (
        <div className="wrapper">
            <Header/>

            <main className="main">
                <div className="container">                    
                    <div className="main__block">
                        <div className="main__content">
                            {children}
                        </div>				
                    </div>
                </div>
            </main>

            <PopExit/>
      </div>
    );
}