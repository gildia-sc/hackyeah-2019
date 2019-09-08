import getWeb3 from "../utils/getWeb3";
import {abi, networks} from "../build/contracts/Counter.json"

const anyNetworks = networks as any;

export async function increment() {
    const contract = await counter();
    await contract.methods.incrementCounter().send()
}

export async function decrement() {
    const contract = await counter();
    await contract.methods.decrementCounter().send();
}

export async function getCount() {
    const contract = await counter();
    return contract.methods.getCount().call();
}

async function counter() {
    const web3 = await getWeb3();
    const networkId = await web3.eth.net.getId();

    const address = (anyNetworks[networkId] || {}).address;
    const contract = new web3.eth.Contract(abi);
    contract.options.address = address;
    contract.options.from = web3.eth.defaultAccount;
    return contract
}