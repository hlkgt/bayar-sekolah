import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavigatedLink from "@/Components/NavigatedLink";

export default function Authenticated({ user, header, children, flash }) {
    const [isMessage, setIsMessage] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const handleShow = () => {
        setShowSidebar(!showSidebar);
    };

    const titleMessage = ["success", "danger"];
    useEffect(() => {
        titleMessage.forEach((item) => {
            if (flash[item] !== null) {
                setIsMessage(!isMessage);
            }
        });
    }, [flash]);

    setTimeout(() => {
        setIsMessage(false);
    }, 5000);

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
                    {header}
                    <p className="absolute right-8 flex items-center gap-2">
                        {user.name}
                    </p>
                </header>
                <main className="p-4">
                    {titleMessage.map((item, index) => {
                        if (flash[item] !== null) {
                            return (
                                <div
                                    className={
                                        (isMessage ? "flex " : "hidden ") +
                                        "w-full rounded-md p-4 text-xl bg-" +
                                        (item === "success" ? "teal" : "red") +
                                        "-400 text-white flex justify-between items-center"
                                    }
                                    key={index}
                                >
                                    <h1>{flash[item]}</h1>
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        onClick={() => setIsMessage(!isMessage)}
                                        className="cursor-pointer"
                                    />
                                </div>
                            );
                        }
                    })}
                    {children}
                </main>
            </div>
        </div>
    );
}
