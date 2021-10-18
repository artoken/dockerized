#!/bin/bash

truffle deploy --network develop --reset

rm -rf ../client_side/client_auctions_and_deploy/client/src/contracts
cp -r ./contracts ../client_side/client_auctions_and_deploy/client/src/
rm -rf ../admin_side_container/admin_side/contracts
cp -r ./contracts ../admin_side_container/admin_side/
rm -rf ../client_side_all_tokens_django/Client_side_all_tokens_django/contracts
cp -r ./contracts ../client_side_all_tokens_django/Client_side_all_tokens_django/
