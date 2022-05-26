const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory("Enum");
    const contract = await contractFactory.deploy();
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
    let status = await contract.get();
    console.log(status);
    let txn = await contract.set(1);
    await txn.wait();
    status = await contract.get();
    console.log(status);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

runMain();