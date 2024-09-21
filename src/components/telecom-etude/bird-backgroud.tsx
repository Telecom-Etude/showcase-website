import { ReactNode } from "react";
import { BirdLogo } from "./logos";

export const BirdBackground = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-1 flex-col text-center items-center justify-center">
            <div className="max-w-[500px] flex justify-center items-center flex-col space-y-10 m-14">
                <div className="w-[300px]">
                    <BirdLogo />
                </div>
                {children}
            </div>
        </div>
    );
};
