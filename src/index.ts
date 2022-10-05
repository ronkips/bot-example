import axios from "axios";
import { ethers } from "ethers";


const stream =()=>  {
 try {
    const provider = new ethers.providers.WebSocketProvider('wss://mainnet.infura.io/ws/v3/75f26dec72ad4423892e8785c0d0e50c');
     provider.on('pending tx', async (tx) => {
         const txInfo = await provider.getTransaction(tx)
         console.log(txInfo)
    })
 } catch (error) {
    console.log('error', error)
 }
}
stream(); 