<h1>Vending Machine</h1>
<img src="https://i.gyazo.com/7e0d38874153e465a78c8e45846d20ae.png" alt="https://gyazo.com/7e0d38874153e465a78c8e45846d20ae" width="569"/>

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
</ul>

<h2>Features for Owner</h2>
<ul>
<li>Able to restock products/coins multiple ways via all,specific or only items that are low in stock</li>
<li>Dispenses the lowest amount of coins needed and in the case that some coins are available,
it dispenses the next best option.</li>
<li>Able to unstock items/coins if needed.</li>
<li>Vending machine will not dispense if not enough money is put in, in this case it will tell how much is missing</li>
<li>Vending machine will not dispense if there is no stock.</li>
</ul>

<h2>Installation/Testing</h2>
<p>Download the repo and then in the root folder run </p>

`npm install`

<p>Test the code using Jest with</p>

`npm test`
