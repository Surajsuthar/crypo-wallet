"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { useState } from "react"
import { 
    ConnectButton , 
    useDisconnect, 
    useActiveWallet , 
    useActiveWalletConnectionStatus ,
    useActiveAccount
} from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from "@/client";

const wallets = [
    createWallet("io.metamask"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
    createWallet("com.bitget.web3"),
    createWallet("com.okex.wallet"),
    createWallet("org.uniswap"),
];

export default function Wallet(){
    const [isConneted,setConnected] = useState<Boolean>(false)
    const status = useActiveWalletConnectionStatus();
    const { disconnect } = useDisconnect();
    const activeAccount = useActiveAccount();
    console.log(activeAccount)
    const wallet = useActiveWallet();    
    return(
        <div>
            <Card className="">
                <CardHeader>
                    <CardTitle className=" font-extrabold text-[40px]">
                        Wallet 
                    </CardTitle>
                    <CardDescription>
                        Available Balance
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {activeAccount?.address}
                </CardContent>
                <CardFooter>
                    {isConneted ?  
                        <Button >
                            Disconnect Wallet
                        </Button> 
                        : (
                        <ConnectButton 
                            client={client} 
                            wallets={wallets} 
                        />
                    ) }
                </CardFooter>

            </Card>
        </div>
    )
}