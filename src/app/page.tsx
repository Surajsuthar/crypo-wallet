import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import {CardWithForm }from "@/components/Tranding"
import { TabsDemo } from "@/components/Tabex";
import Wallet from "@/components/wallet";
import { TableDemo } from "@/components/TradeTable";



export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col m-3">
     <section>
        <Navbar/>
     </section>
     <main className="grid mt-10 grid-rows-3 grid-cols-3 grid-flow-col gap-4">
        <section className="col-span-2">
          <Wallet/>
        </section>
        <section className="row-span-2 col-span-2 ">
          <TableDemo/>
        </section>
        <aside className="row-span-3 ">
          <TabsDemo/>
          
        </aside>
     </main>
    </div>
  );
}
