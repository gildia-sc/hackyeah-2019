const Web3 = require("web3");
const wind:any = window as any;

export default async () => {
    const ethereum = wind.ethereum;
    if (ethereum) {
        const web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            const accounts = await web3.eth.getAccounts();
            web3.eth.defaultAccount =  accounts[0]
            return web3;
        } catch (error) {
            console.log(error)
        }
    }
}