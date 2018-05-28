<h1>Vending Machine</h1>
<img src="https://i.gyazo.com/a0ab05a324138e2ce88d9f88a7532732.png" alt="https://gyazo.com/a0ab05a324138e2ce88d9f88a7532732" width="996"/>
<img src="https://i.gyazo.com/94bb5d5e8cc3157b54e7870501626f91.png" alt="https://gyazo.com/94bb5d5e8cc3157b54e7870501626f91" width="996"/>

<h2>About </h2>
<p>Vending machine is a Javascript class based TDD project meant to mock a vending machine</p>

<h2>Technology</h2>
<ul>
<li>NodeJS</li>
<li>Javascript</li>
<li>Jest</li>
</ul>

<h2>Features for Customer</h2>
<ul>
<li>Able to see all the products, price of the products and stock of the products.</li>
<li>Able to pick what product to choose from.</li>
<li>Dispenses product along with change if the amount paid is more then the price.</li>
<li>Able to tell the customer how much the customer is missing in the case that not enough is paid.</li>
<li>Able to dispense the change inserted if customer does not want it or does not have enough money</li>
</ul>

<h2>Features for Owner</h2>
<ul>
<li>Able to restock products/coins multiple ways via all,specific or only items that are low in stock</li>
<li>Dispenses the lowest amount of coins needed and in the case that some coins are available,
it dispenses the next best option.</li>
<li>Able to unstock items/coins if needed.</li>
<li>Vending machine will not dispense if not enough money is put in, in this case it will tell how much is missing</li>
<li>Vending machine will not dispense if there is no stock.</li>
<li>Automatic coin handling (inserted coins will be update coin storage and coins outputted will update coin storage)</li>
</ul>

<h2>Installation/Testing</h2>
<p>Download the repo and then in the root folder run </p>

`npm install`

<p>Test the code using Jest with</p>

`npm test`
