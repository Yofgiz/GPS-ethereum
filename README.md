
# Refund-by-Location

The refund by location smart contract is aimed to be used when one party or an employer, agrees to pay another party or an employee, for being present in a certain geographic area for a certain duration. The employee’s phone sends its GPS location to a smart contract at a certain interval. Based on the pre-agreed contract codified in an Ethereum smart contract, a cryptocurrency payment is executed when all the agreed conditions are met.

# About


Produce an Ethereum based dApp that has both the smart contract tested and deployed in a testnet and a front end that will allow monitoring of the status.

# Project Structure

The repository has a number of files including python scripts, jupyter notebooks, raw and cleaned data, and text files. Here is their structure with a brief explanation.

# refund_contract

Truffle implementation of this project

# Frontend

Front end submodule created using reactjs

# Flutter_Frontend

Mobile app submodule created using flutter






## Smart Contract usage guide

Clone the project

```bash
  git clone https://github.com/Yofgiz/GPS-ethereum
```

Go to the project directory

```bash
  cd GPS-Ethereum
```

Install dependencies

```bash
  cd Refund-by-Location
  npm -g install truffle
  npm install
  truffle compile
  truffle deploy --network <Desired network>
```

## Frontend usage guide

```bash
  git clone https://github.com/Yofgiz/GPS-ethereum
  cd GPS-Ethereum/Frontend
  npm install --legacy-peer-deps
  npm start
```

## Flutter usage guide

```bash
  git clone https://github.com/Yofgiz/GPS-ethereum
  cd GPS-Ethereum/Flutter_Frontend
  flutter pub get
  flutter run --no-sound-null-safety

```
