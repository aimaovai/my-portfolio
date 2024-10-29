import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from "./graphicdesign.module.css";

export default function GraphicDesign() {
    // const router = useRouter();
    return (
        <div className="content">
            <NavBar />
            <div className="content-body" style={{ flexDirection: "column" }}>
                <div className={styles.sectionHeaders}>
                    Business Cards
                    <div className={styles.sections}>
                        <div>
                            <Link
                                href={
                                    "https://www.canva.com/design/DAFg4sEFUs0/cuuZ3_yFal2fPFtSoQhAbw/view?utm_content=DAFg4sEFUs0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                }
                            >
                                <Image
                                    src="/images/triplez.svg"
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    objectFit="contain"
                                    style={{ border: "1px solid white", position: "inherit" }}
                                />
                                Triple Z Home Solutions
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={
                                    "https://www.canva.com/design/DAGO65IvjPw/xM7mP79-vjq54iyBXvgYcQ/view?utm_content=DAGO65IvjPw&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                }
                            >
                                <Image
                                    src="/images/mybusinesscard.svg"
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    objectFit="contain"
                                    style={{ border: "1px solid white", position: "inherit" }}
                                />
                                Aima Ovai Business Card
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={
                                    "https://www.canva.com/design/DAFy9AbZpUo/V3utD12shHJ_UWkBgfh0IA/view?utm_content=DAFy9AbZpUo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                }
                            >
                                <Image
                                    src="/images/garlandsbyasi.svg"
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    objectFit="contain"
                                    style={{ border: "1px solid white", position: "inherit" }}
                                />
                                Balloon Garlands by Asi
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionHeaders}>
                    Event Invites & Flyers
                    <div className={styles.sections}>
                        <div>
                            <Link
                                href={
                                    "https://www.canva.com/design/DAF6BNBTwAg/Nqa6t61jRg-xIWqqwl00NA/view?utm_content=DAF6BNBTwAg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                }
                            >
                                <Image
                                    src="/images/babychristening.svg"
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    objectFit="contain"
                                    style={{ border: "1px solid white", position: "inherit" }}
                                />
                                Virtual Baby Christianing
                            </Link>
                        </div>
                        <div>

                            <Link
                                href={
                                    "https://www.canva.com/design/DAGAYzAZO-M/GAZWKYKCpPKe2wZF2w0onQ/view?utm_content=DAGAYzAZO-M&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                }
                            >
                                <Image
                                    src="/images/60thinvitation.svg"
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    objectFit="contain"
                                    style={{ border: "1px solid white", position: "inherit" }}
                                />
                                60th Birthday Invitation
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={
                                    "https://www.canva.com/design/DAFye8z57h8/75QIiJdxreoiXJBYmFWQrQ/view?utm_content=DAFye8z57h8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                }
                            >
                                <Image
                                    src="/images/heavensharmony.svg"
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    objectFit="contain"
                                    style={{ border: "1px solid white", position: "inherit" }}
                                />
                                RCCG Heaven&apos;s Harmony
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
