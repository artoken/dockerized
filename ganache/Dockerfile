FROM node:alpine

WORKDIR /app

RUN npm install -g ganache-cli

EXPOSE 8545:8545

CMD ["ganache-cli", "-h", "0.0.0.0", "--deterministic", "--db=/ganache_db", "--mnemonic", "'minimum symptom minute gloom tragic situate silver mechanic salad amused elite beef'", "--networkId", "'5777'"]

