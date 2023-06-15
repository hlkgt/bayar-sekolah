import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigatedLink from "@/Components/NavigatedLink";

export default function Authenticated({ user, header, children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleShow = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <NavigatedLink handleShow={handleShow} isShow={showSidebar} />
            <div className="flex flex-col flex-1">
                <header className="h-16 bg-white flex items-center px-4 gap-4 relative">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={handleShow}
                        className="cursor-pointer"
                    ></FontAwesomeIcon>
                    <h1>{header}</h1>
                    <p className="absolute right-8 flex items-center gap-2">
                        {user.name}
                    </p>
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
}
