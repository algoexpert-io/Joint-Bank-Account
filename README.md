# BlockchainExpert - Bank Account With Multiple Approvals

This project provides a smart contract that allows for creating joint bank accounts. Each bank account can have up to 4 owners, each of which must approve any withdrawl of funds. As well as completed contract there is are automated test cases and a slim front-end applications that allows you to interact with some functionality of the contract. Please free to extend this project and add your own features and functionality.

## Getting Started

To test and deploy the smart contract follow the steps below.

1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone the repository: `git clone <repo-url>`
3. `cd <repo-name>`
4. `npm install`
5. To test the contract run `npx hardhat test`
6. To deploy the contract to your `localhost` network do the following:
   - `npx hardhat node`
   - `npx hardhat run --network localhost ./script/deploy.js`

## Using the Frontend

1. Install the [Liveserver Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode.
2. Open [base.html](frontend/base.html)
3. Click the button that says "Go Live" in the bottom right hand corner of your VSCode.
4. Import any accounts you need into MetaMask and change your MetaMask network to "Hardhat".
5. Interact with the contract!
