import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function GraphicDesign() {
    // const router = useRouter();
    return (
        <div className="background2">
            <NavBar />
            <div style={{
                color: "white", fontSize: "xx-large", margin: "20% 10% 0 10%", left: 0, zIndex: 1, position: "relative", textAlign: "center", height: "50%", wordWrap: "break-word", display: "flex", justifyContent: "space-evenly"
            }}>
                <div style={{ paddingBottom: "10px" }}>
                    Business Cards
                    <div style={{ paddingBottom: "10px", textDecorationLine: "underline", display: "flex", justifyContent: "space-evenly", flexDirection: "column", fontSize: "medium" }}>
                        <Link href={"https://www.canva.com/design/DAFg4sEFUs0/cuuZ3_yFal2fPFtSoQhAbw/view?utm_content=DAFg4sEFUs0&utm_campaign=designshare&utm_medium=link&utm_source=editor"}>Triple Z Home Solutions</Link>
                        <Link href={"https://www.canva.com/design/DAGO65IvjPw/xM7mP79-vjq54iyBXvgYcQ/view?utm_content=DAGO65IvjPw&utm_campaign=designshare&utm_medium=link&utm_source=editor"}>Aima Ovai Business Card</Link>
                        <Link href={"https://www.canva.com/design/DAFy9AbZpUo/V3utD12shHJ_UWkBgfh0IA/view?utm_content=DAFy9AbZpUo&utm_campaign=designshare&utm_medium=link&utm_source=editor"}>Balloon Garlands by Asi</Link>
                    </div>
                </div><div style={{ paddingBottom: "10px" }}>
                    Event Invites & Flyers
                    <div style={{ paddingBottom: "10px", textDecorationLine: "underline", display: "flex", justifyContent: "space-evenly", flexDirection: "column", fontSize: "medium" }}>
                        <Link href={"https://www.canva.com/design/DAF6BNBTwAg/Nqa6t61jRg-xIWqqwl00NA/view?utm_content=DAF6BNBTwAg&utm_campaign=designshare&utm_medium=link&utm_source=editor"}>Virtual Baby Christianing</Link>
                        <Link href={"https://www.canva.com/design/DAGAYzAZO-M/GAZWKYKCpPKe2wZF2w0onQ/view?utm_content=DAGAYzAZO-M&utm_campaign=designshare&utm_medium=link&utm_source=editor"}>60th Birthday Invitation</Link>
                        <Link href={"https://www.canva.com/design/DAFye8z57h8/75QIiJdxreoiXJBYmFWQrQ/view?utm_content=DAFye8z57h8&utm_campaign=designshare&utm_medium=link&utm_source=editor"}>RCCG Heaven&apos;s Harmony</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}